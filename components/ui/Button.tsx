interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = 'rounded-sm font-medium transition-all duration-300 text-sm tracking-wide';
  
  const variantClasses = {
    primary: 'bg-charcoal text-gold hover:bg-deep-green hover:text-ivory border border-gold/30',
    secondary: 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
