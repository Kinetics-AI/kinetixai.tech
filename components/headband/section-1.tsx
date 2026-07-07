'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';








export const HeadbandSection1 = () => {
    const t = useTranslations('Headband');
    


    return (
        <div className="headband-s1">
            <div className="video-box">
                <video autoPlay muted loop playsInline poster="https://assets.kinetixai.cn/shucai/s10-20260702-2/fmt-banner.jpg">
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
                </div>
            </div>
        </div>
    );
};