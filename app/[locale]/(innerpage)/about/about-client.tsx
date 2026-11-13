'use client';

import { useTranslations } from 'next-intl';

import Image from 'next/image'
import { FadeInUp } from "@/components/animation/fade-in-up"

import { CompanyList } from '@/components/company/CompanyList'
import type { StorySlide } from '@/lib/content-api';

interface Props {
    /** 栏目配置(后台「内容管理 → 关于我们 → 栏目配置」) */
    config: Record<string, string>;
    /** 团队故事时间轴(后台「关于我们」栏目下的「团队故事」内容) */
    stories: StorySlide[];
}

/** 后台未配置图片时沿用的默认图(与原静态页面一致) */
const DEFAULT_BANNER_IMAGE = 'https://assets.kinetixai.cn/kinetixai/company/banner-1.png';
const DEFAULT_INTRO_IMAGE = 'https://assets.kinetixai.cn/kinetixai/index/img-1.png';

/**
 * 关于我们
 * 顶部 banner 与企业介绍来自 CMS 栏目配置,团队故事来自栏目下的内容列表;
 * 后台未配置时回落到多语言文案与默认图,保证页面不空白
 */
export default function AboutClient({ config, stories }: Props) {
    const t = useTranslations('Company');

    /** 取配置文案:中英文各是独立站点,同一字段只维护一种语言;取不到时回落到多语言文案 */
    const pickText = (key: string, fallback: string) => (config[key] || '').trim() || fallback;

    const bannerImage = (config.banner_image || '').trim() || DEFAULT_BANNER_IMAGE;
    const introImage = (config.intro_image || '').trim() || DEFAULT_INTRO_IMAGE;
    const bannerTitle = pickText('banner_title', t('bannerTit'));
    const introTitle = pickText('intro_title', t('introTit'));
    const introContent = pickText('intro_content', '');

    return (
        <div className="about-main">
            <div className="inner-s2">
                <div className="img-box">
                    <Image
                        src={bannerImage}
                        alt={bannerTitle}
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="txt-box">
                    <div className="wrap-s">
                        <FadeInUp className="tit">
                            {bannerTitle}
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="inner-s3">
                <div className="wrap-s">
                    <div className="top-block">
                        <FadeInUp className='label'>
                            {introTitle}
                        </FadeInUp>
                        <div className="para-box">
                            {introContent ? (
                                <FadeInUp
                                    className="para"
                                    delay={0.1}
                                    dangerouslySetInnerHTML={{ __html: introContent }}
                                />
                            ) : (
                                <FadeInUp className="para" delay={0.1}>
                                    {t.rich('introPara', {
                                        p: (chunks) => <p>{chunks}</p>
                                    })}
                                </FadeInUp>
                            )}
                        </div>
                    </div>
                    <div className="img-box">
                        <Image
                            src={introImage}
                            alt={introTitle}
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <CompanyList items={stories} />
        </div>
    )
}
