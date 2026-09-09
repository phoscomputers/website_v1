import React from 'react';
import { ShieldCheck, Activity, Flame, Gauge, CheckSquare, PackageCheck } from 'lucide-react';

export default function QALabs() {
  const steps = [
    {
      num: '01',
      title: '72-Hour Prime95 & FurMark Soak',
      desc: 'Both CPU and GPU silicon cores are simultaneously saturated at 100% TDP for 72 continuous hours inside a 35°C ambient thermal test chamber. Zero thermal throttling is tolerated.'
    },
    {
      num: '02',
      title: '1.5 BAR Pressure Leak Testing',
      desc: 'All custom liquid loops undergo pneumatic dry pressure leak tests at 1.5 BAR prior to coolant injection, followed by 24 hours of ultrasonic flow rate & dye inspection.'
    },
    {
      num: '03',
      title: 'Individual Memory Bit Auditing',
      desc: 'MemTest86 Pro 4-cycle pass on every memory kit. We verify extreme XMP/EXPO sub-timings to eliminate micro-stutters and random memory corruption under heavy database or render loads.'
    },
    {
      num: '04',
      title: 'Expanding Instapak Chassis Bracing',
      desc: 'Custom liquid systems and heavy PCIe GPUs are packed with expanding Instapak foam inside the chassis to brace components during transit, enclosed in heavy-duty dual-wall freight crating.'
    }
  ];

  return (
    <section id="infrastructure" className="py-24 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff1e38]/10 border border-[#ff1e38]/40 text-[#ff1e38] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ZERO MARGIN FOR ERROR</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            MIL-SPEC QUALITY & BURN-IN PROTOCOL
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Why our custom systems and pallet deliveries never blue-screen in high-stakes studio, lab, or tournament environments. We torture test before crating.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-7 flex flex-col relative transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="font-mono text-4xl font-extrabold text-[#ff1e38]/20 mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
