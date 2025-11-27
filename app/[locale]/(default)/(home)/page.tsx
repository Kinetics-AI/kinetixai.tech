'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"


import { IndexSceneItemList } from '@/components/index/IndexSceneItemList';
import { IndexTechItemList } from '@/components/index/IndexTechItemList';
import { IndexSceneItemListMobile } from '@/components/index/IndexSceneItemListMobile'; 
import { IndexNewsItemList } from '@/components/index/IndexNewsItemList'; 




export default function Page(){
    
    const t = useTranslations('Home');
    const params = useParams();
    const locale = params.locale as string;


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
                            <source src="/kinetixai/index/banner.mp4" type="video/mp4" />
                        </video>
                    </div>
                ) : (
                    <div className="img-box">
                        <Image
                            src="/kinetixai/index/banner.jpg"
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
                        <div className="para-box">
                            <FadeInUp className="para" delay={0.1}>
                                {t.rich('indexCompanyPara', {
                                    p: (chunks) => <p>{chunks}</p>
                                })}
                            </FadeInUp>
                            <FadeInUp className="btns" delay={0.2}>
                                <Link href={`/${locale}/about`}>
                                    <span>{t("indexCompanyBtn")}</span>
                                </Link>
                            </FadeInUp>
                        </div>
                    </div>
                    <div className="img-box" ref={sectionRef}>
                        <Image
                            ref={boxRef} 
                            src="/kinetixai/index/img-1.png"
                            alt=""
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <IndexTechItemList />
            {isDesktop ? (
                <IndexSceneItemList />
                ) : (
                <IndexSceneItemListMobile />
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
