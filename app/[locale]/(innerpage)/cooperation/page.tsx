'use client';

import {useTranslations} from 'next-intl';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"







export default function KaiHandContactPage(){
    
    const t = useTranslations('KaiHand');





    return (
        <div className="kaihand-s6">
            <div className="top-block">
                <div className="wrapper">
                    <FadeInUp className="label">
                        {t('contactTxt1')}
                    </FadeInUp>
                    <FadeInUp className="tips" delay={0.1}>
                        {t('contactTxt2')}
                    </FadeInUp>
                </div>
            </div>
            <div className="bot-block">
                <div className="wrapper">
                    <FadeInUp className="label" delay={0.2}>
                        {t('contactTxt3')}
                    </FadeInUp>
                    <div className="items">
                        <FadeInUp className="item" delay={0.3}>
                            <div className="icon">
                                <Image
                                    src="/kaihand/icon-6-1.svg"
                                    alt="KaiHand"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className="title">
                                {t('contactTxt4')}
                            </div>
                            <div className='para'>contact@kinetixai.tech</div>
                        </FadeInUp>
                        <FadeInUp className="item" delay={0.3}>
                            <div className="icon">
                                <Image
                                    src="/kaihand/icon-6-2.svg"
                                    alt="KaiHand"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className="title">
                                {t('contactTxt5')}
                            </div>
                            <div className='para'>contact@kinetixai.tech</div>
                        </FadeInUp>
                        <FadeInUp className="item" delay={0.3}>
                            <div className="icon">
                                <Image
                                    src="/kaihand/icon-6-3.svg"
                                    alt="KaiHand"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className="title">
                                {t('contactTxt6')}
                            </div>
                            <div className='para addr'>
                                {t.rich('contactTxt7', {
                                    p: (chunks) => <p>{chunks}</p>
                                })}
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
        </div>
    )
}
