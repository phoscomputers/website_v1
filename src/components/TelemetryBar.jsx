import React, { useState } from 'react';
import { Volume2, VolumeX, Cpu, Warehouse, Truck, ShieldCheck, Server } from 'lucide-react';
import { toggleAudio, isSoundEnabled } from '../utils/audio';

export default function TelemetryBar({ onAudioToggled }) {
  const [soundOn, setSoundOn] = useState(false);

  const handleAudioToggle = () => {
    const newState = toggleAudio();
    setSoundOn(newState);
    if (onAudioToggled) {
      onAudioToggled(newState);
    }
  };

  return (
    <div className="bg-[#08090c]/95 border-b border-[#ff1e38]/25 h-10 sticky top-0 z-50 backdrop-blur-md font-['JetBrains_Mono'] text-xs select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7 h-full flex items-center justify-between gap-4">
        
        {/* Warehouse Node Status Indicator */}
        <div className="flex items-center gap-2 text-[#ff334b] font-bold tracking-wider whitespace-nowrap text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1e38] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1e38]"></span>
          </span>
          <span>NODE #01: ONLINE</span>
        </div>

        {/* Scrolling Ticker Stream */}
        <div className="overflow-hidden whitespace-nowrap flex-1 [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
          <div className="animate-ticker">
            <span className="inline-flex items-center gap-1.5 mr-10 text-zinc-400 text-[11px] tracking-wide">
              <Cpu className="w-3.5 h-3.5 text-[#ff1e38]" /> 
              INVENTORY ALLOCATION: 1,420+ RTX 4090 / NEXT-GEN TIERS IN STAGING
            </span>
            <span className="inline-flex items-center gap-1.5 mr-10 text-zinc-400 text-[11px] tracking-wide">
              <Warehouse className="w-3.5 h-3.5 text-[#ff1e38]" /> 
              50,000 SQ FT ESD-CLASS CLEANROOM LOGISTICS FACILITY ACTIVE
            </span>
            <span className="inline-flex items-center gap-1.5 mr-10 text-zinc-400 text-[11px] tracking-wide">
              <Truck className="w-3.5 h-3.5 text-[#ff1e38]" /> 
              24-HR ENTERPRISE PALLET FULFILLMENT SLA: 99.98% ON-SCHEDULE
            </span>
            <span className="inline-flex items-center gap-1.5 mr-10 text-zinc-400 text-[11px] tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff1e38]" /> 
              FACTORY SEALED OEM HARDWARE WITH 72-HR PRIME95 BURN-IN CERT
            </span>
            <span className="inline-flex items-center gap-1.5 mr-10 text-zinc-400 text-[11px] tracking-wide">
              <Server className="w-3.5 h-3.5 text-[#ff1e38]" /> 
              ENTERPRISE THREADRIPPER PRO & XEON CLUSTERS DEPLOYABLE
            </span>
          </div>
        </div>

        {/* Telemetry Actions */}
        <div className="flex items-center gap-4 whitespace-nowrap text-[11px]">
          <button
            onClick={handleAudioToggle}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded border transition-colors ${
              soundOn 
                ? 'border-[#ff1e38] text-[#ff1e38] bg-[#ff1e38]/10' 
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
            title="Toggle Cybernetic Sound Effects"
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>SFX: {soundOn ? 'ON' : 'OFF'}</span>
          </button>
          <span className="hidden sm:inline text-zinc-600 text-[10px]">REGION: US-EAST // GLOBAL B2B</span>
        </div>

      </div>
    </div>
  );
}
