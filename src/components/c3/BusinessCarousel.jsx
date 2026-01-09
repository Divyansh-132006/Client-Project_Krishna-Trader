import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';


import one from '../../assets/bgtop/rooftop.png';
// import two from '../../assets/bgtop/image.png';
import three from '../../assets/bgtop/image.png';
import four from '../../assets/bgtop/scooty.png';
import five from '../../assets/bgtop/lead.png';

const BusinessContent = ({ company }) => (
  <div
    className="relative w-full h-full min-h-[350px] p-8 md:p-12 bg-cover bg-center" 
    style={{ backgroundImage: `url(${company.image})` }} 
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 rounded-2xl"></div>

    <div className="relative h-full flex flex-col justify-end">
      <div className="flex items-center gap-4 mb-2">
        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">{company.label}</span>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-4 leading-tight drop-shadow-lg">
        {company.title}
      </h3>

      <p className="text-lg md:text-xl text-amber-300 font-bold mb-2 leading-relaxed drop-shadow-md">
        {company.slogan}
      </p>

      <p className="text-base md:text-lg text-white mb-6 leading-relaxed max-w-3xl drop-shadow-md bg-black/30 backdrop-blur-sm p-4 rounded-xl">
        {company.description}
      </p>
    </div>
  </div>
);


const BusinessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const companies = [
    {
      image: one,
      title: "RoofTops Solar Panel",
      description: "Our RoofTop Solar Panels are tailor-made for residences and small commercial establishments.",
      slogan: "Clean Energy for Your Home",
      label: "SP"
    },
    {
      image: three,
      title: "Lithium Ion Battery Packs",
      description: "Leveraging our decades of experience of working with B2B customers, we work closely with our OEM partners to design and mass manufacture custom made solutions.",
      slogan: "Powering the Future of Mobility",
      label: "LB"
    },
    {
      image: four,
      title: "Electric Vehicles",
      description: "From reliable E Rickshaw chargers to efficient Lead Acid E Rickshaw batteries and advanced Lithium-Ion Battery Packs, we've got all your mobility needs covered.",
      slogan: "Comprehensive EV Solutions",
      label: "EV"
    },
    {
      image: five,
      title: "Lead Acid Batteries",
      description: "Known for performance, reliability, and value-for-money they offer, Eastmanpower products touch millions of consumers and small commercial establishments every day.",
      slogan: "Reliable, Everyday Power",
      label: "ER"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Our Network
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Business Portfolio</h2>
          <p className="text-lg text-gray-600">Explore our diverse family of companies</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 overflow-hidden">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? 'translate-x-0 opacity-100'
                      : index < activeIndex
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <BusinessContent company={company} />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {companies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-3 bg-amber-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to business ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCarousel;