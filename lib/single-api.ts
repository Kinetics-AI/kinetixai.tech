import { Marked, type Tokens } from 'marked';

import { getDocDetail } from '@/lib/doc-api';
import { singlePagesData, type SinglePageDoc } from '@/data/singlePages';

/** 左侧目录节点(h2 章节,带编号) */
export interface SingleTocItem {
    id: string;
    title: string;
}

/** 单页面渲染数据 */
export interface SinglePageData {
    title: string;
    /** 生效日期(可选,仅兜底数据提供时渲染该行) */
    effectiveDate?: string;
    updateDate: string;
    html: string;
    toc: SingleTocItem[];
}

/**
 * 获取单页面内容:CMS 开放 API 优先,不可用时回退本地静态数据
 * slug 规则:`${locale}-${key}`(如 /zh/page/privacy → zh-privacy)
 * 两者均无返回 null(页面侧 notFound 404)
 */
export async function getSinglePage(locale: string, key: string): Promise<SinglePageData | null> {
    const slug = `${locale}-${key}`;

    // 1. CMS 开放 API
    try {
        const detail = await getDocDetail(slug);
        if (detail) {
            const { html, toc } = renderSingleMarkdown(detail.content);
            return {
                title: detail.title,
                updateDate: (detail.updated_at || '').slice(0, 10),
                html,
                toc,
            };
        }
    } catch {
        // 接口异常走兜底
    }

    // 2. 本地兜底
    const fallback: SinglePageDoc | undefined = singlePagesData[slug];
    if (fallback) {
        const { html, toc } = renderSingleMarkdown(fallback.content);
        return {
            title: fallback.title,
            effectiveDate: fallback.effectiveDate,
            updateDate: fallback.updateDate,
            html,
            toc,
        };
    }

    return null;
}

/**
 * 渲染单页面 Markdown 为 HTML,并生成左侧目录
 * h2 章节自动编号(1. 2. 3. …)并带锚点 id,目录与正文编号一致
 */
export function renderSingleMarkdown(markdown: string): { html: string; toc: SingleTocItem[] } {
    const toc: SingleTocItem[] = [];
    let h2Index = 0;
    let headingIndex = 0;

    const marked = new Marked({ gfm: true });
    marked.use({
        renderer: {
            heading(token: Tokens.Heading) {
                const text = this.parser.parseInline(token.tokens);
                const rawTitle = token.tokens.map((t) => t.raw).join('').replace(/[*_`~]/g, '').trim();
                const id = `single-h-${headingIndex++}`;
                if (token.depth === 2) {
                    h2Index += 1;
                    toc.push({ id, title: `${h2Index}. ${rawTitle}` });
                    return `<h2 id="${id}" class="single-heading">${h2Index}. ${text}</h2>\n`;
                }
                return `<h${token.depth} id="${id}" class="single-heading">${text}</h${token.depth}>\n`;
            },
        },
    });

    const html = marked.parse(markdown || '') as string;
    return { html, toc };
}
