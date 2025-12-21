'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Governance() {
  const boards = {
    title: 'Boards & Governance',
    description:
      'Serving as Chairman, Vice Chairman, Board Member, and Audit or Executive Committee member across leading organizations in healthcare, manufacturing, contracting, real estate, food production, technology investments, and financial services. Recognized for building governance frameworks, steering major projects, and ensuring disciplined oversight.'
  };

  const sectors = [
    'Healthcare',
    'Manufacturing',
    'Contracting',
    'Real Estate',
    'Food Production',
    'Technology Investments',
    'Financial Services'
  ];

  return (
    <Section id="governance" background="dark" spacing="default" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-gold mb-4 text-center">
          {boards.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Description */}
        <p className="text-base md:text-lg text-ivory/90 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          {boards.description}
        </p>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-ivory/5 border border-gold/20 rounded-sm hover:bg-ivory/10 hover:border-gold/40 transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-ivory text-sm font-medium text-center leading-snug">
                {sector}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
