'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';

export default function CurrentLeadership() {
  const current = {
    title: 'Current Leadership',
    company: 'Rashid Saad Al Rashid & Sons Company (RSR)',
    role: 'Chief Executive Officer & Owner',
    description: 'Leading the transformation of the group into a holding structure, establishing an investment committee, strengthening governance, and driving local and international investment opportunities. Appointed new leadership teams across core companies, resulting in significant improvements in revenue and profitability.'
  };

  return (
    <Section id="current-leadership" background="sand" spacing="default" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center">
          {current.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Leadership Card */}
        <Card className="relative overflow-hidden p-8">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent" />
          
          <div className="text-center md:text-left">
            {/* Company Name */}
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-3">
              {current.company}
            </h3>
            
            {/* Role */}
            <p className="text-lg text-charcoal font-medium mb-6 uppercase tracking-wide">
              {current.role}
            </p>
            
            {/* Description */}
            <p className="text-lg text-slate leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Bottom corner accent */}
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
        </Card>
      </div>
    </Section>
  );
}
