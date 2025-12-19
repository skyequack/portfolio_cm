'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';

export default function Experience() {
  const { dictionary } = useLanguage();
  const experience = dictionary.experience as { title: string; items: string[] };
  const education = dictionary.education as { [key: string]: string };

  return (
    <Section background="light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
              {experience.title}
            </h2>
            <Divider className="mb-8" />
            <ul className="space-y-4">
              {experience.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-gold text-xl mt-1">▸</span>
                  <span className="text-charcoal/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
              {education.title}
            </h2>
            <Divider className="mb-8" />
            
            <div className="space-y-6">
              <Card className="bg-sand border-divider">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {education.degree}
                </h3>
                <p className="text-slate text-sm">{education.university}</p>
              </Card>

              <Card className="bg-sand border-divider">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {education.diploma}
                </h3>
                <p className="text-slate text-sm">{education.institute}</p>
              </Card>

              <div className="pt-4">
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {education.certifications}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
