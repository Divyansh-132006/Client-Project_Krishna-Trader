import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Factory, Zap, Globe, Award, Phone, Mail, CheckCircle, Truck,
  Shield, Settings, Users, TrendingUp, Star, ArrowRight, MapPin,
  Battery, Gauge, Calendar, BadgeCheck
} from 'lucide-react';

import tyreImage from "../assets/auto/frontview.png";
import headlightImage from "../assets/auto/lowerview.png";
import tailLightImage from "../assets/auto/backview.png";
import shockersImage from "../assets/auto/sideview.png";

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

const seoData = {
  title: "Krishna E-Rickshaw Enterprises | Premium Electric Rickshaw Manufacturer in India",
  description: "Leading e-rickshaw manufacturer in Chandausi. ICAT approved E-Loader, Speego, and Momi M-Fine models. 50K+ annual production. Exporting to 10+ countries.",
  keywords: "e-rickshaw manufacturer India, electric rickshaw price, ICAT approved e-rickshaw, e-loader vehicle, Speego e-rickshaw",
  url: "https://www.krishnagroup.com/krishnaerickshawenterprises",
  image: "https://www.krishnagroup.com/e-rickshaw-image.jpg"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  "name": "Krishna E-Rickshaw Enterprises",
  "description": seoData.description,
  "url": seoData.url,
  "founder": { "@type": "Person", "name": "Satish Chandra Sharma" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gumthal Road, Near Police Fire Station",
    "addressLocality": "Chandausi",
    "addressRegion": "Sambhal",
    "postalCode": "244412",
    "addressCountry": "IN"
  }
};


const SectionHeader = ({ title, subtitle, colorClass = 'text-gray-900' }) => (
  <div className="text-center mb-12">
    <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${colorClass}`}>{title}</h2>
    {subtitle && <p className="text-gray-600 text-lg max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const ApprovalLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-32 w-32 md:h-40 md:w-40 flex-shrink-0 transform hover:scale-105">
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:row border border-gray-100 group mb-8 md:flex-row">
    <div className="md:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative">
      <img src={product.image} alt={product.title} className="w-full h-auto object-contain z-10 transform group-hover:scale-105 transition-all" />
    </div>
    <div className="md:w-3/5 p-8 flex flex-col justify-between">
      <div>
        <div className="flex gap-0.5 text-yellow-400 mb-3">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h3>
        <p className="text-gray-700 text-base mb-6">{product.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex items-start gap-3 text-sm bg-gray-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{spec}</span>
            </div>
          ))}
        </div>
      </div>
      <a href="/contact" className="inline-flex items-center justify-center self-start bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all gap-2">
        Contact Now <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  </div>
);

const BusinessCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp', 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp'];

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex(p => (p + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[60vh] md:h-screen overflow-hidden rounded-3xl shadow-2xl mb-16">
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
          <img src={img} alt="Carousel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button key={i} onClick={() => setActiveIndex(i)} className={`h-3 rounded-full transition-all ${i === activeIndex ? 'w-10 bg-emerald-500' : 'w-3 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
};


export default function KRISHNAERICHSAWENTER() {
  const coreStrengths = [
    { icon: <Shield />, title: "Strong Chassis", desc: "High-grade iron construction (500kg load)" },
    { icon: <Settings />, title: "Superior Suspension", desc: "Comfortable ride on any terrain" },
    { icon: <Battery />, title: "Long-Life Battery", desc: "Lithium and Lead-acid compatible" },
    { icon: <Truck />, title: "High Load Capacity", desc: "400-500kg commercial capacity" }
  ];

  const products = [
    {
      id: 1, title: "E-Loader (Load King)", image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
      description: "Designed for heavy logistics with zero emissions and robust build quality.",
      specs: ["Capacity: 310 Kgs", "Battery: 12V x 4, 130A", "Tyre: BIS Marked", "Charger: Auto Cut SMPS"]
    },
    {
      id: 2, title: "SPEEGO E-Rickshaw", image: 'https://babaerickshaw.com/wp-content/uploads/2025/06/cart-2.webp',
      description: "The ultimate choice for urban passenger transport, focusing on comfort and mileage.",
      specs: ["Motor: 1000W", "Seating: 4+1", "Mileage: 80-100 km", "Charge: 6-8 Hrs"]
    }
  ];

  const approvals = [firstimagee, secondimagee, thirdimagee, fourthimagee, fifthimagee];
  const finance = [sixthimagee, sevenimagee, eightimagee, nineimagee, tenimagee, elvenimagee];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <header className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-6">
            <Factory className="w-16 h-16 text-emerald-300" />
            <h1 className="text-5xl md:text-6xl font-extrabold">Krishna E-Rickshaw</h1>
          </div>
          <p className="text-xl md:text-2xl text-emerald-100 font-bold mb-6 tracking-wide">INDIA'S ROADS, INDIA'S STRENGTH</p>
          <p className="max-w-3xl mx-auto text-lg opacity-90 mb-10">Sustainable, safe, and high-performance mobility solutions manufactured with the Make in India spirit.</p>
          <a href="https://docs.google.com/forms/d/e/..." className="bg-white text-emerald-800 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-emerald-50 transition-all inline-flex items-center gap-2">
            <Users className="w-5 h-5" /> Apply for Dealership
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="bg-white rounded-3xl shadow-xl p-10 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800 flex items-center gap-3">
            <Award className="w-8 h-8" /> Leadership & Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Under the guidance of <strong>Mr. Satish Chandra Sharma</strong>, we are setting new benchmarks in e-mobility.
            Our mission is to make India a global manufacturing hub for sustainable transport.
          </p>
          <blockquote className="bg-emerald-50 p-6 rounded-2xl italic border-l-8 border-emerald-600">
            "We don't just forge products, but the future of India's mobility."
          </blockquote>
        </section>

        <BusinessCarousel />

        <SectionHeader title="Our Core Capabilities" subtitle="Precision engineering meets industrial scale." />
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {coreStrengths.map((s, i) => (
            <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-emerald-500 transition-all">
              <div className="bg-emerald-100 p-4 rounded-xl text-emerald-700 h-fit">{s.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionHeader title="Featured Products" subtitle="Explore our high-efficiency electric lineup." />
        {products.map(p => <ProductCard key={p.id} product={p} />)}

        <section className="py-12">
          <SectionHeader title="Certifications & Approvals" colorClass="text-emerald-700" />
          <div className="flex flex-wrap justify-center gap-6">
            {approvals.map((img, i) => <ApprovalLogo key={i} src={img} alt="Certification" />)}
          </div>
        </section>

        <section className="py-12">
          <SectionHeader title="Finance Partners" colorClass="text-emerald-700" />
          <div className="flex flex-wrap justify-center gap-6">
            {finance.map((img, i) => <ApprovalLogo key={i} src={img} alt="Finance Partner" />)}
          </div>
        </section>

        <section className="bg-emerald-800 rounded-3xl p-12 text-white shadow-2xl mt-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-emerald-300" />
                  <p>Gumthal Road, Near Fire Station, Chandausi, UP 244412</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-emerald-300" />
                  <p>+91 895646497</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-emerald-300" />
                  <p>krishnagroup@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Bulk Orders & Exports</h3>
              <p className="mb-8 opacity-80">Looking for custom OEM manufacturing or international export? Let's build together.</p>
              <a href="/contact" className="block text-center bg-white text-emerald-900 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all">
                Send Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 border-t border-gray-200">
        © 2026 Krishna E-Rickshaw Enterprises. All Rights Reserved.
      </footer>
    </div>
  );
}