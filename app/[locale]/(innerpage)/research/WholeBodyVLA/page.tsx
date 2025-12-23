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






export default function ResearchDetail1Page(){
    
    const t = useTranslations('ResearchDetail2');



    // 锚点
    const navLinks: {
        id: string;
        tit: string;
        url: string;
    }[] = [
        { id: "section1", tit: t("paraTitle1"), url: "#section1" },
        { id: "section2", tit: t("paraTitle2"), url: "#section2" },
        { id: "section3", tit: t("paraTitle3"), url: "#section3" },
        { id: "section4", tit: t("paraTitle4"), url: "#section4" },
        { id: "section5", tit: t("paraTitle5"), url: "#section5" },
        { id: "section6", tit: t("paraTitle6"), url: "#section6" },
        { id: "section7", tit: t("paraTitle7"), url: "#section7" },
        { id: "section8", tit: t("paraTitle8"), url: "#section8" },
        { id: "section9", tit: t("paraTitle9"), url: "#section9" }
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
        <div className="research-detail-2">
            <div className="inner-s9">
                <div className="wrap-s">
                    <div className="label">
                        {t('label')}
                    </div>
                    <div className="title">
                        <span>{t('titleTips')}</span>{t('title')}
                    </div>
                    <div className="ope">
                        <Link href="#section3">
                            {t('share1')}
                        </Link>
                        <Link href="https://arxiv.org/abs/2512.11047" target='_blank'>
                            {t('share2')}
                        </Link>
                        <Link href="https://github.com/OpenDriveLab/WholebodyVLA" target='_blank'>
                            {t('share4')}
                        </Link>
                    </div>
                    <div className="source">                        
                        {t('date')}
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
                            poster="https://assets.kinetixai.cn/WholeBodyVLA/long.png"
                        >
                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/long.mp4" type="video/mp4" />
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
                            <div className="img-box">
                                <Image
                                    src="https://assets.kinetixai.cn/WholeBodyVLA/teaser.png"
                                    alt=""
                                    width={3614}
                                    height={1887}
                                    priority
                                />
                            </div>
                            <div className="para">
                                {t('para1Artical')}
                            </div>
                        </div>
                        <div className="block-2" id="section2">
                            <div className="label">
                                {t('paraTitle2')}
                            </div>
                            <div className="img-box">
                                <Image
                                    src="https://assets.kinetixai.cn/WholeBodyVLA/20251217-123804.gif"
                                    alt=""
                                    width={2462}
                                    height={1372}
                                    priority
                                />
                            </div>
                            <div className="para">
                                {t.rich('para2Artical', {
                                    span: (chunks) => <span>{chunks}</span>
                                })}
                            </div>
                        </div>
                        <div className="block-1" id="section3">
                            <div className="label">
                                {t('paraTitle3')}
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para3Subtitle1')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/1-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/1_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para3Item1Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/8-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/8_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para3Item1Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para3Subtitle2')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/4-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/4_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para3Item2Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/7-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/7_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para3Item2Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section4">
                            <div className="label">
                                {t('paraTitle4')}
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para4Subtitle1')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task2_1-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task2_1_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para4Item1Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task2_4-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task2_4_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para4Item1Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para4Subtitle2')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task2_6-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task2_6_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para4Item2Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task2_7-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task2_7_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para4Item2Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section5">
                            <div className="label">
                                {t('paraTitle5')}
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para5Subtitle1')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task3_1-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task3_1_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para5Item1Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task3_8-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task3_8_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para5Item1Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para5Subtitle2')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task3_2-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task3_2_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para5Item2Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/task3_7-poster.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/task3_7_480p.mov" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para5Item2Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section6">
                            <div className="label">
                                {t('paraTitle6')}
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para6Subtitle1')}
                                </div>
                                <div className="spara">
                                    {t('para6SubArtical1')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/intervene.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/intervene.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para6Subtitle2')}
                                </div>
                                <div className="spara">
                                    {t('para6SubArtical2')}
                                </div>
                                <div className="stit1">
                                    {t('para6Subtitle1s')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/head1.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/head1.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item1Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/head2.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/head2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item1Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="stit1">
                                    {t('para6Subtitle2s')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/sidestep2.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/sidestep2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item2Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/sidestep1.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/sidestep1.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item2Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="stit1">
                                    {t('para6Subtitle3s')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/turn1.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/turn1.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item3Title1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/turn2.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/turn2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item3Title2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="stit1">
                                    {t('para6Subtitle4s')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/squat.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/squat.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para6Item4Title1')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para6Subtitle3')}
                                </div>
                                <div className="spara">
                                    {t('para6SubArtical3')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/terrain.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/terrian.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section7">
                            <div className="label">
                                {t('paraTitle7')}
                            </div>
                            <div className="cont-block mt">
                                <div className="spara">
                                    {t('para7Artical')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/navi.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/navi.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para7ItemTitle1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/goaround.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/goaround.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para7ItemTitle2')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section8">
                            <div className="label">
                                {t('paraTitle8')}
                            </div>
                            <div className="cont-block mt">
                                <div className="spara">
                                    {t('para8Artical')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/long.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/long.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para8ItemTitle1')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section9">
                            <div className="label">
                                {t('paraTitle9')}
                            </div>
                            <div className="cont-block mt">
                                <div className="spara">
                                    {t('para9Artical')}
                                </div>
                                <div className="items">
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/ex-coffe.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/ex-coffe.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/ex-clean.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/ex-clean.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/ex-water.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/ex-water.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/ex-chair.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/ex-chair.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/WholeBodyVLA/ex-stair.png"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/WholeBodyVLA/ex-stair.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
