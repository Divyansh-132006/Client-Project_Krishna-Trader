import React from 'react';
import { CheckCircle } from 'lucide-react';
import { coreCapabilitiesList } from './C5Data';

export function C5CoreCapabilities() {
  return (
    <>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Welcome to Krishna E-Rickshaw Enterprises</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Where technology, quality, and Indian engineering converge. We don't just manufacture e-rickshaws — we create
          <strong> smart, sustainable, and future-oriented</strong> mobility solutions. Our vehicles are designed with
          Indian road challenges in mind, featuring high load capacity, low maintenance, and energy efficiency.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Every vehicle from our company is shipped to international markets with the same quality standards, helping us
          contribute towards making India a global center for e-mobility. Our focus is on customer satisfaction, and we
          prepare every product with precision and trust.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Our Core Capabilities</h2>
        <p className="text-gray-700 mb-6">Our expertise is what sets us apart in the industry:</p>
        <ul className="space-y-4 mb-6">
          {coreCapabilitiesList.map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">{item.text}</strong>
                <span className="text-gray-700">{item.span}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-emerald-50 rounded-lg p-6">
          <p className="text-gray-900">
            <strong>Our Plant:</strong> Modern manufacturing facility in Muzaffarnagar — where every vehicle is crafted
            with precision technology, including robotic assembly and quality testing. Our production capacity is 50,000+
            units annually, sufficient to meet market demand.
          </p>
        </div>
      </section>
    </>
  );
}