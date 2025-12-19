interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-ivory border border-divider rounded-sm shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
}
