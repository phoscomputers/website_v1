import React, { useState, useEffect } from 'react';
import { Monitor, Warehouse, Cpu, Sliders, ShieldAlert, ArrowRight, Wrench, Menu, X, PhoneCall } from 'lucide-react';
import PhosLogo from './PhosLogo';
import { playCyberSound } from '../utils/audio';

export default function Navbar({ onOpenRfp }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    playCyberSound('click');
    setDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-10 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080b]/95 border-b border-[#ff1e38]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md py-3'
            : 'bg-[#0a0b10]/80 border-b border-white/10 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center"
          >
            <PhosLogo className="h-8 md:h-9" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => scrollToSection('systems')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <Monitor className="w-4 h-4 text-zinc-500 hover:text-[#ff1e38]" />
              <span>Custom Systems</span>
            </button>

            <button
              onClick={() => scrollToSection('warehousing')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <Warehouse className="w-4 h-4 text-zinc-500 hover:text-[#ff1e38]" />
              <span>Enterprise Warehousing</span>
            </button>

            <button
              onClick={() => scrollToSection('systems')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <Cpu className="w-4 h-4 text-zinc-500 hover:text-[#ff1e38]" />
              <span>Parts & Laptops</span>
            </button>

            <button
              onClick={() => scrollToSection('configurator')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <Sliders className="w-4 h-4 text-zinc-500 hover:text-[#ff1e38]" />
              <span>Rig Matrix</span>
            </button>

            <button
              onClick={() => scrollToSection('infrastructure')}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer py-1"
            >
              <ShieldAlert className="w-4 h-4 text-zinc-500 hover:text-[#ff1e38]" />
              <span>QA Labs</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('configurator')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 hover:border-[#ff1e38]/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5 text-[#ff1e38]" />
              <span>Build Rig</span>
            </button>

            <button
              onClick={() => {
                playCyberSound('click');
                onOpenRfp ? onOpenRfp() : scrollToSection('b2b-rfp-section');
              }}
              className="btn-cyber px-4 md:px-5 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,30,56,0.35)]"
            >
              <span>Client B2B RFP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => {
                playCyberSound('click');
                setDrawerOpen(true);
              }}
              className="lg:hidden p-2 text-zinc-300 hover:text-white border border-zinc-800 rounded bg-zinc-900/60"
              aria-label="Toggle Navigation Drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-[#0d0e14] border-r border-[#ff1e38]/30 h-full p-6 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <PhosLogo className="h-7" />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <button
                  onClick={() => scrollToSection('systems')}
                  className="text-left py-2 font-medium text-zinc-200 border-b border-zinc-800/60 hover:text-[#ff1e38]"
                >
                  Custom Rigs & Battlestations
                </button>
                <button
                  onClick={() => scrollToSection('warehousing')}
                  className="text-left py-2 font-medium text-zinc-200 border-b border-zinc-800/60 hover:text-[#ff1e38]"
                >
                  50,000 Sq Ft Warehousing & Logistics
                </button>
                <button
                  onClick={() => scrollToSection('systems')}
                  className="text-left py-2 font-medium text-zinc-200 border-b border-zinc-800/60 hover:text-[#ff1e38]"
                >
                  Core GPUs, Parts & Laptops
                </button>
                <button
                  onClick={() => scrollToSection('configurator')}
                  className="text-left py-2 font-medium text-zinc-200 border-b border-zinc-800/60 hover:text-[#ff1e38]"
                >
                  Interactive Rig Matrix
                </button>
                <button
                  onClick={() => scrollToSection('infrastructure')}
                  className="text-left py-2 font-medium text-zinc-200 border-b border-zinc-800/60 hover:text-[#ff1e38]"
                >
                  Mil-Spec Testing & Burn-In Labs
                </button>
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenRfp ? onOpenRfp() : scrollToSection('b2b-rfp-section');
                  }}
                  className="text-left py-2 font-bold text-[#ff1e38] border-b border-zinc-800/60"
                >
                  Submit Client RFP / Quote
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#ff1e38]" />
                <span>B2B Direct: +1 (800) 840-PHOS</span>
              </div>
              <p>50,000 SQ FT WAREHOUSE NODE ACTIVE</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
