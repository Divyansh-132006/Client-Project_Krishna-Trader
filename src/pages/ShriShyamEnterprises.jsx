import React from 'react';
import { useNavigate } from 'react-router-dom';
import C1Header from '../components/c1/C1Header';
import C1AboutUs from '../components/c1/C1AboutUs';
import C1Stats from '../components/c1/C1Stats';
import C1ModelSection from '../components/c1/C1ModelSection';
import C1FeaturesGrid from '../components/c1/C1FeaturesGrid';
import C1WhyChoose from '../components/c1/C1WhyChoose';
import C1FinanceDealership from '../components/c1/C1FinanceDealership';
import C1ContactGallery from '../components/c1/C1ContactGallery';
import C1TechnologySection from '../components/c1/TechnologySection';
import eduVanzLogo from '../assets/tora/finance.png';

const ShriShyamEnterprises = () => {
  
  const navigate = useNavigate();

  const handleDealershipClick = () => {
    navigate("/dealership");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <C1Header handleDealershipClick={handleDealershipClick} />
      <C1AboutUs kg={'/ElonBhaii.webp'} />
      <C1Stats />
      <C1ModelSection />
      <C1FeaturesGrid />
      <C1TechnologySection />
      <C1WhyChoose />
      <C1FinanceDealership 
        handleDealershipClick={handleDealershipClick} 
      />
      <C1ContactGallery />
    </div>
  );
};

export default ShriShyamEnterprises;