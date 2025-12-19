'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Section from '@/components/ui/Section';

export default function Governance() {
  const { dictionary } = useLanguage();
  const boards = dictionary.boards as { [key: string]: string };

  return (
    <Section id="governance" background="sand">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          {boards.title}
        </h2>
        
        <div className="w-24 h-px bg-gold mx-auto mb-12" />

        <p className="text-lg leading-relaxed text-charcoal/80">
          {boards.description}
        </p>

        {/* Icon Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Healthcare', 'Manufacturing', 'Real Estate', 'Financial Services', 
            'Technology', 'Food Production', 'Contracting', 'Investment'].map((sector, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                <div className="w-6 h-6 border-2 border-gold rounded-sm" />
              </div>
              <span className="text-xs text-slate uppercase tracking-wide">
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
