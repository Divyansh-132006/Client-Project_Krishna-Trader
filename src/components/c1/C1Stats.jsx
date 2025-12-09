import React from 'react';
import { Users, TrendingUp, Star } from 'lucide-react';

const statsData = [
  { number: "500+", label: "Dealer Network", icon: <Users className="w-8 h-8" /> },
  { number: "15,000+", label: "Units Sold", icon: <TrendingUp className="w-8 h-8" /> },
  { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> }
];

const C1Stats = () => (
  <section className="max-w-7xl mx-auto px-4 mb-20">
    <div className="grid md:grid-cols-3 gap-6">
      {statsData.map((stat, idx) => (
        <div key={idx} className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl">
          <div className="flex justify-center mb-4 opacity-90">
            {stat.icon}
          </div>
          <div className="text-5xl font-bold mb-2">{stat.number}</div>
          <div className="text-emerald-100 text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default C1Stats;