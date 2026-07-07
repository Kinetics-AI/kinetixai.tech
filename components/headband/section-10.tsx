'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';

import { headbandSection10Data, headbandSection10 } from "@/data/headbandSection10";





interface VideoItemProps {
    title: string;
    para: string;
    pic: string;
    video: string;
    t: any;
}

const VideoItem = ({ title, para, pic, video, t }: VideoItemProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const isActive = true;

    // 播放/暂停切换
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // 更新播放进度
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    // 全屏播放
    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <FadeInUp className={`item ${isActive ? 'active' : ''}`} delay={0.1}>
            <div className="txt-box">
                <div className="tit">
                    <span>{title}</span>
                </div>
                <div className="para">{para}</div>
            </div>
            <div className="bot-box">
                <div className="video-box">
                    <video
                        autoPlay={isActive}
                        muted
                        loop
                        playsInline
                        poster={pic}
                        ref={videoRef}
                        onTimeUpdate={handleTimeUpdate}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="btns-box">
                    <svg className="line" viewBox="0 0 36 36">
                        <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray={`${2 * Math.PI * 16}`}
                            strokeDashoffset={`${2 * Math.PI * 16 * (1 - progress / 100)}`}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div
                        className="btn"
                        onClick={togglePlay}
                    >
                        {isPlaying ? (
                            <svg className="" fill="currentColor" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            <svg className="" fill="currentColor" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </div>
                </div>
                <div
                    className="full-box"
                    onClick={handleFullscreen}
                >
                    <span>
                        {t.rich('section2VideoBtn')}
                    </span>
                </div>
            </div>
        </FadeInUp>
    );
};






export const HeadbandSection10 = () => {
    const t = useTranslations('Headband');
    const params = useParams();

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
                <div className="items">
                    {items.map(({ title, para, pic, video }, idx) => (
                        <VideoItem
                            key={idx}
                            title={title}
                            para={para}
                            pic={pic}
                            video={video}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};