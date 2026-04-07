'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import { useTranslations } from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';

import { headbandSection9Data, headbandSection9 } from "@/data/headbandSection9";






export const HeadbandSection9 = () => {
    const t = useTranslations('Headband');
    const params = useParams();
    const pathname = usePathname();
    const sectionRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollRangeHeight, setScrollRangeHeight] = useState(0);


    // 获取当前语言的数据
    const headbandSection9Items = (): headbandSection9[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection9Data[locale] || headbandSection9Data.en;
    };

    const items = headbandSection9Items();
    if (!items.length) return null;

    const totalTabs = items.length;

    useEffect(() => {
        setScrollRangeHeight(window.innerHeight * 2);
    }, []);

    // 防抖
    const debounce = (func: Function, delay = 50) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleScroll = useCallback(
        debounce(() => {
            if (!sectionRef.current || scrollRangeHeight === 0) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;

            if (sectionTop > 0) {
                setActiveIndex(0);
                return;
            }

            const scrolled = Math.abs(sectionTop);
            const percent = Math.min(100, (scrolled / scrollRangeHeight) * 100);
            const step = 100 / totalTabs;

            let newIndex = 0;
            for (let i = 1; i < totalTabs; i++) {
                if (percent >= step * i) {
                    newIndex = i;
                }
            }

            if (newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        }),
        [activeIndex, totalTabs, scrollRangeHeight]
    );

    const handleClickTab = (index: number) => {
        if (!sectionRef.current || scrollRangeHeight === 0) return;
        const sectionOffsetTop = sectionRef.current.offsetTop;
        const targetScroll = sectionOffsetTop + (scrollRangeHeight / totalTabs) * index + 10;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    useEffect(() => {
        if (scrollRangeHeight === 0) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, scrollRangeHeight]);

    return (
        <div className="headband-s9">
            <div className="wrapper">
                <div className="top-block">
                    <FadeInUp className="label">
                        {t.rich('section9Label', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                    <FadeInUp className="slabel" delay={0.1}>
                        {t.rich('section9sLabel', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                </div>

                <div className="bot-block" ref={sectionRef}>
                    <div className="sticky">
                        <FadeInUp className="tab-wrap">
                            <div className="tab-cont">
                                {items.map(({ title, pic, para }, idx) => (
                                    <div key={idx} className={`child ${activeIndex === idx ? 'active' : ''}`}>
                                        <div className="img-box">
                                            <Image src={pic} alt={title} width={800} height={800} />
                                            <div className="para">{para}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="tab-tit">
                                {items.map(({ title }, idx) => (
                                    <div
                                        key={idx}
                                        className={`item ${activeIndex === idx ? 'active' : ''}`}
                                        onClick={() => handleClickTab(idx)}
                                    >
                                        <div className="tips">Step{idx + 1}</div>
                                        <div className="tit">{title}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </div>
    );
};