import React, { useState, useMemo } from 'react';
import { Zap, Shield, Package, Star, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

// Components
import CompanyProfile from '../components/c6/CompanyProfile';
import GYInternationalProducts from '../components/c6/GYInternationalProducts';
import Bajaj from '../components/c6/Bajaj';
import Triple9 from '../components/c6/Triple999';

const PRINCEGLOBALCOMPANY = () => {
  const [activeSection, setActiveSection] = useState('company');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized menu items to prevent unnecessary re-renders
  const menuItems = useMemo(() => [
    { id: 'company', label: 'Company Profile', icon: Shield },
    { id: 'products', label: 'CY & GY Products', icon: Sparkles },
    { id: 'bajaj', label: 'Bajaj', icon: Star },
    { id: 'triple9', label: 'Triple9', icon: Package },
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
    <div className="min-h-screen bg-[#0f0f0e] text-stone-100 selection:bg-amber-500/30">
      {/* --- Modern Navigation --- */}
      <nav className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo */}
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
                <span className="block font-black text-lg tracking-tighter leading-none text-white uppercase">
                  Prince Global
                </span>
                <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em] uppercase opacity-80">
                  Excellence in Trade
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-stone-800/50 p-1.5 rounded-2xl border border-white/5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold ${
                      isActive 
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

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-stone-400 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 border-t border-white/5' : 'max-h-0'}`}>
          <div className="p-4 space-y-2 bg-stone-900">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl font-bold ${
                  activeSection === item.id ? 'bg-amber-500 text-black' : 'bg-stone-800/50 text-stone-300'
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

      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="transition-opacity duration-500">
          <ActiveComponent />
        </div>
      </main>

      {/* --- Floating Status Badge --- */}
      <div className="fixed bottom-8 right-8 hidden xl:block pointer-events-none">
        <div className="bg-stone-900/90 backdrop-blur-md border border-amber-500/20 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
          <div className="relative">
             <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20"></div>
             <Zap className="w-4 h-4 text-amber-500 relative" />
          </div>
          <span className="text-xs font-bold tracking-widest text-stone-300 uppercase">Premium Quality Guaranteed</span>
        </div>
      </div>
    </div>
  );
};

export default PRINCEGLOBALCOMPANY;