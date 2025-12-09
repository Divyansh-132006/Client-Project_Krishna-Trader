import React from 'react';
import { Award } from 'lucide-react'; // Renaming the imported icon to avoid conflict if used elsewhere

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:border-teal-400 transition-all duration-300 hover:shadow-xl">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-teal-700" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default FeatureCard;