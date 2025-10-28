'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { indexTechData, indexTech } from "@/data/indexTech";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

export const IndexTechItemList = () => {
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
    const indexTechItems = (): indexTech[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexTechData[locale] || indexTechData.en;
    };

    const items = indexTechItems();
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
                duration: 1,
            }, 0);

            tl.to(itemsRef.current[1], {
                    opacity: 1,
                    duration: 0.05,
                }, 0)
                .to(itemsRef.current[1], {
                    top: 0,
                    scale: 1,
                    duration: 1,
                }, 0)

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

        const sectionHeight = (winHeight * 0.9) / (itemsRef.current.length - 1);
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
                        {t.rich('indexTechTit', {
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
                            {items.map(({ title, pic, stats }, idx) => (
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
                                        <div className="data-box">
                                            {stats?.map(({ num, unit, desc, icon }, dataIndex) => (
                                                <div key={dataIndex} className="data">
                                                    <div className="topbox">
                                                        <div className="num">
                                                            <span>{num}</span>
                                                            <i>{unit}</i>
                                                        </div>
                                                        <div className="icon">
                                                            <Image
                                                                src={icon}
                                                                alt=""
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="para">
                                                        {desc.split('\n').map((line, i) => (
                                                            <p key={i}>{line}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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