'use client';

import Link from "next/link"
import Image from 'next/image'
import { useParams, usePathname  } from 'next/navigation';
import { researchListData, researchList } from "@/data/researchList";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

export const ResearchList = () => {
    const params = useParams();
    const pathname = usePathname();
    const locale = params.locale as string;

    // 获取当前语言的数据
    const researchListItems = (): researchList[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return researchListData[locale] || researchListData.en;
    };

    const items = researchListItems();
    if (!items.length) return null;

    return (
        <div className="items">
            {items.map(({ tips, title, date, pic, url }, idx) => (
                <FadeInUp key={idx} className='item' delay={0.1}>
                    <Link href={`/${locale}/${url}`} target='_blank' rel="noopener noreferrer" className='inner'>
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