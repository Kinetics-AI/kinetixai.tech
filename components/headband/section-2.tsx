'use client';

import Link from "next/link"
import { useState, useRef } from 'react';
import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';








export const HeadbandSection2 = () => {
    const t = useTranslations('Headband');


    const videoRef = useRef < HTMLVideoElement > (null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

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
        <div className="headband-s2">
            <div className="wrapper">
                <div className="left-box">
                    <FadeInUp className="label">
                        {t.rich('section2Label')}
                    </FadeInUp>
                </div>
                <div className="center-box">                    
                    <FadeInUp className="para" delay={0.1}>
                        {t.rich('section2Para')}
                    </FadeInUp>
                    <FadeInUp className="btns">
                        <Link
                            href="#section10"
                        >
                            <span>{t.rich('section2BtnTxt')}</span>
                        </Link>
                    </FadeInUp>
                </div>
                <FadeInUp className="right-box" delay={0.2}>
                    <div className="video-box">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://assets.kinetixai.cn/kinetixai/index/banner-20251212.jpg"
                            ref={videoRef}
                            onTimeUpdate={handleTimeUpdate}
                        >
                            <source src="https://assets.kinetixai.cn/AMS/251212_raw.mp4" type="video/mp4" />
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
                </FadeInUp>
            </div>
        </div>
    );
};