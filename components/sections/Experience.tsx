'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function Experience() {
  const experience = {
    title: 'Professional Experience',
    items: [
      'CEO & Owner – Rashid Saad Al Rashid & Sons Company (2006–Present)',
      'Chairman / Board Member – Packaging Products Company',
      'Chairman – Golden Chicken Company',
      'CEO – Darajat Contracting Company',
      'Managing Director & Board Member – Razin Trading Company',
      'Board & Committee Roles – Healthcare, contracting, manufacturing, real estate, technology, food, and banking sectors.'
    ]
  };

  return (
    <Section id="experience" background="light" spacing="default" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4 text-center mt-36">
          {experience.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Timeline */}
        <div className="relative space-y-6 mb-36">
          {/* Vertical line */}
          <div className="absolute left-1 top-10 bottom-7 w-1 bg-linear-to-b from-gold via-gold/50 to-gold/40 hidden md:block" />

          {experience.items.map((item: string, index: number) => (
            <div key={index} className="relative flex gap-6 group">
              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center shrink-0">
                <div className="w-3 h-3 bg-gold rotate-45 group-hover:scale-125 transition-transform" />
              </div>

              {/* Content */}
              <div className="flex-1 ">
                <div className="bg-ivory/50 border border-divider rounded-sm p-6 group-hover:bg-ivory group-hover:border-gold/30 transition-all">
                  <p className="text-slate text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
