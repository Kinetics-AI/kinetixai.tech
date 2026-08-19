'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
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
                                delay={0.2}
                            >
                                <div className="inner">
                                    <div className="img-box">                                    
                                        <Image
                                            src={image}
                                            alt={label}
                                            width={600}
                                            height={500}
                                        />
                                    </div>
                                    <div className="txt-box">
                                        <div className="label">
                                            {label}
                                        </div>
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="data-box" dangerouslySetInnerHTML={{ __html: htmlContent }} />
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