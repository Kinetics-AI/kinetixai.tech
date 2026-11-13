'use client';

import Image from 'next/image';

import {Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FadeInUp } from '@/components/animation/fade-in-up';
import type { BannerSlide } from '@/lib/content-api';

interface Props {
    /** 首屏数据,来自 CMS「首页banner管理」栏目(见 lib/content-api.ts) */
    slides: BannerSlide[];
    /** 倒计时文案,空串不渲染 */
    countdown?: string;
    /** 是否显示倒计时(仅第一屏) */
    showCountdown?: boolean;
}

/**
 * 首页首屏 banner
 * 视频、封面、文案全部由后台内容驱动,后台新增/停用/排序后自动生效;
 * 首屏没有文案时(如纯视频轮播屏)不渲染 txt-box,保持画面干净
 */
export const IndexBanner = ({ slides, countdown = '', showCountdown = false }: Props) => {
    // 后台把 banner 全部下线后接口会返回空列表，此处不渲染空轮播容器
    if (!slides.length) return null;

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            speed={800}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, index) => {
                const showCountdownSlot = index === 0 && showCountdown && !!countdown;

                return (
                    <SwiperSlide key={slide.id} className='item'>
                        <div className="video-box">
                            {slide.video ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={slide.poster || undefined}
                                >
                                    <source src={slide.video} type="video/mp4" />
                                </video>
                            ) : (
                                <Image src={slide.poster} alt="" fill priority style={{ objectFit: 'cover' }} />
                            )}
                        </div>
                        {(slide.title || showCountdownSlot) && (
                            <div className="txt-box">
                                <div className="wrap-s">
                                    {slide.title && (
                                        <FadeInUp className="tit" dangerouslySetInnerHTML={{ __html: slide.title }} />
                                    )}
                                    {showCountdownSlot && (
                                        <FadeInUp className="countdown" delay={0.1}>
                                            {countdown}
                                        </FadeInUp>
                                    )}
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
