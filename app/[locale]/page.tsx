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
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/types';

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen">
      <Header locale={locale} dictionary={dictionary} />
      <main>
        <Hero dictionary={dictionary} />
        <Pillars dictionary={dictionary} />
        <About dictionary={dictionary} />
        <CurrentLeadership dictionary={dictionary} />
        <Impact dictionary={dictionary} />
        <Governance dictionary={dictionary} />
        <Investment dictionary={dictionary} />
        <Experience dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
