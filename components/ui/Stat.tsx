interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export default function Stat({ value, label, className = '' }: StatProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-5xl md:text-6xl font-serif text-gold mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-slate text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
