'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef } from 'react';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"


import { IndexTechItemList } from '@/components/index/IndexTechItemList';
import { IndexNewsItemList } from '@/components/index/IndexNewsItemList'; 
import { IndexTechItemListMobile } from '@/components/index/IndexTechItemListMobile'; 




export default function Page(){
    
    const t = useTranslations('Home');


    // banner
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    // company
    const boxRef = useRef(null);
    const sectionRef = useRef(null);
    useEffect(() => {
        if (!boxRef.current || !sectionRef.current) return;
        const loadGSAP = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: true,
                    markers: false,
                }
            });
            tl.to(boxRef.current, { y: '-50%', duration: 1 });

            return () => {
                tl.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        };

        loadGSAP();
    }, []);



    return (
        <div className="index-main">
            <div className="index-s1">
                {isDesktop ? (
                    <div className="video-box">
                        <video autoPlay muted loop playsInline>
                            <source src="https://assets.kinetixai.tech/kinetixai/index/banner.mp4" type="video/mp4" />
                        </video>
                    </div>
                ) : (
                    <div className="img-box">
                        <Image
                            src="https://assets.kinetixai.tech/kinetixai/index/banner.jpg"
                            alt=""
                            width={800}
                            height={800}
                            priority
                        />
                    </div>
                )}
                <div className="txt-box">
                    <div className="wrap-s">
                        <FadeInUp className="tit">
                            {t.rich('indexBannerTit', {
                                span: (chunks) => <span>{chunks}</span>,
                                p: (chunks) => <p>{chunks}</p>
                            })}
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="index-s2">
                <div className="wrap-s">
                    <div className="top-block">
                        <FadeInUp className='label'>
                            {t.rich('indexCompanyTit', {
                                span: (chunks) => <span>{chunks}</span>,
                            })}
                        </FadeInUp>
                        <FadeInUp className="para" delay={0.2}>
                            {t.rich('indexCompanyPara', {
                                p: (chunks) => <p>{chunks}</p>
                            })}
                        </FadeInUp>
                    </div>
                    <div className="img-box" ref={sectionRef}>
                        <Image
                            ref={boxRef} 
                            src="https://assets.kinetixai.tech/kinetixai/index/img-1.png"
                            alt=""
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            {isDesktop ? (
                <IndexTechItemList />
                ) : (
                <IndexTechItemListMobile />
            )}
            <div className="index-s4">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {t.rich('indexNewsTit', {
                            span: (chunks) => <span>{chunks}</span>,
                        })}
                    </FadeInUp>
                    <IndexNewsItemList />
                    <FadeInUp className="btns">
                        <Link href="" target='_blank'>
                            <span>{t("indexNewsBtn")}</span>
                        </Link>
                    </FadeInUp>
                </div>
            </div>

        </div>
    )
}
