import React, { useState } from 'react';
import { FileText, Handshake, CreditCard, Send, Lock, PhoneCall, Mail, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCyberSound } from '../utils/audio';

export default function RfpSection({ prefilledText = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'custom-flagship',
    budget: '15k-50k',
    details: prefilledText
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  // Update details if prefilledText changes
  React.useEffect(() => {
    if (prefilledText) {
      setFormData(prev => ({
        ...prev,
        details: prefilledText
      }));
    }
  }, [prefilledText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      if (onShowToast) onShowToast('Please fill out all required fields (*)');
      return;
    }

    playCyberSound('success');

    // Confetti effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1e38', '#ffffff', '#b30e22']
    });

    const code = `PHOS-RFP-${Math.floor(1000 + Math.random() * 9000)}-B2B`;
    setTrackingId(code);
    setSubmitted(true);

    if (onShowToast) onShowToast(`Proposal transmitted! Logged as ${code}`);
  };

  return (
    <section id="b2b-rfp-section" className="py-24 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        <div className="glass-panel rounded-2xl overflow-hidden border border-[#ff1e38]/35 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(255,30,56,0.15)]">
          
          {/* Header Terminal Decor */}
          <div className="bg-[#10121a] px-6 py-3.5 border-b border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff1e38]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              <span className="ml-3 tracking-wider text-zinc-300">
                PHOS // CLIENT PROCUREMENT PORTAL & RFP ENGINE
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-500">ENCRYPTION: TLS-256 BIT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 sm:p-10 xl:p-14">
            
            {/* Left Column: Pitch & Trust */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold text-[#ff1e38] tracking-widest uppercase mb-3">
                  B2B & ENTERPRISE PROCUREMENT
                </div>
                <h2 className="font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight uppercase mb-4">
                  SUBMIT YOUR PROJECT SPECIFICATIONS
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                  Presenting to your board, outfitting a creative studio, or procuring warehouse pallets of GPUs? Our senior hardware architects review all submissions within 2 business hours.
                </p>

                <div className="flex flex-col gap-5 mb-8">
                  <div className="flex items-start gap-3.5">
                    <FileText className="w-5 h-5 text-[#ff1e38] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-white block">Formal Line-Item Quotation</strong>
                      <span className="text-xs text-zinc-400">Guaranteed pricing, factory serial audit, and strict SLA delivery schedules.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Handshake className="w-5 h-5 text-[#ff1e38] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-white block">Dedicated Senior Account Director</strong>
                      <span className="text-xs text-zinc-400">Single technical contact for procurement, custom golden OS images, and warranty support.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CreditCard className="w-5 h-5 text-[#ff1e38] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-white block">Flexible Net-30 Enterprise Terms</strong>
                      <span className="text-xs text-zinc-400">Commercial credit facilities and lease financing available for qualified corporate entities.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Hotline Box */}
              <div className="bg-[#090a0f] border border-white/10 rounded-xl p-4 sm:p-5 font-mono">
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">
                  DIRECT CLIENT HOTLINE:
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#ff1e38] flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>+1 (800) 840-PHOS</span>
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-2 mt-1">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>enterprise@phos-hardware.com</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form or Success */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="h-full bg-[#0a0c13] border border-emerald-500/40 rounded-xl p-8 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mb-5 text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">PROPOSAL TRANSMITTED</h3>
                  <p className="text-zinc-400 text-sm max-w-md mb-6 leading-relaxed">
                    Your hardware requirements and procurement details have been logged into our primary warehouse dispatch system.
                  </p>

                  <div className="bg-[#121520] border border-white/10 rounded-lg px-6 py-3.5 font-mono mb-6">
                    <span className="text-[10px] text-zinc-500 block">ENCRYPTED TRACKING SKU:</span>
                    <strong className="text-lg text-[#ff1e38] tracking-widest">{trackingId}</strong>
                  </div>

                  <p className="text-xs text-zinc-500 max-w-sm mb-6">
                    A Senior Hardware Director will reach out to <strong>{formData.email}</strong> within 2 hours with official line-item pricing and warehouse allocation schedules.
                  </p>

                  <button
                    onClick={() => {
                      playCyberSound('click');
                      setSubmitted(false);
                    }}
                    className="btn-cyber px-6 py-2.5 rounded font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Visual Labs / Cloud Corp"
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Project Scale / Procurement Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none"
                      >
                        <option value="custom-flagship">Flagship Custom Enthusiast Rig (1-3 Units)</option>
                        <option value="studio-fleet">Studio / Dev Workforce Fleet (5-25 Systems)</option>
                        <option value="enterprise-cluster">Enterprise AI Cluster / Rack Servers (25+ Units)</option>
                        <option value="warehouse-bulk">Warehouse Pallet Lots (GPUs, Motherboards, Parts)</option>
                        <option value="recurring-supply">Ongoing B2B Supply Chain Contract</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                        Target Budget (USD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-sans focus:border-[#ff1e38] outline-none"
                      >
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-150k">$50,000 - $150,000</option>
                        <option value="150k+">$150,000+ (Enterprise Allocation)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-zinc-300 mb-1.5">
                      Technical Requirements & Delivery Timeline
                    </label>
                    <textarea
                      rows="4"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Specify requested CPU/GPU models, liquid loop requirements, warehouse shipment timetable, or golden image provisioning details..."
                      className="w-full bg-[#090b10] border border-white/10 rounded-lg p-3 text-xs sm:text-sm text-white font-mono focus:border-[#ff1e38] outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-cyber w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-2"
                  >
                    <span>Transmit Formal Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 mt-1">
                    <Lock className="w-3 h-3 text-zinc-500" />
                    <span>All submissions protected by mutual NDA. Zero information sharing.</span>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
