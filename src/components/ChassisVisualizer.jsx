import React, { useState, useRef } from 'react';
import { Zap, Snowflake, MemoryStick, Gauge } from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function ChassisVisualizer() {
  const [colorMode, setColorMode] = useState('crimson');
  const [transformStyle, setTransformStyle] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = (-y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 10;

    setTransformStyle(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  const getGlowColor = () => {
    switch (colorMode) {
      case 'crimson':
        return 'rgba(255, 30, 56, 0.55)';
      case 'stealth':
        return 'rgba(148, 163, 184, 0.25)';
      case 'cyber':
        return 'rgba(0, 240, 255, 0.55)';
      case 'amber':
        return 'rgba(255, 170, 0, 0.55)';
      default:
        return 'rgba(255, 30, 56, 0.55)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className="relative bg-gradient-to-b from-[#161824]/90 to-[#0c0d13]/95 border border-[#ff1e38]/35 rounded-xl p-5 md:p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_35px_rgba(255,30,56,0.15)] backdrop-blur-md transition-transform duration-150 ease-out select-none"
    >
      {/* Corner crosshairs */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#ff1e38]"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#ff1e38]"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#ff1e38]"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#ff1e38]"></div>

      {/* Card Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#ff1e38] font-bold">
          <span className="w-2 h-2 rounded-full bg-[#ff1e38] animate-pulse"></span>
          <span>PROFILE: PHOS-APEX // MK-VII</span>
        </div>
        <span className="text-zinc-500 text-[11px]">SERIAL: #PH-9824-OC</span>
      </div>

      {/* Main Hardware Viewport Frame */}
      <div className="relative h-[340px] md:h-[370px] my-5 bg-[#07080c]/80 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
        
        {/* Dynamic RGB Glow inside chassis */}
        <div
          className="absolute inset-4 rounded-lg filter blur-2xl transition-all duration-500 pointer-events-none opacity-60"
          style={{ background: `radial-gradient(circle, ${getGlowColor()} 0%, transparent 70%)` }}
        ></div>

        {/* The Physical Chassis Artwork */}
        <div className="relative w-56 h-72 bg-gradient-to-b from-[#191c28] to-[#0e1017] border-2 border-zinc-700/80 rounded-lg shadow-[inset_0_0_30px_#000] p-3 flex flex-col justify-between overflow-hidden">
          
          {/* Hardline Liquid Tubes */}
          <div className="absolute top-6 left-8 w-36 h-24 border-l-4 border-t-4 border-[#ff1e38]/80 rounded-tl-xl shadow-[0_0_12px_rgba(255,30,56,0.6)]">
            {/* Animated liquid pulse */}
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#ff1e38] animate-ping"></div>
          </div>

          {/* RAM Array */}
          <div className="absolute top-7 right-8 flex gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 h-10 bg-zinc-800 border-t-2 transition-colors duration-300"
                style={{ borderColor: colorMode === 'crimson' ? '#ff1e38' : colorMode === 'cyber' ? '#00f0ff' : colorMode === 'amber' ? '#ffaa00' : '#888' }}
              ></div>
            ))}
          </div>

          {/* GPU Backplate with Spinning Fans */}
          <div className="mt-auto mb-10 bg-[#1b1f2e] border border-zinc-600 rounded p-2 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] font-bold text-[#ff334b] tracking-wider">
                RTX 4090 OC 24GB
              </span>
              <span className="text-[9px] font-mono text-zinc-400">GEN5 READY</span>
            </div>

            <div className="flex justify-around items-center py-1">
              {[1, 2, 3].map((fan) => (
                <div
                  key={fan}
                  className="w-9 h-9 rounded-full border border-dashed border-zinc-500/80 flex items-center justify-center spin-fan"
                >
                  <div className="w-2 h-2 rounded-full bg-[#ff1e38]/70"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Sleeved Cable Traces */}
          <div className="absolute bottom-3 right-6 flex gap-1">
            <span className="w-1 h-7 bg-[#ff1e38] rounded-full shadow-[0_0_6px_#ff1e38]"></span>
            <span className="w-1 h-7 bg-zinc-800 rounded-full"></span>
            <span className="w-1 h-7 bg-[#ff1e38] rounded-full shadow-[0_0_6px_#ff1e38]"></span>
          </div>

        </div>

        {/* Floating Holographic Spec Pills */}
        <div className="absolute top-4 right-4 glass-pill px-3 py-2 rounded-lg flex items-center gap-2.5 shadow-lg border border-[#ff1e38]/40 hover:scale-105 transition-transform">
          <Zap className="w-4 h-4 text-[#ff1e38]" />
          <div className="text-left">
            <div className="text-[11px] font-bold text-white">Intel Core i9-14900KS</div>
            <div className="font-mono text-[9px] text-zinc-400">6.2 GHz Peak Turbo OC</div>
          </div>
        </div>

        <div className="absolute top-36 left-3 glass-pill px-3 py-2 rounded-lg flex items-center gap-2.5 shadow-lg border border-[#ff1e38]/40 hover:scale-105 transition-transform">
          <Snowflake className="w-4 h-4 text-[#ff1e38]" />
          <div className="text-left">
            <div className="text-[11px] font-bold text-white">Dual 480mm Hardline</div>
            <div className="font-mono text-[9px] text-zinc-400">Sub-28°C Idle / Liquid Chilled</div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 glass-pill px-3 py-2 rounded-lg flex items-center gap-2.5 shadow-lg border border-[#ff1e38]/40 hover:scale-105 transition-transform">
          <MemoryStick className="w-4 h-4 text-[#ff1e38]" />
          <div className="text-left">
            <div className="text-[11px] font-bold text-white">128GB DDR5 7200MHz</div>
            <div className="font-mono text-[9px] text-zinc-400">Ultra Low Latency CL30</div>
          </div>
        </div>

      </div>

      {/* Card Footer: Lighting Mode Switcher & 3DMark Bench Score */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-500 font-bold uppercase">LED SYNTH:</span>
          <div className="flex gap-1.5">
            {[
              { mode: 'crimson', bg: 'bg-[#ff1e38]', title: 'Crimson Laser' },
              { mode: 'stealth', bg: 'bg-zinc-600', title: 'Stealth Carbon' },
              { mode: 'cyber', bg: 'bg-[#00f0ff]', title: 'Cyber Cyan' },
              { mode: 'amber', bg: 'bg-[#ffaa00]', title: 'Thermal Amber' }
            ].map(({ mode, bg, title }) => (
              <button
                key={mode}
                onClick={() => {
                  playCyberSound('click');
                  setColorMode(mode);
                }}
                title={title}
                className={`w-4 h-4 rounded-full ${bg} transition-all cursor-pointer ${
                  colorMode === mode ? 'ring-2 ring-white scale-125' : 'opacity-70 hover:opacity-100'
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
          <Gauge className="w-3.5 h-3.5 text-[#ff1e38]" />
          <span>3DMARK SCORE:</span>
          <strong className="text-[#ff1e38] font-bold">39,420</strong>
        </div>
      </div>

    </div>
  );
}
