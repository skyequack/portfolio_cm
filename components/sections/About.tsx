'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function About() {
  const about = {
    title: 'About',
    description: 'Entrepreneur, principal investor, and board leader with extensive experience in governance, strategic turnarounds, and portfolio oversight across industrial manufacturing, food production, healthcare, contracting, real estate, and investment-related entities. Proven record of strengthening group performance through holding-company structuring, investment committee governance, leadership appointments, operating model improvement, and KPI-driven execution. Experienced in evaluating local and international opportunities, including mergers and acquisitions, and implementing group-wide corporate governance frameworks, policies, and procedures.',
    glanceTitle: 'At a Glance',
    highlights: [
      {
        label: 'Industrial turnaround',
        detail: '13% unit cost reduction; production utilization above 95%+'
      },
      {
        label: 'Retail turnaround',
        detail: 'revenue growth from SAR 60M (2014) to SAR 93M (2018)'
      },
      {
        label: 'Healthcare leadership',
        detail: 'Head of Steering Committee for a SAR 450M strategic project'
      },
      {
        label: 'Contracting exposure',
        detail: 'audit oversight and cost-reduction initiatives within a group generating SAR 2–5B annually'
      }
    ]
  };

  return (
    <Section id="about" background="light" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center">
          {about.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - About */}
          <div>
            <p className="text-base md:text-lg text-slate leading-relaxed text-justify">
              {about.description}
            </p>
          </div>

          {/* Right Column - At a Glance */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-charcoal mb-6 uppercase tracking-wide">
              {about.glanceTitle}
            </h3>
            
            <div className="space-y-4">
              {about.highlights.map((item, index) => (
                <div key={index} className="border-l-2 border-gold/30 pl-4">
                  <div className="text-base font-semibold text-charcoal mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative frame element */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 border-2 border-gold/20 rotate-45" />
        </div>
      </div>
    </Section>
  );
}
