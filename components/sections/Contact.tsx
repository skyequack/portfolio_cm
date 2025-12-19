'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Section from '@/components/ui/Section';

export default function Contact() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact as { [key: string]: string };

  return (
    <Section id="contact" background="light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          {contact.title}
        </h2>
        
        <div className="w-24 h-px bg-gold mx-auto mb-12" />

        <p className="text-lg text-charcoal/80 mb-12 leading-relaxed">
          {contact.description}
        </p>

        {/* LinkedIn */}
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-sand rounded-sm border border-divider">
          <span className="text-slate font-medium">{contact.linkedin}</span>
          <a
            href="https://www.linkedin.com/in/yousef-rashid-al-rashid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-royal-green hover:text-deep-green font-medium transition-colors"
          >
            Yousef-rashid-al-rashid
          </a>
        </div>
      </div>
    </Section>
  );
}
