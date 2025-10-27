'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollToTopButton() {
    const [isActive, setIsActive] = useState(false);
    const [strokeOffset, setStrokeOffset] = useState(268);
    const circleRef = useRef < SVGCircleElement > (null);
    const buttonRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const winHeight = window.innerHeight;

            // 控制按钮显示/隐藏
            setIsActive(scrollTop > winHeight / 2);

            // 计算滚动进度
            const documentHeight = document.body.scrollHeight;
            const scrollableDistance = documentHeight - winHeight;

            // 防止除以零的错误（当内容不足一屏时）
            if (scrollableDistance <= 0) return;

            const scrollPercentage = Math.min(100, Math.max(0,
                (scrollTop / scrollableDistance) * 100
            ));

            // 计算 SVG 圆圈的 stroke-dashoffset
            const circumference = 2 * Math.PI * 42; // 半径42的圆周长 ≈ 264
            const newOffset = circumference - (scrollPercentage / 100) * circumference;
            setStrokeOffset(newOffset);
        };

        // 初始化时执行一次
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 更新 SVG 样式
    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.strokeDasharray = '264 264'; // 周长
            circleRef.current.style.strokeDashoffset = strokeOffset.toString();
        }
    }, [strokeOffset]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            ref={buttonRef}
            className={`totop ${isActive ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"><circle ref={circleRef} cx="45" cy="45" r="42"></circle></svg>
        </div>
    );
}