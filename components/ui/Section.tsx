interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'sand';
  spacing?: 'compact' | 'default' | 'relaxed';
}

export default function Section({ children, id, className = '', background = 'light', spacing }: SectionProps) {
  const bgClasses = {
    light: 'bg-ivory',
    dark: 'bg-charcoal text-ivory',
    sand: 'bg-sand'
  } as const;

  const spacingClasses = {
    compact: 'py-16 md:py-20',
    default: 'py-24 md:py-32',
    relaxed: 'py-32 md:py-40'
  } as const;

  return (
    <section id={id} className={`${spacing ? spacingClasses[spacing] : ''} ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
