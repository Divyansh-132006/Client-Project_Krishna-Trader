import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Zap, Shield, Package, Star, Menu, X, Sparkles, ChevronRight, Truck, Globe, Award } from 'lucide-react';

import CompanyProfile from '../components/c6/CompanyProfile';
import GYInternationalProducts from '../components/c6/GYInternationalProducts';
import Bajaj from '../components/c6/Bajaj';
import Triple9 from '../components/c6/Triple999';

const seoData = {
  title: "Prince Global Company | Premium EV Spare Parts Wholesaler | CY, GY, Bajaj & Triple9 Authorized Dealer",
  description: "India's largest wholesaler of electric vehicle and conventional vehicle spare parts. Authorized distributor for CY International, GY, Bajaj Auto, and Triple9.",
  keywords: "EV spare parts wholesaler, e-rickshaw parts dealer, Bajaj authorized dealer, GY products India, CY International distributor, OEM parts supplier",
  url: "https://www.krishnagroup.com/princeglobalcompany"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "name": "Prince Global Company",
  "description": seoData.description,
  "url": seoData.url,
  "brand": [
    { "@type": "Brand", "name": "CY International" },
    { "@type": "Brand", "name": "GY Products" },
    { "@type": "Brand", "name": "Bajaj Auto" },
    { "@type": "Brand", "name": "Triple9" }
  ]
};

const PRINCEGLOBALCOMPANY = () => {
  const [activeSection, setActiveSection] = useState('company');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = useMemo(() => [
    { id: 'company', label: 'Company Profile', icon: Shield },
    { id: 'products', label: 'CY & GY Products', icon: Sparkles },
    { id: 'bajaj', label: 'Bajaj Genuine', icon: Star },
    { id: 'triple9', label: 'Triple9 Premium', icon: Package },
  ], []);

  const ActiveComponent = () => {
    switch (activeSection) {
      case 'company': return <CompanyProfile />;
      case 'products': return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <GYInternationalProducts />
        </div>
      );
      case 'bajaj': return <Bajaj />;
      case 'triple9': return <Triple9 />;
      default: return <CompanyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0e] text-stone-100 selection:bg-amber-500/30 font-sans">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <nav className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            <div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => setActiveSection('company')}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-amber-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center font-bold text-black shadow-2xl">
                  PG
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="block font-black text-xl tracking-tighter leading-none text-white uppercase">
                  Prince Global
                </span>
                <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase opacity-80">
                  Excellence in Trade
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center bg-stone-800/50 p-1.5 rounded-2xl border border-white/5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold ${isActive
                        ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                        : 'text-stone-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              className="md:hidden p-2 text-stone-400 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'}`}>
          <div className="p-4 space-y-2 bg-stone-900">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl font-bold ${activeSection === item.id ? 'bg-amber-500 text-black' : 'bg-stone-800/50 text-stone-300'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  {item.label}
                </div>
                <ChevronRight size={16} opacity={0.5} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {activeSection === 'company' && (
          <div className="mb-16 relative rounded-[2.5rem] overflow-hidden bg-stone-900 border border-white/5">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-10 md:p-20">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  THE HEART OF <br />
                  <span className="text-amber-500">EV LOGISTICS</span>
                </h2>
                <p className="text-stone-400 text-lg mb-8 max-w-md">
                  Authorized wholesaler and distributor for the world's leading automotive brands. We ensure the supply chain of India's green revolution stays unbroken.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <Truck className="text-amber-500 w-5 h-5" />
                    <span className="text-sm font-bold">Pan-India Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <Award className="text-amber-500 w-5 h-5" />
                    <span className="text-sm font-bold">100% Genuine</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-full bg-gradient-to-l from-amber-500/10 to-transparent">
                <div className="w-full h-full flex items-center justify-center opacity-40 grayscale">
                  <Package size={300} strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="transition-opacity duration-500">
          <ActiveComponent />
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 bg-stone-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-stone-500 text-sm font-medium mb-4">A SUBSIDIARY OF KRISHNA GROUP</div>
          <div className="flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-xl">BAJAJ</span>
            <span className="font-black text-xl">CY INTERNATIONAL</span>
            <span className="font-black text-xl">GY PRODUCTS</span>
            <span className="font-black text-xl">TRIPLE9</span>
          </div>
          <p className="mt-12 text-stone-600 text-xs tracking-widest uppercase">© 2026 Prince Global Company. All Rights Reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 hidden xl:block pointer-events-none">
        <div className="bg-stone-900/90 backdrop-blur-md border border-amber-500/20 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20"></div>
            <Zap className="w-4 h-4 text-amber-500 relative" />
          </div>
          <span className="text-xs font-bold tracking-widest text-stone-300 uppercase">Authorized Wholesaler</span>
        </div>
      </div>
    </div>
  );
};

export default PRINCEGLOBALCOMPANY;