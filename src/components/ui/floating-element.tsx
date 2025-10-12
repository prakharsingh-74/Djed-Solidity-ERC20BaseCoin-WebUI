'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  range?: number;
}

export function FloatingElement({
  children,
  className,
  speed = 3,
  range = 20,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const y = Math.sin(elapsed / (speed * 1000)) * range;
      
      if (ref.current) {
        ref.current.style.transform = `translateY(${y}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, range]);

  return (
    <div ref={ref} className={cn('transition-transform', className)}>
      {children}
    </div>
  );
}
