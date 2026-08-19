'use client';

import { useState, useEffect, useCallback } from 'react';
import {useTranslations} from 'next-intl';
import { FadeInUp } from "@/components/animation/fade-in-up"


import { KaihandSection1 } from "@/components/kaihand/section-1"
import { KaihandSection2 } from "@/components/kaihand/section-2"
import { KaihandSection3 } from "@/components/kaihand/section-3"
import { KaihandSection4 } from "@/components/kaihand/section-4"
import { KaihandSection5 } from "@/components/kaihand/section-5"




export default function KaiHandPage(){
    const t = useTranslations('KaiHand');
    const [activeAnchor, setActiveAnchor] = useState('highlight');

    // 判断是否是PC端
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 1025);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // 滚动监听锚点
    useEffect(() => {
        const sections = ['highlight', 'advantage', 'params', 'contact'];
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveAnchor(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAnchor = useCallback((anchorId: string) => {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    


    return (
        <div className="kaihand-main">
            <KaihandSection1 />            
            <FadeInUp className="kaihand-anchornav" delay={0.1}>
                <div className="box">
                    <a 
                        className={activeAnchor === 'highlight' ? 'active' : ''} 
                        onClick={() => scrollToAnchor('highlight')}
                    >
                        {t('section2Txt1')}
                    </a>
                    <a 
                        className={activeAnchor === 'advantage' ? 'active' : ''} 
                        onClick={() => scrollToAnchor('advantage')}
                    >
                        {t('section2Txt2')}
                    </a>
                    <a 
                        className={activeAnchor === 'params' ? 'active' : ''} 
                        onClick={() => scrollToAnchor('params')}
                    >
                        {t('section2Txt3')}
                    </a>
                    <a 
                        className={activeAnchor === 'contact' ? 'active' : ''} 
                        onClick={() => scrollToAnchor('contact')}
                    >
                        {t('section2Txt4')}
                    </a>
                </div>
            </FadeInUp>
            <KaihandSection2 />
            <KaihandSection3 />
            <KaihandSection4 />
            <KaihandSection5 />
        </div>
    )
}