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
import 'swiper/css';
import 'swiper/css/pagination';

export const IndexTechItemListMobile = () => {
    const t = useTranslations('Home');
    const params = useParams();

    // 获取当前语言的数据
    const indexTechItems = (): indexTech[] => {
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexTechData[locale] || indexTechData.en;
    };

    const items = indexTechItems();
    if (!items.length) return null;




    return (
        <div className="m-index-s3">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {t.rich('indexTechTit', {
                            span: (chunks) => <span>{chunks}</span>,
                        })}
                    </FadeInUp>
                    <FadeInUp className="items" delay={0.2}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >
                            {items.map(({ title, pic, stats }, idx) => (
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </FadeInUp>
                </div>
        </div>
    );
};