'use client';

import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';




export const KaihandSection1 = () => {
    const t = useTranslations('KaiHand');
    const locale = useLocale();
    // 文档/合作按钮走站内相对路由(带当前语言前缀)
    const docsUrl = `/${locale}/docs/kaihand`;
    const cooperationUrl = `/${locale}/cooperation`;
    
    // 视频全屏播放
    const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);
    const handleVideoBtnClick = (e: React.MouseEvent<HTMLAnchorElement>, videoUrl?: string) => {
        e.preventDefault();
        if (videoUrl) {
            setFullscreenVideo(videoUrl);
        }
    };
    const closeFullscreenVideo = () => {
        setFullscreenVideo(null);
    };
    


    return (
        <div className="kaihand-s1">
            <div className="video-box">
                <video autoPlay muted loop playsInline preload="auto" poster="https://assets.kinetixai.cn/20260811/banner-bg.jpg">
                    <source src="https://assets.kinetixai.cn/20260811/banner-bg.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="txt-box">
                <div className="wrapper">
                    <FadeInUp className="left-box">
                        <div className="img-box">
                            <Image
                                src="/kaihand/img-1.png"
                                alt="KaiHand"
                                width={746}
                                height={428}
                            />
                        </div>
                        <div className="tips-box">
                            <div className="tips">
                                <span>21+16</span>
                                <p>{t.rich('section1Txt1')}</p>
                            </div>
                            <div className="line"></div>
                            <div className="tips">
                                <span>1:1</span>
                                <p>{t.rich('section1Txt2')}</p>
                            </div>
                        </div>
                    </FadeInUp>
                    <FadeInUp className="right-box" delay={0.1}>
                        <Link href={docsUrl} className="btn">
                            <span>{t.rich('section1Txt3')}</span>
                            <i className="icon-1"></i>
                        </Link>
                        <Link href={cooperationUrl} className="btn">
                            <span>{t.rich('section1Txt4')}</span>
                            <i className="icon-1"></i>
                        </Link>
                        <Link href="" className="btn video-btn" onClick={(e) => handleVideoBtnClick(e, "https://assets.kinetixai.cn/20260811/banner-tc.mp4")}>
                            <span>{t.rich('section1Txt5')}</span>
                            <i className="icon-2"></i>
                        </Link>
                    </FadeInUp>
                </div>
            </div>
            {fullscreenVideo && (
                <div className="video-fullscreen" onClick={closeFullscreenVideo}>
                    <div className="video-content" onClick={(e) => e.stopPropagation()}>
                        <video 
                            autoPlay 
                            controls 
                            playsInline
                            src={fullscreenVideo}
                        />
                        <button className="close-btn" onClick={closeFullscreenVideo}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};