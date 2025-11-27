'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import { CompanyList } from '@/components/company/CompanyList'




export default function AboutPage(){
    
    const t = useTranslations('Company');
    const params = useParams();
    const locale = params.locale as string;

    
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);





    return (
        <div className="about-main">
            <div className="inner-s2">
                <div className="img-box">
                    <Image
                        src="/kinetixai/company/banner.jpg"
                        alt=""
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="txt-box">
                    <div className="wrap-s">
                        <FadeInUp className="tit">
                            {t('bannerTit')}
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="inner-s3">
                <div className="wrap-s">
                    <FadeInUp className='label'>
                        {t('introTit')}
                    </FadeInUp>
                    <div className="para-box">
                        <FadeInUp className="para" delay={0.1}>
                            {t.rich('introPara', {
                                p: (chunks) => <p>{chunks}</p>
                            })}
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="inner-s4">
                <div className="left-box">
                    <div className="video-box">
                        <video autoPlay muted loop playsInline>
                            <source src="/kinetixai/company/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="right-box">
                    <CompanyList />
                </div>
            </div>
        </div>
    )
}
