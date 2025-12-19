'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Section from '@/components/ui/Section';

export default function Investment() {
  const { dictionary } = useLanguage();
  const investment = dictionary.investment as { [key: string]: string };

  return (
    <Section background="dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4 text-center">
          {investment.title}
        </h2>
        
        <div className="w-24 h-px bg-gold mx-auto mb-12" />

        <p className="text-xl leading-relaxed text-ivory/90 text-center italic font-serif">
          &ldquo;{investment.description}&rdquo;
        </p>

        {/* Investment principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Disciplined Capital', icon: '◆' },
            { label: 'Rigorous Governance', icon: '■' },
            { label: 'Long-term Vision', icon: '▲' }
          ].map(({ label, icon }, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl text-gold mb-4">{icon}</div>
              <p className="text-sand text-sm uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
