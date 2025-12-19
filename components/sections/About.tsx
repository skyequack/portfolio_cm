'use client';

import type { Dictionary } from '@/lib/i18n/types';
import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function About({ dictionary }: { dictionary: Dictionary }) {
  const about = dictionary.about as { [key: string]: string };

  return (
    <Section id="about" background="light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4 text-center">
          {about.title}
        </h2>
        
        <Divider className="mb-12" />

        <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
            {about.p1}
          </p>
          <p>
            {about.p2}
          </p>
        </div>
      </div>
    </Section>
  );
}
