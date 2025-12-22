'use client';

import Image from 'next/image';

export default function Hero() {
  const hero = {
    name: 'Yousef Rashid Al-Rashid',
    title: 'Chairman | Chief Executive Officer | Principal Investor',
    tagline: 'Building enduring businesses through disciplined leadership and strategic investment.'
  };
  const pillars = {
    title: 'Leadership Pillars',
    turnaround: 'Turnaround Leadership',
    governance: 'Board & Governance Excellence',
    investment: 'Strategic Investment & Capital Discipline'
  };

  const pillarsList = [
    { key: 'turnaround', label: pillars.turnaround },
    { key: 'governance', label: pillars.governance },
    { key: 'investment', label: pillars.investment }
  ];

  return (
    <section id="hero" className="h-screen snap-section flex items-center bg-charcoal relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 77, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 162, 77, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-16">
            
            {/* Left: Portrait */}
            <div className="flex items-center justify-center order-2 lg:order-1 lg:col-span-3 animate-fade-in-up delay-200 mt-24">
              <div className="relative group">
                {/* Gold frame border */}
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-sm transition-all duration-500 any-group-hover:border-gold/60 any-group-hover:-inset-5" />
                
                {/* Portrait placeholder */}
                <div className="relative w-72 sm:w-72 md:w-90 aspect-2/3 bg-slate/10 rounded-sm overflow-hidden transition-transform duration-500 any-group-hover:scale-[1.02]">
                  {/* Hero Image */}
                  <Image
                    src="/images/hero_image.jpg"
                    alt="Yousef Rashid Al-Rashid"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/50 to-transparent" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold -mt-2 -mr-2" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold -mb-2 -ml-2" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 lg:col-span-4 flex items-center mt-24">
              <div className="w-full text-left">
              {/* Name */}
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif text-gold mb-4 tracking-tight leading-tight animate-fade-in-up">
                {hero.name}
              </h1>

              {/* Title */}
              <p className="text-sand text-base md:text-base mb-6 font-light tracking-wide leading-relaxed animate-fade-in-up delay-100">
                {hero.title}
              </p>

              {/* Gold divider */}
              <div className="w-16 h-px bg-gold mb-8 animate-fade-in-up delay-200" />

              {/* Positioning statement */}
                <p className="text-ivory/90 text-sm md:text-sm mb-12 leading-relaxed font-serif italic animate-fade-in-up delay-300">
                {hero.tagline}
              </p>

              {/* Three Pillars */}
              <div className="space-y-4 mb-8 animate-fade-in-up delay-400">
                <p className="text-gold text-xs uppercase tracking-widest mb-6 font-medium">
                  {pillars.title}
                </p>
                {pillarsList.map(({ key, label }) => (
                  <div
                    key={key}
                    className="flex items-center gap-3 group justify-start any-hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-2 h-2 bg-gold rotate-45 any-group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-ivory text-sm font-medium any-group-hover:text-gold transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* LinkedIn Link */}
              <div className="animate-fade-in-up delay-500 flex justify-start">
                <a
                  href="https://www.linkedin.com/in/yousef-al-rashid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 px-4 py-2 border-2 border-gold/30 bg-transparent text-gold rounded-sm text-sm font-medium overflow-hidden transition-all duration-300 any-hover:border-gold any-hover:scale-105 any-hover:shadow-[0_8px_20px_rgba(201,162,77,0.3)] group"
                  style={{ transformOrigin: 'center' }}
                >
                  <span className="relative z-10 transition-colors duration-300 any-group-hover:text-charcoal flex items-center gap-2">
                    <svg className="w-4 h-4 transition-transform duration-300 any-group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </span>
                  <span className="absolute inset-0 bg-gold transform scale-x-0 origin-left transition-transform duration-300 any-group-hover:scale-x-100" />
                </a>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
