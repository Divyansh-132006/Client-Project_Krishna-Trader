import React, { useState } from 'react';
import {
  Zap, Shield, Globe, Award, TrendingUp, Users, Star,
  CheckCircle, Cpu, Truck, FileCheck, Wrench, Building,
  Package, ChevronRight, Sun
} from 'lucide-react';
import { Helmet } from 'react-helmet';


const exportRegionFlags = [
  { name: "Nepal", path: "/assets/Flag_of_Nepal.svg.png" },
  { name: "Bangladesh", path: "/assets/Flag_of_Bangladesh.svg.webp" },
  { name: "Bhutan", path: "/assets/Flag_of_Bhutan.svg.png" },
  { name: "Sri Lanka", path: "/assets/Flag_of_Sri_Lanka.svg.webp" },
  { name: "UAE", path: "/assets/Flag_of_the_United_Arab_Emirates.svg.webp" },
  { name: "Saudi Arabia", path: "/assets/Flag_of_Saudi_Arabia.svg.webp" },
  { name: "Qatar", path: "/assets/Flag_of_Qatar.svg.png" },
  { name: "Kenya", path: "/assets/Flag_of_Kenya.svg.webp" },
  { name: "South Africa", path: "/assets/Flag_of_South_Africa.svg.webp" },
];

const seoData = {
  title: "Krishna Power Solution Pvt Ltd | EV Manufacturing, International Trade & Government Services",
  description: "India's leading integrated company for EV component manufacturing, international import-export, and government project execution. Export to UAE, Bangladesh, Kenya, Nepal.",
  keywords: "EV manufacturing India, international trade company, government tender services, OEM manufacturing, Make in India",
  url: "https://www.krishnagroup.com/krishnapowersolutionprivatelimited"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Krishna Power Solution Private Limited",
  "description": seoData.description,
  "url": seoData.url,
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "UAE" },
    { "@type": "Country", "name": "Bangladesh" },
    { "@type": "Country", "name": "Nepal" },
    { "@type": "Country", "name": "Kenya" }
  ],
  "knowsAbout": ["Electric Vehicle Manufacturing", "International Trade", "Government Contracting", "OEM Services"]
};


const ExportRegionScroller = () => {
  const scrollingRegions = [...exportRegionFlags, ...exportRegionFlags];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-amber-50 border-y border-amber-300">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Active International Export Regions 🌎
      </h2>
      <div className="flex w-full">
        <div className="horizontal-scroller flex flex-row space-x-6">
          {scrollingRegions.map((region, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 min-w-[200px] bg-white rounded-xl shadow-sm border border-amber-200 hover:scale-105 transition-transform"
            >
              <img
                src={region.path}
                alt={`${region.name} flag`}
                className="w-12 h-8 mr-3 object-contain rounded-sm shadow-sm"
              />
              <span className="text-md font-bold text-gray-800">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .horizontal-scroller {
          animation: scroll-regions 25s linear infinite;
        }
        @keyframes scroll-regions {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};


const KRISHNAPOWERSOLUTIONPRIVATELIMITED = () => {
  const [activeTab, setActiveTab] = useState('ev');

  const stats = [
    { number: "10+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "1,00,000+", label: "Products Exported", icon: <Package className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const techFeatures = [
    { icon: <Shield />, text: "BMS Thermal Protection Design" },
    { icon: <Zap />, text: "High-Torque Hub Motor Engineering" },
    { icon: <Cpu />, text: "Energy-Optimized Controller Software" },
    { icon: <TrendingUp />, text: "Smart Charging Algorithms" }
  ];

  const whyUsFeatures = [
    { title: "Integrated Model", desc: "Manufacturing, Trading, and Government Services under one roof." },
    { title: "Global Compliance", desc: "ISO standards, ISPM-15 packaging, and digital tracking." },
    { title: "Quality Testing", desc: "Thermal, Vibration, and Load tests for every single unit." },
    { title: "10+ Years Experience", desc: "A strong foothold in international supply chains." }
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <header className="relative bg-gradient-to-br from-teal-800 via-emerald-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sun className="w-16 h-16 text-yellow-400 animate-spin-slow" />
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                KRISHNA POWER SOLUTION
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto mb-8 font-medium">
              Global Integrated Energy Solutions: Manufacturing, International Trade, and Strategic Government Projects.
            </p>
            <div className="inline-block bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-black text-lg shadow-xl">
              MISSION: MAKE IN INDIA, GLOBAL DELIVERY
            </div>
          </div>
        </header>

        <ExportRegionScroller />

        <main className="max-w-7xl mx-auto px-4 py-20">

          <section className="mb-20">
            <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-20 border border-slate-100 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Innovation Powered by Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  KRISHNA POWER SOLUTION PRIVATE LIMITED is a multi-sector powerhouse. We don't just manufacture; we build the technical infrastructure required for the global EV transition.
                </p>
                <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-yellow-300 text-xl mb-2">Strategy 2026:</h4>
                  <p>Expanding our export footprint to 15+ countries and localizing advanced solid-state battery component manufacturing.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-black text-slate-900">{stat.number}</div>
                      <div className="text-slate-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <p className="text-center text-slate-400 font-medium mb-12 uppercase tracking-widest">Our Vertical Specializations</p>

          <nav className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'ev', label: 'Manufacturing', icon: <Zap className="w-5 h-5" /> },
              { id: 'trade', label: 'Global Trade', icon: <Globe className="w-5 h-5" /> },
              { id: 'govt', label: 'Govt. Projects', icon: <Building className="w-5 h-5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-2xl scale-105'
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>

          <div className="grid md:grid-cols-1 gap-12">
            {activeTab === 'ev' && (
              <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border-t-8 border-emerald-500 animate-in fade-in slide-in-from-bottom-4 transition-all">
                <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                  <Cpu className="w-10 h-10 text-emerald-500" /> EV Technical Vertical
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-emerald-700">OEM & Component Design</h4>
                    <p className="text-slate-600">We produce world-class Chassis, Smart-BMS, and high-torque controllers designed specifically for rugged international environments.</p>
                    <div className="grid grid-cols-2 gap-4">
                      {techFeatures.map((f, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-bold text-slate-700">{f.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-900 rounded-3xl p-8 text-white">
                    <h4 className="text-xl font-bold mb-4 text-emerald-400">R&D Roadmap</h4>
                    <p className="text-slate-400 mb-6 italic">"Our lab is engineering the next generation of heat-safe electronics."</p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                        <span>AI-Driven Battery Quality Analytics</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                        <span>Liquid-cooled fast charging stations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'trade' && (
              <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border-t-8 border-amber-500 animate-in fade-in slide-in-from-bottom-4 transition-all">
                <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                  <Globe className="w-10 h-10 text-amber-500" /> Global Supply Vertical
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600">Krishna Power Solution is an export leader for industrial machinery, electrical equipment, and raw materials across Africa and the Middle East.</p>
                    <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
                      <h5 className="font-bold text-amber-800 mb-3">Promoting Indian Craft</h5>
                      <p className="text-sm text-slate-600">Our 'Indian Art Global' campaign exports traditional handicrafts and cultural products to UAE and Saudi Arabia markets.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-slate-50 rounded-3xl text-center">
                      <TrendingUp className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                      <div className="text-2xl font-black">1M+</div>
                      <div className="text-xs text-slate-400">Annual Units</div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl text-center">
                      <Truck className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                      <div className="text-2xl font-black">24/7</div>
                      <div className="text-xs text-slate-400">Logistics</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'govt' && (
              <div className="bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl text-white border-t-8 border-emerald-400 animate-in fade-in slide-in-from-bottom-4 transition-all">
                <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                  <Building className="w-10 h-10 text-emerald-400" /> Strategic Government Services
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 bg-white/5 rounded-3xl">
                    <FileCheck className="w-8 h-8 text-emerald-400 mb-4" />
                    <h5 className="font-bold mb-2">Tender Management</h5>
                    <p className="text-sm text-slate-400">End-to-end execution of large-scale supply and technical projects.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl">
                    <Users className="w-8 h-8 text-emerald-400 mb-4" />
                    <h5 className="font-bold mb-2">Manpower Supply</h5>
                    <p className="text-sm text-slate-400">Deployment of technical and skilled staff for industrial zones.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl">
                    <Wrench className="w-8 h-8 text-emerald-400 mb-4" />
                    <h5 className="font-bold mb-2">Turnkey Solutions</h5>
                    <p className="text-sm text-slate-400">Factory setups, machine installations, and process optimization.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <section className="mt-24">
            <h3 className="text-3xl font-black text-center mb-12">The Krishna Advantage</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsFeatures.map((f, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
                  <h4 className="font-black text-slate-900 mb-3">{f.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-white py-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-400 font-medium">© 2026 Krishna Power Solution Private Limited. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default KRISHNAPOWERSOLUTIONPRIVATELIMITED;