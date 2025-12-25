
import React, { useState, useEffect } from 'react';
import {
  Factory, Zap, Globe, Award, Phone, Mail, CheckCircle, Truck,
  Shield, Settings, Users, TrendingUp, Star, ArrowRight, MapPin,
  Battery, Gauge, Calendar, BadgeCheck
} from 'lucide-react';

// Local Image Imports
import tyreImage from "../assets/auto/frontview.png";
import headlightImage from "../assets/auto/lowerview.png";
import tailLightImage from "../assets/auto/backview.png";
import shockersImage from "../assets/auto/sideview.png";
// import one from '../assets/bgtop/rooftop.png';
// import three from '../assets/bgtop/image.png';
// import four from '../assets/bgtop/scooty.png';
// import five from '../assets/bgtop/lead.png';

// Approved Image Imports
import firstimagee from '../assets/approvedimage/firstimagee.png'
import secondimagee from '../assets/approvedimage/secondimagee.png'
import thirdimagee from '../assets/approvedimage/thirdimagee.png'
import fourthimagee from '../assets/approvedimage/fourthimagee.png'
import fifthimagee from '../assets/approvedimage/fifthimagee.png'
import sixthimagee from '../assets/approvedimage/sixthimagee.png'
import sevenimagee from '../assets/approvedimage/sevenimagee.png'
import eightimagee from '../assets/approvedimage/eightimagee.png'
import nineimagee from '../assets/approvedimage/nineimagee.png'
import tenimagee from '../assets/approvedimage/tenimagee.png'
import elvenimagee from '../assets/approvedimage/elvenimagee.png'
import twelveimagee from '../assets/approvedimage/twelveimagee.png'
import thirteenimagee from '../assets/approvedimage/thirteenimagee.png'
import fourteenimagee from '../assets/approvedimage/fourteenimagee.png'

// // Product Images
// import eLoaderImg from '../assets/approvedimage/tenimagee.png'
// import speegoImg from '../assets/approvedimage/tenimagee.png'
// import speegoDlxImg from '../assets/approvedimage/tenimagee.png'
// import momiFineImg from '../assets/approvedimage/tenimagee.png'

// // --- REUSABLE UTILITY COMPONENTS ---

const SectionHeader = ({ title, subtitle, colorClass = 'text-gray-900' }) => (
  <div className="text-center mb-12">
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${colorClass}`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// --- APPROVALS SECTION COMPONENTS ---

const approvalsData = [
  { id: 1, src: firstimagee, alt: 'Eco Friendly' },
  { id: 2, src: secondimagee, alt: 'iCAT Approval' },
  { id: 3, src: thirdimagee, alt: 'Make In India' },
  { id: 4, src: fourthimagee, alt: 'MSME Approval' },
  { id: 5, src: fifthimagee, alt: 'Other Approval' },
];

const ApprovalLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-32 w-32 md:h-40 md:w-40 flex-shrink-0 transform hover:scale-105">
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Approval" }}
    />
  </div>
);

const ApprovalsGrid = ({ logos }) => (
  <div className="flex justify-center flex-wrap gap-6 mb-16">
    {logos.map((logo) => (
      <ApprovalLogo key={logo.id} src={logo.src} alt={logo.alt} />
    ))}
  </div>
);

const ApprovalsAndListingsSection = ({ approvalsData }) => (
  <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="CERTIFICATIONS & APPROVALS" 
        subtitle="Trusted by industry standards and government bodies"
        colorClass="text-emerald-700" 
      />
      <ApprovalsGrid logos={approvalsData} />
    </div>
  </section>
);

// --- FINANCE PARTNERS COMPONENTS ---

const financePartnersData = [
  { id: 1, src: sixthimagee, alt: 'CREDIFIN' },
  { id: 2, src: sevenimagee, alt: 'Partner Logo D/T' },
  { id: 3, src: eightimagee, alt: 'Partner Logo M/Hexagon' },
  { id: 4, src: nineimagee, alt: 'Golden Logo/Lotus' },
  { id: 5, src: tenimagee, alt: 'AKASA FINANCE' },
  { id: 6, src: elvenimagee, alt: 'Finance Partner 6' },
  { id: 7, src: twelveimagee, alt: 'Finance Partner 7' },
  { id: 8, src: thirteenimagee, alt: 'Finance Partner 8' },
  { id: 9, src: fourteenimagee, alt: 'Finance Partner 9' },
];

const FinancePartnerLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-32 w-32 md:h-44 md:w-44 flex-shrink-0 transform hover:scale-105">
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150?text=Partner" }}
    />
  </div>
);

const FinancePartnersGrid = ({ logos }) => (
  <div className="flex justify-center flex-wrap gap-6">
    {logos.map((logo) => (
      <FinancePartnerLogo key={logo.id} src={logo.src} alt={logo.alt} />
    ))}
  </div>
);

const FinancePartnersSection = ({ partnersData }) => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="OUR FINANCE PARTNERS" 
        subtitle="Flexible financing options to make your purchase easier"
        colorClass="text-emerald-700" 
      />
      <FinancePartnersGrid logos={partnersData} />
    </div>
  </section>
);



const productData = [
  {
    id: 1,
    title: "E-Loader (Load King)",
    image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    description: "E-Loader is designed to carry heavy loads with ease while ensuring zero emissions. With strong build quality and low maintenance, it's the smart choice for modern logistics.",
    specs: [
      "Loading Capacity: 310 Kgs. + 1(Driver)",
      "Battery: ICAT Approved LA Batteries 12V x 4, 130A",
      "Tyre: ICAT Approved & BIS Marked 3.75-12",
      "Charger: 15 Amp, SMPS, Auto Cut Indian Charger",
      "Chassis & Body: Heavy Duty CRCA Tube / Sheet Metal"
    ],
    stars: 5
  },
  {
    id: 2,
    title: "SPEEGO E Rickshaw",
    image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    description: "Our Speego Rickshaw offers smooth and safe travel for daily commuters. Eco-friendly, low maintenance, and highly efficient — perfect for urban and rural transport.",
    specs: ["Motor: 1000W/48V", "Seating Capacity: 4+1 (140 kg luggage)", "Mileage: 80-100 km/charge", "Charging Time: 6-8 Hrs"],
    stars: 5
  },
  {
    id: 3,
    title: "SPEEGO DLX E Rickshaws",
    image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    description: "Speego DLX E Rickshaws are designed for superior comfort, stylish looks, and powerful performance. High-quality materials and advanced technology for longer range and durability.",
    specs: ["Motor: 1000W/48V", "Seating Capacity: 4+1", "Tyre Size: 3.75x12", "Range: 80-100 KM"],
    stars: 5
  },
  {
    id: 4,
    title: "MOMI M-FINE",
    image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    description: "MOMI M-FINE defines modern mileage, strong looks, and stylish design built for daily use with low maintenance and high durability — perfect for city and rural roads.",
    specs: ["Motor: 1000W/48V/1000W", "Seating Capacity: 4+1 (140 kg luggage)", "Type: ICAT Approved", "Chassis: Strong Pipe Frame"],
    stars: 5
  },
];

const StarRating = ({ stars }) => (
  <div className="flex gap-0.5 text-yellow-400 mb-3">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < stars ? 'fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row border border-gray-100 group">
    {/* Product Image */}
    <div className="md:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-contain max-h-72 md:max-h-full relative z-10 transform group-hover:scale-105 transition-transform duration-300"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x250?text=" + product.title.split(' ')[0] }}
      />
    </div>

    {/* Product Details */}
    <div className="md:w-3/5 p-8 flex flex-col justify-between">
      <div>
        <StarRating stars={product.stars} />
        <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{product.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>Gumthal Road, Near Police Fire Station, Chandausi, Sambhal, Uttar Pradesh — 244412</span>
        </div>

        <p className="text-gray-700 text-base mb-6 leading-relaxed">{product.description}</p>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          {product.specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-3 text-sm bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-800 font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <button className="self-start bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group">
        <a href="/contact"> Contact Now</a>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const ProductListingsSection = ({ products }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Featured Products" 
        subtitle="Explore our range of premium electric vehicles"
      />
      <div className="space-y-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);



const BusinessContent = ({ company }) => (
  <div
    className="relative w-full h-full min-h-screen p-8 md:p-16 bg-cover bg-center"
    style={{ backgroundImage: `url(${company.image})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
  </div>
);

const BusinessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const companies = [
    {
      image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    },
    {
      image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    },
    {
      image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    },
    {
      image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
    }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full mb-16">
      <div className="relative">
        <div className="relative h-screen overflow-hidden rounded-3xl shadow-2xl">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${index === activeIndex
                ? 'w-10 h-3 bg-emerald-600 shadow-lg'
                : 'w-3 h-3 bg-white/60 hover:bg-white/80'
                }`}
              aria-label={`Go to business ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default function KRISHNAERICHSAWENTER() {
  const coreStrengths = [
    { icon: <Shield className="w-8 h-8" />, title: "Strong Chassis", desc: "High-grade iron construction that withstands up to 500kg load" },
    { icon: <Settings className="w-8 h-8" />, title: "Superior Suspension", desc: "Comfortable ride even on rough terrain" },
    { icon: <Battery className="w-8 h-8" />, title: "Long-Life Battery", desc: "Compatible with multiple battery brands including lithium options" },
    { icon: <Truck className="w-8 h-8" />, title: "High Load Capacity", desc: "Ideal for commercial use with 400-500kg capacity" }
  ];

  const companyStats = [
    { value: "10+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
    { value: "50K+", label: "Annual Production", icon: <Factory className="w-8 h-8" /> },
    { value: "95%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> },
    { value: "10K+", label: "Units Exported", icon: <Globe className="w-8 h-8" /> }
  ];

  const newFeatures = [
    { icon: <Shield className="w-8 h-8" />, title: "Advanced BMS", desc: "Smart Battery Protection" },
    { icon: <Zap className="w-8 h-8" />, title: "1000W Power", desc: "Powerful Motor" },
    { icon: <Gauge className="w-8 h-8" />, title: "80-100 KM", desc: "Long Mileage" },
    { icon: <BadgeCheck className="w-8 h-8" />, title: "24/7 Support", desc: "Instant Service" }
  ];

  const salesStats = [
    { number: "500+", label: "Dealer Network", icon: <Users className="w-10 h-10" /> },
    { number: "15,000+", label: "Units Sold", icon: <TrendingUp className="w-10 h-10" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-10 h-10" /> }
  ];

  const imageFeatures = [
    { src: tyreImage, title: "Robust Tyre", subtitle: "High grip and durability", width: 400, height: 400 },
    { src: headlightImage, title: "Bright Headlight", subtitle: "Long-range visibility", width: 300, height: 250 },
    { src: tailLightImage, title: "LED Tail Light", subtitle: "Energy efficient safety", width: 200, height: 200 },
    { src: shockersImage, title: "Heavy-Duty Shockers", subtitle: "Superior ride comfort", width: 250, height: 350 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

    
      <header className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0xOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAwaDYwdjYwSDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <Factory className="w-16 h-16 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-extrabold">Krishna E-Rickshaw Enterprises</h1>
          </div>
          <p className="text-2xl font-bold text-emerald-100 mb-4 tracking-wide uppercase">
            India's Roads, India's Strength — We Build the Future of Transportation
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed mb-8 text-emerald-50">
            Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws
            that promote eco-friendly mobility not only in India but worldwide.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
           
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLuBFMsZX0l1fz3TccGdmyQyxyTTYryFzjPo-wAdsXLgugAQ/viewform"
              className="inline-flex items-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/20"
            >
              <Users className="w-5 h-5" />
              Apply for Dealership
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Leadership Section */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-100 p-4 rounded-2xl">
              <Award className="w-10 h-10 text-emerald-700" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Leadership & Vision</h2>
          </div>
          <p className="text-gray-700 mb-4 text-lg">
            <strong className="text-emerald-700">Proprietor:</strong> Mr. Satish Chandra Sharma
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Under his leadership, the company is setting new standards every year. Mr. Sharma's objective is to
            <strong className="text-emerald-700"> "Make India the global center of e-mobility"</strong> and provide reliable products to customers.
            His experience has led the company to adopt technological innovations such as lithium battery integration
            and solar charging support.
          </p>
          <blockquote className="border-l-4 border-emerald-600 bg-gradient-to-r from-emerald-50 to-transparent p-8 rounded-r-2xl italic">
            <p className="text-gray-800 leading-relaxed text-lg">
              "We don't just forge products, but the future of India's mobility. Our rickshaws not only create employment
              but also protect the environment."
            </p>
            <footer className="text-emerald-700 font-semibold mt-4">— Mr. Satish Chandra Sharma</footer>
          </blockquote>
        </section>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-emerald-200">
              <div className="flex justify-center mb-3 text-emerald-700">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-extrabold text-emerald-700 mb-2">{stat.value}</h3>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Welcome Section */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Krishna E-Rickshaw Enterprises</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Where technology, quality, and Indian engineering converge. We don't just manufacture e-rickshaws — we create
            <strong className="text-emerald-700"> smart, sustainable, and future-oriented</strong> mobility solutions. Our vehicles are designed with
            Indian road challenges in mind, featuring high load capacity, low maintenance, and energy efficiency.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Every vehicle from our company is shipped to international markets with the same quality standards, helping us
            contribute towards making India a global center for e-mobility. Our focus is on customer satisfaction, and we
            prepare every product with precision and trust.
          </p>
        </section>

        {/* Business Carousel */}

        <BusinessCarousel />

         <section className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-emerald-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Our Core Capabilities</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">Our expertise is what sets us apart in the industry:</p>
          <ul className="space-y-6 mb-8">
            <li className="flex gap-4 bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CheckCircle className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 text-lg">Innovative Engineering:</strong>
                <span className="text-gray-700"> Advanced design with superior strength and high load capacity — our rickshaws can handle 400-500kg loads.</span>
              </div>
            </li>
            <li className="flex gap-4 bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CheckCircle className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 text-lg">Chassis Mastercraft:</strong>
                <span className="text-gray-700"> Robust and durable chassis designed for Indian roads — our biggest USP, rust-proof with long lifespan.</span>
              </div>
            </li>
            <li className="flex gap-4 bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CheckCircle className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 text-lg">OEM Partnership:</strong>
                <span className="text-gray-700"> Manufacturing for leading brands like Xtreme and Citystar, including customized design and branding.</span>
              </div>
            </li>
            <li className="flex gap-4 bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CheckCircle className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 text-lg">100% In-House Control:</strong>
                <span className="text-gray-700"> Quality control on all major parts, inspection at every step, and ISO standards compliance.</span>
              </div>
            </li>
          </ul>
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed">
              <strong className="text-emerald-100">Our Plant:</strong> Modern manufacturing facility in Muzaffarnagar — where every vehicle is crafted
              with precision technology, including robotic assembly and quality testing. Our production capacity is 50,000+
              units annually, sufficient to meet market demand.
            </p>
          </div>
        </section>

        {/* --- Approvals Section --- */}
        <ApprovalsAndListingsSection approvalsData={approvalsData} />

        {/* --- Product Listings Section (Featured Listings content) --- */}
        <ProductListingsSection products={productData} />

        {/* Core Product Strengths */}
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Core Product Strengths</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreStrengths.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 rounded-xl text-white shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Finance Partners Section --- */}
        <FinancePartnersSection partnersData={financePartnersData} />

        {/* Performance & Technology Highlights */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Performance & Technology Highlights</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {newFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-4 rounded-xl text-white shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sales Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {salesStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-4 bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl mx-auto">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-extrabold mb-2">{stat.number}</h3>
              <p className="font-semibold text-emerald-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Advanced Vehicle Technology */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-xl p-10 border border-emerald-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-emerald-600 p-4 rounded-2xl shadow-lg">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Advanced Vehicle Technology</h2>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-emerald-200">Component Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {imageFeatures.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-full h-56 bg-white rounded-2xl shadow-lg mb-4 flex items-center justify-center overflow-hidden border-2 border-gray-200 group-hover:border-emerald-500 transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      width={item.width}
                      height={item.height}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250x250?text=" + (item.title || "Part Image") }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 text-center">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Reach */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">National & International Reach</h2>
            </div>
            <p className="text-gray-700 mb-6 text-lg">Our business extends from India to international borders:</p>
            <ul className="space-y-4">
              <li className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">National distribution — Supply and assembly network across India, including Delhi, Mumbai, Bengaluru and other cities.</span>
              </li>
              <li className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">International exports — Nepal, Bangladesh and soon expanding to other Asian countries, having already exported 10,000+ units.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300 border border-amber-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-600 p-4 rounded-2xl shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Reliable performance and long lifespan — average 5-7 years without major repairs.</span>
              </li>
              <li className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Customized solutions for various markets — special suspension for hilly areas.</span>
              </li>
              <li className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Service and spare support availability — 24/7 helpline and on-site service.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* OEM Manufacturing */}
        <section className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl p-10 mb-12 hover:shadow-2xl transition-all duration-300 border border-purple-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-600 p-4 rounded-2xl shadow-lg">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">OEM Manufacturing</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Krishna E-Rickshaw Enterprises also provides OEM (Original Equipment Manufacturer) services. Many brands
            entrust us with manufacturing vehicles under their name, and we maintain premium quality standards aligned
            with their brand values.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Brand-based design and color customization — your logo and theme.</span>
            </div>
            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">In-house paint booth and frame fabrication — high-quality finish.</span>
            </div>
            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">High volume production capacity — ready for bulk orders.</span>
            </div>
            <div className="flex gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Confidentiality and brand integrity compliance — NDA and legal protection.</span>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-3xl shadow-2xl p-10 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold">Contact & Location</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-4 text-emerald-100">
                  Corporate Office
                </div>
                <p className="text-white text-lg leading-relaxed">
                  Gumthal Road, Near Police Fire Station, Chandausi, Sambhal, Uttar Pradesh — 244412
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-4 text-emerald-100">
                  Manufacturing Plant
                </div>
                <p className="text-white text-lg">Muzaffarnagar, Uttar Pradesh</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="mb-6">
                <p className="font-bold text-emerald-100 mb-2 text-lg">Proprietor</p>
                <p className="text-white text-xl">Mr. Satish Chandra Sharma</p>
              </div>

              <div className="space-y-4 mb-6">
                <a href="tel:895646497" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all duration-300">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg font-medium">895646497</span>
                </a>

                <a href="mailto:krishnagroup@gmail.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all duration-300">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg font-medium">krishnagroup@gmail.com</span>
                </a>
              </div>

              <p className="text-emerald-100 leading-relaxed">
                For partnerships, bulk orders, or exports, please connect with us. Our team will respond to your query promptly.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-emerald-700 px-10 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
              Get In Touch
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}