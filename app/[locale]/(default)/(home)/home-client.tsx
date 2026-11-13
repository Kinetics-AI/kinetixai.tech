'use client';

import {useTranslations} from 'next-intl';
import { Fragment, useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import { IndexBanner } from '@/components/index/IndexBanner';
import { IndexSceneItemList } from '@/components/index/IndexSceneItemList';
import { IndexTechItemList } from '@/components/index/IndexTechItemList';
import { IndexSceneItemListMobile } from '@/components/index/IndexSceneItemListMobile'; 
import { IndexNewsItemList } from '@/components/index/IndexNewsItemList'; 

import type { BannerSlide, CompanyIntro, TechSlide } from '@/lib/content-api';
import { resolveChannelHref } from '@/lib/content-api';

/**
 * 把后台填写的高亮标题拆成 React 节点
 * 后台约定 <span> 内为高亮色文字(与 i18n 文案的 indexCompanyTit 一致),
 * 其余按纯文本渲染;不能整段用 dangerouslySetInnerHTML,
 * 否则外层 span 会被 .label span 的蓝色规则命中,导致整句变色
 */
function renderHighlightTitle(html: string) {
    return html
        .split(/(<span>[\s\S]*?<\/span>)/g)
        .filter((part) => part !== '')
        .map((part, index) => {
            const matched = part.match(/^<span>([\s\S]*?)<\/span>$/);
            return matched
                ? <span key={index}>{matched[1]}</span>
                : <Fragment key={index}>{part}</Fragment>;
        });
}

interface Props {
    /** 首屏 banner 数据(服务端从 CMS 拉取后下发) */
    bannerSlides: BannerSlide[];
    /** 核心技术轮播数据(服务端从 CMS 拉取后下发) */
    techSlides: TechSlide[];
    /** 公司简介区块配置(服务端从 CMS 栏目配置拉取后下发,空值回退 i18n) */
    companyIntro: CompanyIntro;
}

export default function HomeClient({ bannerSlides, techSlides, companyIntro }: Props){
    
    const t = useTranslations('Home');
    const params = useParams();
    const locale = params.locale as string;


    // banner
    const [isDesktop, setIsDesktop] = useState(false);

    // 设置截止时间：4月25日 19:00
    const targetDate = new Date('2026-04-25T19:00:00').getTime();

    // 倒计时状态
    const [countdown, setCountdown] = useState('');
    const [showCountdown, setShowCountdown] = useState(true);
    
    // 倒计时逻辑
    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                // 倒计时结束
                setShowCountdown(false);
                return;
            }
            
            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        };
        
        // 立即更新一次
        updateCountdown();
        
        // 每秒更新一次
        const timer = setInterval(updateCountdown, 1000);
        
        return () => clearInterval(timer);
    }, [targetDate]);

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
                <IndexBanner
                    slides={bannerSlides}
                    countdown={countdown}
                    showCountdown={showCountdown}
                />
            </div>
            <div className="index-s2">
                <div className="wrap-s">
                    <div className="top-block">
                        <FadeInUp className='label'>
                            {companyIntro.title
                                ? renderHighlightTitle(companyIntro.title)
                                : t.rich('indexCompanyTit', {
                                    span: (chunks) => <span>{chunks}</span>,
                                })}
                        </FadeInUp>
                        <div className="para-box">
                            <FadeInUp className="para" delay={0.1}>
                                {companyIntro.description ? (
                                    <span dangerouslySetInnerHTML={{ __html: companyIntro.description }} />
                                ) : (
                                    t.rich('indexCompanyPara', {
                                        p: (chunks) => <p>{chunks}</p>
                                    })
                                )}
                            </FadeInUp>
                            <FadeInUp className="btns" delay={0.2}>
                                <Link href={resolveChannelHref(companyIntro.buttonUrl, locale, `/${locale}/about`)}>
                                    <span>{companyIntro.buttonText || t("indexCompanyBtn")}</span>
                                </Link>
                            </FadeInUp>
                        </div>
                    </div>
                    <div className="img-box" ref={sectionRef}>
                        <Image
                            ref={boxRef} 
                            src="https://assets.kinetixai.cn/kinetixai/index/img-1.png"
                            alt=""
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <IndexTechItemList slides={techSlides} />
            {isDesktop ? (
                <IndexSceneItemList />
                ) : (
                <IndexSceneItemListMobile />
            )}
            {/* <div className="index-s4">
                <div className="wrap-s">
                    <FadeInUp className='label'>
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
            </div> */}

        </div>
    )
}
