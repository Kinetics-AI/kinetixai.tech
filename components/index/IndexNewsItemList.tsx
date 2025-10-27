'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { indexNewsData, indexNews } from "@/data/indexNews";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

export const IndexNewsItemList = () => {
    const params = useParams();

    // 获取当前语言的数据
    const indexNewsItems = (): indexNews[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return indexNewsData[locale] || indexNewsData.en;
    };

    const items = indexNewsItems();
    if (!items.length) return null;

    return (
        <FadeInUp className="items">
            {items.map(({ title, date, url }, idx) => (
                <FadeInUp key={idx} className='item'>
                    <Link href={url} target='_blank' rel="noopener noreferrer" className='inner'>
                        <div className="tit">{title}</div>
                        <div className="date">{date}</div>
                        <div className="more"></div>
                    </Link>
                </FadeInUp>
            ))}
        </FadeInUp>
    );
};