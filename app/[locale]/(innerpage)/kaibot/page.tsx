'use client';


import {useTranslations} from 'next-intl';

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"





export default function ProductPage(){
    const t = useTranslations('Product');



    return (
        <div className="product-main">
            <div className="inner-s5">
                <div className="video-box">
                    <video autoPlay muted loop playsInline poster="https://assets.kinetixai.cn/kinetixai/product/video.jpg">
                        <source src="https://assets.kinetixai.cn/kinetixai/product/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="txt-box">
                    <FadeInUp className="num">
                        2026
                    </FadeInUp>
                    <FadeInUp className="tips" delay={0.1}>
                        {t('txt')}
                    </FadeInUp>
                </div>
            </div>
        </div>
    )
}
