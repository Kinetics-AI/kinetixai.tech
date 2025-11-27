'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { indexTechData, indexTech } from "@/data/indexTech";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const IndexTechItemList = () => {
    const t = useTranslations('Home');
    const params = useParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    // 获取当前语言的数据
    const indexTechItems = (): indexTech[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexTechData[locale] || indexTechData.en;
    };

    const items = indexTechItems();
    if (!items.length) return null;

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
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {items.map(({ title, pic }, idx) => (
                        <SwiperSlide
                            key={idx}
                            className='item'
                        >
                            <div className="inner">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FadeInUp>
            <FadeInUp className="bot-block" delay={0.1}>
                <div className="items">                    
                    {items.map(({ title }, idx) => (
                        <div
                            key={idx}
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