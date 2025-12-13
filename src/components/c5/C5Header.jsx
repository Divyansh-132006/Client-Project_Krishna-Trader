import React from 'react';
import { Factory } from 'lucide-react';

export function C5Header() {
  return (
    <header className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Factory className="w-12 h-12" />
          <h1 className="text-4xl md:text-5xl font-bold">Krishna E-Rickshaw Enterprises</h1>
        </div>
        <p className="text-xl font-semibold text-emerald-100 mb-2 tracking-wide uppercase">
          India's Roads, India's Strength — We Build the Future of Transportation
        </p>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws
          that promote eco-friendly mobility not only in India but worldwide.
        </p>
      </div>
    </header>
  );
}