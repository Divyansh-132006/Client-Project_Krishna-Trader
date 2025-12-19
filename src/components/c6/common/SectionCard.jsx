import React from 'react';

const SectionCard = ({ title, children, className = "" }) => (
  <section className={`max-w-6xl mx-auto px-4 mb-12 ${className}`}>
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
      {title && <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">{title}</h2>}
      {children}
    </div>
  </section>
);

export default SectionCard;