'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function CoreCompetencies() {
  const coreCompetencies = {
    title: 'Core Competencies',
    items: [
      'Board leadership and governance oversight',
      'Strategic planning and enterprise execution',
      'Turnaround strategy and margin recovery',
      'Investment committee governance and capital allocation discipline',
      'Executive leadership selection and talent development',
      'Negotiation and stakeholder management',
      'Project management and execution governance',
      'KPI setting and performance monitoring',
      'Cross-cultural leadership'
    ]
  };

  return (
    <Section id="core-competencies" background="sand" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center">
          {coreCompetencies.title}
        </h2>

        <Divider className="mb-12 max-w-24 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCompetencies.items.map((item) => (
            <div key={item} className="flex items-start gap-4 group">
              <div className="mt-2 w-3 h-3 bg-gold rotate-45 shrink-0 any-group-hover:scale-110 transition-transform" />
              <p className="text-charcoal text-base font-medium leading-relaxed any-group-hover:text-gold transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>

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
