'use client';

import Section from '@/components/ui/Section';
import ImpactCard from '@/components/ui/ImpactCard';
import Divider from '@/components/ui/Divider';

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
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mt-10 mb-4 text-center pt-5 md:pt-12">
          {impact.title}
        </h2>
        
        <Divider className="mb-6 max-w-24 mx-auto" />

        {/* Case Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
          {cases.map(({ key, data}, index) => (
            <ImpactCard
              key={key}
              company={data.company}
              role={data.role}
              description={data.description}
              result={data.result}
              index={index + 1}
              resultLabel={impact.resultLabel}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}