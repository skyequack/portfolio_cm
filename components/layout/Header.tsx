'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const nav = {
    about: 'About',
    leadership: 'Leadership',
    impact: 'Impact',
    governance: 'Board Portfolio',
    investment: 'Investment',
    education: 'Education',
    contact: 'Contact',
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const scrollContainer = document.querySelector('.snap-container');
    
    if (element && scrollContainer) {
      const elementTop = element.offsetTop;
      scrollContainer.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const sectionIds = [
      'hero',
      'pillars',
      'about',
      'current-leadership',
      'impact',
      'governance',
      'investment',
      'experience',
      'education',
      'contact',
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const topEntry = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(topEntry.target.id);
        }
      },
      {
        root: document.querySelector('.snap-container'),
        rootMargin: '0px',
        threshold: [0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/98 backdrop-blur-md border-b border-gold/20">
      {/* Decorative top-left gold radial gradient overlay */}
      <div className="absolute top-0 left-0 w-100 h-100 pointer-events-none z-0 bg-[radial-gradient(ellipse_120%_60%_at_top_left,rgba(255,215,0,0.07)_0%,rgba(255,215,0,0)_60%)]" />
      <nav className="container mx-auto pl-6 pr-6 py-4 md:py-5 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="relative group ml-6"
          >
            <div className="flex items-center gap-3">
              {/* Monogram box with gold accent */}
              <div className="relative w-12 h-12 border border-gold/40 flex items-center justify-center any-group-hover:border-gold transition-colors">
                <span className="text-gold text-2xl font-serif tracking-tighter">YR</span>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-gold" />
              </div>             
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto mr-6">
            {[
              { id: 'about', label: nav.about },
              { id: 'current-leadership', label: nav.leadership },
              { id: 'impact', label: nav.impact },
              { id: 'governance', label: nav.governance },
              { id: 'investment', label: nav.investment },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: nav.education },
              { id: 'contact', label: nav.contact }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-2 py-2 text-base font-serif tracking-wide transition-colors group ${
                  activeSection === id
                    ? 'text-gold'
                    : 'text-ivory/80 any-hover:text-ivory'
                }`}
              >
                {label}
                {/* Subtle gold underline on hover and when active */}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-px bg-gold transition-transform origin-left ${
                    activeSection === id ? 'scale-x-100' : 'scale-x-0 any-group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right side: Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
              aria-label="Toggle menu"
            >
              <span className={`h-px w-full bg-gold transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-px w-full bg-gold transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px w-full bg-gold transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gold/20 space-y-2">
            {[
              { id: 'about', label: nav.about },
              { id: 'current-leadership', label: nav.leadership },
              { id: 'impact', label: nav.impact },
              { id: 'governance', label: nav.governance },
              { id: 'investment', label: nav.investment },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: nav.education },
              { id: 'contact', label: nav.contact }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-4 py-3 text-base transition-colors border-l-2 ${
                  activeSection === id
                    ? 'text-gold bg-gold/5 border-gold'
                    : 'text-ivory/80 any-hover:text-ivory any-hover:bg-gold/5 border-transparent any-hover:border-gold'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}