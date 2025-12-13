'use client';
import {useTranslations} from "next-intl";
import { useParams } from 'next/navigation';


import Link from "next/link";
import Image from 'next/image'
import ScrollToTopButton from '@/components/layout/footertotop';

import { EmailSubscribe } from "@/components/layout/mailing"



export function Footer() {



    const t = useTranslations("Layout");
    const params = useParams();
    const locale = params.locale as string;




    const links: {
        link: string;
        url: string;
        isExternal?: boolean;
    }[] = [
        { link: t("product"), url: "/product" },
        { link: t("research"), url: "/research" },
        { link: t("about"), url: "/about" },
        { link: t("careers"), url: "https://careers.kinetixai.cn/careers", isExternal: true },
    ];


    const media: {
        tit: string;
        url?: string;
        icon: string;
        img?: string;
        cn?: boolean;
    }[] = [
        { 
            tit: "X",
            url: "https://x.com/Kai_Robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-1.svg"
        },
        { 
            tit: "YouTube",
            url: "https://www.youtube.com/@Kai_Robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-2.svg"
        },
        {
            tit: "Linkedin",
            url: "https://www.linkedin.com/in/%E5%8A%A8%E5%8A%9B-%E8%B6%85%E7%BB%B4-a0260538a/",
            icon: "https://assets.kinetixai.cn/kinetixai/share-3.svg"
        },
        {
            tit: "Instagram",
            url: "https://www.instagram.com/kai_robotics/",
            icon: "https://assets.kinetixai.cn/kinetixai/share-4.svg"
        },
        {
            tit: "TikTok",
            url: "https://www.tiktok.com/@kai_robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-5.svg"
        },
        { 
            tit: "小红书",
            url: "https://x.com/Kai_Robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-1-cn.svg",
            cn: true
        },
        { 
            tit: "微博",
            url: "https://www.youtube.com/@Kai_Robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-2-cn.svg",
            cn: true
        },
        {
            tit: "抖音",
            url: "https://www.linkedin.com/in/%E5%8A%A8%E5%8A%9B-%E8%B6%85%E7%BB%B4-a0260538a/",
            icon: "https://assets.kinetixai.cn/kinetixai/share-3-cn.svg",
            cn: true
        },
        {
            tit: "bilibili",
            url: "https://www.instagram.com/kai_robotics/",
            icon: "https://assets.kinetixai.cn/kinetixai/share-4-cn.svg",
            cn: true
        },
        {
            tit: "知乎",
            url: "https://www.tiktok.com/@kai_robotics",
            icon: "https://assets.kinetixai.cn/kinetixai/share-5-cn.svg",
            cn: true
        },
        {
            tit: "微信公众号",
            icon: "https://assets.kinetixai.cn/kinetixai/share-6-cn.svg",
            img: "https://assets.kinetixai.cn/kinetixai/wechat-1.png",
            cn: true
        },
        {
            tit: "微信视频号",
            icon: "https://assets.kinetixai.cn/kinetixai/share-7-cn.svg",
            img: "https://assets.kinetixai.cn/kinetixai/wechat-2.png",
            cn: true
        },
    ];

    
    const filteredMedia = locale === 'zh' 
        ? media.filter(item => item.cn === true)
        : media.filter(item => !item.cn);




    return (

        <footer className="footer">
            <div className="wrap-s">
                <div className="top-block">
                    <div className="left-box">
                        <img 
                            src="https://assets.kinetixai.cn/kinetixai/logo-1.svg"
                            alt=""
                        />
                    </div>
                    <div className="right-box">
                        <div className="links">                      
                                {links.map(({link, url, isExternal}, idx) => (
                                    isExternal ? (
                                        <Link href={url} key={idx} target="_blank">
                                            {link}
                                        </Link>
                                    ) : (
                                        <Link href={`/${locale}${url}`} key={idx}>
                                            {link}
                                        </Link>
                                    )
                                ))}
                        </div>
                        {/* <div className="info">
                            <div className="txtbox">
                                <div className="tit">{t('footerRightTit')}</div>
                                <p>{t('footerRightP')}</p>
                            </div>
                            <EmailSubscribe/>
                        </div> */}
                    </div>
                </div>
                <div className="bot-block">
                    <div className="copyright">{t('footerCopyright')}</div>
                    <div className="share">
                        {filteredMedia.map(({tit, url, icon, img, cn}, idx) => (
                        
                            img ? (
                                <div className="icon" key={idx}>
                                    <div className="show">
                                        <img 
                                            src={icon} 
                                            alt={tit}
                                        />
                                    </div>
                                    <div className="ewm-box">
                                        <div className="img-box">
                                            <img 
                                                src={img}
                                                alt={tit}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : 
                            url ? (
                                <Link className="icon" href={url} target="_blank" key={idx} title={tit}>
                                    <div className="show">
                                        <img 
                                            src={icon} 
                                            alt={tit}
                                        />
                                    </div>
                                </Link>
                            ) : 
                            (
                                <div className="icon" key={idx} title={tit}>
                                    <div className="show">
                                        <img 
                                            src={icon} 
                                            alt={tit}
                                        />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
            <ScrollToTopButton />

        </footer>
    );
}
