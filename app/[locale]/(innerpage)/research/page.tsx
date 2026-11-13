import { getChannelConfig, getResearchItems } from '@/lib/content-api';

import ResearchClient from './research-client';

interface Props {
    params: Promise<{ locale: string }>;
}

/** 「研究」栏目别名(后台「栏目管理 → 研究」) */
const RESEARCH_CHANNEL = 'research';

/**
 * 研究
 * 服务端从 CMS 拉取「研究」栏目的配置(标题、简介)与栏目下的研究内容,
 * 再下发给客户端组件;接口异常时组件内部回落到多语言文案与静态兜底数据
 */
export default async function ResearchPage({ params }: Props) {
    const { locale } = await params;

    const [config, items] = await Promise.all([
        getChannelConfig(RESEARCH_CHANNEL, locale),
        getResearchItems(locale),
    ]);

    return <ResearchClient config={config} items={items} />;
}
