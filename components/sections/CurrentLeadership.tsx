'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';

export default function CurrentLeadership() {
  const positions = [
    {
      company: 'Rashid Saad Al Rashid & Sons Company (RSR)',
      role: 'Chief Executive Officer & Owner',
      period: '2006 – Present',
      responsibilities: [
        'Restructured the enterprise into a holding-company model to strengthen strategic oversight and portfolio performance.',
        'Established an Investment Committee to formalize investment decision-making and capital allocation discipline.',
        'Leads evaluation of local and international opportunities, including mergers and acquisitions within the Kingdom.',
        'Appointed executive leadership teams across operating companies, improving revenue and profitability outcomes.',
        'Implemented group-wide governance frameworks, policies, and procedures across subsidiaries and at holding level.'
      ]
    },
  ];

  return (
    <Section id="current-leadership" background="sand" spacing="default" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center">
          Current Executive Leadership
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Leadership Cards */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <Card key={index} className="relative overflow-hidden p-8">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent" />
              
              <div>
                {/* Company Name */}
                <h3 className="text-xl md:text-2xl font-serif text-gold mb-2">
                  {position.company}
                </h3>
                
                {/* Role and Period */}
                <p className="text-base text-charcoal font-medium mb-1">
                  {position.role}
                </p>
                <p className="text-sm text-slate/70 mb-6">
                  {position.period}
                </p>
                
                {/* Responsibilities */}
                <ul className="space-y-3">
                  {position.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-base text-slate leading-relaxed">
                      <span className="text-gold mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom corner accent */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
