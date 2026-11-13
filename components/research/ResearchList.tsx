'use client';

import Link from "next/link"
import Image from 'next/image'
import { useLocale } from 'next-intl';

import type { ResearchItem } from '@/lib/content-api';
import { FadeInUp } from "@/components/animation/fade-in-up"

interface Props {
    /** 研究列表数据(服务端从 CMS「研究」栏目拉取) */
    items: ResearchItem[];
}

export const ResearchList = ({ items }: Props) => {
    const locale = useLocale();

    if (!items.length) return null;

    return (
        <div className="items">
            {items.map(({ id, tips, title, date, pic, url }) => (
                <FadeInUp key={id} className='item' delay={0.1}>
                    <Link
                    href={url.startsWith('https') ? url : `/${locale}/${url}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    className='inner'>
                    <div className="tips">{tips}</div>
                        <div className="img-box">
                            <Image
                                src={pic}
                                alt={title}
                                width={800}
                                height={800}
                            />
                        </div>
                        <div className="txt-box">
                            <div className="tit">{title}</div>
                            <div className="date">{date}</div>
                        </div>
                    </Link>
                </FadeInUp>
            ))}
        </div>
    );
};
