import React from 'react';
import { FileText, Sliders, Warehouse, ShieldCheck, Zap, Activity } from 'lucide-react';
import ChassisVisualizer from './ChassisVisualizer';
import { playCyberSound } from '../utils/audio';

export default function Hero({ onOpenRfp }) {
  const scrollTo = (id) => {
    playCyberSound('click');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#ff1e38]/15 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-[#991122]/15 rounded-full filter blur-[120px] pointer-events-none"></div>

      {/* Cyber Grid Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-7 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141622]/90 border border-white/10 w-fit mb-6 font-mono text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff1e38] shadow-[0_0_8px_#ff1e38]"></span>
              <span className="tracking-widest uppercase text-[11px]">
                ENTERPRISE HARDWARE ARCHITECTS & BULK SUPPLY
              </span>
            </div>

            {/* Massive Heading */}
            <h1 className="font-['Outfit'] font-black tracking-tight leading-[1.05] text-4xl sm:text-6xl xl:text-[4.2rem] text-white uppercase mb-6">
              <span className="block text-zinc-400 font-bold text-2xl sm:text-3xl xl:text-4xl tracking-wider">
                ENGINEERED SUPREMACY.
              </span>
              <span>
                LIMITLESS <span className="text-[#ff1e38] drop-shadow-[0_0_35px_rgba(255,30,56,0.6)]">POWER.</span>
              </span>
              <span className="block font-mono font-semibold text-xs sm:text-sm tracking-[4px] text-zinc-500 mt-2">
                INDUSTRIAL SCALE WAREHOUSING.
              </span>
            </h1>

            {/* Subtitle / Value Prop */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              PHOS bridges bespoke enthusiast computing with enterprise industrial supply chains. From handcrafted liquid-chilled 8K battle stations and multi-GPU deep learning racks to multi-pallet inventory warehousing with guaranteed 24-hour OEM dispatch.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => {
                  playCyberSound('click');
                  onOpenRfp ? onOpenRfp() : scrollTo('b2b-rfp-section');
                }}
                className="btn-cyber px-6 py-3.5 rounded-md font-bold text-sm tracking-wider uppercase flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Enterprise Proposal</span>
              </button>

              <button
                onClick={() => scrollTo('configurator')}
                className="px-6 py-3.5 rounded-md font-semibold text-sm tracking-wider uppercase text-white bg-zinc-900 border border-zinc-700 hover:border-[#ff1e38] hover:bg-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-[#ff1e38]" />
                <span>Launch Rig Matrix</span>
              </button>

              <button
                onClick={() => scrollTo('warehousing')}
                className="px-5 py-3.5 rounded-md font-semibold text-sm tracking-wider uppercase text-zinc-400 hover:text-white border border-transparent hover:border-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Warehouse className="w-4 h-4" />
                <span>Tour Warehousing</span>
              </button>
            </div>

            {/* Hero Metric Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">15,400+</div>
                <div className="text-xs text-zinc-300 font-sans font-semibold mt-1">High-Spec Rigs Deployed</div>
                <div className="text-[10px] text-[#ff334b] mt-0.5">0.02% Failure Rate</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">50,000</div>
                <div className="text-xs text-zinc-300 font-sans font-semibold mt-1">Sq Ft Cleanroom Hub</div>
                <div className="text-[10px] text-[#ff334b] mt-0.5">Class-1000 ESD Safe</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 24 HRS</div>
                <div className="text-xs text-zinc-300 font-sans font-semibold mt-1">B2B Pallet Dispatch</div>
                <div className="text-[10px] text-[#ff334b] mt-0.5">Direct OEM Allocation</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99.98%</div>
                <div className="text-xs text-zinc-300 font-sans font-semibold mt-1">Fulfillment Accuracy</div>
                <div className="text-[10px] text-[#ff334b] mt-0.5">Barcode Serialization</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive 3D Chassis */}
          <div className="lg:col-span-5 relative">
            <ChassisVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
}
