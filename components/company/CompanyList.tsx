'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { companyListData, companyList } from "@/data/companyList";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"

export const CompanyList = () => {
    const params = useParams();

    // 获取当前语言的数据
    const companyListItems = (): companyList[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return companyListData[locale] || companyListData.en;
    };

    const items = companyListItems();
    if (!items.length) return null;

    return (
        <div className="items">
            {items.map(({ title, pic }, idx) => (
                <div
                    key={idx}
                    className="item"
                >
                    <div className="inner">
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};