'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const contact = {
    title: 'Professional Inquiries',
    description:
      'For board opportunities, strategic partnerships, or investment discussions, please get in touch.',
    linkedin: 'LinkedIn:'
  };

  return (
    <Section id="contact" background="dark" spacing="default" className="scroll-mt-20 pb-0" fullHeight={false} enableSnap={true}>
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-gold mb-4 text-center">
          {contact.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Content Card */}
        <Card className="text-center bg-ivory/95 border-gold/20 p-8">
          {/* Description */}
          <p className="text-base text-slate leading-relaxed mb-8">
            {contact.description}
          </p>

          {/* LinkedIn */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-gold font-medium text-sm uppercase tracking-wider">
              {contact.linkedin}
            </p>
            <a 
              href="https://linkedin.com/in/yousef-rashid-al-rashid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal any-hover:text-gold transition-colors font-medium underline underline-offset-4"
            >
              Yousef Rashid Al-Rashid
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-divider">
            <a 
              href="https://linkedin.com/in/yousef-rashid-al-rashid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="px-6 py-3">
                Connect on LinkedIn
              </Button>
            </a>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/30" />
        </Card>

        {/* Additional decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
        </div>
      </div>

      {/* Footer combined into Contact section (full-bleed) */}
      <div className="mt-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <Footer />
      </div>
    </Section>
  );
}
