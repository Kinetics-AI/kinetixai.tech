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
        { link: t("product"), url: "/kaibot" },
        // { link: t("research"), url: "/research" },
        { link: t("about"), url: "/about" },
        { link: t("careers"), url: "https://careers.kinetixai.cn/careers", isExternal: true },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isGlobalActive, setIsGlobalActive] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const globalRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

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



    // 点击菜单链接关闭菜单
    const handleLinkClick = () => {
        setIsOpen(false);
        setIsGlobalActive(false);
    };

    // 点击菜单按钮切换展开/收起
    const handleMenuBtnClick = () => {
        if (!isMobile) return;
        setIsOpen(prev => !prev);
        setIsGlobalActive(false);
    };

    // 点击global切换active状态
    const handleGlobalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsGlobalActive(prev => !prev);
        setIsOpen(false);
    };

    // 点击页面其他地方关闭active状态
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // 检查是否点击在header外部
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setIsGlobalActive(false);
            } else {
                const target = e.target as Node;
                const isClickOnMenu = menuRef.current && menuRef.current.contains(target);
                const isClickOnGlobal = globalRef.current && globalRef.current.contains(target);
                
                if (!isClickOnMenu) {
                    setIsOpen(false);
                }
                if (!isClickOnGlobal) {
                    setIsGlobalActive(false);
                }
            }
        };

        // 监听全局点击事件
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  



    return (
        <div ref={headerRef} className={`header ${!isMobile && isScrolled ? 'down' : ''}`}>
            <FadeIn className="innerblock">
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
                            className={`menubtn ${isOpen ? 'active' : ''}`}
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
                        <div
                            ref={globalRef}
                            className={`global ${isGlobalActive ? 'active' : ''}`} 
                            onClick={handleGlobalClick}
                        >
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
                        <div className="global">
                            <div className="show"></div>
                            <div className="hide">
                                <LanguageDrawer/>
                            </div>
                        </div>
                    </div>
                )}
            </FadeIn>
        </div>
    )
}
