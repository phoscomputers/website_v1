import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#10131d] border border-[#ff1e38] text-white px-5 py-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,30,56,0.35)] font-mono text-xs animate-in slide-in-from-bottom duration-300">
      <CheckCircle className="w-4 h-4 text-[#ff1e38] shrink-0" />
      <span>{message}</span>
    </div>
  );
}
