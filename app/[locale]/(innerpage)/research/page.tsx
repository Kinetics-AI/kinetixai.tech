'use client';

import {useTranslations} from 'next-intl';

import Link from "next/link"
import Image from 'next/image'
import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

import { ResearchList } from '@/components/research/ResearchList'; 





export default function ResearchPage(){
    
    const t = useTranslations('Research');



    return (
        <div className="research-main">
            <div className="inner-s6">
                <div className="wrap-s">
                    <FadeInUp className="label">
                        {t('label')}
                    </FadeInUp>
                    <FadeInUp className="para" delay={0.1}>
                        {t.rich('para', {
                            p: (chunks) => <p>{chunks}</p>
                        })}
                    </FadeInUp>
                    <ResearchList />
                </div>
            </div>
        </div>
    )
}
