'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

import type { OutlineItem } from '@/lib/doc-api';

export interface DocNavItem {
    title: string;
    href: string;
    active: boolean;
}

export interface DocPageLink {
    title: string;
    href: string;
}

interface DocumentClientProps {
    groupTitle: string;
    navItems: DocNavItem[];
    docTitle: string;
    updatedAt: string;
    downloadHref: string;
    html: string;
    outline: OutlineItem[];
    prev: DocPageLink | null;
    next: DocPageLink | null;
}

export default function DocumentClient({
    groupTitle,
    navItems,
    docTitle,
    updatedAt,
    downloadHref,
    html,
    outline,
    prev,
    next,
}: DocumentClientProps) {

    const t = useTranslations('Document');
    const t2 = useTranslations('Layout');

    // 大纲滚动高亮
    useEffect(() => {
        const handleScroll = () => {
            const headings = Array.from(document.querySelectorAll('.doc-heading[id]')) as HTMLElement[];
            const outlineLinks = document.querySelectorAll('.outline-list a, .outline-sublist a');

            let current = '';
            headings.forEach((h) => {
                if (h.getBoundingClientRect().top <= 122) {
                    current = h.getAttribute('id') || '';
                }
            });

            outlineLinks.forEach((link) => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', !!href && href === `#${current}`);
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 切换文档后回到顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [html]);

    return (
        <div className="document-main">
            <div className="main-block">
                <div className="left-block">
                    <div className="sticky">
                        <div className="top-box">
                            <span>{groupTitle}</span>
                            <p>{t('leftLabel')}</p>
                        </div>
                        <div className="nav-box">
                            {navItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className={item.active ? 'active' : ''}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="crumbs-box">
                        <span>{t2('document')}</span>
                        <span>{docTitle}</span>
                    </div>
                    <div className="main-box">
                        <div className="center-box">
                            <div className="top-box">
                                <h1 className="label">{docTitle}</h1>
                                <div className="info">
                                    {false && updatedAt && <div className="date">{t('dateLabel')}{updatedAt}</div>}
                                    {downloadHref && (
                                        <a href={downloadHref} download>
                                            <span>{t('downloadLabel')}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="edit-box">
                                <div className="doc-body doc-markdown" dangerouslySetInnerHTML={{ __html: html }} />
                            </div>
                            <div className="bot-box">
                                <div className="page">
                                    {prev && (
                                        <Link href={prev.href}>
                                            <i>{t('prevLabel')}</i>
                                            <span>{prev.title}</span>
                                        </Link>
                                    )}
                                </div>
                                <div className="page">
                                    {next && (
                                        <Link href={next.href}>
                                            <i>{t('nextLabel')}</i>
                                            <span>{next.title}</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        {outline.length > 0 && (
                            <div className="right-box">
                                <div className="sticky">
                                    <div className="label">{t('rightLabel')}</div>
                                    <div className="content">
                                        <ul className="outline-list">
                                            {outline.map((item) => (
                                                <li key={item.id}>
                                                    <a href={`#${item.id}`} className="outline-item">
                                                        <span>{item.title}</span>
                                                    </a>
                                                    {item.children && (
                                                        <ul className="outline-sublist">
                                                            {item.children.map((sub) => (
                                                                <li key={sub.id}>
                                                                    <a href={`#${sub.id}`} className="outline-subitem">
                                                                        <span>{sub.title}</span>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
