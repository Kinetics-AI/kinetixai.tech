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
        { link: t("about"), url: "/about" },
        { link: t("product"), url: "/product" },
        { link: t("research"), url: "/research" },
        { link: t("careers"), url: "https://careers.kinetixai.cn/careers", isExternal: true },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // 处理鼠标进入menubtn
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsHovered(true);
    };

    // 处理鼠标离开menubtn
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 200); // 200ms延迟，避免鼠标移动到菜单时意外关闭
    };

    // 点击菜单按钮
    const handleMenuButtonClick = () => {
        setIsOpen(!isOpen);
        setIsHovered(false); // 点击时关闭hover状态
    };

    // 点击菜单项
    const handleMenuItemClick = () => {
        setIsOpen(false);
        setIsHovered(false);
    };

    // 清理定时器
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
  



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
                        onClick={handleMenuButtonClick}
                    >
                        <div className="btn"></div>
                        <div className="menu-box">
                            <div className="items">                        
                                {links.map(({link, url, isExternal}, idx) => (
                                    isExternal ? (
                                        <Link href={url} key={idx} target="_blank">
                                            {link}
                                        </Link>
                                    ) : (
                                        <Link href={`/${locale}${url}`} key={idx} onClick={handleMenuItemClick}>
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
