import React, { useState, useEffect } from 'react';
import CyberCanvas from './components/CyberCanvas';
import HeaderNav from './components/HeaderNav';
import PageOneServices from './components/PageOneServices';
import PageTwoTopPcs from './components/PageTwoTopPcs';
import PageThreeEnquiry from './components/PageThreeEnquiry';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [activePage, setActivePage] = useState('page-1');
  const [selectedPc, setSelectedPc] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  // Scroll spy to update active page indicator
  useEffect(() => {
    const handleScroll = () => {
      const p1 = document.getElementById('page-1');
      const p2 = document.getElementById('page-2');
      const p3 = document.getElementById('page-3');

      const scrollPos = window.scrollY + window.innerHeight / 3;

      if (p3 && scrollPos >= p3.offsetTop) {
        setActivePage('page-3');
      } else if (p2 && scrollPos >= p2.offsetTop) {
        setActivePage('page-2');
      } else {
        setActivePage('page-1');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (pageId) => {
    setActivePage(pageId);
    const element = document.getElementById(pageId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPcForEnquiry = (pc) => {
    setSelectedPc(pc);
    setToastMsg(`Selected ${pc.name} - jumping to Enquiry!`);
    navigateToPage('page-3');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f0f2f5] relative selection:bg-[#ff1e38] selection:text-white">
      {/* Dynamic Cyber Canvas Particles */}
      <CyberCanvas />

      {/* Top Header & Page Navigator */}
      <HeaderNav
        activePage={activePage}
        onNavigateToPage={navigateToPage}
        onShowToast={(msg) => setToastMsg(msg)}
      />

      {/* 3 Main Pages / Sections */}
      <main>
        {/* 1st Page: Top Center Logo + 9 Services */}
        <PageOneServices onNavigateToPage={navigateToPage} />

        {/* 2nd Page: Our Top PCs (5 PCs: Gaming + AI, View Specs modal with 2-3 photos) */}
        <PageTwoTopPcs
          onSelectPcForEnquiry={handleSelectPcForEnquiry}
          onNavigateToPage={navigateToPage}
        />

        {/* 3rd Page: Enquiry (Left: Mail, Right: Build Your PC -> Google Forms) */}
        <PageThreeEnquiry
          selectedPc={selectedPc}
          onShowToast={(msg) => setToastMsg(msg)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      <Toast message={toastMsg} onClose={() => setToastMsg('')} />
    </div>
  );
}
