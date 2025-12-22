interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-ivory border border-divider rounded-sm shadow-sm any-hover:shadow-xl any-hover:border-gold/30 any-hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
