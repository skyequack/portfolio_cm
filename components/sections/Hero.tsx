'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Button from '@/components/ui/Button';

export default function Hero() {
  const { dictionary } = useLanguage();
  const hero = dictionary.hero as { [key: string]: string };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 77, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 162, 77, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6 tracking-tight">
            {hero.name}
          </h1>

          {/* Title */}
          <p className="text-ivory text-lg md:text-xl mb-8 font-light tracking-wide">
            {hero.title}
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gold mx-auto mb-8" />

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-serif text-ivory/90 mb-8 italic leading-relaxed">
            {hero.tagline}
          </p>

          {/* Description */}
          <p className="text-ivory/80 text-base md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
            {hero.description}
          </p>

          {/* CTA */}
          <Button onClick={scrollToAbout}>
            {hero.cta}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
