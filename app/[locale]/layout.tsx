import * as React from "react"
import type { Metadata } from "next";
import {notFound} from 'next/navigation';

import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

import "../globals.scss";
// font
import { Inter } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

// Google Analystics
import { GoogleAnalytics } from '@next/third-parties/google'



export const metadata: Metadata = {
    title: {
        default: "Kinetix AI",
        template: "%s | Kinetix AI"
    },
    // description: "xxx",
    keywords: ["Kinetix AI", "Robotics", "Embodied AI"],
    icons: {
        icon: [
            {
                url: "/favicon.ico",
            },
        ],
    },
    // viewport: "width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover,minimum-scale=1,maximum-scale=1,user-scalable=no"
};



export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: 'en' | 'zh' }>
}>) {

    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang={locale} className={inter.className}>
            
            <head>
                <meta 
                    name="viewport" 
                    content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover,minimum-scale=1,maximum-scale=1,user-scalable=no" 
                />
            </head>

            <body>       
                <NextIntlClientProvider>

                    <Header/>

                    <main className="mainpage">

                        {children}

                    </main>

                    <Footer/>
                    
                </NextIntlClientProvider>
            </body>

            <GoogleAnalytics gaId="G-PEGEFQHXRE" />

        </html>
    );
}
