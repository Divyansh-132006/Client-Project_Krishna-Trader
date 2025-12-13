// src/components/c6/Company2.jsx
import React, { useState } from 'react';
import { Zap, Shield, Package, Star, Menu, X, Sparkles } from 'lucide-react';
import CompanyProfile from '../components/c6/CompanyProfile';
import GYInternationalProducts from '../components/c6/GYInternationalProducts';
import CYInternationalProduct from '../components/c6/CYInternationalProduct';
import Bajaj from '../components/c6/Bajaj';
import Triple9 from '../components/c6/Triple999';

// --- Main Wrapper Component with Navigation Menu ---

const Company2 = () => {
  const [activeSection, setActiveSection] = useState('company');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'company', label: 'Company Profile', icon: Shield },
    { id: 'products', label: 'CY & GY Products', icon: Sparkles },
    { id: 'bajaj', label: 'Bajaj', icon: Star },
    { id: 'triple9', label: 'Triple9', icon: Package },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'company':
        return <CompanyProfile />;
      case 'products':
        return (
          <div className="space-y-8">
            <GYInternationalProducts />
            <CYInternationalProduct />
          </div>
        );
      case 'bajaj':
        return <Bajaj />;
      case 'triple9':
        return <Triple9 />;
      default:
        return <CompanyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-stone-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-900 text-white sticky top-0 z-50 shadow-xl backdrop-blur-sm border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                PG
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-xl bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  PRINCE GLOBAL
                </span>
                <p className="text-xs text-amber-200/80 font-light tracking-wide">Excellence in Trade</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50 scale-105'
                        : 'hover:bg-stone-700/50 hover:shadow-md backdrop-blur-sm'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-stone-700/50 rounded-xl transition-all duration-300 hover:scale-110"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/50'
                        : 'hover:bg-stone-700/50 backdrop-blur-sm'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Content Area */}
      <div className="transition-all duration-500 ease-in-out">
        {renderContent()}
      </div>

      {/* Footer Badge */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-stone-800 to-amber-900 text-white px-4 py-2 rounded-full shadow-xl text-xs font-medium hidden lg:block">
        <span className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-amber-400" />
          Premium Quality Products
        </span>
      </div>
    </div>
  );
};

export default Company2;