'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function LocaleHtmlWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = pathname.startsWith('/ar') ? 'ar' : 'en';
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return <>{children}</>;
}
