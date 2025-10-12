'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlowCard({
  children,
  className,
  glowColor = 'var(--primary)',
  intensity = 'medium',
}: GlowCardProps) {
  const getIntensity = () => {
    switch (intensity) {
      case 'low':
        return '0 0 20px';
      case 'medium':
        return '0 0 40px';
      case 'high':
        return '0 0 60px';
      default:
        return '0 0 40px';
    }
  };

  return (
    <div
      className={cn(
        'relative rounded-xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:scale-105',
        className
      )}
      style={{
        boxShadow: `${getIntensity()} ${glowColor}20`,
      }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      {children}
    </div>
  );
}
