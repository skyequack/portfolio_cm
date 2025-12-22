'use client';

import Section from '@/components/ui/Section';
import ImpactCard from '@/components/ui/ImpactCard';
import Divider from '@/components/ui/Divider';

export default function Impact() {
  const impact = {
    title: 'Selected Leadership Impact',
    resultLabel: 'Result:'
  };

  const cases = [
    {
      key: 'rsr',
      company: 'Rashid Saad Al Rashid & Sons Company (RSR)',
      role: 'Strategic Restructuring',
      description:
        'Restructured RSR into a formal holding structure, establishing an Investment Committee and implementing group-wide governance, policies, and procedures.',
      result: 'Created a robust governance framework enabling strategic oversight and operational excellence across the group.',
      logo: '/images/logo_rashidsaad.png' // MISSING: Need RSR logo
    },
    {
      key: 'packaging',
      company: 'Packaging Products Company',
      role: 'Industrial Turnaround',
      description:
        'Led an industrial turnaround delivering significant cost efficiency and operational optimization.',
      result: '13% reduction in unit cost and increased production utilization to over 95%.',
      logo: '/images/logo_ppc.png'
    },
    {
      key: 'razin',
      company: 'Razin Trading Company',
      role: 'Retail Transformation',
      description:
        'Drove a retail turnaround by introducing a customer design-to-order concept.',
      result: 'Revenue growth from SAR 60M (2014) to SAR 93M (2018) with strengthened brand positioning.',
      logo: '/images/logo_razin.png'
    },
    {
      key: 'chicken',
      company: 'Golden Chicken Company',
      role: 'Strategic Repositioning',
      description:
        'Oversaw a strategic rebrand and premium repositioning, expanding distribution nationally.',
      result: 'Scale-up plan targeting 3x growth within three years.',
      logo: '/images/logo_gcc.png'
    },
    {
      key: 'smc',
      company: 'Specialized Medical Center',
      role: 'Head of Steering Committee',
      description:
        'Served as Head of the Steering Committee for a major strategic project.',
      result: 'Successfully led SAR 450M strategic project to completion.',
      logo: '/images/logo_smc.png'
    },
    {
      key: 'artc',
      company: 'Al Rashid Trading & Contracting Company',
      role: 'Audit Committee & Cost Optimization',
      description:
        'Provided Audit Committee oversight and led cost-reduction initiatives within a major contracting group.',
      result: 'Enhanced operational efficiency in a group generating SAR 2–5B annual revenues.',
      logo: "/images/logo_rtcc.png" 
    }
  ];

  return (
    <Section id="impact" background="light" spacing="relaxed" className="scroll-mt-20 h-320! min-h-0!">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mt-10 mb-4 text-center pt-5 md:pt-12">
          {impact.title}
        </h2>
        
        <Divider className="mb-6 max-w-24 mx-auto" />

        {/* Case Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12">
          {cases.map((caseItem) => (
            <ImpactCard
              key={caseItem.key}
              company={caseItem.company}
              role={caseItem.role}
              description={caseItem.description}
              result={caseItem.result}
              logo={caseItem.logo}
              resultLabel={impact.resultLabel}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}