'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function CurrentLeadership() {
  const { dictionary } = useLanguage();
  const current = dictionary.current as { [key: string]: string };

  return (
    <Section id="journey" background="dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-gold mb-16 text-center">
          {current.title}
        </h2>

        <Card className="bg-charcoal border-gold/20 text-ivory">
          <div className="mb-6">
            <h3 className="text-2xl font-serif text-gold mb-2">
              {current.company}
            </h3>
            <p className="text-sand text-lg font-medium">
              {current.role}
            </p>
          </div>
          
          <div className="w-16 h-px bg-gold/50 mb-6" />
          
          <p className="text-ivory/80 leading-relaxed text-lg">
            {current.description}
          </p>
        </Card>
      </div>
    </Section>
  );
}
