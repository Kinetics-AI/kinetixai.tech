'use client';

import { useState, useEffect } from 'react';


import { HeadbandSection1 } from "@/components/headband/section-1"
import { HeadbandSection2 } from "@/components/headband/section-2"
import { HeadbandSection4 } from "@/components/headband/section-4"
import { HeadbandSection4Mobile } from "@/components/headband/section-4-m"
import { HeadbandSection5 } from "@/components/headband/section-5"
import { HeadbandSection6 } from "@/components/headband/section-6"
import { HeadbandSection6Mobile } from "@/components/headband/section-6-m"
import { HeadbandSection7 } from "@/components/headband/section-7"
import { HeadbandSection8 } from "@/components/headband/section-8"
import { HeadbandSection9 } from "@/components/headband/section-9"
import { HeadbandSection9Mobile } from "@/components/headband/section-9-m"
import { HeadbandSection10 } from "@/components/headband/section-10"
import { HeadbandSection11 } from "@/components/headband/section-11"






export default function HeadbandPage(){

    // 判断是否是PC端
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 1025);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    


    return (
        <div className="headband-main">
            <HeadbandSection1 />
            <HeadbandSection2 />
            {isDesktop ? (
            <HeadbandSection4 />
            ) : (
            <HeadbandSection4Mobile />
            )}
            <HeadbandSection5 />
            {isDesktop ? (
            <HeadbandSection6 />
            ) : (
            <HeadbandSection6Mobile />
            )}
            <HeadbandSection7 />
            <HeadbandSection8 />
            {isDesktop ? (
            <HeadbandSection9 />
            ) : (
            <HeadbandSection9Mobile />
            )}
            <HeadbandSection10 />
            <HeadbandSection11 />
        </div>
    )
}

