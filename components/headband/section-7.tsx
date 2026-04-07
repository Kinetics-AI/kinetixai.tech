'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { headbandSection7Data, headbandSection7 } from "@/data/headbandSection7";






export const HeadbandSection7 = () => {
    const t = useTranslations('Headband');
    const params = useParams();
        
    // 获取当前语言的数据
    const headbandSection7Items = (): headbandSection7[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection7Data[locale] || headbandSection7Data.en;
    };

    const items = headbandSection7Items();
    if (!items.length) return null;
    


    


    return (
        <div className="headband-s7">
            <div className="wrapper">
                <div className="left-box">
                    <FadeInUp className="label">
                        {t.rich('section7Label')}
                    </FadeInUp>
                    <FadeInUp className="items" delay={0.1}>
                        {items.map(({data, description}, idx) => (
                            <div
                                key={idx}
                                className="item"
                            >
                                <div className="num">{data}</div>
                                <div className="para">
                                    {description.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </FadeInUp>
                </div>
                <FadeInUp className="right-box">
                    <div className="img-box">
                        <Image
                            src="/headband/s7-1.png"
                            alt=""
                            width={800}
                            height={800}
                        />
                    </div>
                </FadeInUp>
            </div>
        </div>
    );
};