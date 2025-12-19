export type Locale = 'en' | 'ar';

export interface Dictionary {
  [key: string]: string | Dictionary | string[];
}
