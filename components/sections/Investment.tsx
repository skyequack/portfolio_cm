'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Investment() {
  const investment = {
    title: 'Investment Philosophy',
    description:
      'My investment approach is guided by disciplined capital allocation, rigorous governance, and a long-term perspective. I seek opportunities where strategic leadership, operational excellence, and strong management teams can unlock sustainable growth and resilience.'
  };

  const principles = [
    'Disciplined Capital Allocation',
    'Rigorous Governance',
    'Long-Term Perspective',
    'Operational Excellence',
    'Strong Management Teams'
  ];

  return (
    <Section id="investment" background="sand" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center">
          {investment.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Description */}
        <p className="text-lg md:text-xl text-slate leading-relaxed text-center max-w-3xl mx-auto mb-12">
          {investment.description}
        </p>

        {/* Investment Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {principles.map((principle, index) => (
            <div key={index} className="flex items-start gap-4 group">
              {/* Diamond bullet */}
              <div className="mt-2 w-3 h-3 bg-gold rotate-45 shrink-0 group-hover:scale-110 transition-transform" />
              
              <p className="text-charcoal text-base font-medium leading-relaxed group-hover:text-gold transition-colors">
                {principle}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative frame */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-gold/20 rotate-45" />
            <div className="absolute inset-4 border-2 border-gold/40 rotate-45" />
          </div>
        </div>
      </div>
    </Section>
  );
}
