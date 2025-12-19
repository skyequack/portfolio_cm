'use client';

import { useState } from 'react';

export default function Header() {
  const nav = {
    about: 'About',
    leadership: 'Leadership',
    impact: 'Impact',
    governance: 'Governance',
    investment: 'Investment',
    contact: 'Contact',
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/98 backdrop-blur-md border-b border-gold/20">
      <nav className="container mx-auto pl-6 pr-6 py-8 md:py-10">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="relative group -ml-6"
          >
            <div className="flex items-center gap-3">
              {/* Monogram box with gold accent */}
              <div className="relative w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                <span className="text-gold text-xl font-serif tracking-tighter">YR</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold" />
              </div>
              {/* Full name on larger screens */}
              <span className="hidden lg:block text-ivory text-base font-serif tracking-wide group-hover:text-gold transition-colors">
                Yousef Rashid Al-Rashid
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto mr-6">
            {[
              { id: 'about', label: nav.about },
              { id: 'journey', label: nav.leadership },
              { id: 'impact', label: nav.impact },
              { id: 'governance', label: nav.governance },
              { id: 'contact', label: nav.contact }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative px-2 py-2 text-ivory/80 hover:text-ivory text-base font-serif tracking-wide transition-colors group"
              >
                {label}
                {/* Subtle gold underline on hover */}
                <span className="absolute bottom-0 left-2 right-2 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
              { id: 'journey', label: nav.leadership },
              { id: 'impact', label: nav.impact },
              { id: 'governance', label: nav.governance },
              { id: 'contact', label: nav.contact }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 text-ivory/80 hover:text-ivory hover:bg-gold/5 text-base transition-colors border-l-2 border-transparent hover:border-gold"
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
