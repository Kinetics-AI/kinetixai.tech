'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { headbandSection6Data, headbandSection6 } from "@/data/headbandSection6";







export const HeadbandSection6 = () => {
    const t = useTranslations('Headband');
    const params = useParams();

    const [activeIndex, setActiveIndex] = useState(0);

    
    
    // 获取当前语言的数据
    const headbandSection6Items = (): headbandSection6[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection6Data[locale] || headbandSection6Data.en;
    };

    const items = headbandSection6Items();
    if (!items.length) return null;


    return (
        <div className="headband-s6">
            <div className="wrapper">
                <div className="top-block">
                    <FadeInUp className="label">
                        {t.rich('section6Label', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                    <FadeInUp className="slabel" delay={0.1}>
                        {t.rich('section6sLabel', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                </div>
                <div className="cont-block">
                    <FadeInUp className="left-box">
                        {items.map(({title, para}, idx) => (
                            <div
                                key={idx}
                                className={`item ${activeIndex === idx ? 'active' : ''}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <div className="tit">
                                    <i></i>
                                    <div className="range">
                                        <em></em><em></em><em></em>
                                    </div>
                                    <span>{title}</span>
                                </div>
                                <div className="para">{para}</div>
                            </div>
                        ))}
                    </FadeInUp>
                    <FadeInUp className="right-box" delay={0.1}>
                        {items.map(({title, pic}, idx) => (
                            <div
                                key={idx}
                                className={`child ${activeIndex === idx ? 'active' : ''}`}
                            >
                                <div className="img-box">
                                    <Image src={pic} alt={title} width={800} height={800} />
                                </div>
                            </div>
                        ))}
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
};