"use client"
import {useTranslations} from "next-intl";
import { useParams, usePathname  } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';

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
    const [isScrolled, setIsScrolled] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // 判断是否为当前路径
    const isCurrentPath = useCallback(
        (url: string): boolean => {
            if (url === "") {
                // 首页匹配
                return pathname === `/${locale}` || pathname === `/${locale}/`;
            }
            if (url.startsWith("http")) {
                return false;
            }
            const targetPath = `/${locale}${url}`;
            return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
        },
        [locale, pathname]
    );

    // 监听窗口大小变化
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 1025);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    

    // 监听页面滚动
    useEffect(() => {
        const handleScroll = () => {
            if (!isMobile) {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                setIsScrolled(scrollTop > 20);
            }
        };
        window.addEventListener('scroll', handleScroll);        
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);


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
        <FadeIn className={`header ${!isMobile && isScrolled ? 'down' : ''}`}>
            <div className="innerblock">
                <Link href={`/${locale}`} className="logo">
                    <Image
                        src="https://assets.kinetixai.cn/kinetixai/logo-1.svg"
                        alt=""
                        width={160}
                        height={61}
                        priority
                    />
                </Link>
                {isMobile ? (
                    <div className="ope">
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
                        <div className="line"></div>
                        <div className="global" onClick={handleLinkClick}>
                            <div className="show"></div>
                            <div className="hide">
                                <LanguageDrawer/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="right-block">
                        <ul>
                            {links.map(({link, url, isExternal}, idx) => {
                                const isActive = isCurrentPath(url);
                                return isExternal ? (
                                    <li key={idx} className={isActive ? 'active' : ''}>
                                        <Link href={url} target="_blank">
                                            {link}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={idx} className={isActive ? 'active' : ''}>
                                        <Link href={`/${locale}${url}`}>
                                            {link}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="global" onClick={handleLinkClick}>
                            <div className="show"></div>
                            <div className="hide">
                                <LanguageDrawer/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </FadeIn>
    )
}
