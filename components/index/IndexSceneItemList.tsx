'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { indexSceneData, indexScene } from "@/data/indexScene";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

export const IndexSceneItemList = () => {
    const t = useTranslations('Home');
    const params = useParams();
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [winHeight, setWinHeight] = useState(0);
    // 跟踪ScrollTrigger实例
    const scrollTriggerRef = useRef<gsap.plugins.ScrollTriggerInstance | null>(null);

    // 获取当前语言的数据
    const indexSceneItems = (): indexScene[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexSceneData[locale] || indexSceneData.en;
    };

    const items = indexSceneItems();
    if (!items.length) return null;

    useEffect(() => {
        // 监听窗口大小变化，确保高度正确
        const handleResize = () => {
            setWinHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || itemsRef.current.length === 0 || winHeight === 0) return;

        const itemHeight = itemsRef.current[0]?.offsetHeight || 0;
        const totalItems = itemsRef.current.length;

        const loadGSAP = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            // 清除已存在的实例，避免重复
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }

            // 初始化所有项目状态
            itemsRef.current.forEach((item, index) => {
                if (!item) return;
                if (index === 0) {
                    // 第一个项目初始状态
                    gsap.set(item, {
                        opacity: 1,
                        scale: 1,
                        top: 0
                    });
                } else {
                    // 其他项目初始隐藏
                    gsap.set(item, {
                        opacity: 0,
                        scale: 1.2,
                        top: itemHeight + 100,
                    });
                }
            });

            // 创建时间线动画
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    markers: false,
                    // 强制初始刷新，确保在任何滚动位置都正确计算
                    immediateRender: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const currentIndex = Math.floor(progress * (totalItems - 1));
                        setActiveIndex(currentIndex);
                    },
                    // 滚动位置变化时强制重新计算
                    onRefresh: (self) => {
                        const progress = self.progress;
                        const currentIndex = Math.floor(progress * (totalItems - 1));
                        setActiveIndex(currentIndex);
                    }
                },
            });

            tl.to(itemsRef.current[0], {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
            }, 0);

            tl.to(itemsRef.current[1], {
                opacity: 1,
                duration: 0.05,
            }, 0)
            .to(itemsRef.current[1], {
                top: 0,
                scale: 1,
                duration: 0.5,
            }, 0)

            tl.to(itemsRef.current[1], {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
            }, 0.5);

            tl.to(itemsRef.current[2], {
                opacity: 1,
                duration: 0.05,
            }, 0.5)
            .to(itemsRef.current[2], {
                top: 0,
                scale: 1,
                duration: 0.5,
            }, 0.5)

            // 保存ScrollTrigger实例            
            if (tl.scrollTrigger) {
                scrollTriggerRef.current = tl.scrollTrigger as gsap.plugins.ScrollTriggerInstance;
            } else {
                scrollTriggerRef.current = null;
            }

            // 手动触发一次刷新，确保初始状态正确
            ScrollTrigger.refresh();

            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(instance => instance.kill());
                scrollTriggerRef.current = null;
            };
        };

        loadGSAP();
    }, [winHeight, items.length]);
    
    const handleDotClick = async (index: number) => {
        if (!sectionRef.current || itemsRef.current.length === 0) return;
        
        const { gsap } = await import("gsap");
        const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
        gsap.registerPlugin(ScrollToPlugin);

        const sectionHeight = (winHeight * 2) / (itemsRef.current.length - 1);
        const scrollPosition = sectionRef.current.offsetTop + (index * sectionHeight) + 10;

        gsap.to(window, {
            scrollTo: scrollPosition,
            duration: 0.5,
        });
    };

    return (
        <div className="index-s3" ref={sectionRef}>
            <div className="sticky">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {t.rich('indexSceneTit', {
                            span: (chunks) => <span>{chunks}</span>,
                        })}
                    </FadeInUp>
                    <FadeInUp className="cont-block" delay={0.2}>
                        <div className="dot-box">
                            {items.map((dot, index) => (
                            <div 
                                key={index}
                                className={`dot ${activeIndex === index ? 'active' : ''}`}
                                ref={el => { dotsRef.current[index] = el; }}
                                onClick={() => handleDotClick(index)}
                            />
                            ))}
                        </div>
                        
                        <div className="items">
                            {items.map(({ title, pic }, idx) => (
                                <div
                                    key={idx}
                                    className='item'
                                    ref={el => { itemsRef.current[idx] = el; }}
                                >
                                    <div className="img-box">
                                        <Image
                                            src={pic}
                                            alt={title}
                                            width={800}
                                            height={800}
                                        />
                                    </div>
                                    <div className="txt-box">
                                        <div className="tit">{title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
};