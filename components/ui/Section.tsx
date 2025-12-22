'use client';

import { useFadeIn } from '@/lib/hooks/useFadeIn';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'sand';
  spacing?: 'compact' | 'default' | 'relaxed';
  fullHeight?: boolean;
  enableSnap?: boolean; // Add separate snap control
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  background = 'light', 
  spacing,
  fullHeight = true,
  enableSnap = true // Default to true to maintain snap behavior
}: SectionProps) {
  const { elementRef, isVisible } = useFadeIn(0.15);

  const bgClasses = {
    light: 'bg-ivory',
    dark: 'bg-charcoal text-ivory',
    sand: 'bg-sand'
  } as const;

  const spacingClasses = {
    compact: 'py-16 md:py-20',
    default: 'py-24 md:py-32',
    relaxed: 'py-32 md:py-40'
  } as const;

  // Build height classes based on fullHeight prop
  const heightClasses = fullHeight 
    ? 'min-h-screen flex items-center' 
    : '';

  // Snap class is independent of height
  const snapClass = enableSnap ? 'snap-section' : '';

  // Apply spacing only when NOT using fullHeight
  const appliedSpacing = fullHeight ? '' : (spacing ? spacingClasses[spacing] : spacingClasses.default);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      id={id} 
      className={`fade-in-section ${isVisible ? 'visible' : ''} ${appliedSpacing} ${heightClasses} ${snapClass} ${bgClasses[background]} ${className}`}
    >
      <div className={`container mx-auto w-full px-3 ${fullHeight ? 'h-full flex items-center' : ''}`}>
        {children}
      </div>
    </section>
  );
}