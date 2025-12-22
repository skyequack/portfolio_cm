import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import About from '@/components/sections/About';
import CurrentLeadership from '@/components/sections/CurrentLeadership';
import Impact from '@/components/sections/Impact';
import Governance from '@/components/sections/Governance';
import CoreCompetencies from '@/components/sections/core';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function RootPage() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main className="snap-container">
        <Hero />
        <About />
        <Pillars />
        <CurrentLeadership />
        <Impact />
        <Governance />
        <CoreCompetencies />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
