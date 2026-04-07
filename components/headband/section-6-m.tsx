'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import Image from 'next/image';

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { headbandSection6Data, headbandSection6 } from "@/data/headbandSection6";






export const HeadbandSection6Mobile = () => {
    const t = useTranslations('Headband');
    const params = useParams();


    // 获取当前语言的数据
    const headbandSection6Items = (): headbandSection6[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection6Data[locale] || headbandSection6Data.en;
    };

    const items = headbandSection6Items();
    if (!items.length) return null;


    return (
        <div className="headband-s6">
            <div className="wrapper">
                <div className="top-block">
                    <FadeInUp className="label">
                        {t.rich('section6Label', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                    <FadeInUp className="slabel" delay={0.1}>
                        {t.rich('section6sLabel', { p: (chunks) => <p>{chunks}</p> })}
                    </FadeInUp>
                </div>
                <FadeInUp className="m-block" delay={0.1}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {items.map(({ title, pic, para }, idx) => (
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
                                    <div className="para">{para}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeInUp>
            </div>
        </div>
    );
};