import { Marked, type Tokens } from 'marked';

/** CMS 文档目录树节点(/api/openapi/doc/tree) */
export interface DocTreeNode {
    id: number;
    parent_id: number;
    title: string;
    slug: string;
    sort: number;
    children?: DocTreeNode[];
}

/** CMS 文档详情(/api/openapi/doc/detail/{idOrSlug}) */
export interface DocDetail {
    id: number;
    parent_id: number;
    title: string;
    slug: string;
    content: string;
    status: number;
    sort: number;
    pdf_path?: string | null;
    pdf_url?: string | null;
    create_user?: string;
    created_at?: string;
    updated_at?: string;
}

/** 右侧大纲节点(嵌套)1 */
export interface OutlineItem {
    id: string;
    title: string;
    children?: OutlineItem[];
}

const API_BASE = 'https://kaiapi.kinetixai.cn';
const API_KEY = 'd7f68feb0c6f908ac347bfc34c5c09ec7876363e';

async function apiFetch<T>(path: string): Promise<T | null> {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: { 'X-Api-Key': API_KEY },
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || json.code !== 200) return null;
    return json.data as T;
}

/** 获取文档目录树(仅已发布) */
export async function getDocTree(): Promise<DocTreeNode[]> {
    return (await apiFetch<DocTreeNode[]>('/api/openapi/doc/tree')) || [];
}

/** 获取文档详情(id 或 slug) */
export async function getDocDetail(idOrSlug: string): Promise<DocDetail | null> {
    return apiFetch<DocDetail>(`/api/openapi/doc/detail/${encodeURIComponent(idOrSlug)}`);
}

/** 按菜单顺序收集可导航的叶子文档(有子节点的展开取子节点) */
export function flattenLeaves(nodes: DocTreeNode[]): DocTreeNode[] {
    const leaves: DocTreeNode[] = [];
    for (const node of nodes) {
        if (node.children && node.children.length) {
            leaves.push(...flattenLeaves(node.children));
        } else {
            leaves.push(node);
        }
    }
    return leaves;
}

/** 去掉 Markdown 行内标记,取纯文本(用于大纲标题) */
function stripMd(text: string): string {
    return text
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\*\*([^*]*)\*\*/g, '$1')
        .replace(/[*_`~]/g, '')
        .trim();
}

/** HTML 转义(用于属性与图注文本) */
function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** 将平铺标题列表(h2~h5)按层级归并为嵌套大纲 */
function buildOutline(flat: { id: string; title: string; level: number }[]): OutlineItem[] {
    type Internal = OutlineItem & { level: number };
    const root: Internal[] = [];
    const stack: Internal[] = [];
    for (const f of flat) {
        const item: Internal = { id: f.id, title: f.title, level: f.level };
        while (stack.length && stack[stack.length - 1].level >= f.level) {
            stack.pop();
        }
        if (!stack.length) {
            root.push(item);
        } else {
            const parent = stack[stack.length - 1];
            if (!parent.children) parent.children = [];
            parent.children.push(item);
        }
        stack.push(item);
    }
    // 去掉内部 level 字段后返回
    const clean = (items: Internal[]): OutlineItem[] => items.map(({ level, ...rest }) => {
        const out: OutlineItem = rest;
        if (rest.children) out.children = clean(rest.children as Internal[]);
        return out;
    });
    return clean(root);
}

/**
 * 渲染文档 Markdown 为 HTML,并生成右侧大纲
 * 若正文首个标题与文档标题相同,自动去掉,避免与页面 H1 重复
 */
export function renderDocMarkdown(markdown: string, docTitle?: string): { html: string; outline: OutlineItem[] } {
    let md = markdown || '';

    if (docTitle) {
        const lines = md.split('\n');
        const firstIdx = lines.findIndex((l) => l.trim() !== '');
        if (firstIdx >= 0) {
            const m = lines[firstIdx].match(/^(#{1,6})\s+(.*)$/);
            if (m && stripMd(m[2]) === docTitle.trim()) {
                lines.splice(firstIdx, 1);
                md = lines.join('\n');
            }
        }
    }

    const flat: { id: string; title: string; level: number }[] = [];
    let headingIndex = 0;

    const marked = new Marked();
    marked.use({
        gfm: true,
        renderer: {
            heading(token: Tokens.Heading) {
                const text = this.parser.parseInline(token.tokens);
                const id = `doc-h-${headingIndex++}`;
                if (token.depth >= 2 && token.depth <= 5) {
                    flat.push({
                        id,
                        title: stripMd(token.tokens.map((t) => t.raw).join('')),
                        level: token.depth,
                    });
                }
                return `<h${token.depth} id="${id}" class="doc-heading">${text}</h${token.depth}>\n`;
            },
            // 图片带 alt 时渲染为 figure + figcaption(与离线文档站一致,alt 作为图注显示)
            image(token: Tokens.Image) {
                const alt = stripMd(token.text || '');
                const href = token.href || '';
                const titleAttr = token.title ? ` title="${escapeHtml(token.title)}"` : '';
                if (!alt) {
                    return `<p><img src="${href}" alt=""${titleAttr} /></p>\n`;
                }
                return `<figure class="doc-figure"><img src="${href}" alt="${escapeHtml(alt)}"${titleAttr} /><figcaption>${escapeHtml(alt)}</figcaption></figure>\n`;
            },
        },
    });

    const html = marked.parse(md) as string;
    return { html: toAbsoluteAssets(html), outline: buildOutline(flat) };
}

/** 正文里的站内绝对路径资源(如 /uploads/图片)改写为 CMS 域名的完整地址 */
export function toAbsoluteAssets(html: string): string {
    return html.replace(/(src|href)="\/(?!\/)/g, `$1="${API_BASE}/`);
}
