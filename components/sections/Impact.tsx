'use client';

import type { Dictionary } from '@/lib/i18n/types';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

interface CaseData {
  company: string;
  role: string;
  description: string;
  result: string;
}

interface ImpactDictionary {
  title: string;
  resultLabel: string;
  [key: string]: string | CaseData;
}

export default function Impact({ dictionary }: { dictionary: Dictionary }) {
  const impact = dictionary.impact as ImpactDictionary;

  const cases = [
    { key: 'packaging', stat: '13%', statLabel: 'Cost Reduction' },
    { key: 'chicken', stat: '3x', statLabel: 'Capacity Growth' },
    { key: 'razin', stat: '55%', statLabel: 'Revenue Growth' }
  ];

  return (
    <Section id="impact" background="light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4 text-center">
          {impact.title}
        </h2>
        
        <div className="w-24 h-px bg-gold mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map(({ key, stat, statLabel }) => {
            const caseData = impact[key] as CaseData;
            return (
              <Card key={key} className="flex flex-col h-full">
                {/* Stat */}
                <div className="text-center mb-6 pb-6 border-b border-divider">
                  <div className="text-5xl font-serif text-gold mb-2">
                    {stat}
                  </div>
                  <div className="text-slate text-xs uppercase tracking-wider">
                    {statLabel}
                  </div>
                </div>

                {/* Company */}
                <h3 className="text-xl font-serif text-charcoal mb-2">
                  {caseData.company}
                </h3>
                
                {/* Role */}
                <p className="text-sm text-slate mb-4 font-medium">
                  {caseData.role}
                </p>

                {/* Description */}
                <p className="text-charcoal/80 mb-4 leading-relaxed grow">
                  {caseData.description}
                </p>

                {/* Result */}
                <div className="pt-4 border-t border-divider/50">
                  <p className="text-xs text-slate uppercase tracking-wide mb-1">
                    {impact.resultLabel}
                  </p>
                  <p className="text-deep-green font-medium text-sm">
                    {caseData.result}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
