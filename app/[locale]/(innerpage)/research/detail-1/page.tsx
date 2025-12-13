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
    
    const t = useTranslations('ResearchDetail1');

    // copy
    const [copied, setCopied] = useState(false);
    const copyLink = async () => {
        try {
            // 获取当前页面链接
            const link = window.location.href;

            // 使用现代 Clipboard API
            await navigator.clipboard.writeText(link);

            // 显示成功状态
            setCopied(true);

            // 3秒后重置状态
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            // 备用方案，支持旧浏览器
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

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
        { id: "section7", tit: t("paraTitle7"), url: "#section7" }
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
        <div className="research-detail-1">
            <div className="inner-s7">
                <div className="wrap-s">
                    <div className="label">
                        {t('label')}
                    </div>
                    <div className="title">
                        <span>{t('titleTips')}</span>{t('title')}
                    </div>
                    <div className="ope">                        
                        <Link href="https://arxiv.org/abs/2511.17373" target='_blank'>
                            {t('share1')}
                        </Link>
                        <Link href="https://youtu.be/vrYhegnX7m0?si=YLMzhLj_hLh_-Pj8" target='_blank'>
                            {t('share2')}
                        </Link>
                        <Link href="https://github.com/OpenDriveLab/AMS" target='_blank'>
                            {t('share3')}
                        </Link>
                        <div className="btns" onClick={copyLink}>
                            {t('copy')}
                        </div>
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
                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-1.jpg"
                        >
                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="inner-s8">
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
                        <div className="block-1" id="section1">
                            <div className="label">
                                {t('paraTitle1')}
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para1Subtitle1')}
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-2-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-2-1.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-2-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-2-2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="cont-block mt">
                                <div className="stit">
                                    {t('para1Subtitle2')}
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-3-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-3-1.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-3-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-3-2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-1" id="section2">
                            <div className="label">
                                {t('paraTitle2')}
                            </div>
                            <div className="cont-block mt">
                                <div className="items nomt">
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-1.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle1')}</div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle2')}</div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-3.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-3.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle3')}</div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-4.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-4.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle4')}</div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-5.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-5.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle5')}</div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-6.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-4-6.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                    <div className="txt-box">
                                                        <div className="tit">{t('para2ItemTitle6')}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-5-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-5-1.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-5-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-5-2.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-6-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-6-1.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-6-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-6-2.mp4" type="video/mp4" />
                                                        </video>
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
                                <div className="items nomt">
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-1.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-1.mp4" type="video/mp4" />
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
                                                            poster="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.jpg"
                                                        >
                                                            <source src="https://assets.kinetixai.cn/kinetixai/research/detail-1/video-7-2.mp4" type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="block-2" id="section5">
                            <div className="label">
                                {t('paraTitle5')}
                            </div>
                            <div className="para">
                                {t.rich('para5Artical', {
                                    p: (chunks) => <p>{chunks}</p>
                                })}
                            </div>
                        </div>
                        <div className="block-2" id="section6">
                            <div className="label">
                                {t('paraTitle6')}
                            </div>
                            <div className="img-box">
                                <Image
                                    src="https://assets.kinetixai.cn/kinetixai/research/detail-1/img-1.png"
                                    alt=""
                                    width={1440}
                                    height={515}
                                    priority
                                />
                            </div>
                            <div className="para">
                                {t.rich('para6Artical', {
                                    p: (chunks) => <p>{chunks}</p>
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
{`@article{pan2025ams,
    title={Agility Meets Stability: Versatile Humanoid Control with Heterogeneous Data},
    author={Pan, Yixuan and Qiao, Ruoyi and Chen, Li and Chitta, Kashyap and Pan, Liang and Mai, Haoguang and Bu, Qingwen and Zheng, Cunyuan and Zhao, Hao and Luo, Ping and Li, Hongyang},
    journal={arXiv preprint arXiv:2511.17373},
    year={2025}
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`copymask ${copied ? 'active' : ''}`}>
                <div className="tips">
                    <span>{t('copysuccess')}</span>
                </div>
            </div>
        </div>
    )
}
