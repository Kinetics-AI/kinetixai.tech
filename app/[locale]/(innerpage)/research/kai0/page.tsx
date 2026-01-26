'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef } from 'react';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChartCarousel } from "./chart-carousel"
import { SoupingBarChart1 } from "./chart/souping/souping1"
import { AdvantageBarChart1 } from "./chart/advantage/advantage1"
import { AdvantageBarChart2 } from "./chart/advantage/advantage2"
import { AdvantageBarChart3 } from "./chart/advantage/advantage3"
import { StageVideo1 } from "./stage/stage1"






export default function ResearchDetail1Page(){
    
    const t = useTranslations('ResearchDetail3');



    // 锚点
    const navLinks: {
        id: string;
        tit: string;
        url: string;
    }[] = [
        { id: "section1", tit: t("paraTitle1"), url: "#section1" },
        // { id: "section2", tit: t("paraTitle2"), url: "#section2" },
        { id: "section3", tit: t("paraTitle3"), url: "#section3" },
        { id: "section4", tit: t("paraTitle4"), url: "#section4" },
        { id: "section5", tit: t("paraTitle5"), url: "#section5" },
        { id: "section6", tit: t("paraTitle6"), url: "#section6" },
        { id: "section7", tit: t("paraTitle7"), url: "#section7" },
    ];

    const [activeSection, setActiveSection] = useState<string>('section1');
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 锚点点击
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            setIsScrolling(true);
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            
            // 更新URL hash但不触发滚动
            window.history.pushState(null, '', `#${id}`);
            
            // 设置滚动结束标识
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        }
    };

    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return; 
            
            const scrollPosition = window.scrollY + 100; // 添加偏移量
            let currentActive = 'section1';
            
            let minDiff = Infinity;
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const section = document.getElementById(navLinks[i].id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = window.scrollY + rect.top;
                    
                    // 计算当前滚动位置与section顶部的距离
                    const diff = scrollPosition - sectionTop;
                    
                    // 如果滚动位置大于等于section顶部，并且距离更小
                    if (scrollPosition >= sectionTop && diff < minDiff) {
                        minDiff = diff;
                        currentActive = navLinks[i].id;
                    }
                }
            }
            
            // 如果没找到匹配的，使用第一个
            if (minDiff === Infinity) {
                currentActive = 'section1';
            }
            
            setActiveSection(currentActive);
        };

        // 监听滚动事件
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // 组件挂载时初始化active状态
        handleScroll();
        
        // 监听hash变化（浏览器前进后退）
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && navLinks.some(link => link.id === hash)) {
                setActiveSection(hash);
            }
        };
        
        window.addEventListener('hashchange', handleHashChange);
        
        // 检查初始hash
        const initialHash = window.location.hash.replace('#', '');
        if (initialHash && navLinks.some(link => link.id === initialHash)) {
            setActiveSection(initialHash);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashChange);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [isScrolling]);

    



    return (
        <div className="research-detail-3">
            <div className="inner-s9">
                <div className="wrap-s">
                    <div className="label">
                        {t('label')}
                    </div>
                    <div className="title">
                        {t('title')}
                    </div>
                    <div className="video-box">
                        <video
                            autoPlay 
                            muted 
                            loop 
                            controls 
                            playsInline
                            x5-playsinline=""
                            x5-video-player-type="h5" 
                            poster="https://assets.kinetixai.cn/FoldAnything/full.png"
                        >
                            <source src="https://assets.kinetixai.cn/20260119/robotic.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="inner-s10">
                <div className="sticky-block">
                    <div className="wrap-s">
                        <div className="sticky">                     
                            {navLinks.map(({id, tit, url}, idx) => (
                                <Link
                                    href={url}
                                    key={idx}
                                    onClick={(e) => handleAnchorClick(e, id)}
                                    className={activeSection === id ? 'active' : ''}
                                >
                                    <span>{tit}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="main-block">
                    <div className="wrap-s">
                        <div className="block-2" id="section1">
                            <div className="label">
                                {t('paraTitle1')}
                            </div>
                            <div className="stit">
                                {t('para1Label')}
                            </div>
                            <div className="para">
                                {t('para1Artical1')}
                                <div className="source">
                                    <Link
                                    href= "https://www.physicalintelligence.company/blog/pi0"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>1</sup>π<sub>0</sub> (2024)
                                    </Link>
                                    <Link
                                    href= "https://opendrivelab.com/OpenGO1/"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>2</sup>GO-1 (2025)
                                    </Link>
                                </div>
                            </div>
                            <div className="para">
                                {t('para1Artical2')}
                            </div>
                            <div className="para">
                                {t.rich('para1Artical3', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t('para1Artical4')}
                            </div>
                            <div className="para-1">
                                <i></i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M19 5a9 9 0 0 1 0 14"></path></svg>
                                <p>
                                    {t('para1Artical5')}
                                </p>
                            </div>
                            <div className="items mt1">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    speed={500}
                                    slidesPerView={'auto'}
                                    navigation
                                    centeredSlides={true}
                                    pagination={{ clickable: true }}
                                >
                                        <SwiperSlide className='item'>
                                            <div className="inner">
                                                <div className="video-box">
                                                    <video
                                                        autoPlay 
                                                        muted 
                                                        loop 
                                                        controls 
                                                        playsInline
                                                        x5-playsinline=""
                                                        x5-video-player-type="h5" 
                                                        poster="https://assets.kinetixai.cn/FoldAnything/step_1.png"
                                                    >
                                                        <source src="https://assets.kinetixai.cn/FoldAnything/step_1.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className='item'>
                                            <div className="inner">
                                                <div className="video-box">
                                                    <video
                                                        autoPlay 
                                                        muted 
                                                        loop 
                                                        controls 
                                                        playsInline
                                                        x5-playsinline=""
                                                        x5-video-player-type="h5" 
                                                        poster="https://assets.kinetixai.cn/FoldAnything/step_2.png"
                                                    >
                                                        <source src="https://assets.kinetixai.cn/FoldAnything/step_2.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className='item'>
                                            <div className="inner">
                                                <div className="video-box">
                                                    <video
                                                        autoPlay 
                                                        muted 
                                                        loop 
                                                        controls 
                                                        playsInline
                                                        x5-playsinline=""
                                                        x5-video-player-type="h5" 
                                                        poster="https://assets.kinetixai.cn/FoldAnything/step_3.png"
                                                    >
                                                        <source src="https://assets.kinetixai.cn/FoldAnything/step_3.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="spara">
                                {t('para1Artical6')}
                            </div>
                            <div className="img-box">
                                <video
                                    autoPlay 
                                    muted 
                                    loop 
                                    controls 
                                    playsInline
                                    x5-playsinline=""
                                    x5-video-player-type="h5" 
                                    poster="https://assets.kinetixai.cn/FoldAnything/pipeling.jpg"
                                >
                                    <source src="https://assets.kinetixai.cn/FoldAnything/full_Dec23_4K_30_v5.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="spara">
                                {t.rich('para1Artical7', {
                                    span: (chunks) => <span>{chunks}</span>
                                })}
                            </div>
                        </div>
                        <div className="block-2" id="section3">
                            <div className="label">
                                {t('paraTitle3')}
                            </div>
                            <div className="para">
                                {t.rich('para3Artical1', {
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t.rich('para3Artical2', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t.rich('para3Artical3', {
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    sup: (chunks) => <sup>{chunks}</sup>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://arxiv.org/abs/2510.18874"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>3</sup>Retaining by Doing (Chen et al., 2025)
                                    </Link>
                                    <Link
                                    href= "https://arxiv.org/abs/2404.14367"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>4</sup>Preference Fine-Tuning (Tajwar et al., 2024)
                                    </Link>
                                </div>
                            </div>
                            <div className="img-box min">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fpqp_1220_1258.gif"
                                    alt=""
                                    width={1080}
                                    height={608}
                                    priority
                                />
                            </div>
                            <div className="spara">
                                {t.rich('para3Artical4', {
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t('para3Artical5')}
                            </div>
                            <div className="para">
                                {t.rich('para3Artical6', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t('para3Artical7')}
                            </div>
                            <div className="para">
                                {t.rich('para3Artical8', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    sup: (chunks) => <sup>{chunks}</sup>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://arxiv.org/abs/1011.0686"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>5</sup>DAgger (Ross et al., 2011)
                                    </Link>
                                    <Link
                                    href= "https://arxiv.org/abs/1810.02890"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>6</sup>HG-DAgger (Kelly et al., 2018)
                                    </Link>
                                    <Link
                                    href= "https://arxiv.org/abs/2509.07953"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>7</sup>RaC (Hu et al., 2025)
                                    </Link>
                                </div>
                            </div>
                            <div className="para style-1">
                                {t.rich('para3Artical9', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    sup: (chunks) => <sup>{chunks}</sup>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://arxiv.org/abs/2506.07339"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>8</sup>Real-Time Action Chunking (Black et al., 2025)
                                    </Link>
                                </div>
                            </div>
                            <div className="items mt1">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    speed={500}
                                    slidesPerView={'auto'}
                                    navigation
                                    centeredSlides={true}
                                    pagination={{ clickable: true }}
                                >
                                        <SwiperSlide className='item'>
                                            <div className="inner">
                                                <div className="img">
                                                    <Image
                                                        src="https://assets.kinetixai.cn/FoldAnything%2Fdagger_1220_1258.gif"
                                                        alt=""
                                                        width={1080}
                                                        height={608}
                                                        priority
                                                    />
                                                </div>
                                                <div className="txt-box">
                                                    <div className="tit">
                                                        {t.rich('para3ItemTitle1', {
                                                            span: (chunks) => <span>{chunks}</span>,
                                                            sub: (chunks) => <sub>{chunks}</sub>,
                                                            i: (chunks) => <i>{chunks}</i>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className='item'>
                                            <div className="inner">
                                                <div className="img">
                                                    <Image
                                                        src="https://assets.kinetixai.cn/FoldAnything%2Fcontrol_curve_1220_1258.gif"
                                                        alt=""
                                                        width={1080}
                                                        height={608}
                                                        priority
                                                    />
                                                </div>
                                                <div className="txt-box">
                                                    <div className="tit">
                                                        {t.rich('para3ItemTitle2', {
                                                            span: (chunks) => <span>{chunks}</span>,
                                                            sub: (chunks) => <sub>{chunks}</sub>,
                                                            i: (chunks) => <i>{chunks}</i>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="spara">
                                {t.rich('para3Artical10', {
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="iframe-box">
                                <iframe
                                        src="https://assets.kinetixai.cn/FoldAnything/combined_tsne_black_bias_5000sample_5000iter.html"
                                        width="800px"
                                        height="450px"
                                        scrolling="no"
                                    />
                            </div>
                            <div className="spara">
                                {t.rich('para3Artical11', {
                                    sub: (chunks) => <sub>{chunks}</sub>,
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t('para3Artical12')}
                            </div>
                            <div className="chart-block">
                                <ChartCarousel />
                            </div>                            
                        </div>
                        <div className="block-2" id="section4">
                            <div className="label">
                                {t('paraTitle4')}
                            </div>
                            <div className="para">
                                {t.rich('para4Artical1', {
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="para">
                                {t.rich('para4Artical2', {
                                    i: (chunks) => <i>{chunks}</i>,
                                    sup: (chunks) => <sup>{chunks}</sup>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://proceedings.mlr.press/v162/wortsman22a.html"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>9</sup>Model Soups (Wortsman et al., 2021)
                                    </Link>
                                </div>
                            </div>
                            <div className="img-box min">
                                <Image
                                    src="https://assets.kinetixai.cn/FoldAnything%2Fsouping1_1220_1254.gif"
                                    alt=""
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </div>
                            <div className="spara">
                                {t('para4Artical3')}
                            </div>
                            <div className="para">
                                {t.rich('para4Artical4', {
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </div>
                            <div className="chart-block style-1">
                                <SoupingBarChart1 />
                            </div>
                            <div className="spara">
                                {t('para4Artical5')}
                            </div>
                        </div>
                        <div className="block-2" id="section5">
                            <div className="label">
                                {t('paraTitle5')}
                            </div>
                            <div className="para">
                                {t.rich('para5Artical1', {
                                    i: (chunks) => <i>{chunks}</i>,
                                    sup: (chunks) => <sup>{chunks}</sup>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://openreview.net/forum?id=Seb7rprW1Y"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>10</sup>Self-Directed Learning (Li et al.,2025)
                                    </Link>
                                </div>
                            </div>
                            <div className="para">
                                {t.rich('para5Artical2', {
                                    i: (chunks) => <i>{chunks}</i>,
                                    sup: (chunks) => <sup>{chunks}</sup>
                                })}
                                <div className="source">
                                    <Link
                                    href= "https://www.pi.website/blog/pistar06"
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >
                                        <sup>11</sup>π<sub>0.6</sub><sup>*</sup>: a VLA that Learns from Experience (2025)
                                    </Link>
                                </div>
                            </div>
                            <div className="para">
                                {t('para5Artical3')}
                            </div>
                            <div className="stage-block">
                                <StageVideo1 />
                            </div>
                            <div className="spara">
                                {t.rich('para5Artical4', {
                                    span: (chunks) => <span>{chunks}</span>
                                })}
                            </div>
                            <div className="para">
                                {t('para5Artical5')}
                            </div>
                            <div className="para">
                                {t('para5Artical6')}
                            </div>
                            <div className="chart-block style-2">
                                <AdvantageBarChart1 />
                                <AdvantageBarChart2 />
                                <AdvantageBarChart3 />
                            </div>
                            <div className="spara">
                                {t.rich('para5Artical7', {
                                    span: (chunks) => <span>{chunks}</span>
                                })}
                            </div>
                        </div>




                        <div className="block-2" id="section6">
                            <div className="label">
                                {t('paraTitle6')}
                            </div>
                            <div className="para">
                                {t.rich('para6Artical', {
                                    ul: (chunks) => <ul>{chunks}</ul>,
                                    li: (chunks) => <li>{chunks}</li>,
                                })}
                            </div>
                        </div>
                        <div className="block-2" id="section7">
                            <div className="label">
                                {t('paraTitle7')}
                            </div>
                            <div className="code">
                                <pre>
                                    <code>
{`@article{hkummlab2025kai0,
    title = {A Live-Stream Robotic Teamwork for Clothing Manipulation from Zero to Hero},
    author = {HKU MMLab},
    journal = {HKU MMLab Research Blog},
    year = {2025},
    note = {https://mmlab.hk/research/kai0},
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
