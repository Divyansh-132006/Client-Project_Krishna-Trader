import React from 'react';

// --- LOGO IMPORTS ---
// Assuming these paths are correct relative to your project root or defined in Company3
import EASTMAN_LOGO from '../../assets/logo/updated-eastman-logo-black.png'; 
import LIVGUARD_LOGO from '../../assets/logo/logo-light.svg';
import LUMINOUS_LOGO from '../../assets/logo/LuminousLogoBlue.webp';
import CHILWEE_LOGO from '../../assets/logo/logo2.png';
import KIJO_LOGO from '../../assets/logo/kijo1.png';
import TATA_SOLAR_LOGO from '../../assets/logo/tata-power-solar-logo.jpg';
import ADANI_SOLAR_LOGO from '../../assets/logo/logoSolar.png';

const allBrands = [
  { name: 'EASTMAN', logo: EASTMAN_LOGO },
  { name: 'LIVGUARD', logo: LIVGUARD_LOGO },
  { name: 'LUMINOUS', logo: LUMINOUS_LOGO },
  { name: 'CHILWEE', logo: CHILWEE_LOGO },
  { name: 'KIJO', logo: KIJO_LOGO },
  { name: 'TATA POWER', logo: TATA_SOLAR_LOGO },
  { name: 'ADANI SOLAR', logo: ADANI_SOLAR_LOGO }
];

const BrandScroller = () => {
  // Duplicating the list ensures a seamless, infinite scroll effect
  const items = [...allBrands, ...allBrands]; 

  return (
    <div className="relative w-full overflow-hidden py-16 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Trusted Partners
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Premium Brand Portfolio
          </h2>
          <p className="text-slate-600 text-lg">
            Partnering with industry leaders to deliver excellence
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Note: The 'animate-logo-scroll' class and @keyframes must be included 
              for this component to work as intended. */}
          <div className="flex items-center space-x-16 animate-logo-scroll">
            {items.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 py-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 min-w-[180px] h-24"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="max-h-12 max-w-full object-contain  transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-logo-scroll {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default BrandScroller;