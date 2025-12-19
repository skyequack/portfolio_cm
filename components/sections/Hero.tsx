'use client';

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
    <section id="hero" className="min-h-screen flex items-center bg-charcoal relative overflow-hidden py-32 md:py-40">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 77, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 162, 77, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Portrait */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                {/* Gold frame border */}
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-sm" />
                
                {/* Portrait placeholder */}
                <div className="relative w-80 h-96 md:w-96 md:h-120 bg-slate/10 rounded-sm overflow-hidden">
                  {/* Placeholder silhouette */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8">
                    <div className="text-gold/20 text-9xl">
                      <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/50 to-transparent" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold -mt-2 -mr-2" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold -mb-2 -ml-2" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-4 tracking-tight leading-tight">
                {hero.name}
              </h1>

              {/* Title */}
              <p className="text-sand text-lg md:text-xl mb-6 font-light tracking-wide leading-relaxed">
                {hero.title}
              </p>

              {/* Gold divider */}
              <div className="w-16 h-px bg-gold mb-8 mx-auto lg:mx-0" />

              {/* Positioning statement */}
              <p className="text-ivory/90 text-lg md:text-xl mb-12 leading-relaxed font-serif italic">
                {hero.tagline}
              </p>

              {/* Three Pillars */}
              <div className="space-y-4 mb-8">
                <p className="text-gold text-sm uppercase tracking-widest mb-6 font-medium">
                  {pillars.title}
                </p>
                {pillarsList.map(({ key, label }) => (
                  <div 
                    key={key} 
                    className="flex items-center gap-3 group mx-auto lg:mx-0 justify-center lg:justify-start"
                  >
                    <div className="w-2 h-2 bg-gold rotate-45" />
                    <span className="text-ivory text-base font-medium group-hover:text-gold transition-colors">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-gold/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
