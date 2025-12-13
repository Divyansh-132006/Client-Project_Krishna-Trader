import React from 'react';
import { Award } from 'lucide-react';
import { companyStats } from './C5Data';
import { C5StatCard } from './C5StatCard';

export function C5LeadershipVision() {
  return (
    <>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-emerald-700" />
          <h2 className="text-3xl font-bold text-gray-900">1. Leadership & Vision</h2>
        </div>
        <p className="text-gray-700 mb-4">
          <strong className="text-gray-900">Proprietor:</strong> Mr. Satish Chandra Sharma
        </p>
        <p className="text-gray-700 mb-6">
          Under his leadership, the company is setting new standards every year. Mr. Sharma's objective is to
          <strong> "Make India the global center of e-mobility"</strong> and provide reliable products to customers.
          His experience has led the company to adopt technological innovations such as lithium battery integration
          and solar charging support.
        </p>
        <blockquote className="border-l-4 border-emerald-700 bg-emerald-50 p-6 rounded-r-lg italic">
          <p className="text-gray-800 leading-relaxed">
            "We don't just forge products, but the future of India's mobility. Our rickshaws not only create employment
            but also protect the environment."
          </p>
        </blockquote>
      </section>

      {/* Company Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {companyStats.map((stat, index) => (
          <C5StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </>
  );
}