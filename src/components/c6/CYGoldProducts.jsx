// src/components/c6/CYGoldProducts.jsx
import React from 'react';
import { Zap, Shield, Package } from 'lucide-react';
import { 
  cyGoldSystemCount, 
  cyGoldMotorCount, 
  cyGoldSafetyCount 
} from './data';

const CYGoldProducts = () => {
  return (
    <div className="bg-gradient-to-br from-white via-yellow-50 to-amber-50 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-stone-800 mb-4">
            CY GOLD Premium Range
          </h2>
          <p className="text-xl text-stone-600">High-Grade Electric Vehicle Components</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Complete EV Systems
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: cyGoldSystemCount }).map((_, i) => (
              <div key={i} className="group relative">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="text-center text-white">
                    <Package className="w-10 h-10 mx-auto mb-2" />
                    <span className="font-bold">CYG-{i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-amber-500" />
              Premium Motors
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: cyGoldMotorCount }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-bold text-sm">MTR-{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8 text-amber-500" />
              Safety Components
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: cyGoldSafetyCount }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-bold text-sm">SFT-{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CYGoldProducts;