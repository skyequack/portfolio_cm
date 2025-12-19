interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'sand';
}

export default function Section({ children, id, className = '', background = 'light' }: SectionProps) {
  const bgClasses = {
    light: 'bg-ivory',
    dark: 'bg-charcoal text-ivory',
    sand: 'bg-sand'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
