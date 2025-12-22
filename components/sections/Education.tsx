'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Education() {
  const education = [
    {
      institution: 'Strayer University',
      location: 'Washington DC, USA',
      degree: 'BSc, International Business',
      period: '1997–2001'
    },
    {
      institution: 'Institute of Public Administration',
      location: 'Riyadh, Saudi Arabia',
      degree: 'Diploma, Banking Operations',
      period: '1995–1996'
    }
  ];

  const certifications = [
    {
      title: 'Financial Accounting Certification',
      institution: 'The Institute of Banking, Riyadh'
    },
    {
      title: 'Principles of Banking Certification',
      institution: 'The Institute of Banking, Riyadh'
    },
    {
      title: 'Products and Services of the Bank Certification',
      institution: 'Arab National Bank, Riyadh'
    },
    {
      title: 'Private Banking Services Certificate',
      institution: 'Arab National Bank, Riyadh'
    }
  ];

  return (
    <Section id="education" background="light" spacing="default" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center">
          Education & Certifications
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-serif text-charcoal mb-6 uppercase tracking-wide">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-2 border-gold/30 pl-4">
                  <h4 className="text-base font-semibold text-charcoal">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-slate/70 mb-1">
                    {item.location}
                  </p>
                  <p className="text-sm text-slate">
                    {item.degree}
                  </p>
                  <p className="text-xs text-slate/60 mt-1">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-xl font-serif text-charcoal mb-6 uppercase tracking-wide">
              Certifications (1997)
            </h3>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index} className="border-l-2 border-gold/30 pl-4">
                  <h4 className="text-sm font-semibold text-charcoal mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate/70">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
