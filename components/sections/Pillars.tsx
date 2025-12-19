'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Pillars() {
  const pillars = {
    title: 'Leadership Pillars',
    turnaround: 'Turnaround Leadership',
    governance: 'Board & Governance Excellence',
    investment: 'Strategic Investment & Capital Discipline'
  };

  const pillarsList = [
    {
      key: 'turnaround',
      title: pillars.turnaround,
      icon: '↻',
      description: 'Transforming organizations through strategic restructuring, cost discipline, and operational excellence.'
    },
    {
      key: 'governance',
      title: pillars.governance,
      icon: '⚖',
      description: 'Building robust governance frameworks and steering organizations with institutional discipline.'
    },
    {
      key: 'investment',
      title: pillars.investment,
      icon: '◆',
      description: 'Allocating capital strategically with rigorous oversight and a long-term value creation mindset.'
    }
  ];

  return (
    <Section id="pillars" background="light" spacing="default" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto pt-5">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-5 text-center">
          {pillars.title}
        </h2>
        
        <Divider className="mb-16 max-w-24 mx-auto" />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsList.map((pillar, index) => (
            <div 
              key={pillar.key}
              className="group relative bg-ivory border border-divider rounded-sm p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all" />
              
              {/* Number */}
              <div className="text-gold/20 font-serif text-5xl mb-4 leading-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-charcoal mb-4 leading-tight">
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-px bg-gold/30 mb-4" />

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all" />
            </div>
          ))}
        </div>
        {/* Bottom gold divider */}
        <Divider className="mt-16 w-full" />
      </div>
    </Section>
  );
}
