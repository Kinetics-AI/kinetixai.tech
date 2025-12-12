'use client';

import {useTranslations} from 'next-intl';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { companyListData, companyList } from "@/data/companyList";

import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"
import Image from 'next/image';
import Link from 'next/link';

export const CompanyList = () => {
    const t = useTranslations('Company');
    const params = useParams();
    
    // 元素
    const lineRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);


    // 获取当前语言的数据
    const companyListItems = (): companyList[] => {  
        const locale = typeof params.locale === 'string' ? params.locale : 'en';
        return companyListData[locale] || companyListData.en;
    };

    const items = companyListItems();
    if (!items.length) return null;


    

    // 注册item的ref
    const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
        itemsRef.current[index] = el;
    }, []);

    // 处理滚动事件
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // 处理line元素的进度
        if (lineRef.current) {
            const lineRect = lineRef.current.getBoundingClientRect();
            const lineTop = lineRect.top + scrollY;
            const newHeight = scrollY - lineTop + windowHeight / 2;
            lineRef.current.style.height = `${Math.max(0, newHeight)}px`;
        }

        // 处理item的active状态
        itemsRef.current.forEach((item, index) => {
            if (item) {
                const itemRect = item.getBoundingClientRect();
                const itemTop = itemRect.top;
                
                // 当item元素超过屏幕一半时设置为active
                if (itemTop < windowHeight / 2) {
                    setActiveItemIndex(index);
                } else if (activeItemIndex === index && itemTop > windowHeight / 2) {
                    // 如果当前active的item滚回屏幕上方，取消active
                    setActiveItemIndex(-1);
                }
            }
        });
    }, [activeItemIndex]);

    // 监听滚动事件
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // 初始执行一次
        handleScroll();        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);




    return (
        <div className="inner-s4">
            <div className="wrap-s">
                <FadeInUp className='label'>
                    {t('teamTit')}
                </FadeInUp>
                <div className="cont-block">
                    <FadeInUp className="line">
                        <span>Before</span>
                        <i ref={lineRef}></i>
                    </FadeInUp>
                    <div className="items">
                        {items.map(({year, title, pic }, idx) => (
                            <div
                                key={idx}
                                ref={(el) => setItemRef(el, idx)}
                                className={`item ${activeItemIndex === idx ? 'active' : ''}`}
                            >
                                <FadeInUp className="inner">
                                    <div className="txt-box">
                                        <div className="dot"><i></i></div>
                                        <div className="year" dangerouslySetInnerHTML={{ __html: year }}></div>
                                        <div className="tit" dangerouslySetInnerHTML={{ __html: title }}></div>
                                    </div>
                                    <div className="img-box">
                                        <Image
                                            src={pic}
                                            alt={title}
                                            width={800}
                                            height={800}
                                        />
                                    </div>
                                </FadeInUp>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};