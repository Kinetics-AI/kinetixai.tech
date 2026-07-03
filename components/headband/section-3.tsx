'use client';

import { useEffect, useRef, useState } from 'react';
import {useTranslations} from 'next-intl';






export const HeadbandSection3 = () => {
  
  const t = useTranslations('Headband');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastIndexRef = useRef(0);
  const [isReady, setIsReady] = useState(false);
  const [visiblePara, setVisiblePara] = useState<'para-1' | 'para-2' | null>(null);

  const CONFIG = {
    START_INDEX: 16,
    END_INDEX: 456,
    FALLBACK_IMAGES: [16, 126, 456],
  };
  const TOTAL_IMAGES = CONFIG.END_INDEX - CONFIG.START_INDEX + 1;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let currentIndex = -1;

    const drawImage = (
      ctx: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      img: HTMLImageElement | undefined,
      index: number
    ) => {
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
      currentIndex = index;
    };

    const loadImages = (): Promise<HTMLImageElement[]> => {
      return new Promise((resolve) => {
        const images: HTMLImageElement[] = [];
        let loaded = 0;

        for (let i = CONFIG.START_INDEX; i <= CONFIG.END_INDEX; i++) {
          const img = new Image();
          img.src = `/headband/s3/头环_${String(i).padStart(5, '0')}.jpg`;
          img.crossOrigin = 'anonymous';

          img.onload = () => {
            loaded++;
            if (loaded === TOTAL_IMAGES) {
              resolve(images);
            }
          };
          img.onerror = () => {
            loaded++;
            if (loaded === TOTAL_IMAGES) {
              resolve(images);
            }
          };

          images.push(img);
        }

        if (TOTAL_IMAGES === 0) resolve(images);
      });
    };

    const initScrollTrigger = async () => {
      try {
        const images = await loadImages();
        imagesRef.current = images;

        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        setIsReady(true);

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: false,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * TOTAL_IMAGES),
              TOTAL_IMAGES - 1
            );

            if (index !== currentIndex && imagesRef.current[index]) {
              console.log('Current image index:', index);
              drawImage(ctx, canvas, imagesRef.current[index], index);

              // 更新显示的段落
              if (index >= 85 && index <= 170) {
                setVisiblePara('para-1');
              } else if (index >= 220 && index <= 280) {
                setVisiblePara('para-2');
              } else {
                setVisiblePara(null);
              }
            }
          },
        });
      } catch (err) {
        console.error('Init failed:', err);
        setIsReady(true);
      }
    };

    initScrollTrigger();
  }, []);

  const fallbackImages = CONFIG.FALLBACK_IMAGES.map(
    (idx) => `/headband/s3/头环_${String(idx).padStart(5, '0')}.jpg`
  );

  return (
    <div ref={containerRef} className="headband-s3">
      <canvas
        ref={canvasRef}
        className="sticky-canvas"
        style={{ opacity: isReady ? '1' : '0' }}
      />
      {!isReady && (
        <div className="fallback">
          {fallbackImages.map((src, i) => (
            <div
              key={i}
              className="bg"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      )}
      <div className="txt-block">
        <div className="para-1" style={{ opacity: visiblePara === 'para-1' ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {t.rich('section3Para1')}
        </div>
        <div className="para-2" style={{ opacity: visiblePara === 'para-2' ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          {t.rich('section3Para2')}
        </div>
      </div>
    </div>
  );
};