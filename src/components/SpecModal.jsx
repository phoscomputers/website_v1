import React from 'react';
import { X, ShieldCheck, Plus, Check } from 'lucide-react';
import { playCyberSound } from '../utils/audio';

export default function SpecModal({ product, onClose, onAddToQuote }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0d0f17] border border-[#ff1e38]/40 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(255,30,56,0.15)] z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#111420]">
          <div>
            <div className="font-mono text-[10px] text-[#ff1e38] font-bold tracking-widest uppercase">
              HARDWARE SPECIFICATION SHEET
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={() => {
              playCyberSound('click');
              onClose();
            }}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-col flex gap-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-white bg-[#ff1e38]/20 border border-[#ff1e38]/40 px-2.5 py-1 rounded">
              {product.meta}
            </span>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              {product.stockStatus}
            </span>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            {product.desc}
          </p>

          {/* Detailed Specs Table */}
          <div className="border border-white/10 rounded-lg overflow-hidden font-mono text-xs">
            <table className="w-full text-left">
              <tbody>
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <tr
                    key={key}
                    className={`border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}`}
                  >
                    <td className="py-3 px-4 text-zinc-400 uppercase font-semibold w-1/3 text-[11px]">
                      {key}
                    </td>
                    <td className="py-3 px-4 text-white font-medium">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Warranty & Guarantee notice */}
          <div className="p-3.5 bg-[#ff1e38]/10 border-l-2 border-[#ff1e38] rounded font-mono text-xs text-zinc-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#ff1e38] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">PHOS Commercial Guarantee:</strong> Includes 3-Year Zero-Downtime Advanced Replacement, burn-in validation logs, and direct factory RMA support.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-[#0a0c12]">
          <div className="font-mono">
            <span className="text-[10px] text-zinc-500 block font-bold">ESTIMATED PRICE</span>
            <span className="text-lg font-bold text-white">
              {typeof product.price === 'number' ? `$${product.price.toLocaleString()}` : product.price}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playCyberSound('click');
                onClose();
              }}
              className="px-4 py-2 rounded text-xs font-mono text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                playCyberSound('click');
                onAddToQuote(product);
                onClose();
              }}
              className="btn-cyber px-5 py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Proposal</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
