'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
// import Stat from '@/components/ui/Stat';

export default function Impact() {
  const impact = {
    title: 'Leadership Impact',
    resultLabel: 'Result:',
    packaging: {
      company: 'Packaging Products Company',
      role: 'Chairman of the Board (2014–2022), Board Member (2022–Present)',
      description:
        'Led a comprehensive turnaround to restore margins by reducing manufacturing costs and introducing innovative high-value products.',
      result: '13% unit cost reduction and production utilization above 95%.'
    },
    chicken: {
      company: 'Golden Chicken Company',
      role: 'Chairman of the Board (2015–Present)',
      description:
        'Repositioned the brand as a premium product and expanded distribution across the Kingdom.',
      result: 'Rebranding and a growth plan to triple production capacity within three years.'
    },
    razin: {
      company: 'Razin Trading Company',
      role: 'Managing Director & Board Member (2014–Present)',
      description: 'Introduced a design-to-order retail concept to counter market slowdown.',
      result: 'Revenue growth from SAR 60M to SAR 93M and strengthened brand positioning.'
    }
  };

  const cases = [
    {
      key: 'packaging',
      data: impact.packaging,
      stats: [{ value: '13%', label: 'Cost Reduction' }, { value: '95%+', label: 'Production Utilization' }]
    },
    {
      key: 'chicken',
      data: impact.chicken,
      stats: [{ value: '3x', label: 'Capacity Growth' }]
    },
    {
      key: 'razin',
      data: impact.razin,
      stats: [{ value: 'SAR 93M', label: 'Revenue Achieved' }]
    }
  ];

  return (
    <Section id="impact" background="light" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center pt-5! md:pt-12">
          {impact.title}
        </h2>
        
        <Divider className="mb-16 max-w-24 mx-auto" />

        {/* Case Stories */}
        <div className="space-y-2! md:space-y-2! pb-12!">
          {cases.map(({ key, data}, index) => (
            <div key={key} className="relative">
              {/* Case Number - Positioned relative to container */}
                <div className="absolute -left-14 top-2 w-12 h-12 bg-gold flex items-center justify-center text-charcoal font-serif text-xl font-bold shadow-md z-10">
                {index + 1}
              </div>

                <Card className="pl-5! pr-8! pt-5! ">
                <div className="space-y-4">
                  {/* Company Name */}
                  <h3 className="text-2xl font-serif text-charcoal">
                    {data.company}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-sm text-gold font-medium uppercase tracking-wider">
                    {data.role}
                  </p>
                  
                  {/* Divider */}
                  <div className="w-12 h-px bg-divider" />
                  
                  {/* Challenge & Strategy */}
                  <p className="text-lg text-slate leading-relaxed pt-2">
                    {data.description}
                  </p>
                  
                  {/* Result */}
                  <div className="bg-sand/50 -mx-6 md:-mx-8 mt-8 p-6 md:p-8 border-t border-divider">
                    <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-3">
                      {impact.resultLabel}
                    </p>
                    <p className="text-base text-charcoal font-medium mb-6 leading-relaxed">
                      {data.result}
                    </p>
                    
                    
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}