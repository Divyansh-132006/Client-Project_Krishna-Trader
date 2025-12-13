import React from 'react';
import { Globe, CheckCircle } from 'lucide-react';
import { marketReachList, whyChooseUsList } from './C5Data';

export function C5MarketReach() {
  return (
    <section className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-emerald-700" />
          <h2 className="text-2xl font-bold text-gray-900">7. National & International Reach</h2>
        </div>
        <p className="text-gray-700 mb-4">Our business extends from India to international borders:</p>
        <ul className="space-y-3">
          {marketReachList.map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                <strong className="text-gray-900 font-semibold">{item.text}</strong>
                {item.span}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        <ul className="space-y-3">
          {whyChooseUsList.map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                <strong className="text-gray-900 font-semibold">{item.text}</strong>
                {item.span}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}