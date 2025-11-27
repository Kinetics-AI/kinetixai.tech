'use client';
import {useTranslations} from "next-intl";
import { useParams } from 'next/navigation';


import Link from "next/link";
import Image from 'next/image'
import ScrollToTopButton from '@/components/layout/footertotop';


const media: {
    tit: string;
    url: string;
}[] = [
    { tit: "Github", url: "https://github.com/" },
    { tit: "Twitter", url: "https://twitter.com/" },
    { tit: "Linkedin", url: "https://www.linkedin.com/" },
    { tit: "Youtube", url: "https://www.youtube.com/" },
];

import { EmailSubscribe } from "@/components/layout/mailing"



export function Footer() {



    const t = useTranslations("Layout");
    const params = useParams();
    const locale = params.locale as string;



    const links: {
        link: string;
        url: string;
    }[] = [
        { link: t("about"), url: "/about" },
        { link: t("careers"), url: "/careers" },
    ];



    return (

        <footer className="footer">
            <div className="wrap-s">
                <div className="top-block">
                    <div className="left-box">
                        <img 
                            src="/kinetixai/logo-white.png" 
                            alt=""
                        />
                    </div>
                    <div className="right-box">
                        <div className="links">
                            {links.map(({link, url}, idx) => (
                                <Link href={`/${locale}${url}`} key={idx}>
                                    {link}
                                </Link>
                            ))}
                        </div>
                        <div className="info">
                            <div className="txtbox">
                                <div className="tit">{t('footerRightTit')}</div>
                                <p>{t('footerRightP')}</p>
                            </div>
                            <EmailSubscribe/>
                        </div>
                    </div>
                </div>
                <div className="bot-block">
                    <div className="copyright">{t('footerCopyright')}</div>
                    <div className="share">
                    {media.map(({tit, url}, idx) => (
                        <Link href={url} target="_blank" key={idx} title={tit}>
                            <img 
                                src={`/kinetixai/share-${idx + 1}.svg`} 
                                alt=""
                            />
                        </Link>
                    ))}
                    </div>
                </div>
            </div>
            <ScrollToTopButton />

        </footer>
    );
}
