'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { indexSceneData, indexScene } from "@/data/indexScene";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const IndexSceneItemListMobile = () => {
    const t = useTranslations('Home');
    const params = useParams();

    // 获取当前语言的数据
    const indexSceneItems = (): indexScene[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexSceneData[locale] || indexSceneData.en;
    };

    const items = indexSceneItems();
    if (!items.length) return null;




    return (
        <div className="m-index-s3">
            <div className="wrap-s">
                <FadeInUp className="label">
                    {t.rich('indexSceneTit', {
                        span: (chunks) => <span>{chunks}</span>,
                    })}
                </FadeInUp>
                <FadeInUp className="items" delay={0.1}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {items.map(({ title, pic }, idx) => (
                            <SwiperSlide
                                key={idx}
                                className='item'
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeInUp>
            </div>
        </div>
    );
};