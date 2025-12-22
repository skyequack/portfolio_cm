'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function About() {
  const about = {
    title: 'About',
    description: 'Entrepreneur, principal investor, and board leader with extensive experience in governance, strategic turnarounds, and portfolio oversight across industrial manufacturing, food production, healthcare, contracting, real estate, and investment-related entities. Proven record of strengthening group performance through holding-company structuring, investment committee governance, leadership appointments, operating model improvement, and KPI-driven execution. Experienced in evaluating local and international opportunities, including mergers and acquisitions, and implementing group-wide corporate governance frameworks, policies, and procedures.'
  };

  return (
    <Section id="about" background="light" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center">
          {about.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        <div>
          <p className="text-base md:text-lg text-slate leading-relaxed text-justify">
            {about.description}
          </p>
        </div>

        {/* Decorative frame element */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 border-2 border-gold/20 rotate-45" />
        </div>
      </div>
    </Section>
  );
}
