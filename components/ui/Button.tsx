interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = 'rounded-sm font-medium transition-all duration-300 text-sm tracking-wide hover:scale-105 hover:shadow-lg active:scale-95';
  
  const variantClasses = {
    primary: 'bg-charcoal text-gold hover:bg-deep-green hover:text-ivory border border-gold/30 hover:border-gold',
    secondary: 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal hover:shadow-gold/20'
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
