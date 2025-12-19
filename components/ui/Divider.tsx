interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent ${className}`} />
  );
}
