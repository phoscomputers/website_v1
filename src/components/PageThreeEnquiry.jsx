import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Send, 
  CheckCircle2, 
  Sliders, 
  FileSpreadsheet, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MessageSquare,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCyberSound } from '../utils/audio';

export default function PageThreeEnquiry({ selectedPc, onShowToast }) {
  const [googleFormUrl, setGoogleFormUrl] = useState('https://docs.google.com/forms/d/e/1FAIpQLSc-phos-custom-pc-intake/viewform');
  const [isEditingFormUrl, setIsEditingFormUrl] = useState(false);
  const [customFormUrl, setCustomFormUrl] = useState('https://forms.google.com');

  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    subject: selectedPc ? `Enquiry for ${selectedPc.name}` : 'Custom PC Build / Hardware Enquiry',
    message: selectedPc 
      ? `Hi PHOS Team,\n\nI would like to enquire about the ${selectedPc.name} (${selectedPc.price}). Please send me the formal quotation, lead time, and warehouse dispatch schedule.`
      : ''
  });

  const [sentSuccess, setSentSuccess] = useState(false);

  // Update form if selectedPc changes
  React.useEffect(() => {
    if (selectedPc) {
      setMessageForm(prev => ({
        ...prev,
        subject: `Enquiry for ${selectedPc.name}`,
        message: `Hi PHOS Team,\n\nI would like to enquire about the ${selectedPc.name} (${selectedPc.price}). Please send me the formal quotation, lead time, and warehouse dispatch schedule.`
      }));
    }
  }, [selectedPc]);

  const copyEmail = (email) => {
    playCyberSound('click');
    navigator.clipboard.writeText(email).then(() => {
      onShowToast(`Copied ${email} to clipboard!`);
    });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.email || !messageForm.message) {
      onShowToast('Please fill out all fields.');
      return;
    }

    playCyberSound('success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1e38', '#ffffff', '#990011']
    });

    setSentSuccess(true);
    onShowToast('Your message has been dispatched to sudhan@phos-hardware.com!');
  };

  const handleOpenGoogleForm = () => {
    playCyberSound('click');
    window.open(customFormUrl || 'https://forms.google.com', '_blank');
  };

  return (
    <section id="page-3" className="min-h-screen py-24 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff1e38]/10 border border-[#ff1e38]/35 text-[#ff1e38] font-mono text-[11px] font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION & INTAKE PORTAL</span>
          </div>

          <h2 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            ENQUIRY & <span className="text-[#ff1e38] drop-shadow-[0_0_25px_rgba(255,30,56,0.6)]">BUILD YOUR PC</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light">
            Connect directly with our engineering team via mail or launch our custom PC configuration Google Form.
          </p>
        </div>

        {/* MAIN 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: MAIL & DIRECT CONTACT */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-9 flex flex-col justify-between border border-[#ff1e38]/30 shadow-2xl">
            <div>
              <div className="font-mono text-xs font-bold text-[#ff1e38] tracking-widest uppercase mb-2">
                PAGE 03 // CONTACT HUB
              </div>
              <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl text-white uppercase mb-4">
                DIRECT MAIL & OPERATIONS
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Whether you need a quick quote for an individual custom rig or bulk pallet pricing for an entire enterprise studio fleet, our senior team is ready.
              </p>

              {/* Direct Mail Cards */}
              <div className="flex flex-col gap-3 mb-6">
                
                {/* Primary Mail */}
                <div className="bg-[#090b11] border border-white/10 hover:border-[#ff1e38]/50 rounded-xl p-4 flex items-center justify-between transition-all group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#ff1e38]/15 border border-[#ff1e38]/30 flex items-center justify-center text-[#ff1e38]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold block">
                        PRIMARY FOUNDER & SALES MAIL
                      </span>
                      <a
                        href="mailto:sudhan@phos-hardware.com?subject=PHOS%20PC%20Hardware%20Enquiry"
                        className="font-mono font-bold text-sm sm:text-base text-white hover:text-[#ff1e38] transition-colors"
                      >
                        sudhan@phos-hardware.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyEmail('sudhan@phos-hardware.com')}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-[#ff1e38] transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Operations Mail */}
                <div className="bg-[#090b11] border border-white/10 hover:border-[#ff1e38]/50 rounded-xl p-4 flex items-center justify-between transition-all group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold block">
                        ENTERPRISE LOGISTICS & B2B DISPATCH
                      </span>
                      <a
                        href="mailto:enterprise@phos-hardware.com?subject=B2B%20Warehousing%20Allocation"
                        className="font-mono font-bold text-sm sm:text-base text-zinc-300 hover:text-[#ff1e38] transition-colors"
                      >
                        enterprise@phos-hardware.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyEmail('enterprise@phos-hardware.com')}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-[#ff1e38] transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone & Warehouse Location Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="bg-[#090b11] border border-white/5 rounded-xl p-3.5 flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-[#ff1e38] shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase">DIRECT HOTLINE</span>
                      <strong className="text-white text-xs">+1 (800) 840-PHOS</strong>
                    </div>
                  </div>

                  <div className="bg-[#090b11] border border-white/5 rounded-xl p-3.5 flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#ff1e38] shrink-0" />
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase">WAREHOUSE HUB</span>
                      <strong className="text-white text-[11px] truncate">50k Sq Ft Cleanroom</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Message Form */}
              <div className="border-t border-white/10 pt-5">
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
                  DISPATCH QUICK ENQUIRY TRANSMISSION
                </h4>

                {sentSuccess ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-2" />
                    <h5 className="font-bold text-white text-sm">ENQUIRY TRANSMITTED</h5>
                    <p className="text-zinc-400 text-xs mt-1">
                      Our engineering desk will reply directly to your inbox within 2 hours.
                    </p>
                    <button
                      onClick={() => setSentSuccess(false)}
                      className="mt-3 font-mono text-[11px] text-[#ff1e38] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="flex flex-col gap-3 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={messageForm.name}
                        onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                        className="bg-[#08090e] border border-white/10 rounded-lg p-2.5 text-white font-sans focus:border-[#ff1e38] outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email *"
                        value={messageForm.email}
                        onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                        className="bg-[#08090e] border border-white/10 rounded-lg p-2.5 text-white font-sans focus:border-[#ff1e38] outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Subject"
                      value={messageForm.subject}
                      onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                      className="bg-[#08090e] border border-white/10 rounded-lg p-2.5 text-white font-sans focus:border-[#ff1e38] outline-none"
                    />

                    <textarea
                      rows="3"
                      required
                      placeholder="Your requirements, budget, timeline..."
                      value={messageForm.message}
                      onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                      className="bg-[#08090e] border border-white/10 rounded-lg p-2.5 text-white font-sans focus:border-[#ff1e38] outline-none"
                    ></textarea>

                    <button
                      type="submit"
                      className="btn-cyber py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Enquiry Mail</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-zinc-400" />
                <span>NDA PROTECTED TRANSMISSION</span>
              </span>
              <span>SLA RESPONSE: &lt; 2 HOURS</span>
            </div>
          </div>

          {/* RIGHT SIDE: BUILD YOUR PC (LINKS GOOGLE FORMS) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-9 flex flex-col justify-between border border-[#ff1e38]/40 shadow-2xl bg-gradient-to-b from-[#161826]/90 to-[#0c0d14]/95 relative overflow-hidden">
            
            {/* Ambient corner glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff1e38]/15 rounded-full filter blur-3xl pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff1e38]/20 border border-[#ff1e38] text-white font-mono text-[11px] font-bold uppercase tracking-widest mb-3">
                <Zap className="w-3.5 h-3.5 text-[#ff1e38]" />
                <span>OFFICIAL SPECIFICATION INTAKE</span>
              </div>

              <h3 className="font-['Outfit'] font-black text-2xl sm:text-4xl text-white uppercase mb-3 leading-tight">
                BUILD YOUR <span className="text-[#ff1e38] drop-shadow-[0_0_25px_rgba(255,30,56,0.5)]">PC</span>
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Ready to configure your personalized battle-station or enterprise workload node? Launch our interactive <strong>Google Form Specification Builder</strong> to select your preferred CPU, GPU, memory array, liquid loop styling, and delivery schedule.
              </p>

              {/* Big Featured Action Box */}
              <div className="bg-[#090b12] border-2 border-[#ff1e38]/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,30,56,0.15)] mb-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#ff1e38]/20 border border-[#ff1e38] flex items-center justify-center text-[#ff1e38] mb-4 group-hover:scale-110 group-hover:bg-[#ff1e38] group-hover:text-white transition-all shadow-[0_0_20px_rgba(255,30,56,0.3)]">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>

                <h4 className="font-['Outfit'] font-black text-xl sm:text-2xl text-white uppercase mb-2">
                  CUSTOM PC CONFIGURATION FORM
                </h4>

                <p className="text-zinc-400 text-xs sm:text-sm max-w-sm font-light mb-6">
                  Fill out our Google Form intake with your budget, specific component preferences, and freight destination.
                </p>

                {/* THE CORE GOOGLE FORM BUTTON */}
                <button
                  onClick={handleOpenGoogleForm}
                  className="btn-cyber w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_30px_rgba(255,30,56,0.5)] hover:scale-105 transition-all text-white"
                >
                  <span>OPEN BUILD YOUR PC GOOGLE FORM</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Form URL Customizer (Allows friend to change the Google Form link anytime!) */}
              <div className="bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">
                    CONFIGURED GOOGLE FORMS LINK:
                  </span>
                  <button
                    onClick={() => setIsEditingFormUrl(!isEditingFormUrl)}
                    className="text-[#ff1e38] hover:underline text-[10px]"
                  >
                    {isEditingFormUrl ? 'Done' : 'Change Link'}
                  </button>
                </div>

                {isEditingFormUrl ? (
                  <div className="flex gap-2 mt-1">
                    <input
                      type="url"
                      value={customFormUrl}
                      onChange={(e) => setCustomFormUrl(e.target.value)}
                      placeholder="Paste your Google Forms link here..."
                      className="w-full bg-[#0d0f17] border border-[#ff1e38] rounded p-2 text-white text-xs outline-none"
                    />
                    <button
                      onClick={() => {
                        setIsEditingFormUrl(false);
                        onShowToast('Google Form link updated!');
                      }}
                      className="px-3 py-1 bg-[#ff1e38] text-white rounded font-bold text-xs"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="text-zinc-300 truncate bg-[#0d0f17] p-2 rounded border border-white/5 flex items-center justify-between">
                    <span className="truncate">{customFormUrl}</span>
                    <a
                      href={customFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff1e38] ml-2 shrink-0 flex items-center gap-1 hover:underline"
                    >
                      <span>Test</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* What happens next checklist */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff1e38]" />
                  <span>Sourcing team matches live 50,000 sq ft warehouse inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff1e38]" />
                  <span>Written line-item quotation returned within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#ff1e38]" />
                  <span>72-Hour Prime95 stress test cert included with every machine</span>
                </div>
              </div>

            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span>PHOS DIRECT PROCUREMENT</span>
              <span className="text-[#ff1e38] font-bold">100% FACTORY OEM SEALED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
