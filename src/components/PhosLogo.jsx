import React, { useState } from 'react';

export default function PhosLogo({ className = "h-12 sm:h-16 md:h-20", showSubtext = false }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div className="flex flex-col items-center select-none group">
        <img
          src="/phos_logo.jpeg"
          alt="PHOS COMPUTERS"
          onError={() => setImgError(true)}
          className={`${className} w-auto object-contain drop-shadow-[0_0_20px_rgba(255,30,56,0.35)] transition-transform duration-300 group-hover:scale-105`}
        />
        {showSubtext && (
          <span className="font-['JetBrains_Mono'] text-[10px] tracking-[4px] text-zinc-500 font-bold uppercase transition-colors group-hover:text-[#ff1e38] mt-1">
            HARDWARE & WAREHOUSING
          </span>
        )}
      </div>
    );
  }

  // Fallback vector SVG
  return (
    <div className="flex flex-col items-center select-none group">
      <div className="flex items-center">
        <svg
          className={`${className} w-auto drop-shadow-[0_0_12px_rgba(255,30,56,0.35)] transition-transform duration-300 group-hover:scale-[1.02]`}
          viewBox="0 0 240 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* P */}
          <path d="M12 48V12H32C41.94 12 50 18.06 50 26.5C50 34.94 41.94 41 32 41H23V48H12ZM23 32H31C36 32 39 29.5 39 26.5C39 23.5 36 21 31 21H23V32Z" fill="#FFFFFF" />
          {/* H */}
          <path d="M64 48V12H75V25.5H97V12H108V48H97V34.5H75V48H64Z" fill="#FFFFFF" />
          {/* O - with straight vertical bar extending slightly above and below */}
          <g className="phos-o-glyph">
            <circle cx="146" cy="30" r="18" stroke="#ffffff" strokeWidth="6" fill="none" />
            <line x1="146" y1="4" x2="146" y2="56" stroke="#ff1e38" strokeWidth="6" strokeLinecap="square" className="laser-glow" />
          </g>
          {/* S */}
          <path d="M188 43.5C191.5 46.5 197.5 48.5 204.5 48.5C216 48.5 223 43 223 35C223 25.5 212.5 23 203 21C194.5 19.5 190.5 18 190.5 14.5C190.5 11.5 194.5 9.5 200 9.5C205 9.5 209.5 11 213 13.5L217.5 6C213 3 206.5 1.5 199.5 1.5C188 1.5 179.5 7.5 179.5 16C179.5 25 189.5 27.5 199 29.5C208.5 31.5 212 33 212 37C212 40.5 207.5 41.5 203 41.5C197.5 41.5 191.5 39 187 35.5L188 43.5Z" fill="#FFFFFF" />
        </svg>
      </div>
      <span className="font-['JetBrains_Mono'] text-[11px] tracking-[6px] text-[#e06236] font-bold uppercase mt-1">
        C O M P U T E R S
      </span>
    </div>
  );
}
