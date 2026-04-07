'use client';

import { FadeInUp } from "@/components/animation/fade-in-up";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useMemo, useState, useEffect, useRef } from 'react';

import daily_data from '@/data/daily_data.json';
import sum_data from '@/data/sum_data.json';








export const HeadbandSection8 = () => {
    const t = useTranslations('Headband');

    const [ITEM_WIDTH, setItemWidth] = useState(18);
    const [CHART_HEIGHT, setChartHeight] = useState(600);

    // 计算总宽度：数据条数 * 每一项宽度
    const totalWidth = daily_data.length * ITEM_WIDTH;

    // 最终高度 = 屏幕高度 + 所有柱子总宽度
    const [containerHeight, setContainerHeight] = useState(0);
    // 横向滚动距离
    const [scrollX, setScrollX] = useState(0);

    const topBlockRef = useRef < HTMLDivElement > (null);
    const sectionRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        const update = () => {
            const winHeight = window.innerHeight;
            const winWidth = window.innerWidth;
            setItemWidth(window.innerWidth / 79);

            setContainerHeight(winHeight + totalWidth - winWidth);

            if (topBlockRef.current) {
                setChartHeight(topBlockRef.current.clientHeight);
            }
        };

        // 滚动监听：控制横向平移
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const winWidth = window.innerWidth;

            // 可滚动的总距离 = 总宽度 - 屏幕宽度
            const scrollableDistance = totalWidth - winWidth;
            const maxScrollX = Math.max(0, scrollableDistance);

            const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));

            const translateX = progress * maxScrollX;
            setScrollX(translateX);
        };

        update();
        window.addEventListener('resize', update);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', update);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [totalWidth]);



    // 折线图
    const { path, chartWidth, fillPath } = useMemo(() => {
        const values = sum_data.map(item => item.value);
        const maxVal = Math.max(...values);
        const chartWidth = sum_data.length * ITEM_WIDTH;

        let pathD = '';
        let fillPathD = '';

        sum_data.forEach((item, index) => {
            const x = index * ITEM_WIDTH;
            const y = CHART_HEIGHT - (item.value / maxVal) * CHART_HEIGHT;

            if (index === 0) {
                pathD += `M ${x} ${y}`;
                fillPathD += `M ${x} ${y}`;
            } else {
                pathD += ` L ${x} ${y}`;
                fillPathD += ` L ${x} ${y}`;
            }
        });

        fillPathD += ` L ${chartWidth} ${CHART_HEIGHT} L 0 ${CHART_HEIGHT} Z`;

        return { path: pathD, chartWidth, fillPath: fillPathD };
    }, [sum_data, ITEM_WIDTH, CHART_HEIGHT]);



    // 中间柱子
    const { barList } = useMemo(() => {
        const dailyMax = Math.max(...daily_data.map(item => item.value));
        const barList = daily_data.map((item, index) => ({
            height: (item.value / dailyMax) * CHART_HEIGHT,
            dailyVal: item.value,
            sumVal: sum_data[index]?.value || 0,
        }));
        return { barList };
    }, [daily_data, sum_data, CHART_HEIGHT]);



    // 下方月份标签
    const { monthLabels } = useMemo(() => {
        const monthMap: Record < string, number > = {};
        daily_data.forEach(item => {
            const [year, month] = item.date.split('-');
            const key = `${year}-${month}`;
            if (!monthMap[key]) monthMap[key] = 0;
            monthMap[key]++;
        });
        const monthLabels = Object.entries(monthMap).map(([month, days]) => ({
            month,
            width: days * ITEM_WIDTH,
            text: month.replace('-', ' - ')
        }));
        return { monthLabels };
    }, [daily_data, ITEM_WIDTH]);

    return (
        <div ref={sectionRef} className="headband-s8" style={{ height: containerHeight }}>
            <FadeInUp className="sticky">
                <div className="cont-block">
                    <div 
                        className="move-block" 
                        style={{
                            transform: `translateX(-${scrollX}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        <div className="top-block" ref={topBlockRef}>
                            <div className="svg-box" style={{
                                height: '100%',
                                overflow: 'hidden',
                            }}>
                                <svg width={chartWidth} height={CHART_HEIGHT} style={{ position: 'absolute', bottom: 0, left: 0 }}>
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#4169E1" stopOpacity={0.25} />
                                            <stop offset="30%" stopColor="#4169E1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <path d={fillPath} fill="url(#areaGradient)" />
                                    <path d={path} fill="none" stroke="#4169E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="line-box">
                                {barList.map((item, i) => (
                                    <div className="item" key={i} style={{
                                        width: ITEM_WIDTH,
                                        height: item.height,
                                    }}>
                                        <div className="hidebox">
                                            <p className="data">{t('section8Label1')}{item.dailyVal}</p>
                                            <p className="data">{t('section8Label2')}{item.sumVal}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bot-block">
                            {monthLabels.map((m, i) => (
                                <div className="item" key={i} style={{ width: m.width }}>
                                    <span>{m.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInUp>
        </div>
    );
};