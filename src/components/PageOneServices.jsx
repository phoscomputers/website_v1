import React from 'react';
import PhosLogo from './PhosLogo';
import { SERVICES_LIST } from '../data/services';
import { 
  Compass, 
  BadgePercent, 
  Truck, 
  Wrench, 
  Headphones, 
  LifeBuoy, 
  Boxes, 
  Laptop, 
  Monitor, 
  ArrowDown, 
  ShieldCheck,
  Zap,
  Warehouse
} from 'lucide-react';
import { playCyberSound } from '../utils/audio';

const iconMap = {
  Compass: Compass,
  BadgePercent: BadgePercent,
  Truck: Truck,
  Wrench: Wrench,
  Headphones: Headphones,
  LifeBuoy: LifeBuoy,
  Boxes: Boxes,
  Laptop: Laptop,
  Monitor: Monitor
};

export default function PageOneServices({ onNavigateToPage }) {
  return (
    <section id="page-1" className="min-h-screen pt-12 pb-24 relative flex flex-col justify-between z-10 border-b border-white/5">
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-7 w-full flex flex-col items-center text-center">
        
        {/* TOP CENTER LOGO */}
        <div className="flex flex-col items-center justify-center mb-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-3 rounded-2xl bg-gradient-to-b from-[#141622]/80 to-transparent border border-white/5 group-hover:border-[#ff1e38]/40 transition-all duration-300">
            <PhosLogo className="h-12 sm:h-16 md:h-20" showSubtext={false} />
          </div>
          
          <div className="flex items-center gap-3 mt-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#ff1e38]"></span>
            <span className="font-mono text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] text-zinc-400 font-bold uppercase">
              HIGH-PERFORMANCE HARDWARE & WAREHOUSING
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#ff1e38]"></span>
          </div>

          <p className="font-mono text-[11px] text-[#ff334b] tracking-widest mt-1 uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1e38] animate-ping"></span>
            <span>CUSTOM ENTHUSIAST RIGS • ENTERPRISE FLEETS • 50,000 SQ FT LOGISTICS</span>
          </p>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff1e38]/10 border border-[#ff1e38]/35 text-[#ff1e38] font-mono text-[11px] font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM COMPUTING SOLUTIONS</span>
          </div>
          <h1 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            OUR CORE <span className="text-[#ff1e38] drop-shadow-[0_0_25px_rgba(255,30,56,0.6)]">SERVICES</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto font-light leading-relaxed">
            From single custom water-cooled dream machines to bulk enterprise pallet procurement and lifetime hardware support.
          </p>
        </div>

        {/* 9 SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full text-left mb-14">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="glass-panel rounded-xl p-6 sm:p-7 relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff1e38]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,30,56,0.2)]"
              >
                {/* Tech corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff1e38]/20 rotate-45 border border-[#ff1e38]/30"></div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#ff1e38]/10 border border-[#ff1e38]/30 flex items-center justify-center text-[#ff1e38] group-hover:scale-110 group-hover:bg-[#ff1e38] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,30,56,0.15)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-600 group-hover:text-[#ff1e38] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-['Outfit'] font-black text-lg sm:text-xl text-white tracking-wide uppercase mb-1 group-hover:text-[#ff334b] transition-colors">
                    {service.title}
                  </h3>

                  <div className="font-mono text-[11px] font-bold text-[#ff1e38] tracking-wider uppercase mb-3">
                    {service.tagline}
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>DISPATCH CERTIFIED</span>
                  <span className="text-[#ff1e38]">PHOS PROTOCOL</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Page 2 */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => {
              playCyberSound('click');
              onNavigateToPage('page-2');
            }}
            className="btn-cyber px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-[0_0_25px_rgba(255,30,56,0.4)] hover:scale-105 transition-all"
          >
            <span>DISCOVER OUR TOP PCS (GAMING + AI)</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
          <span className="font-mono text-[11px] text-zinc-500">
            PAGE 01 / 03 • PROCEED TO FEATURED SILICON FLEET
          </span>
        </div>

      </div>

    </section>
  );
}
