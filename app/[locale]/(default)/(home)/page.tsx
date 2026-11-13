import { getIndexBannerSlides, getIndexCompanyIntro, getIndexTechSlides } from '@/lib/content-api';

import HomeClient from './home-client';

interface Props {
    params: Promise<{ locale: string }>;
}

/**
 * 首页
 * 服务端从 CMS 拉取「首页banner管理」「首页核心技术」两个栏目的已发布内容,
 * 以及「首页公司简介」栏目的栏目配置,作为首屏/核心技术轮播/公司简介区块的数据;
 * 接口异常时 lib/content-api.ts 内置兜底数据,保证页面不白屏
 */
export default async function Page({ params }: Props) {
    const { locale } = await params;

    const [bannerSlides, techSlides, companyIntro] = await Promise.all([
        getIndexBannerSlides(locale),
        getIndexTechSlides(locale),
        getIndexCompanyIntro(locale),
    ]);

    return (
        <HomeClient
            bannerSlides={bannerSlides}
            techSlides={techSlides}
            companyIntro={companyIntro}
        />
    );
}
