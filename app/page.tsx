'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import About from '@/components/sections/About';
import CurrentLeadership from '@/components/sections/CurrentLeadership';
import Impact from '@/components/sections/Impact';
import Governance from '@/components/sections/Governance';
import Investment from '@/components/sections/Investment';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Pillars />
          <About />
          <CurrentLeadership />
          <Impact />
          <Governance />
          <Investment />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

