import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import C1Header from '../components/c1/C1Header';
import C1AboutUs from '../components/c1/C1AboutUs';
import C1Stats from '../components/c1/C1Stats';
import C1ModelSection from '../components/c1/C1ModelSection';
import C1FeaturesGrid from '../components/c1/C1FeaturesGrid';
import C1WhyChoose from '../components/c1/C1WhyChoose';
import C1FinanceDealership from '../components/c1/C1FinanceDealership';
import C1ContactGallery from '../components/c1/C1ContactGallery';
import C1TechnologySection from '../components/c1/TechnologySection';



const seoData = {
    title: "Shri Shyam Enterprises | TORA Electric Scooter Manufacturer | Premium EV Dealerships Available",
    description: "Leading electric scooter manufacturer in India. TORA brand - Power, Style, and Dealership Trust. High-performance EV scooters with advanced battery technology. Apply for dealership nationwide. Made in India quality.",
    keywords: "TORA electric scooter, EV scooter dealership, electric scooter manufacturer India, battery scooter price, e-scooter franchise, electric vehicle dealership, Shri Shyam Enterprises",
    url: "https://www.krishnagroup.com/shrishyamenterprises"
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": "Shri Shyam Enterprises",
    "description": seoData.description,
    "url": seoData.url,
    "brand": {
        "@type": "Brand",
        "name": "TORA",
        "slogan": "Power, Style, and Dealership Trust"
    }
};

const ShriShyamEnterprises = () => {
  const navigate = useNavigate();

  const handleDealershipClick = () => {
    navigate("/dealership");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main>
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
      </main>

      <footer className="py-10 border-t border-slate-200 bg-white text-center">
         <p className="text-slate-500 text-sm">
           © 2026 Shri Shyam Enterprises. TORA is a registered trademark of Krishna Group.
         </p>
      </footer>
    </div>
  );
};

export default ShriShyamEnterprises;