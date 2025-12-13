import React from 'react';
import { coreStrengths, newFeatures, salesStats } from './C5Data';
import { C5StatCard } from './C5StatCard';

export function C5ProductHighlights() {
  return (
    <>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Core Product Strengths</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coreStrengths.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
              <div className="bg-white p-3 rounded-lg text-emerald-700 shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Performance & Technology Highlights</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {newFeatures.map((feature, index) => (
            <div key={index} className="text-center p-4 border rounded-lg hover:border-emerald-500 transition">
              <div className="flex justify-center mb-3 text-emerald-700">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Sales Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {salesStats.map((stat, index) => (
          <C5StatCard
            key={index}
            label={stat.label}
            value={stat.number}
            icon={stat.icon}
            isSalesStat={true}
          />
        ))}
      </div>
    </>
  );
}