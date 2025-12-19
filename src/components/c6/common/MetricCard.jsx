import React from 'react';

const MetricCard = ({ metric }) => {
  const Icon = metric.icon;
  return (
    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 opacity-90" />
      </div>
      <div className="text-4xl font-bold mb-2">{metric.number}</div>
      <div className="text-amber-50 text-sm font-medium">{metric.label}</div>
    </div>
  );
};

export default MetricCard;