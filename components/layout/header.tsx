"use client"
import {useTranslations} from "next-intl";
import { useParams, usePathname  } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

import Link from "next/link"
import Image from 'next/image'


import { LanguageDrawer } from "./international"


import { FadeIn } from "@/components/animation/fade-in"



export function Header() {



    const t = useTranslations("Layout");
    const params = useParams();
    const pathname = usePathname();
    const locale = params.locale as string;

    const links: {
        link: string;
        url: string;
        isExternal?: boolean;
    }[] = [
        { link: t("home"), url: "" },
        { link: t("product"), url: "/product" },
        { link: t("research"), url: "/research" },
        { link: t("about"), url: "/about" },
        { link: t("careers"), url: "https://careers.kinetixai.cn/careers", isExternal: true },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // 监听窗口大小变化
    useEffect(() => {
        // 初始化检测
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1025);
        };
        checkIsMobile();

        // 监听窗口大小变化
        window.addEventListener('resize', checkIsMobile);

        // 清理函数
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // 鼠标进入menubtn
    const handleMouseEnter = () => {
        if (isMobile) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(true);
    };

    // 鼠标离开menubtn
    const handleMouseLeave = () => {
        if (isMobile) return;
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 200);
    };

    // 点击菜单链接关闭菜单
    const handleLinkClick = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(false);
        setIsHovered(false);
    };

    // 点击菜单按钮切换展开/收起
    const handleMenuBtnClick = () => {
        if (!isMobile) return;
        setIsOpen(prev => !prev);
        setIsHovered(false);
    };

  



    return (
        <FadeIn className="header">
            <div className="innerblock">
                <Link href={`/${locale}`} className="logo">
                    <Image
                        src="https://assets.kinetixai.tech/kinetixai/logo-1.svg"
                        alt=""
                        width={160}
                        height={61}
                        priority
                    />
                </Link>
                <div className="ope">
                    <div className="global">
                        <div className="show"></div>
                        <div className="hide">
                            <LanguageDrawer/>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div                    
                        ref={menuRef}
                        className={`menubtn ${isOpen || isHovered ? 'active' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        
                    >
                        <div className="btn" onClick={handleMenuBtnClick}></div>
                        <div className="menu-box">
                            <div className="items">                        
                                {links.map(({link, url, isExternal}, idx) => (
                                    isExternal ? (
                                        <Link href={url} key={idx} target="_blank" onClick={handleLinkClick}>
                                            {link}
                                        </Link>
                                    ) : (
                                        <Link href={`/${locale}${url}`} key={idx} onClick={handleLinkClick}>
                                            {link}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
