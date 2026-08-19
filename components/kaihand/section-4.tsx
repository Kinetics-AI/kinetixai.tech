'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { kaihandSection4Data } from "@/data/kaihandSection4";




export const KaihandSection4 = () => {
    const t = useTranslations('KaiHand');
    const params = useParams();
        
    // 获取当前语言的数据
    const getCurrentItems = () => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return kaihandSection4Data[locale] || kaihandSection4Data.en;
    };

    const items = getCurrentItems();
    if (!items.length) return null;
    
    
    


    return (
        <div className="kaihand-s4" id="params">
            <div className="wrapper">
                <div className="cont-block">
                    <FadeInUp className="top-block" delay={0.1}>
                        <div className="s-tit">{t('section2Txt3')}</div>
                        <div className="tit">{t('section4Txt1')}</div>
                    </FadeInUp>
                    <FadeInUp className="items" delay={0.2}>
                      
                        {items.map(({label, para}, idx) => (
                            <div
                                key={idx}
                                className='item'
                            >
                                <div className="inner">
                                    <span>{label}</span>
                                    <p>{para}</p>
                                </div>
                            </div>
                        ))}
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
};