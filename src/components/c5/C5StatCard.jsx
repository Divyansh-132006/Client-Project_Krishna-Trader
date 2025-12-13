import React from 'react';

export function C5StatCard({ value, label, icon: Icon, isSalesStat = false }) {
  const baseClasses = isSalesStat
    ? "bg-emerald-700 text-white rounded-xl p-6 text-center shadow-lg"
    : "bg-emerald-50 rounded-xl p-6 text-center";

  const valueClasses = isSalesStat
    ? "text-4xl font-bold mb-1"
    : "text-4xl font-bold text-emerald-700 mb-2";

  const labelClasses = isSalesStat
    ? "font-medium text-emerald-100"
    : "text-gray-700 font-medium";

  return (
    <div className={baseClasses}>
      {Icon && (
        <div className="flex items-center justify-center mb-2">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h3 className={valueClasses}>{value || label.split(' ')[0]}</h3>
      <p className={labelClasses}>{label}</p>
    </div>
  );
}