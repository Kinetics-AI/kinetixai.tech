import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SingleClient from '@/components/single/SingleClient';
import { getSinglePage } from '@/lib/single-api';

// 单页面模块样式独立文件,仅本路由加载
import '@/components/single/single.scss';

interface Props {
    params: Promise<{ locale: 'en' | 'zh'; key: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, key } = await params;
    const data = await getSinglePage(locale, key);
    return { title: data?.title };
}

/**
 * 通用单页面:URL /[locale]/page/[key] → CMS slug `${locale}-${key}`
 * 例:/zh/page/privacy → zh-privacy;/en/page/privacy → en-privacy
 * CMS 接口不可用时回退本地静态数据,均无则 404
 */
export default async function SinglePage({ params }: Props) {
    const { locale, key } = await params;

    const data = await getSinglePage(locale, key);
    if (!data) notFound();

    return (
        <SingleClient
            title={data.title}
            effectiveDate={data.effectiveDate}
            updateDate={data.updateDate}
            html={data.html}
            toc={data.toc}
        />
    );
}
