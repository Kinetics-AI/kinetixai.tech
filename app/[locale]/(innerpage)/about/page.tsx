'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import { CompanyList } from '@/components/company/CompanyList'




export default function AboutPage(){
    
    const t = useTranslations('Company');



    return (
        <div className="about-main">
            <div className="inner-s2">
                <div className="img-box">
                    <Image
                        src="https://assets.kinetixai.cn/kinetixai/company/banner-1.png"
                        alt=""
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="txt-box">
                    <div className="wrap-s">
                        <FadeInUp className="tit">
                            {t('bannerTit')}
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="inner-s3">
                <div className="wrap-s">
                    <div className="top-block">
                        <FadeInUp className='label'>
                            {t('introTit')}
                        </FadeInUp>
                        <div className="para-box">
                            <FadeInUp className="para" delay={0.1}>
                                {t.rich('introPara', {
                                    p: (chunks) => <p>{chunks}</p>
                                })}
                            </FadeInUp>
                        </div>
                    </div>
                    <div className="img-box">
                        <Image
                            src="https://assets.kinetixai.cn/kinetixai/index/img-1.png"
                            alt=""
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <CompanyList />
        </div>
    )
}
