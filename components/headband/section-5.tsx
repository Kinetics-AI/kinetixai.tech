'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef } from 'react';








export const HeadbandSection5 = () => {
    const t = useTranslations('Headband');
    
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    // 滚动监听：循环判断所有 para
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const halfHeight = window.innerHeight / 2;
            const paras = containerRef.current.querySelectorAll('.para');
            const newActiveIndexes: number[] = [];

            paras.forEach((para, index) => {
                const rect = para.getBoundingClientRect();
                if (rect.top <= halfHeight && rect.bottom > 0) {
                    newActiveIndexes.push(index);
                }
            });

            setActiveIndexes(newActiveIndexes);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="headband-s5">
            <div className="wrapper">
                <div className="inner" ref={containerRef}>
                    <div
                        className={`para ${activeIndexes.includes(0) ? 'active' : ''}`}
                    >
                        {t.rich('section5Para1', {
                            p: (chunks) => <p>{chunks}</p>
                        })}
                    </div>
                    <div 
                        className={`para ${activeIndexes.includes(1) ? 'active' : ''}`}
                    >
                        {t.rich('section5Para2', {
                            p: (chunks) => <p>{chunks}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};