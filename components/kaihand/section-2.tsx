'use client';


import { FadeInUp } from "@/components/animation/fade-in-up"
import { FadeInUpScale } from "@/components/animation/fade-in-up-scale"

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { kaihandSection2Data } from "@/data/kaihandSection2";




export const KaihandSection2 = () => {
    const t = useTranslations('KaiHand');
    const params = useParams();
    
    // 获取当前语言的数据
    const getCurrentItems = () => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return kaihandSection2Data[locale] || kaihandSection2Data.en;
    };

    const items = getCurrentItems();
    if (!items.length) return null;
    
    


    return (
        <div className="kaihand-s2" id="highlight">
            <div className="wrapper">
                <div className="cont-block">
                    <FadeInUp className="top-block" delay={0.1}>
                        <div className="s-tit">{t('section2Txt1')}</div>
                        <div className="tit">{t('section2Txt5')}</div>
                    </FadeInUp>
                    <div className="items">                        
                        {items.map(({image, label, title, htmlContent}, idx) => (
                            <FadeInUp
                                key={idx}
                                className='item'
                            >
                                <div className="inner">
                                    <FadeInUpScale className="img-box" delay={0.1}>                                    
                                        <Image
                                            src={image}
                                            alt={label}
                                            width={600}
                                            height={500}
                                        />
                                    </FadeInUpScale>
                                    <div className="txt-box">
                                        <FadeInUpScale className="label" delay={0.2}>
                                            {label}
                                        </FadeInUpScale>
                                        <FadeInUpScale className="title" delay={0.2}>
                                            {title}
                                        </FadeInUpScale>
                                        <FadeInUpScale delay={0.2}>                                            
                                        <div className="data-box" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                                        </FadeInUpScale>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};