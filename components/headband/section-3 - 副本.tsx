'use client';

import { useEffect, useRef, useState } from 'react';

export const HeadbandSection3 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const isMounted = useRef(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastDrawnIndex = useRef<number>(0);

  const CONFIG = {
    START_INDEX: 16,
    END_INDEX: 456,
  };
  const TOTAL_IMAGES = CONFIG.END_INDEX - CONFIG.START_INDEX + 1;

  useEffect(() => {
    isMounted.current = true;

    const imgList: (HTMLImageElement | null)[] = new Array(TOTAL_IMAGES).fill(null);

    for (let i = 0; i < TOTAL_IMAGES; i++) {
      const img = new Image();
      const actualIndex = i + CONFIG.START_INDEX;
      const path = `/headband/s3/头环_${String(actualIndex).padStart(5, '0')}.jpg`;
      img.src = path;
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        if (!isMounted.current) return;
        setLoadedCount((prev) => prev + 1);
      };

      img.onerror = () => {
        if (!isMounted.current) return;
        setLoadedCount((prev) => prev + 1);
      };

      imgList[i] = img;
    }

    setImages(imgList);

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleScroll = () => {
      if (!isMounted.current) return;

      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top + scrollTop;
      const sectionBottom = rect.bottom + scrollTop;
      const viewportBottom = scrollTop + windowHeight;

      const visibleStart = sectionTop;
      const visibleEnd = sectionBottom - windowHeight;

      let drawIndex = lastDrawnIndex.current;

      if (scrollTop >= visibleStart && scrollTop <= visibleEnd) {
        const scrollableDistance = visibleEnd - visibleStart;
        const currentScroll = scrollTop - visibleStart;
        const progress = Math.max(0, Math.min(currentScroll / scrollableDistance, 1));

        drawIndex = Math.floor(progress * TOTAL_IMAGES);
        lastDrawnIndex.current = drawIndex;
        setCurrentIndex(drawIndex);
      } else if (scrollTop > visibleEnd) {
        drawIndex = TOTAL_IMAGES - 1;
        lastDrawnIndex.current = drawIndex;
        setCurrentIndex(drawIndex);
      }

      const img = images[drawIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const imgWidth = img.naturalWidth * scale;
      const imgHeight = img.naturalHeight * scale;
      const x = (canvas.width - imgWidth) / 2;
      const y = (canvas.height - imgHeight) / 2;

      ctx.drawImage(img, x, y, imgWidth, imgHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div ref={sectionRef} className="headband-s3" style={{ height: '500vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        已加载：{loadedCount}/{TOTAL_IMAGES} | 当前帧：{currentIndex + 1}/{TOTAL_IMAGES}
      </div>
    </div>
  );
};