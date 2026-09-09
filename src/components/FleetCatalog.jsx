import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/products';
import { CheckCircle, Cpu, Eye, Plus, Laptop, Layers, ShieldCheck } from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function FleetCatalog({ onInspectProduct, onAddToQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems & Fleet' },
    { id: 'rigs', label: 'Custom Rigs' },
    { id: 'workstations', label: 'AI & Render Workstations' },
    { id: 'laptops', label: 'Enterprise Laptops' },
    { id: 'parts', label: 'Core Components & GPUs' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="systems" className="py-24 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff1e38]/10 border border-[#ff1e38]/40 text-[#ff1e38] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>HARDWARE FLEET DEPLOYMENT</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
            CUSTOM RIGS, WORKSTATIONS & LAPTOPS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Every build is precision hand-assembled, pressure-leak tested, and validated through 72 hours of thermal stress soak. From single dream rigs to enterprise corporate fleet rollout.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                playCyberSound('click');
                setActiveCategory(cat.id);
              }}
              className={`px-5 py-2.5 rounded text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#ff1e38] text-white shadow-[0_0_15px_rgba(255,30,56,0.45)]'
                  : 'bg-[#12141d]/80 text-zinc-400 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="glass-panel rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Product Top Visual Header */}
              <div className="relative h-56 bg-gradient-to-b from-[#161925] to-[#0c0e14] border-b border-white/5 flex items-center justify-center p-4">
                
                {/* Badge Top Left */}
                <div className={`absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded border backdrop-blur-md ${product.badgeColor}`}>
                  {product.badge}
                </div>

                {/* Hardware Render Graphic Placeholder */}
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#ff1e38]/10 filter blur-xl absolute"></div>
                  
                  {product.category === 'laptops' ? (
                    <div className="flex flex-col items-center">
                      <div className="w-40 h-24 bg-[#090a0f] border-2 border-zinc-600 rounded-t flex flex-col items-center justify-center shadow-inner">
                        <span className="font-['Outfit'] font-black text-[#ff1e38] text-sm tracking-widest">PH⦶S</span>
                        <span className="font-mono text-[9px] text-zinc-400 mt-1">240Hz 4K Mini-LED</span>
                      </div>
                      <div className="w-48 h-3 bg-zinc-800 rounded-b border border-zinc-700"></div>
                    </div>
                  ) : product.category === 'parts' ? (
                    <div className="flex flex-col items-center gap-2">
                      <Cpu className="w-16 h-16 text-[#ff1e38] drop-shadow-[0_0_15px_#ff1e38]" />
                      <span className="font-mono text-[10px] font-bold text-zinc-300">ADA LOVELACE / BLACKWELL LOT</span>
                    </div>
                  ) : (
                    <div className="w-36 h-32 bg-[#1b1f2e] border-2 border-zinc-700 rounded-lg flex flex-col items-center justify-center gap-2 shadow-[inset_0_0_20px_#000]">
                      <div className="font-mono text-[10px] font-bold text-white bg-[#ff1e38] px-2 py-0.5 rounded shadow-[0_0_10px_#ff1e38]">
                        {product.specs.gpu.split(' ')[2] || 'GPU OC'}
                      </div>
                      <div className="font-mono text-[9px] text-zinc-400">LIQUID CHILLED</div>
                    </div>
                  )}
                </div>

                {/* Stock Tag Bottom Right */}
                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-emerald-400 bg-black/70 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-sm">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{product.stockStatus}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="font-mono text-xs font-bold text-[#ff1e38] tracking-widest mb-1.5">
                  {product.meta}
                </div>
                <h3 className="font-bold text-xl text-white mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Quick Spec List */}
                <div className="bg-[#090b10] border border-white/5 rounded-lg p-3 flex flex-col gap-2 font-mono text-xs mb-6">
                  {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-[11px] gap-2">
                      <span className="text-zinc-500 uppercase font-semibold">{key}:</span>
                      <strong className="text-zinc-300 font-normal truncate text-right">{val}</strong>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Price & Actions */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-zinc-500 font-bold tracking-wider">
                      {product.priceLabel}
                    </div>
                    <div className="font-mono text-xl font-black text-white">
                      {typeof product.price === 'number' ? `$${product.price.toLocaleString()}` : product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        playCyberSound('click');
                        onInspectProduct(product);
                      }}
                      className="px-3 py-2 rounded text-xs font-mono font-medium text-zinc-300 border border-zinc-700 hover:border-[#ff1e38] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>

                    <button
                      onClick={() => {
                        playCyberSound('click');
                        onAddToQuote(product);
                      }}
                      className="btn-cyber px-3.5 py-2 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
