import React from 'react';
import { Zap, Shield, Award, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const featuresData = [
  { icon: <Shield className="w-6 h-6" />, title: "Advanced BMS", desc: "Smart Battery Protection" },
  { icon: <Zap className="w-6 h-6" />, title: "1000W Power", desc: "Powerful Motor" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "80-100 KM", desc: "Long Mileage" },
  { icon: <Award className="w-6 h-6" />, title: "24/7 Support", desc: "Instant Service" }
];

const C1Header = ({ handleDealershipClick }) => (
  <header className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
    }}></div>

    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          SHRI SHYAM ENTERPRISES
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100 font-light mb-8">
          **TORA E-SCOOTY** - Ride of the Future
        </p>
        <button
          onClick={handleDealershipClick}
          className="group inline-flex items-center gap-3 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <span>APPLY FOR DEALERSHIP</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>

    {/* Quick Features */}
    <div className="max-w-7xl mx-auto px-4 -mt-12 mb-16 relative z-20">
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <div className="font-bold text-sm text-slate-800">{feature.title}</div>
                <div className="text-xs text-slate-600">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default C1Header;