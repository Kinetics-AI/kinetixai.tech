import { getChannelConfig, getCompanyStorySlides } from '@/lib/content-api';

import AboutClient from './about-client';

interface Props {
    params: Promise<{ locale: string }>;
}

/** 「关于我们」栏目别名(后台「栏目管理 → 关于我们」) */
const ABOUT_CHANNEL = 'about';

/**
 * 关于我们
 * 服务端从 CMS 拉取「关于我们」栏目的配置(顶部 banner、企业介绍)
 * 与栏目下的「团队故事」内容,再下发给客户端组件;
 * 接口异常时组件内部回落到多语言文案与静态兜底数据
 */
export default async function AboutPage({ params }: Props) {
    const { locale } = await params;

    const [config, stories] = await Promise.all([
        getChannelConfig(ABOUT_CHANNEL, locale),
        getCompanyStorySlides(locale),
    ]);

    return <AboutClient config={config} stories={stories} />;
}
