'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectCardWithCounter() {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to start animation when card is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate from 1 to 100 over 5 seconds with smooth easing
    const duration = 5000; // 5 seconds
    const startTime = Date.now();
    const startValue = 1;
    const endValue = 100;

    // Easing function for smooth animation (ease-out cubic)
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easeOutCubic(progress);
      
      // Calculate current value
      const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure it ends at exactly 100
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <div 
      ref={cardRef}
      className="apple-card transition-all group cursor-pointer"
      style={{
        borderRadius: '18px',
        padding: '28px'
      }}
    >
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
        客戶滿意度
      </h3>
      <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
        我們透過個人化解決方案、即時響應的支援服務以及持續創新，將客戶置於優先位置。我們致力於理解您的需求並提供卓越價值，確保建立在信任與共同成功基礎上的合作夥伴關係。
      </p>
      
      {/* Customer Satisfaction Counter */}
      <div className="mt-4 border-t border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(232,238,245,0.3)] transition-colors" style={{ marginTop: 'calc(1rem + 3px)', marginBottom: '3px', paddingTop: 'calc(1rem + 3px)' }}>
        <div className="text-xs text-[#b0b0b0] mb-2 font-medium uppercase tracking-wider group-hover:text-[#d0d8e0] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
          客戶滿意度
        </div>
        <div className="flex items-baseline gap-2">
          <span 
            className="text-3xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #5b7fb8 0%, #334663 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {count}
          </span>
          <span className="text-lg text-[#b0b0b0]">%</span>
        </div>
        <div className="mt-2 w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all ease-out"
            style={{ 
              width: `${count}%`, 
              background: 'linear-gradient(90deg, #5b7fb8 0%, #334663 100%)',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

