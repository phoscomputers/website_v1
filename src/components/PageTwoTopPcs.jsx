import React, { useState } from 'react';
import { TOP_PCS } from '../data/topPcs';
import { 
  Gamepad2, 
  Brain, 
  Eye, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ArrowDown, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Layers 
} from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function PageTwoTopPcs({ onSelectPcForEnquiry, onNavigateToPage }) {
  const [filter, setFilter] = useState('ALL');
  const [activeModalPc, setActiveModalPc] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const filteredPcs = filter === 'ALL'
    ? TOP_PCS
    : filter === 'GAMING'
      ? TOP_PCS.filter(pc => pc.type.includes('GAMING'))
      : TOP_PCS.filter(pc => pc.type.includes('AI'));

  const handleOpenSpecs = (pc) => {
    playCyberSound('click');
    setActiveModalPc(pc);
    setActivePhotoIndex(0);
  };

  const handleCloseSpecs = () => {
    playCyberSound('click');
    setActiveModalPc(null);
  };

  const handleChoosePc = (pc) => {
    playCyberSound('click');
    setActiveModalPc(null);
    if (onSelectPcForEnquiry) {
      onSelectPcForEnquiry(pc);
    }
  };

  return (
    <section id="page-2" className="min-h-screen py-24 relative z-10 border-b border-white/5 flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff1e38]/10 border border-[#ff1e38]/35 text-[#ff1e38] font-mono text-[11px] font-bold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FLAGSHIP COMPUTING NODES</span>
            </div>
            <h2 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              OUR TOP <span className="text-[#ff1e38] drop-shadow-[0_0_25px_rgba(255,30,56,0.6)]">PCS</span> (5 ELITE RIGS)
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              5 hand-built, bench-tested masterworks engineered specifically for 4K/8K Gaming and high-throughput AI Deep Learning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {['ALL', 'GAMING', 'AI'].map(tab => (
              <button
                key={tab}
                onClick={() => {
                  playCyberSound('click');
                  setFilter(tab);
                }}
                className={`px-4 py-2 rounded-lg font-bold tracking-wider transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#ff1e38] text-white shadow-[0_0_15px_rgba(255,30,56,0.5)]'
                    : 'bg-[#12141e] text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab === 'ALL' ? 'ALL 5 PCS' : tab === 'GAMING' ? 'GAMING TITANS' : 'AI WORKSTATIONS'}
              </button>
            ))}
          </div>
        </div>

        {/* 5 PCS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPcs.map((pc, index) => (
            <div
              key={pc.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#ff1e38]/50 shadow-xl"
            >
              {/* Card Photo Frame */}
              <div className="relative h-64 bg-[#0a0c12] overflow-hidden">
                <img
                  src={pc.photos[0].url}
                  alt={pc.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-black/60 pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 border border-[#ff1e38]/40 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                  {pc.type.includes('AI') ? (
                    <Brain className="w-3.5 h-3.5 text-[#ff1e38]" />
                  ) : (
                    <Gamepad2 className="w-3.5 h-3.5 text-[#ff1e38]" />
                  )}
                  <span>{pc.badge}</span>
                </div>

                {/* Price tag bottom right */}
                <div className="absolute bottom-3 right-3 bg-[#ff1e38] px-3 py-1 rounded-md text-white font-mono font-extrabold text-sm shadow-[0_0_12px_rgba(255,30,56,0.6)]">
                  {pc.price}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="font-mono text-[11px] font-bold text-[#ff1e38] tracking-widest uppercase mb-1">
                    {pc.category}
                  </div>

                  <h3 className="font-['Outfit'] font-extrabold text-xl sm:text-2xl text-white mb-2 leading-snug">
                    {pc.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {pc.desc}
                  </p>

                  {/* Core Specs Pills */}
                  <div className="bg-[#08090e] border border-white/5 rounded-xl p-3.5 flex flex-col gap-2 font-mono text-xs mb-6">
                    {Object.entries(pc.specs).slice(0, 3).map(([key, val]) => (
                      <div key={key} className="flex justify-between items-center text-[11px]">
                        <span className="text-zinc-500 uppercase font-semibold">{key.split(' ')[0]}:</span>
                        <strong className="text-zinc-300 font-normal truncate max-w-[200px] text-right">{val}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button: VIEW SPECS */}
                <button
                  onClick={() => handleOpenSpecs(pc)}
                  className="btn-cyber w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW SPECS & 3 GALLERY ANGLES</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation CTA to Page 3 */}
        <div className="flex flex-col items-center gap-3 pt-6">
          <button
            onClick={() => {
              playCyberSound('click');
              onNavigateToPage('page-3');
            }}
            className="btn-cyber px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase flex items-center gap-3 cursor-pointer shadow-[0_0_25px_rgba(255,30,56,0.4)] hover:scale-105 transition-all"
          >
            <span>PROCEED TO ENQUIRY & BUILD YOUR PC</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
          <span className="font-mono text-[11px] text-zinc-500">
            PAGE 02 / 03 • NEXT: DIRECT MAIL & GOOGLE FORM BUILDER
          </span>
        </div>

      </div>

      {/* ELABORATED SPECS & PHOTO GALLERY MODAL / TAB */}
      {activeModalPc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={handleCloseSpecs}
          ></div>

          {/* Modal Card */}
          <div className="relative w-full max-w-4xl bg-[#0c0e16] border border-[#ff1e38]/50 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,30,56,0.2)] z-10 overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#11131e]">
              <div>
                <span className="font-mono text-[11px] font-bold text-[#ff1e38] tracking-widest uppercase">
                  {activeModalPc.badge} // SPECIFICATION BREAKDOWN
                </span>
                <h3 className="font-['Outfit'] font-black text-xl sm:text-3xl text-white">
                  {activeModalPc.name}
                </h3>
              </div>
              <button
                onClick={handleCloseSpecs}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto flex flex-col gap-6">
              
              {/* 2-3 Photos Viewer */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    HARDWARE GALLERY ({activePhotoIndex + 1} OF {activeModalPc.photos.length})
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    CLICK THUMBNAILS BELOW TO SWITCH ANGLES
                  </span>
                </div>

                {/* Main Selected Image */}
                <div className="relative h-64 sm:h-96 w-full rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={activeModalPc.photos[activePhotoIndex].url}
                    alt={activeModalPc.photos[activePhotoIndex].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h4 className="text-white font-bold text-base sm:text-lg">
                      {activeModalPc.photos[activePhotoIndex].title}
                    </h4>
                    <p className="text-zinc-300 text-xs sm:text-sm font-light mt-0.5">
                      {activeModalPc.photos[activePhotoIndex].caption}
                    </p>
                  </div>

                  {/* Prev / Next buttons */}
                  <button
                    onClick={() => {
                      playCyberSound('click');
                      setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : activeModalPc.photos.length - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff1e38] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      playCyberSound('click');
                      setActivePhotoIndex((prev) => (prev < activeModalPc.photos.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-[#ff1e38] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* 2-3 Photo Thumbnails Row */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {activeModalPc.photos.map((photo, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => {
                        playCyberSound('click');
                        setActivePhotoIndex(pIdx);
                      }}
                      className={`relative h-16 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activePhotoIndex === pIdx
                          ? 'border-[#ff1e38] ring-2 ring-[#ff1e38]/50 scale-[1.02]'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <span className="absolute bottom-1 left-2 font-mono text-[9px] text-white font-bold">
                        ANGLE 0{pIdx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complete Line-Item Specifications Table */}
              <div>
                <h4 className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                  DETAILED SILICON & COMPONENT SPECIFICATIONS
                </h4>
                
                <div className="border border-white/10 rounded-xl overflow-hidden font-mono text-xs">
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(activeModalPc.specs).map(([label, val], idx) => (
                        <tr
                          key={label}
                          className={`border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}`}
                        >
                          <td className="py-3 px-4 text-zinc-400 font-semibold w-1/3 text-[11px] sm:text-xs">
                            {label}
                          </td>
                          <td className="py-3 px-4 text-white font-medium text-[11px] sm:text-xs">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Guarantee banner */}
              <div className="p-4 bg-[#ff1e38]/10 border-l-4 border-[#ff1e38] rounded-r-lg font-mono text-xs text-zinc-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#ff1e38] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">PHOS 72-Hour Burn-In Certified:</strong> Each system undergoes Prime95 & FurMark extreme thermal soak inside our 50,000 sq ft logistics facility. Complete serial telemetry report provided upon crating.
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0a0b12]">
              <div className="font-mono text-center sm:text-left">
                <span className="text-[10px] text-zinc-500 font-bold block">CONFIRMED UNIT PRICE:</span>
                <span className="text-2xl font-black text-[#ff1e38] drop-shadow-[0_0_15px_rgba(255,30,56,0.5)]">
                  {activeModalPc.price}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCloseSpecs}
                  className="px-4 py-3 rounded-lg font-mono text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-white transition-colors cursor-pointer w-1/3 sm:w-auto"
                >
                  Close
                </button>

                <button
                  onClick={() => handleChoosePc(activeModalPc)}
                  className="btn-cyber flex-1 sm:flex-initial px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Select & Enquire This PC</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
