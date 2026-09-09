import React from 'react';
import PhosLogo from './PhosLogo';
import { ShieldCheck, Lock, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 pb-8 relative z-10 text-xs">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <PhosLogo className="h-8 mb-4" />
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Precision enthusiast battle-stations, AI deep learning computing towers, and industrial-scale 50,000 sq ft hardware warehousing.
            </p>

            <div className="flex flex-col gap-2 font-mono text-[11px] text-zinc-500">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 CERTIFIED ASSEMBLY</span>
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                <span>CLASS-1000 ESD PROTECTED CLEANROOM</span>
              </span>
            </div>
          </div>

          {/* Systems Col */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
              Systems & Fleet
            </h4>
            <button onClick={() => scrollTo('systems')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Custom Enthusiast Rigs
            </button>
            <button onClick={() => scrollTo('systems')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              AI & LLM Workstations
            </button>
            <button onClick={() => scrollTo('systems')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Precision Creator Laptops
            </button>
            <button onClick={() => scrollTo('configurator')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Interactive Rig Matrix
            </button>
            <button onClick={() => scrollTo('infrastructure')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              72-Hour Burn-In Protocol
            </button>
          </div>

          {/* Warehousing Col */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2">
              Enterprise Logistics
            </h4>
            <button onClick={() => scrollTo('warehousing')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              50,000 Sq Ft Logistics Hub
            </button>
            <button onClick={() => scrollTo('warehousing')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Pallet & Container Allocations
            </button>
            <button onClick={() => scrollTo('warehousing')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              24-Hour Hot Swap SLA
            </button>
            <button onClick={() => scrollTo('warehousing')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Golden OS Image Provisioning
            </button>
            <button onClick={() => scrollTo('b2b-rfp-section')} className="text-left text-zinc-400 hover:text-[#ff1e38] transition-colors">
              Request B2B Credit Line
            </button>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 flex flex-col gap-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Operations & Support
            </h4>
            <div className="flex items-center gap-2 text-zinc-300">
              <PhoneCall className="w-3.5 h-3.5 text-[#ff1e38]" />
              <span>+1 (800) 840-PHOS</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Mail className="w-3.5 h-3.5 text-[#ff1e38]" />
              <span>ops@phos-hardware.com</span>
            </div>
            <div className="flex items-start gap-2 text-zinc-500 text-[11px] leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-[#ff1e38] shrink-0 mt-0.5" />
              <span>Logistics Node: 1400 Industrial Parkway, Tech Corridor</span>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>All Warehouses Dispatch Ready</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} PHOS COMPUTING ARCHITECTS & WAREHOUSING LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Enterprise SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
