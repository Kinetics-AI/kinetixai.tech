"use client"
import {useTranslations} from "next-intl";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Link from "next/link"


import { LanguageDrawer } from "./international"


import { FadeIn } from "@/components/animation/fade-in"



export function Header() {



    const t = useTranslations("Layout");
    const params = useParams();
    const locale = params.locale as string;

    const links: {
        link: string;
        url: string;
    }[] = [
        { link: t("home"), url: "" },
        { link: t("about"), url: "/about" },
        { link: t("careers"), url: "/careers" },
    ];



    const [isOpen, setIsOpen] = useState(false);
  
    // 点击外部区域关闭菜单
    useEffect(() => {
    const handleClickOutside = (e) => {
        if (isOpen && e.target.classList.contains('fixed-menu')) {
            setIsOpen(false);
        }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);
  
    // 阻止背景滚动当菜单打开时
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'inherit';
        }        
        return () => {
            document.body.style.overflow = 'inherit';
        };
    }, [isOpen]);


    return (
        <header className="header">
            <FadeIn>
                <div className="innerblock">
                    <div></div>
                    <div className="ope">
                        <div className="global">
                            <div className="show"></div>
                            <div className="hide">
                                <LanguageDrawer/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div
                            className="menubtn"
                            onClick={() => setIsOpen(true)}
                        >
                        </div>
                    </div>
                </div>
            </FadeIn>
            <div className={`fixed-menu ${isOpen ? 'active' : ''}`}>
                <div className="slidebar">
                    <div
                        className="close"
                        onClick={() => setIsOpen(false)}
                    >
                    </div>
                    <div className="items">                        
                        {links.map(({link, url}, idx) => (
                            <Link href={`/${locale}${url}`} key={idx} onClick={() => setIsOpen(false)}>
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}
