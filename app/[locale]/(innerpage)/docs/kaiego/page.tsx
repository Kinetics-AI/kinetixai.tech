import DocumentClient, { DocNavItem } from '@/components/document/DocumentClient';
import {
    getDocTree,
    getDocDetail,
    flattenLeaves,
    renderDocMarkdown,
    type DocTreeNode,
} from '@/lib/doc-api';

interface Props {
    params: Promise<{ locale: 'en' | 'zh' }>;
    searchParams: Promise<{ doc?: string }>;
}

// CMS 接口不可用、或后台尚未建立 KaiEgo 文档树时的兜底内容(与后台默认文档一致)
const fallbackContent: Record<'en' | 'zh', { title: string; body: string }> = {
    zh: { title: '产品介绍', body: '详情请联系商务' },
    en: { title: 'Product Introduction', body: 'For details, please contact our sales team.' },
};

export default async function KaiEgoDocumentPage({ params, searchParams }: Props) {
    const { locale } = await params;
    const { doc } = await searchParams;

    // ---- 从 CMS 开放 API 拉取数据 ----
    let tree: DocTreeNode[] = [];
    try {
        tree = await getDocTree();
    } catch {
        tree = [];
    }

    // 按语言取对应文档树根节点:中文 zh-kaiego,英文 en-kaiego(兼容无前缀写法)
    // 找不到对应树时走下方兜底,避免误挂到其他产品的文档树
    const rootSlug = `${locale}-kaiego`;
    const kaiEgoRoot =
        tree.find((n) => n.slug === rootSlug)
        || tree.find((n) => n.slug === 'kaiego');

    // 仅取 KaiEgo 子树的叶子,避免其他产品/单页文档混入左栏导航
    const leaves = flattenLeaves(kaiEgoRoot ? [kaiEgoRoot] : []);
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
            href: `/docs/kaiego?doc=${l.slug}`,
            active: l.id === detail.id,
        }));

        return (
            <DocumentClient
                groupTitle={kaiEgoRoot?.title || 'KaiEgo'}
                navItems={navItems}
                docTitle={detail.title}
                updatedAt={(detail.updated_at || '').slice(0, 16)}
                downloadHref={detail.pdf_url || ''}
                html={html}
                outline={outline}
                prev={prevDoc ? { title: prevDoc.title, href: `/docs/kaiego?doc=${prevDoc.slug}` } : null}
                next={nextDoc ? { title: nextDoc.title, href: `/docs/kaiego?doc=${nextDoc.slug}` } : null}
            />
        );
    }

    // ---- 兜底:接口不可用或未建树,渲染内置文案 ----
    const fb = fallbackContent[locale] || fallbackContent.zh;
    const fallbackNav: DocNavItem[] = [{ title: fb.title, href: '/docs/kaiego', active: true }];

    return (
        <DocumentClient
            groupTitle="KaiEgo"
            navItems={fallbackNav}
            docTitle={fb.title}
            updatedAt=""
            downloadHref=""
            html={`<p>${fb.body}</p>`}
            outline={[]}
            prev={null}
            next={null}
        />
    );
}
