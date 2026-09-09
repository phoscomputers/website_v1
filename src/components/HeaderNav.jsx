import React, { useState, useEffect } from 'react';
import PhosLogo from './PhosLogo';
import { Volume2, VolumeX, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { toggleAudio, isSoundEnabled, playCyberSound } from '../utils/audio';

export default function HeaderNav({ activePage, onNavigateToPage, onShowToast }) {
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAudio();
    setSoundOn(newState);
    onShowToast(newState ? 'Tactile Cyber Audio: ONLINE' : 'Audio Feedback: MUTED');
  };

  const navItems = [
    { id: 'page-1', label: '01 // SERVICES', title: 'Services & Warehousing' },
    { id: 'page-2', label: '02 // OUR TOP PCS (5)', title: 'Top 5 Gaming & AI Rigs' },
    { id: 'page-3', label: '03 // ENQUIRY & BUILD', title: 'Mail & Google Form' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080b]/95 border-b border-[#ff1e38]/30 shadow-[0_10px_30px_rgba(0,0,0,0.85)] backdrop-blur-md py-3'
            : 'bg-[#090b10]/90 border-b border-white/10 backdrop-blur-md py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 flex items-center justify-between">
          
          {/* Brand Logo Left */}
          <div
            onClick={() => {
              playCyberSound('click');
              onNavigateToPage('page-1');
            }}
            className="cursor-pointer flex items-center"
          >
            <PhosLogo className="h-7 sm:h-8" showSubtext={false} />
          </div>

          {/* Centered Page Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-2 font-mono text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playCyberSound('click');
                  onNavigateToPage(item.id);
                }}
                className={`px-4 py-2 rounded-lg font-bold tracking-wider transition-all cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#ff1e38] text-white shadow-[0_0_15px_rgba(255,30,56,0.5)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-mono text-xs transition-colors cursor-pointer ${
                soundOn
                  ? 'border-[#ff1e38] text-[#ff1e38] bg-[#ff1e38]/10'
                  : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700'
              }`}
              title="Toggle Cyber Sound Effects"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">SFX: {soundOn ? 'ON' : 'OFF'}</span>
            </button>

            {/* Direct Build Your PC Button */}
            <button
              onClick={() => {
                playCyberSound('click');
                onNavigateToPage('page-3');
              }}
              className="btn-cyber px-3.5 sm:px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>BUILD YOUR PC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                playCyberSound('click');
                setMobileMenuOpen(true);
              }}
              className="md:hidden p-2 rounded-lg border border-zinc-800 text-zinc-300 hover:text-white bg-zinc-900"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-[#0c0e16] border-r border-[#ff1e38]/30 h-full p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <PhosLogo className="h-7" showSubtext={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-6 font-mono text-xs">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToPage(item.id);
                    }}
                    className={`text-left p-3 rounded-lg font-bold tracking-wider ${
                      activePage === item.id
                        ? 'bg-[#ff1e38] text-white'
                        : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 font-mono text-xs text-zinc-500">
              <p className="text-white font-bold mb-1">PHOS DIRECT HOTLINE</p>
              <p className="text-[#ff1e38]">+1 (800) 840-PHOS</p>
              <p className="mt-2 text-[10px]">sudhan@phos-hardware.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
