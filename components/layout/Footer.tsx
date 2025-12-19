'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-divider/20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name */}
          <div className="text-center md:text-left">
            <h3 className="text-gold text-2xl font-serif mb-2">
              {locale === 'en' ? 'Yousef Rashid Al-Rashid' : 'يوسف راشد الرشيد'}
            </h3>
            <p className="text-slate text-sm">
              {locale === 'en' 
                ? 'Chairman | CEO | Principal Investor' 
                : 'رئيس مجلس الإدارة | الرئيس التنفيذي | المستثمر الرئيسي'
              }
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/yousef-rashid-al-rashid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory hover:text-gold transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-divider/10 text-center">
          <p className="text-slate text-xs">
            {year} © {locale === 'en' ? 'All rights reserved' : 'جميع الحقوق محفوظة'}
          </p>
        </div>
      </div>
    </footer>
  );
}
