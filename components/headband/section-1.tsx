'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import Link from "next/link";
import {useLocale, useTranslations} from 'next-intl';
import { useDocPublished } from '@/hooks/use-doc-published';








export const HeadbandSection1 = () => {
    const t = useTranslations('Headband');
    const locale = useLocale();
    // 文档按钮跳当前语言的 KaiEgo 文档页(与 KaiHand 产品页跳 /docs/kaihand 一致)
    const docsUrl = `/${locale}/docs/kaiego`;
    // KaiEgo 文档树在后台改为草稿时,隐藏本页文档入口(状态查询异常时保持显示)
    const docPublished = useDocPublished(`${locale}-kaiego`);
    


    return (
        <div className="headband-s1">
            <div className="video-box">
                <video autoPlay muted loop playsInline preload="auto" poster="https://assets.kinetixai.cn/shucai/s10-20260702-2/fmt-banner.jpg">
                    <source src="https://assets.kinetixai.cn/shucai/s10-20260702-2/20260704banner.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="txt-box">
                <div className="wrapper">
                    <FadeInUp className="label">
                        {t.rich('section1Label')}
                    </FadeInUp>
                    <FadeInUp className="slabel" delay={0.1}>
                        {t.rich('section1sLabel', {
                            p: (chunks) => <p>{chunks}</p>
                        })}
                    </FadeInUp>
                    <FadeInUp className="btns">
                        {docPublished && (
                            <Link
                                href={docsUrl}
                            >
                                <span>{t('section1BtnTxt')}</span>
                            </Link>
                        )}
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
};