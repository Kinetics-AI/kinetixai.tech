'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



import { headbandSection10Data, headbandSection10 } from "@/data/headbandSection10";







export const HeadbandSection10 = () => {
    const t = useTranslations('Headband');
    const params = useParams();

    // 判断是否是PC端
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 1025);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    
    // 获取当前语言的数据
    const headbandSection10Items = (): headbandSection10[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return headbandSection10Data[locale] || headbandSection10Data.en;
    };

    const items = headbandSection10Items();
    if (!items.length) return null;


    return (
        <div className="headband-s10" id="section10">
            <div className="wrapper">
                <FadeInUp className="label">
                    {t.rich('section10Label')}
                </FadeInUp>
                <FadeInUp className="slabel">
                    {t.rich('section10sLabel', {
                        p: (chunks) => <p>{chunks}</p>
                    })}
                </FadeInUp>
                {isDesktop ? (
                    <div className="items">
                        {items.map(({title, para, pic}, idx) => (
                            <FadeInUp key={idx} className='item' delay={0.1}>
                                <div className="img-box">
                                    <Image
                                        src={pic}
                                        alt={title}
                                        width={800}
                                        height={800}
                                    />
                                </div>
                                <div className="txt-box">
                                    <div className="inner">
                                        <div className="tit">
                                            <span>{title}</span>
                                        </div>
                                        <div className="para">{para}</div>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                ) : (
                    <FadeInUp className="items" delay={0.1}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >
                            {items.map(({title, para, pic}, idx) => (
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
                                        <div className="inner">
                                            <div className="tit">
                                                <span>{title}</span>
                                            </div>
                                            <div className="para">{para}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </FadeInUp>
                )}
            </div>
        </div>
    );
};