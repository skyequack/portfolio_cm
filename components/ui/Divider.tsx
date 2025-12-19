interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`h-px ${className}`}
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(201,162,77,0.3), rgba(0,0,0,0))'
      }}
    />
  );
}
