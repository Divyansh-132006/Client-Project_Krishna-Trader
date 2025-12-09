import React from 'react';
import { Check } from 'lucide-react';

const keyFeatures = [
  { title: "High-Quality Manufacturing", desc: "Built with modern technology and premium materials, ensuring long life and excellent performance. ISO 9001 certified." },
  { title: "Powerful Battery Performance", desc: "Advanced Lithium and Lead-Acid options with fast charging, long range, and excellent backup." },
  { title: "Safety Standards", desc: "Rigorous quality tests ensure safe and reliable vehicles with ABS brake system." },
  { title: "Eco-Friendly Technology", desc: "Zero-emission technology for a pollution-free future." },
  { title: "Advanced Technical Features", desc: "GPS, digital meter, smart locking system, and mobile app connectivity." },
  { title: "After-Sales Support", desc: "Service centers spread across India for comprehensive support." },
  { title: "International Exports", desc: "Exporting to Nepal, Bhutan, Bangladesh, and Sri Lanka. 2000+ units exported last year." }
];

const C1WhyChoose = () => (
  <section className="max-w-7xl mx-auto px-4 mb-20">
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
          Unmatched Value
        </div>
        <h2 className="text-4xl font-bold text-slate-900">
          Why Choose **TORA** E-SCOOTY
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {keyFeatures.map((feature, idx) => (
          <div key={idx} className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-600 rounded-r-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              {feature.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default C1WhyChoose;
