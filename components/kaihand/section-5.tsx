'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useDocPublished } from '@/hooks/use-doc-published';




export const KaihandSection5 = () => {
    const t = useTranslations('KaiHand');
    const locale = useLocale();
    // 文档/合作入口走站内相对路由(带当前语言前缀)
    const docsUrl = `/${locale}/docs/kaihand`;
    const cooperationUrl = `/${locale}/cooperation`;
    // KAI Hand 文档树在后台改为草稿时,隐藏文档入口(状态查询异常时保持显示)
    const docPublished = useDocPublished(locale === 'en' ? 'en-kaihand' : 'kaihand');
    
    
    


    return (
        <div className="kaihand-s5" id="contact">
            <div className="wrapper">
                <div className="cont-block">
                    <FadeInUp className="top-block" delay={0.1}>
                        <div className="s-tit">{t('section5Txt1')}</div>
                        <div className="tit">{t('section5Txt2')}</div>
                        <p>{t('section5Txt3')}</p>
                    </FadeInUp>
                    <div className="items">
                        {docPublished && (
                        <FadeInUp className="item" delay={0.2}>
                            <Link className="inner" href={docsUrl}>
                                <div className="icon">
                                    <Image
                                        src="/kaihand/icon-5-1.svg"
                                        alt="KaiHand"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                                <span>{t('section5Txt4')}</span>
                            </Link>
                        </FadeInUp>
                        )}
                        {/*
                        <FadeInUp className="item" delay={0.2}>
                            <Link className="inner" href="">
                                <div className="icon">
                                    <Image
                                        src="/kaihand/icon-5-2.svg"
                                        alt="KaiHand"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                                <span>{t('section5Txt5')}</span>
                            </Link>
                        </FadeInUp>
                        <FadeInUp className="item" delay={0.2}>
                            <Link className="inner" href="">
                                <div className="icon">
                                    <Image
                                        src="/kaihand/icon-5-3.svg"
                                        alt="KaiHand"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                                <span>{t('section5Txt6')}</span>
                            </Link>
                        </FadeInUp>*/}
                        <FadeInUp className="item" delay={0.2}>
                            <Link className="inner" href={cooperationUrl}>
                                <div className="icon">
                                    <Image
                                        src="/kaihand/icon-5-4.svg"
                                        alt="KaiHand"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                                <span>{t('section5Txt7')}</span>
                            </Link>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </div>
    );
};