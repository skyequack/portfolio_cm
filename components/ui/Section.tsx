'use client';

import { useFadeIn } from '@/lib/hooks/useFadeIn';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'sand';
  spacing?: 'compact' | 'default' | 'relaxed';
}

export default function Section({ children, id, className = '', background = 'light', spacing }: SectionProps) {
  const { elementRef, isVisible } = useFadeIn(0.15);

  const bgClasses = {
    light: 'bg-ivory',
    dark: 'bg-charcoal text-ivory',
    sand: 'bg-sand'
  } as const;

  const spacingClasses = {
    compact: 'py-16 md:py-20 h-screen flex items-center snap-section',
    default: 'py-24 md:py-32 h-screen flex items-center snap-section',
    relaxed: 'py-32 md:py-40 h-screen flex items-center snap-section'
  } as const;

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      id={id} 
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${spacing ? spacingClasses[spacing] : ''} ${bgClasses[background]} ${className}`}
    >
      <div className="container mx-auto w-full h-full flex items-center px-3">
        {children}
      </div>
    </section>
  );
}
