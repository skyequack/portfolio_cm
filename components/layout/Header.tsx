import Link from 'next/link';
import type { Locale, Dictionary } from '@/lib/i18n/types';

export default function Header({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const nav = dictionary.nav as { [key: string]: string };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-divider/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gold text-xl font-serif tracking-wide hover:text-muted-gold transition-colors"
          >
            {locale === 'en' ? 'YRA' : 'ي ر'}
          </button>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              {nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              {nav.leadership}
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              {nav.impact}
            </button>
            <button 
              onClick={() => scrollToSection('governance')}
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              {nav.governance}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              {nav.contact}
            </button>
          </div>

          {/* Language Toggle - Now a Link */}
          <Link
            href={`/${toggleLocale}`}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-royal-green hover:bg-deep-green text-ivory transition-all text-sm font-medium"
          >
            <span>{locale === 'en' ? 'العربية' : 'EN'}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
