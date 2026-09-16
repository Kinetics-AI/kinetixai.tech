'use client';

import Link from "next/link"
import { FadeInUp } from "@/components/animation/fade-in-up"
import {useLocale, useTranslations} from 'next-intl';
import { useDocPublished } from '@/hooks/use-doc-published';








export const HeadbandSection11 = () => {
    const t = useTranslations('Headband');
    const locale = useLocale();
    // 文档按钮跳当前语言的 KaiEgo 文档页(与首屏按钮一致)
    const docsUrl = `/${locale}/docs/kaiego`;
    // KaiEgo 文档树在后台改为草稿时,隐藏本页文档入口(状态查询异常时保持显示)
    const docPublished = useDocPublished(`${locale}-kaiego`);
    


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
                    {docPublished && (
                        <Link
                            href={docsUrl}
                        >
                            <span>{t('section1BtnTxt')}</span>
                        </Link>
                    )}
                </FadeInUp>
            </div>
        </div>
    );
};