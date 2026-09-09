import React from 'react';

export default function Partners() {
  const partners = [
    { name: 'NVIDIA RTX Enterprise', icon: 'fa-brands fa-nvidia' },
    { name: 'INTEL Foundry Direct', icon: 'fa-brands fa-intel' },
    { name: 'AMD EPYC & Ryzen Tier-1', icon: 'fa-brands fa-amd' },
    { name: 'ASUS ROG Certified Integrator', icon: 'fa-solid fa-microchip' },
    { name: 'Western Digital Enterprise Storage', icon: 'fa-solid fa-hard-drive' },
    { name: 'Corsair Hydro-X Premier Partner', icon: 'fa-solid fa-fan' },
  ];

  return (
    <section className="py-10 bg-[#0a0c12]/80 border-y border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-7">
        
        <div className="text-center mb-6">
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[2.5px] text-[#ff1e38] uppercase">
            DIRECT OEM ALLOCATIONS & FACTORY ACCREDITATION
          </span>
          <h3 className="text-zinc-400 text-sm sm:text-base font-medium mt-1">
            Authorized Tier-1 Enterprise Hardware Integrator & Logistics Contractor
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 xl:gap-14">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-zinc-500 hover:text-white transition-colors duration-200 group cursor-default select-none"
            >
              <i className={`${partner.icon} text-lg text-zinc-600 group-hover:text-[#ff1e38] transition-colors`}></i>
              <span className="font-semibold text-xs sm:text-sm tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
