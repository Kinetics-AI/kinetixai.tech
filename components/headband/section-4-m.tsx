'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { headbandSection4Data } from "@/data/headbandSection4";






export const HeadbandSection4Mobile = () => {
    const t = useTranslations('Headband');
    const params = useParams();

    // 获取当前语言的数据
    const getCurrentItems = () => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection4Data[locale] || headbandSection4Data.en;
    };

    const items = getCurrentItems();
    if (!items.length) return null;


    return (
        <div className="headband-s4">
            <div className="wrapper">
                <FadeInUp className="m-block" delay={0.1}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {items.map(({title, description, image, isTaskPerformance, successTitle, successRate}, idx) => (
                            <SwiperSlide
                                key={idx}
                                className='item'
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeInUp>
            </div>
        </div>
    );
};