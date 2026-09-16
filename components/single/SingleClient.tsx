'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import type { SingleTocItem } from '@/lib/single-api';

interface SingleClientProps {
    title: string;
    effectiveDate?: string;
    updateDate: string;
    html: string;
    toc: SingleTocItem[];
}

/** 单页面模块:暗色版式,左目录 + 右内容 */
export default function SingleClient({
    title,
    effectiveDate,
    updateDate,
    html,
    toc,
}: SingleClientProps) {

    const t = useTranslations('Single');

    // 目录滚动高亮
    useEffect(() => {
        const handleScroll = () => {
            const headings = Array.from(document.querySelectorAll('.single-body .single-heading[id]')) as HTMLElement[];
            const links = document.querySelectorAll('.single-toc a');

            let current = '';
            headings.forEach((h) => {
                if (h.getBoundingClientRect().top <= 140) {
                    current = h.getAttribute('id') || '';
                }
            });

            links.forEach((link) => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', !!href && href === `#${current}`);
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [html]);

    return (
        <div className="single-main">
            <div className="hero">
                <div className="wrapper">
                    <h1 className="tit">{title}</h1>
                    <p className="update">{t('lastUpdated')}: {updateDate}</p>
                </div>
            </div>
            <div className="layout">
                <aside className="side-block">
                    <div className="sticky">
                        <div className="label">{t('tocLabel')}</div>
                        <ul className="single-toc">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                <div className="content-block">
                    <h2 className="content-tit">{title}</h2>
                    {effectiveDate && <p className="effective">{t('effectiveLabel')}: {effectiveDate}</p>}
                    <div className="single-body" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </div>
    );
}
