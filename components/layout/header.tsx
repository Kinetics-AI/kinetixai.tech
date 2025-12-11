"use client"
import {useTranslations} from "next-intl";
import { useParams, usePathname  } from 'next/navigation';
import { useState, useEffect } from 'react';

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
                    <div className="menubtn">
                        <div className="btn"></div>
                        <div className="menu-box">
                            <div className="items">                        
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
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
