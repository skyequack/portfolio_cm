'use client';

import Section from '@/components/ui/Section';
import Divider from '@/components/ui/Divider';

export default function About() {
  const about = {
    title: 'Stewardship & Vision',
    p1: 'I am driven by the belief that sustainable success is built through deep operational understanding, disciplined governance, and the empowerment of the right leadership teams. Throughout my career, I have focused on transforming organizations, strengthening institutional frameworks, and creating long-term value for shareholders and stakeholders alike.',
    p2: 'My approach blends strategic foresight with hands-on execution — aligning people, processes, and capital behind a clear vision of growth and resilience.'
  };

  return (
    <Section id="about" background="light" spacing="relaxed" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 text-center">
          {about.title}
        </h2>
        
        <Divider className="mb-12 max-w-24 mx-auto" />

        {/* Content */}
        <div className="space-y-6 text-center">
          <p className="text-lg md:text-xl text-slate leading-relaxed">
            {about.p1}
          </p>
          
          <p className="text-lg md:text-xl text-slate leading-relaxed">
            {about.p2}
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
