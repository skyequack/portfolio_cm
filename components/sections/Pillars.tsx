'use client';

import type { Dictionary } from '@/lib/i18n/types';
import Section from '@/components/ui/Section';

export default function Pillars({ dictionary }: { dictionary: Dictionary }) {
  const pillars = dictionary.pillars as { [key: string]: string };

  const pillarsList = [
    { key: 'turnaround', icon: '↻' },
    { key: 'governance', icon: '⚖' },
    { key: 'investment', icon: '◆' }
  ];

  return (
    <Section background="sand" className="border-t border-b border-divider">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-charcoal mb-16">
          {pillars.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillarsList.map(({ key, icon }) => (
            <div key={key} className="text-center group">
              <div className="text-5xl text-gold mb-6 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <h3 className="text-xl font-serif text-charcoal leading-snug">
                {pillars[key]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
