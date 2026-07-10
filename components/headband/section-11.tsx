'use client';

import Link from "next/link"
import { FadeInUp } from "@/components/animation/fade-in-up"
import {useTranslations} from 'next-intl';








export const HeadbandSection11 = () => {
    const t = useTranslations('Headband');
    


    return (
        <div className="headband-s11">
            <div className="wrapper">
                <FadeInUp className="label">
                    <div className="inner">
                        {t.rich('section11Label', {
                            p: (chunks) => <p>{chunks}</p>
                        })}
                    </div>
                </FadeInUp>
                <FadeInUp className="btns">
                    <Link
                        href="mailto:contact@kinetixai.tech"
                    >
                        <span>contact@kinetixai.tech</span>
                    </Link>
                    <Link
                        href="https://huggingface.co/datasets/Kinetix-AI/kai-data-minibatch"
                        target="_blank"
                    >
                        <span>huggingface</span>
                    </Link>
                </FadeInUp>
            </div>
        </div>
    );
};