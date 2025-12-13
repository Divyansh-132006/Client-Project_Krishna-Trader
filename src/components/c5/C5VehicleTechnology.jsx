import React from 'react';
import { imageFeaturesData } from './C5Data';
// Image imports from the original file (path adjusted)
import tyreImage from "../../assets/auto/frontview.png";
import headlightImage from "../../assets/auto/lowerview.png";
import tailLightImage from "../../assets/auto/backview.png";
import shockersImage from "../../assets/auto/sideview.png";


// Helper to map keys to actual imported images
const imageMap = {
    tyre: tyreImage,
    headlight: headlightImage,
    taillight: tailLightImage,
    shockers: shockersImage,
};

export function C5VehicleTechnology() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-2xl p-8 md:p-12"
        style={{
          // Placeholder styling
          backgroundImage: "url('/placeholder-dark-scooter-bg.jpg')",
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply',
          minHeight: '400px',
          color: 'white'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90 rounded-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-700 pl-4 inline-block">
            6. Advanced Vehicle Technology
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Component Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {imageFeaturesData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-full h-56 bg-white rounded-lg shadow-xl mb-3 flex items-center justify-center overflow-hidden border border-gray-200">
                  <img
                    src={imageMap[item.key]} // Use the mapped image source
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 text-center">{item.title}</h4>
                <p className="text-sm text-gray-700 text-center">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}