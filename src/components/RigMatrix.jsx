import React, { useState } from 'react';
import { Sliders, Gamepad2, Brain, Boxes, Server, Zap, Check, Copy, FileText, ChevronRight } from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function RigMatrix({ onConfigureComplete, onShowToast }) {
  const [purpose, setPurpose] = useState('gaming');
  const [cpu, setCpu] = useState('i9');
  const [gpu, setGpu] = useState('rtx4090');
  const [ram, setRam] = useState('96');
  const [storage, setStorage] = useState('4');

  const baseChassisCost = 850;

  const purposeOptions = [
    { id: 'gaming', label: 'Extreme 4K/8K Gaming', icon: <Gamepad2 className="w-4 h-4 text-[#ff1e38]" /> },
    { id: 'aiml', label: 'AI & LLM Training', icon: <Brain className="w-4 h-4 text-[#ff1e38]" /> },
    { id: 'vfx', label: 'VFX / 3D Unreal Engine', icon: <Boxes className="w-4 h-4 text-[#ff1e38]" /> },
    { id: 'enterprise', label: 'Corporate Dev Fleet', icon: <Server className="w-4 h-4 text-[#ff1e38]" /> },
  ];

  const cpuOptions = [
    { id: 'i9', name: 'Intel Core i9-14900KS', desc: '24C / 32T Up to 6.2 GHz', price: 620, power: 280 },
    { id: 'r9', name: 'AMD Ryzen 9 7950X3D', desc: '16C / 32T 3D V-Cache', price: 580, power: 210 },
    { id: 'threadripper', name: 'AMD Threadripper Pro 7975WX', desc: '32C / 64T Compute', price: 4900, power: 450 },
  ];

  const gpuOptions = [
    { id: 'rtx4090', name: 'NVIDIA RTX 4090 24GB', desc: 'Unthrottled 4K Ray-Tracing', price: 2100, power: 480, fps: 165 },
    { id: 'rtx4080s', name: 'NVIDIA RTX 4080 Super 16GB', desc: 'Ultra High-FPS Esports', price: 1150, power: 340, fps: 130 },
    { id: 'rtx6000', name: 'NVIDIA RTX 6000 Ada 48GB', desc: 'Enterprise Workstation ECC', price: 7200, power: 650, fps: 190 },
  ];

  const ramOptions = [
    { id: '64', label: '64GB DDR5 6400MHz Low-Latency', price: 240 },
    { id: '96', label: '96GB DDR5 7200MHz Corsair Dominator', price: 390 },
    { id: '128', label: '128GB DDR5 6000MHz Quad-Channel', price: 550 },
    { id: '256', label: '256GB ECC Registered High-Compute', price: 1600 },
  ];

  const storageOptions = [
    { id: '2', label: '2TB Gen4 NVMe (7,400 MB/s)', price: 180 },
    { id: '4', label: '4TB Gen5 Extreme NVMe (12,400 MB/s)', price: 380 },
    { id: '8', label: '8TB Dual Gen5 RAID-0 Stripe', price: 780 },
    { id: '16', label: '16TB Enterprise U.2 SSD Array', price: 1850 },
  ];

  const selectedCpuObj = cpuOptions.find(c => c.id === cpu);
  const selectedGpuObj = gpuOptions.find(g => g.id === gpu);
  const selectedRamObj = ramOptions.find(r => r.id === ram);
  const selectedStorageObj = storageOptions.find(s => s.id === storage);

  const totalComponents = (selectedCpuObj?.price || 0) + (selectedGpuObj?.price || 0) + (selectedRamObj?.price || 0) + (selectedStorageObj?.price || 0);
  const grandTotal = baseChassisCost + totalComponents;
  const totalWatts = (selectedCpuObj?.power || 0) + (selectedGpuObj?.power || 0) + 130;

  let baseFps = selectedGpuObj?.fps || 140;
  if (cpu === 'threadripper' && purpose !== 'aiml') baseFps = Math.round(baseFps * 1.08);
  else if (cpu === 'r9') baseFps = Math.round(baseFps * 1.05);

  const fpsBarWidth = Math.min(100, Math.round((baseFps / 220) * 100));
  const generatedSku = `PHOS-${purpose.toUpperCase().slice(0, 3)}-${cpu.toUpperCase()}-${gpu.toUpperCase()}`;

  const handleCopySpec = () => {
    playCyberSound('click');
    const specSheet = `PHOS SYSTEM SPECIFICATION SHEET\n` +
      `SKU: ${generatedSku}\n` +
      `Target Workload: ${purposeOptions.find(p => p.id === purpose)?.label}\n` +
      `CPU: ${selectedCpuObj?.name}\n` +
      `GPU: ${selectedGpuObj?.name}\n` +
      `RAM: ${selectedRamObj?.label}\n` +
      `Storage: ${selectedStorageObj?.label}\n` +
      `Estimated Draw: ${totalWatts}W\n` +
      `Total Estimated Price: $${grandTotal.toLocaleString()}\n` +
      `72-Hour Burn-In Certified | ISO 9001 ESD Safe Warehouse Dispatch`;

    navigator.clipboard.writeText(specSheet).then(() => {
      onShowToast('System specification sheet copied to clipboard!');
    });
  };

  const handleSendToRfp = () => {
    playCyberSound('click');
    const configData = {
      sku: generatedSku,
      purpose: purposeOptions.find(p => p.id === purpose)?.label,
      cpu: selectedCpuObj?.name,
      gpu: selectedGpuObj?.name,
      ram: selectedRamObj?.label,
      storage: selectedStorageObj?.label,
      price: `$${grandTotal.toLocaleString()}`,
      watts: `${totalWatts}W`
    };

    if (onConfigureComplete) {
      onConfigureComplete(configData);
    }
  };

  return (
    <section id="configurator" className="py-24 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff1e38]/10 border border-[#ff1e38]/40 text-[#ff1e38] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>REAL-TIME SYSTEM ARCHITECT</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            PHOS INTERACTIVE RIG MATRIX
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Choose your target deployment, configure silicon tiers, and review live hardware telemetry: projected 4K ray-traced frame rates, peak power curves, and instant procurement pricing.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-6 sm:p-8 flex flex-col gap-7">
            
            {/* Step 1: Workload */}
            <div>
              <label className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                <span className="bg-[#ff1e38] text-white text-[10px] px-1.5 py-0.5 rounded">01</span>
                <span>PRIMARY WORKLOAD PROFILE</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {purposeOptions.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      playCyberSound('click');
                      setPurpose(p.id);
                    }}
                    className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      purpose === p.id
                        ? 'border-[#ff1e38] bg-[#ff1e38]/15 text-white shadow-[0_0_12px_rgba(255,30,56,0.2)]'
                        : 'border-white/5 bg-[#090b10] text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {p.icon}
                    <span className="font-medium text-xs sm:text-sm">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: CPU */}
            <div>
              <label className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                <span className="bg-[#ff1e38] text-white text-[10px] px-1.5 py-0.5 rounded">02</span>
                <span>PROCESSOR ARCHITECTURE</span>
              </label>
              <div className="flex flex-col gap-2">
                {cpuOptions.map(c => (
                  <button
                    key={c.id}
                    onClick={() => {
                      playCyberSound('click');
                      setCpu(c.id);
                    }}
                    className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      cpu === c.id
                        ? 'border-[#ff1e38] bg-[#ff1e38]/15 text-white shadow-[0_0_12px_rgba(255,30,56,0.2)]'
                        : 'border-white/5 bg-[#090b10] text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-white">{c.name}</div>
                      <div className="font-mono text-[10px] text-zinc-400">{c.desc}</div>
                    </div>
                    <div className="font-mono text-xs font-bold text-[#ff334b]">
                      +${c.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: GPU */}
            <div>
              <label className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                <span className="bg-[#ff1e38] text-white text-[10px] px-1.5 py-0.5 rounded">03</span>
                <span>GPU GRAPHICS ACCELERATION</span>
              </label>
              <div className="flex flex-col gap-2">
                {gpuOptions.map(g => (
                  <button
                    key={g.id}
                    onClick={() => {
                      playCyberSound('click');
                      setGpu(g.id);
                    }}
                    className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      gpu === g.id
                        ? 'border-[#ff1e38] bg-[#ff1e38]/15 text-white shadow-[0_0_12px_rgba(255,30,56,0.2)]'
                        : 'border-white/5 bg-[#090b10] text-zinc-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-white">{g.name}</div>
                      <div className="font-mono text-[10px] text-zinc-400">{g.desc}</div>
                    </div>
                    <div className="font-mono text-xs font-bold text-[#ff334b]">
                      +${g.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4 & 5: RAM & Storage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  <span className="bg-[#ff1e38] text-white text-[10px] px-1.5 py-0.5 rounded">04</span>
                  <span>MEMORY (DDR5)</span>
                </label>
                <select
                  value={ram}
                  onChange={(e) => {
                    playCyberSound('click');
                    setRam(e.target.value);
                  }}
                  className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-mono focus:border-[#ff1e38] outline-none"
                >
                  {ramOptions.map(r => (
                    <option key={r.id} value={r.id} className="bg-zinc-900 text-white">
                      {r.label} (+${r.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  <span className="bg-[#ff1e38] text-white text-[10px] px-1.5 py-0.5 rounded">05</span>
                  <span>STORAGE (NVMe)</span>
                </label>
                <select
                  value={storage}
                  onChange={(e) => {
                    playCyberSound('click');
                    setStorage(e.target.value);
                  }}
                  className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-mono focus:border-[#ff1e38] outline-none"
                >
                  {storageOptions.map(s => (
                    <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                      {s.label} (+${s.price})
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Telemetry Output Display Column */}
          <div className="lg:col-span-5 glass-panel rounded-xl p-6 sm:p-8 lg:sticky lg:top-24 border border-[#ff1e38]/30 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#ff1e38] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#ff1e38] animate-ping"></span>
                <span>ARCHITECT TELEMETRY ENGINE</span>
              </div>
              <span className="text-zinc-500 font-bold">{generatedSku}</span>
            </div>

            {/* Gauges */}
            <div className="py-6 border-b border-white/10 flex flex-col gap-5">
              
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1.5">
                  <span>PROJECTED 4K CYBERPUNK / UE5 FPS</span>
                  <strong className="text-white text-sm">{baseFps} FPS</strong>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff1e38] to-[#ff6677] transition-all duration-500 rounded-full"
                    style={{ width: `${fpsBarWidth}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">ESTIMATED PEAK DRAW</span>
                  <div className="text-xl font-bold text-white">{totalWatts}W</div>
                  <span className="text-[10px] text-zinc-500">Rec: 1200W Titanium</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">THERMAL STABILITY</span>
                  <div className="text-xl font-bold text-emerald-400">99.4%</div>
                  <span className="text-[10px] text-zinc-500">Grade A+ Dual-Rad</span>
                </div>
              </div>

            </div>

            {/* Price Breakdown */}
            <div className="py-5 border-b border-white/10 flex flex-col gap-2.5 font-mono text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Chassis, Loop & Staging:</span>
                <span className="text-white">${baseChassisCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Silicon Array:</span>
                <span className="text-white">${totalComponents.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>72-Hr Stress Validation & Warranty:</span>
                <span className="font-bold">INCLUDED</span>
              </div>
              
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-base font-bold text-white">
                <span>ESTIMATED UNIT PRICE:</span>
                <span className="text-2xl font-black text-[#ff1e38] drop-shadow-[0_0_15px_rgba(255,30,56,0.4)]">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={handleSendToRfp}
                className="btn-cyber w-full py-3.5 rounded font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Lock Configuration & Request B2B Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopySpec}
                className="w-full py-2.5 rounded font-mono text-xs text-zinc-300 border border-zinc-700 hover:border-[#ff1e38] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer bg-black/40"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Hardware Spec Sheet</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
