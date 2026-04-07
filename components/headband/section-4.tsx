'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FadeInUp } from "@/components/animation/fade-in-up"
import { headbandSection4Data } from "@/data/headbandSection4";




export const HeadbandSection4 = () => {
    const params = useParams();
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [winHeight, setWinHeight] = useState(0);

    // 获取当前语言的数据
    const getCurrentItems = () => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection4Data[locale] || headbandSection4Data.en;
    };

    const items = getCurrentItems();
    if (!items.length) return null;

    useEffect(() => {
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

            // 初始化所有项目状态
            itemsRef.current.forEach((item, index) => {
                if (!item) return;
                if (index === 0) {
                    gsap.set(item, {
                        opacity: 1,
                        scale: 1,
                        top: 0
                    });
                } else {
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
                    immediateRender: true,
                    // 强制初始刷新，确保在任何滚动位置都正确计算
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

            for (let i = 0; i < totalItems - 1; i++) {
                const startPosition = i * (1 / (totalItems - 1));
                
                if (i === 0) {
                    tl.to(itemsRef.current[i], {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.5,
                    }, startPosition);
                } else {
                    tl.to(itemsRef.current[i], {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.5,
                    }, startPosition);
                }

                tl.to(itemsRef.current[i + 1], {
                    opacity: 1,
                    duration: 0.05,
                }, startPosition)
                .to(itemsRef.current[i + 1], {
                    top: 0,
                    scale: 1,
                    duration: 0.5,
                }, startPosition);
            }

            ScrollTrigger.refresh();

            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(instance => instance.kill());
            };
        };

        loadGSAP();
    }, [winHeight, items.length]);

    return (
        <div className="headband-s4" ref={sectionRef}>
            <div className="sticky">
                <div className="wrapper">
                    <FadeInUp className="cont-block">                        
                        <div className="items">
                            {items.map(({title, description, image, isTaskPerformance, successTitle, successRate}, idx) => (
                                <div
                                    key={idx}
                                    className='item'
                                    ref={el => { itemsRef.current[idx] = el; }}
                                >
                                    <div className="img-box">
                                        <Image
                                            src={image}
                                            alt={title}
                                            width={800}
                                            height={800}
                                        />
                                    </div>
                                    <div className="txt-box">
                                        <div className="tit">{title}</div>
                                        <div className="para">
                                            {description.split('\n').map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                        {isTaskPerformance && successRate && (
                                            <div className="rate">
                                                <div className="stit">{successTitle}</div>
                                                <div className="num">{successRate}</div>
                                            </div>
                                        )}
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