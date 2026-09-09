import React from 'react';
import { Warehouse, ShieldCheck, Box, Truck, Network, Check, Activity, Clock, ShieldAlert } from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function WarehousingSection({ onOpenRfp }) {
  const pillars = [
    {
      id: '01 // CLEANROOM',
      icon: <ShieldAlert className="w-8 h-8 text-[#ff1e38]" />,
      title: 'Class-1000 Anti-Static Environment',
      desc: 'All unboxing, custom liquid loop fabrication, and component staging occurs on grounded conductive ESD flooring under automated humidity control to eliminate static risk.',
      points: [
        '24/7 Automated Temperature & RH Telemetry',
        'Grounded Continuous Wrist-Strap Staging Bays',
        'Anti-Shock Precision High-Density Crating'
      ]
    },
    {
      id: '02 // INVENTORY SCALING',
      icon: <Box className="w-8 h-8 text-[#ff1e38]" />,
      title: 'Pallet & Container-Level Allocations',
      desc: 'Direct factory partner contracts with NVIDIA, Intel, AMD, and ASUS bypass consumer middle-men. Whether you require 10 custom systems or 500 GPUs, reserve stock is staged.',
      points: [
        'Dedicated Master Carton & Skid Pallet Storage',
        'Serial-Numbered Digital Barcode Logging',
        'Transparent Chain of Custody Documentation'
      ],
      highlight: true
    },
    {
      id: '03 // FULFILLMENT SLA',
      icon: <Truck className="w-8 h-8 text-[#ff1e38]" />,
      title: '24-Hour Emergency Dispatch SLA',
      desc: 'Enterprise accounts gain access to our Hot-Swap Reserve. If a mission-critical workstation or GPU fails on set or in production, an identical replacement node is dispatched within hours.',
      points: [
        'Next-Flight-Out (NFO) Priority Air Freight',
        'Dedicated Senior Logistics Account Manager',
        'Armored Transport for Ultra-High-Value Racks'
      ]
    },
    {
      id: '04 // PROVISIONING',
      icon: <Network className="w-8 h-8 text-[#ff1e38]" />,
      title: 'Turnkey Fleet Golden Image Provisioning',
      desc: 'Eliminate internal IT downtime. Our certified facility technicians apply enterprise BIOS configurations, flash custom OS golden images, and laser asset tag every single system.',
      points: [
        'Custom MAC Address & Asset Tag Registry',
        'PXE Boot / Enterprise Image Pre-Flashing',
        'Individual Thermal Burn-In Certificates'
      ]
    }
  ];

  return (
    <section id="warehousing" className="py-24 bg-gradient-to-b from-[#08090d] via-[#0d0f17] to-[#08090d] border-y border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#ff1e38]/10 border border-[#ff1e38]/40 text-[#ff1e38] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Warehouse className="w-3.5 h-3.5" />
            <span>ENTERPRISE INFRASTRUCTURE & SUPPLY CHAIN</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-5">
            50,000+ SQ FT INDUSTRIAL WAREHOUSING
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We are not just a boutique custom builder. PHOS operates high-capacity, climate-controlled, ESD-certified logistics hubs engineered to stage, stress-test, and deploy hardware fleets at scale.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                pillar.highlight ? 'border-[#ff1e38]/40 bg-gradient-to-b from-[#ff1e38]/10 to-[#12141f]/90' : ''
              }`}
            >
              <div className="mb-5">{pillar.icon}</div>
              <div className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest uppercase mb-2">
                {pillar.id}
              </div>
              <h3 className="font-bold text-lg text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                {pillar.desc}
              </p>

              <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-300 border-t border-white/5 pt-4">
                {pillar.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff1e38] shrink-0" />
                    <span className="text-[11px]">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Live Warehouse Logistics Telemetry Blueprint Box */}
        <div className="glass-panel rounded-xl p-6 sm:p-8 border border-[#ff1e38]/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff1e38] animate-ping"></span>
              <span>PHOS LOGISTICS NETWORK TELEMETRY // PRIMARY HUB</span>
            </div>
            <div className="text-zinc-500 text-[11px]">
              FACILITY: 37.7749° N, 122.4194° W | DISPATCH PROTOCOL: OPTIMAL
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center border-b border-white/10">
            <div>
              <div className="font-mono text-2xl sm:text-4xl font-extrabold text-white">50,000+</div>
              <div className="text-zinc-400 text-xs sm:text-sm mt-1">Sq Ft Protected Cleanroom</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-4xl font-extrabold text-white">$14.2M+</div>
              <div className="text-zinc-400 text-xs sm:text-sm mt-1">Active Staged Inventory</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-4xl font-extrabold text-white">99.98%</div>
              <div className="text-zinc-400 text-xs sm:text-sm mt-1">Warehouse Dispatch Accuracy</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-4xl font-extrabold text-[#ff1e38]">&lt; 15 Min</div>
              <div className="text-zinc-400 text-xs sm:text-sm mt-1">Emergency Part Pull Latency</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-5 gap-4">
            <button
              onClick={() => {
                playCyberSound('click');
                onOpenRfp ? onOpenRfp('warehousing') : document.getElementById('b2b-rfp-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cyber px-6 py-3 rounded text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <Warehouse className="w-4 h-4" />
              <span>Request Warehouse B2B Account</span>
            </button>
            <span className="text-zinc-500 font-mono text-xs text-center sm:text-right">
              * Mutual Non-Disclosure Agreement (NDA) & Master Service Agreement (MSA) available instantly
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
