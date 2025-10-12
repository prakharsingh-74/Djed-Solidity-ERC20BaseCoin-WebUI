'use client';

import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function InteractiveCard({
  children,
  className,
  glowOnHover = true,
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-300',
        'hover:border-primary/50 hover:shadow-lg',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {glowOnHover && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, var(--primary), transparent)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
