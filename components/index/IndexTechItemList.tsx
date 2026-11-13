'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import { FadeInUp } from "@/components/animation/fade-in-up"

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import type { TechSlide } from '@/lib/content-api';

interface Props {
    /** 核心技术轮播数据(服务端从 CMS「首页核心技术」栏目拉取) */
    slides: TechSlide[];
}

export const IndexTechItemList = ({ slides }: Props) => {
    const t = useTranslations('Home');
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    if (!slides.length) return null;

    // Swiper变化
    const handleSlideChange = (swiper: SwiperClass) => {
        const realIndex = swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
        setActiveIndex(realIndex);
    };

    // 点击切换swiper
    const handleItemClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };




    return (
        <div className="index-s5">
            <div className="top-block">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {t.rich('indexTechTit', {
                            span: (chunks) => <span>{chunks}</span>,
                        })}
                    </FadeInUp>
                    <FadeInUp className="s-tit">
                        {t('indexTechSTit')}
                    </FadeInUp>
                </div>
            </div>
            <FadeInUp className="mid-block" delay={0.1}>
                <Swiper
                    modules={[Pagination]}
                    speed={500}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        const realIndex = swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
                        setActiveIndex(realIndex);
                    }}
                >
                    {slides.map(({ id, title, video, poster }) => (
                        <SwiperSlide
                            key={id}
                            className='item'
                        >
                            <div className="inner">
                                <div className="img-box">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster={poster || undefined}
                                    >
                                        <source src={video} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="txt-box">
                                    <div className="tit">{title}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FadeInUp>
            <FadeInUp className="bot-block" delay={0.1}>
                <div className="items">                    
                    {slides.map(({ id, title }, idx) => (
                        <div
                            key={id}
                            className={`item ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => handleItemClick(idx)}
                        >
                            <span>{title}</span>
                        </div>
                    ))}
                </div>
            </FadeInUp>
        </div>
    );
};
