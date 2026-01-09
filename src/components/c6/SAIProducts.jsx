
import React from 'react';
import { Zap, Shield, Package } from 'lucide-react';
import { 
  saiControllerCount, 
  saiBrakeSystemCount, 
  saiPartsRangeCount 
} from './data';

const SAIProducts = () => {
  return (
    <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-stone-800 mb-4">
            SAI Brand Products
          </h2>
          <p className="text-xl text-stone-600">Trusted E-Scooty & E-Rickshaw Components</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Zap className="w-8 h-8 text-green-500" />
              Controllers & Electronics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: saiControllerCount }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-bold">CTRL-{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Shield className="w-8 h-8 text-green-500" />
              Brake Systems
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: saiBrakeSystemCount }).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-white font-bold">BRK-{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
            <Package className="w-8 h-8 text-green-500" />
            Complete Parts Range
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: saiPartsRangeCount }).map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-green-300 to-green-500 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
                <span className="text-white font-bold">SAI-{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAIProducts;