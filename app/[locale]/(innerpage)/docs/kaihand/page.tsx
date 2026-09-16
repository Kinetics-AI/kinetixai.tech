import DocumentClient, { DocNavItem, DocPageLink } from '@/components/document/DocumentClient';
import {
    getDocTree,
    getDocDetail,
    flattenLeaves,
    renderDocMarkdown,
    type DocTreeNode,
    type OutlineItem,
} from '@/lib/doc-api';

// CMS 接口不可用时的本地兜底数据
import { navItemsData, docOutlineData, docContentData, DocContentItem } from '@/data/documentData';

interface Props {
    params: Promise<{ locale: 'en' | 'zh' }>;
    searchParams: Promise<{ doc?: string }>;
}

/** 兜底:把本地硬编码的分节数据拼成与接口渲染一致的 HTML */
function buildFallbackHtml(sections: DocContentItem[]): string {
    const parts: string[] = [];
    sections.forEach((section) => {
        parts.push(`<h2 id="kaihand-${section.id}" class="doc-heading doc-h2">${section.title}</h2>`);
        parts.push(`<div class="fallback-body">${section.content}</div>`);
        section.children?.forEach((sub) => {
            parts.push(`<h3 id="kaihand-${sub.id}" class="doc-heading doc-h3">${sub.title}</h3>`);
            parts.push(`<div class="fallback-body">${sub.content}</div>`);
        });
    });
    return parts.join('');
}

export default async function DocumentPage({ params, searchParams }: Props) {
    const { locale } = await params;
    const { doc } = await searchParams;

    // ---- 从 CMS 开放 API 拉取数据 ----
    let tree: DocTreeNode[] = [];
    try {
        tree = await getDocTree();
    } catch {
        tree = [];
    }

    // 按语言取对应文档树根节点:中文 kaihand,英文 en-kaihand
    // 不传 lang 参数拉全量树再按 slug 精确命中,兼容尚未支持 lang 筛选的旧后端
    // 英文树在 CMS 中尚未建立时回退中文树,避免英文站文档页空白
    const rootSlug = locale === 'en' ? 'en-kaihand' : 'kaihand';
    const kaihandRoot =
        tree.find((n) => n.slug === rootSlug)
        || (rootSlug !== 'kaihand' ? tree.find((n) => n.slug === 'kaihand') : undefined)
        || tree[0];
    // 仅取 kaihand 子树的叶子,避免单页面文档(如 zh-privacy)混入左栏导航
    const leaves = flattenLeaves(kaihandRoot ? [kaihandRoot] : []);
    const current = leaves.find((l) => l.slug === doc) || leaves[0] || null;

    let detail = null;
    if (current) {
        try {
            detail = await getDocDetail(current.slug);
        } catch {
            detail = null;
        }
    }

    // ---- 组装页面数据(接口可用) ----
    if (detail) {
        const { html, outline } = renderDocMarkdown(detail.content, detail.title);
        const idx = leaves.findIndex((l) => l.id === detail.id);
        const prevDoc = idx > 0 ? leaves[idx - 1] : null;
        const nextDoc = idx >= 0 && idx < leaves.length - 1 ? leaves[idx + 1] : null;

        const navItems: DocNavItem[] = leaves.map((l) => ({
            title: l.title,
            href: `/docs/kaihand?doc=${l.slug}`,
            active: l.id === detail.id,
        }));

        return (
            <DocumentClient
                groupTitle={kaihandRoot?.title || 'KAIHand'}
                navItems={navItems}
                docTitle={detail.title}
                updatedAt={(detail.updated_at || '').slice(0, 16)}
                downloadHref={detail.pdf_url || ''}
                html={html}
                outline={outline}
                prev={prevDoc ? { title: prevDoc.title, href: `/docs/kaihand?doc=${prevDoc.slug}` } : null}
                next={nextDoc ? { title: nextDoc.title, href: `/docs/kaihand?doc=${nextDoc.slug}` } : null}
            />
        );
    }

    // ---- 兜底:接口不可用,渲染本地静态数据(按语言取值) ----
    const fallbackNav: DocNavItem[] = (navItemsData[locale] || []).map((item, idx) => ({
        title: item.title,
        href: '#',
        active: idx === 0,
    }));

    return (
        <DocumentClient
            groupTitle="KAIHand"
            navItems={fallbackNav}
            docTitle="产品介绍"
            updatedAt=""
            downloadHref=""
            html={buildFallbackHtml(docContentData[locale] || [])}
            outline={(docOutlineData[locale] || []) as OutlineItem[]}
            prev={null}
            next={null}
        />
    );
}
