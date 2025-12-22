'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Governance() {
  const boardPositions = [
    {
      company: 'Food AROMA Company',
      role: 'Chairman of the Board',
      period: '2019–Present'
    },
    {
      company: 'Saudi Services for Electromechanical Works (SSEM)',
      role: 'Vice Chairman; Chairman, Executive Committee',
      period: '2022–Present'
    },
    {
      company: 'Technology Investments Company',
      role: 'Board Member; Executive Committee Member',
      period: '2022–Present'
    },
    {
      company: 'Morouj Real Estate Development Company',
      role: 'Board Member',
      period: '2022–Present'
    },
    {
      company: 'Tabouk Fishery',
      role: 'Board Member; Executive Committee Member',
      period: '2014–Present'
    },
    {
      company: 'Saudi Rubber Products Company',
      role: 'Managing Director (2006–2015); Board Member',
      period: '2015–Present'
    },
    {
      company: 'Ejar Cranes and Equipment',
      role: 'Executive Committee Member',
      period: '2014–Present'
    },
    {
      company: 'Arabian United Float Glass Company',
      role: 'Board Member',
      period: '2014–Present'
    },
    {
      company: 'Al Rashid Abetong',
      role: 'Board Member',
      period: '2022–Present'
    },
    {
      company: 'Tilal Al-Khair Company',
      role: 'Owner & Board Member',
      period: '2021–Dec 2022'
    },
    {
      company: 'Vision Bank',
      role: 'Board Member',
      period: '2024–Present'
    }
  ];

  return (
    <Section id="governance" background="dark" spacing="default" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-gold mt-36 mb-4 text-center">
          Board Portfolio
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Board Positions List */}
        <div className="space-y-3 mb-36">
          {boardPositions.map((position, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:justify-between gap-1 py-2 border-b border-gold/10 last:border-0"
            >
              <div className="flex-1">
                <span className="text-gold font-medium">
                  {position.company}
                </span>
                <span className="text-ivory/70 text-sm mx-2">|</span>
                <span className="text-ivory/90 text-sm">
                  {position.role}
                </span>
              </div>
              <div className=" md:text-right md:ml-4 shrink-0" >
                <span className="text-ivory/60 text-sm">
                  ({position.period})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
