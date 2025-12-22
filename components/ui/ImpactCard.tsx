import Image from 'next/image';

interface ImpactCardProps {
  company: string;
  role: string;
  description: string;
  result: string;
  logo?: string;
  resultLabel?: string;
}

export default function ImpactCard({ 
  company, 
  role, 
  description, 
  result, 
  logo,
  resultLabel = 'Result:' 
}: ImpactCardProps) {
  return (
    <div className="relative group h-full flex flex-col">
      <div className="bg-ivory border border-divider rounded-sm shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex flex-col h-full">
        
        {/* Header Section - Logo + Company Info */}
        <div className="flex gap-4 mb-6">
          {/* Square Logo */}
          <div className="shrink-0 w-16 h-16 bg-white border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300 overflow-hidden">
            {logo ? (
              <div className="relative w-full h-full p-2">
                <Image 
                  src={logo} 
                  alt={`${company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold/40 font-serif text-xs">LOGO</span>
              </div>
            )}
          </div>
          
          {/* Company Name & Role */}
          <div className="flex-1">
            <h3 className="text-xl font-serif text-charcoal mb-2 leading-tight">
              {company}
            </h3>
            <p className="text-xs text-gold font-medium uppercase tracking-wider">
              {role}
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-divider mb-6" />
        
        {/* Description */}
        <p className="text-base text-slate leading-relaxed mb-6 grow">
          {description}
        </p>
        
        {/* Result Section */}
        <div className="bg-sand/50 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 border-t border-divider mt-auto">
          <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">
            {resultLabel}
          </p>
          <p className="text-base text-charcoal font-medium leading-relaxed">
            {result}
          </p>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-300" />
      </div>
    </div>
  );
}
