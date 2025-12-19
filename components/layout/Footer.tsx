export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-gold/10">
            
            {/* Left: Name & Monogram */}
            <div className="flex items-center gap-4">

              
              {/* Name & Title */}
              <div>
                <h3 className="text-ivory text-xl font-serif mb-1 tracking-wide">
                  Yousef Rashid Al-Rashid
                </h3>
                <p className="text-sand/70 text-sm font-serif">
                  Chairman | CEO | Principal Investor
                </p>
              </div>
            </div>

            {/* Right: Contact */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/yousef-rashid-al-rashid"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 border border-gold/30 hover:border-gold text-ivory hover:text-gold transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-serif">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate/60 text-xs font-serif tracking-wider">
              {year} © Yousef Rashid Al-Rashid. All rights reserved.
            </p>
            
            {/* Optional decoration */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rotate-45" />
              <div className="w-12 h-px bg-gold/30" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
