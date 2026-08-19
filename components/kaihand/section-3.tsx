'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { kaihandSection3Data } from "@/data/kaihandSection3";




export const KaihandSection3 = () => {
    const t = useTranslations('KaiHand');
    const params = useParams();
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollRangeHeight, setScrollRangeHeight] = useState(0);
    const [isPlaying, setIsPlaying] = useState<boolean[]>([]);
    const [progress, setProgress] = useState<number[]>([]);
    
    const [isDesktop, setIsDesktop] = useState(false);
    
    // 获取当前语言的数据
    const getCurrentItems = () => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return kaihandSection3Data[locale] || kaihandSection3Data.en;
    };

    const items = getCurrentItems();
    if (!items.length) return null;
    
    
    const totalTabs = items.length;

    useEffect(() => {
        setScrollRangeHeight(window.innerHeight * 3);
        setIsPlaying(new Array(items.length).fill(true));
        setProgress(new Array(items.length).fill(0));
        
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth > 1024);
        };
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, [items.length]);

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
            if (!sectionRef.current || scrollRangeHeight === 0 || !isDesktop) return;

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
        [activeIndex, totalTabs, scrollRangeHeight, isDesktop]
    );

    // 当 activeIndex 改变时，控制视频播放
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (!isDesktop) {
                    video.play().catch(() => {});
                    setIsPlaying(prev => {
                        const newState = [...prev];
                        newState[idx] = true;
                        return newState;
                    });
                } else if (idx === activeIndex) {
                    video.currentTime = 0;
                    video.play().catch(() => {});
                    setIsPlaying(prev => {
                        const newState = [...prev];
                        newState[idx] = true;
                        return newState;
                    });
                } else {
                    video.pause();
                    setIsPlaying(prev => {
                        const newState = [...prev];
                        newState[idx] = false;
                        return newState;
                    });
                }
            }
        });
    }, [activeIndex, isDesktop]);

    const handleClickTab = (index: number) => {
        if (!sectionRef.current || scrollRangeHeight === 0) return;
        const sectionOffsetTop = sectionRef.current.offsetTop;
        const targetScroll = sectionOffsetTop + (scrollRangeHeight / totalTabs) * index + 10;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            if (isPlaying[index]) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(prev => {
                const newState = [...prev];
                newState[index] = !newState[index];
                return newState;
            });
        }
    };

    const handleTimeUpdate = (index: number) => {
        const video = videoRefs.current[index];
        if (video && video.duration) {
            const currentProgress = (video.currentTime / video.duration) * 100;
            setProgress(prev => {
                const newState = [...prev];
                newState[index] = currentProgress;
                return newState;
            });
        }
    };

    useEffect(() => {
        if (scrollRangeHeight === 0 || !isDesktop) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, scrollRangeHeight, isDesktop]);


    return (
        <div className="kaihand-s3" id="advantage">
            <div className="scroll-container" ref={sectionRef}>
                <div className="sticky">
                    <div className="wrapper">
                        <div className="cont-block">
                            <FadeInUp className="top-block" delay={0.1}>
                                <div className="s-tit">{t('section2Txt2')}</div>
                                <div className="tit">{t('section3Txt1')}</div>
                                <p>{t('section3Txt2')}</p>
                            </FadeInUp>
                            <FadeInUp className="tab-wrap" delay={0.2}>
                                <div className="tab-tit">
                                    {items.map(({ label, para}, idx) => (
                                        <div
                                            key={idx}
                                            className={`item ${activeIndex === idx ? 'active' : ''}`}
                                            onClick={() => handleClickTab(idx)}
                                        >
                                            <div className="show">
                                                <div className="tit">
                                                    <span>{label}</span>
                                                </div>
                                            </div>
                                            <div className="hide">
                                                <div className="inner">
                                                    <div className="tit">{label}</div>
                                                    <p>{para}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="tab-cont">
                                    {items.map(({ label, para, image, video }, idx) => (
                                        <div key={idx} className={`child ${activeIndex === idx ? 'active' : ''}`}>
                                            <div className="video-box">
                                                <video
                                                    ref={el => { videoRefs.current[idx] = el; }}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    src={video}
                                                    poster={image}
                                                    onTimeUpdate={() => handleTimeUpdate(idx)}
                                                />
                                                <div className="btns-box">
                                                    <svg className="line" viewBox="0 0 36 36">
                                                        <circle
                                                            cx="18"
                                                            cy="18"
                                                            r="16"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeDasharray={`${2 * Math.PI * 16}`}
                                                            strokeDashoffset={`${2 * Math.PI * 16 * (1 - (progress[idx] || 0) / 100)}`}
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    <div
                                                        className="btn"
                                                        onClick={() => togglePlay(idx)}
                                                    >
                                                        {isPlaying[idx] ? (
                                                            <svg className="" fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill="#ffffff" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="" fill="currentColor" viewBox="0 0 24 24">
                                                                <path fill="#ffffff" d="M8 5v14l11-7z" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="txt-box">
                                                <div className="tit">{label}</div>
                                                <p>{para}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};