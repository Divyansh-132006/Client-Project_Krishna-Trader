import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Zap,
  Shield,
  Package,
  Users,
  Globe,
  MapPin,
  Phone,
  Mail,
  Award,
  Target,
  ChevronRight,
} from 'lucide-react';

import BrandScroller from '../components/c3/BrandScroller';
import ProductShowcase from '../components/c3/ProductShowcase';
import ProductTable from '../components/c3/ProductTable';
import FeatureCard from '../components/c3/FeatureCard';
import BusinessCarousel from '../components/c3/BusinessCarousel';
import PhotoGallery from '../components/c3/PhotoGallery';
import VideoHandler from '../hooks/videohandler';

const seoData = {
  title: "Krishna E-Vehicle Traders | Premium EV Batteries & Solar Solutions in Chandausi | Women-Led Excellence",
  description: "Leading EV battery and solar solution provider in Chandausi. Authorized dealer for EASTMAN, LIVGUARD, LUMINOUS, TATA POWER SOLAR. Lithium batteries, inverters, solar panels. Women-led business by Smt. Krishna Devi.",
  keywords: "EV battery Chandausi, lithium battery dealer, solar panels Sambhal, EASTMAN battery, LIVGUARD distributor, e-rickshaw battery, inverter battery, solar system installation, women entrepreneur India",
  url: "https://www.krishnagroup.com/krishnaevehicletraders"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Krishna E-Vehicle Traders",
  "description": seoData.description,
  "owner": {
    "@type": "Person",
    "name": "Krishna Devi",
    "gender": "Female",
    "jobTitle": "Founder & Proprietor"
  },
  "telephone": "+91-8956464977",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gumthal Road, Near Fire Station",
    "addressLocality": "Chandausi",
    "addressRegion": "Sambhal",
    "postalCode": "244412",
    "addressCountry": "IN"
  }
};

const electricVehiclesData = [
  {
    segment: 'E-Rickshaw / Inverter Battery',
    brands: 'EASTMAN, LIVGUARD, LUMINOUS',
    advantages: 'Long life tubular technology, deep discharge capability, high backup.'
  },
  {
    segment: 'E-Scooty Battery',
    brands: 'CHILWEE, KIJO',
    advantages: 'Lithium-Ion technology, lightweight, fast charging, excellent mileage.'
  }
];

const lithiumBatteriesData = [
  {
    segment: 'Lithium E-Rickshaw Battery',
    brands: 'WATSMAN',
    advantages: 'Imported, long range, fast charging, lightweight, high efficiency.'
  },
  {
    segment: 'Lithium E-Scooty Battery',
    brands: 'KIJO',
    advantages: 'Imported, fast charging, modern Li-Ion technology, reliable durability.'
  }
];

const solarData = [
  {
    segment: 'Solar Panels',
    brands: 'TATA POWER SOLAR, ADANI SOLAR',
    advantages: 'High efficiency, 25-year performance warranty, advanced mono PERC tech.'
  },
  {
    segment: 'Solar Inverters / Systems',
    brands: 'LUMINOUS, EASTMAN, LIVGUARD',
    advantages: 'High-quality inverters for on-grid, off-grid and hybrid systems.'
  }
];

const KRISHNAEVEHICLETRADERS = () => {
  const cloudinaryUrl1 = 'https://res.cloudinary.com/ddiyjetob/video/upload/v1767200334/krishna_zlyxib_1_fstk5w.mp4';
  const imagekitUrl1 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/krishna_zlyxib%20(1).mp4';

  const videoSrc1 = VideoHandler({ cloudinaryUrl: cloudinaryUrl1, imagekitUrl: imagekitUrl1 });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.url} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-white font-semibold tracking-wide">Women-Led Excellence in Clean Energy</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-tight">
            KRISHNA E-VEHICLE<br />
            <span className="text-teal-400">TRADERS</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Empowering Chandausi with next-generation EV batteries and sustainable solar energy solutions.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-10 h-10 text-white rotate-90" />
        </div>
      </section>

      <BrandScroller />

      <main className="max-w-7xl mx-auto px-4 py-20">

        <section className="mb-24">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-32 -mt-32 z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-600 rounded-2xl shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">Welcome to the Future</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-extrabold">Krishna E-Vehicle Traders</strong> is Chandausi's premier hub for high-performance energy solutions. We bridge the gap between world-class technology and local accessibility.
                  </p>
                  <p>
                    Visionary leadership by <strong className="text-teal-700 font-bold">Smt. Krishna Devi</strong> drives our commitment to a zero-emission future, ensuring that every household and business has access to reliable, green power.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: Award, title: "Premium Brands", desc: "Authorized dealers of Luminous, Tata, & more" },
                    { icon: Target, title: "Custom Fit", desc: "Solutions tailored to your energy load" },
                    { icon: Shield, title: "Full Warranty", desc: "Original products with direct support" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                      <item.icon className="w-6 h-6 text-teal-600" />
                      <div>
                        <div className="font-bold text-slate-900">{item.title}</div>
                        <div className="text-sm text-slate-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative shadow-2xl overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
              <Users className="w-96 h-96" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <span className="text-teal-400 font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
              <blockquote className="text-2xl md:text-4xl font-medium leading-tight mb-10 italic">
                "We value your trust. Quality and transparency are our core principles. As a woman entrepreneur, my goal is to set new standards of excellence in the clean energy sector."
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-teal-500" />
                <div>
                  <div className="text-xl font-bold">Smt. Krishna Devi</div>
                  <div className="text-teal-400">Founder & Proprietor</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />

        <section className="py-20">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-bold uppercase tracking-widest">Catalog</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4">Comprehensive Energy Range</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">The most trusted brands in the industry, all under one roof.</p>
          </div>

          <div className="space-y-12">
            <ProductTable title="EV & Inverter Batteries" data={electricVehiclesData} icon={Zap} />
            <ProductTable title="Premium Lithium Batteries" data={lithiumBatteriesData} icon={Package} />
            <ProductTable title="Solar Solutions" data={solarData} icon={Globe} />
          </div>
        </section>

        <BusinessCarousel />

        <section className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Full Support"
              description="From installation to maintenance, our team stays with you throughout the product lifecycle."
            />
            <FeatureCard
              icon={Shield}
              title="Certified Quality"
              description="100% genuine products directly from manufacturers like Eastman, Luminous, and Adani Solar."
            />
            <FeatureCard
              icon={Target}
              title="Expert Consultation"
              description="Get the right load calculation for your home or business to maximize efficiency and savings."
            />
          </div>
        </section>

        <PhotoGallery />

        <section className="mt-20">
          <div className="bg-gradient-to-br from-teal-950 to-slate-900 rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-16 border border-white/10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Connect With Us</h2>
              <p className="text-teal-300/80 text-xl">Powering Chandausi, One Battery At A Time.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex gap-6">
                  <MapPin className="w-10 h-10 text-teal-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-teal-400 font-bold text-lg mb-2">Showroom Address</h3>
                    <p className="text-white/80 leading-relaxed">
                      Gumthal Road, Near Fire Station,<br />
                      Chandausi, Sambhal, UP – 244412
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex gap-6">
                  <Phone className="w-10 h-10 text-teal-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-teal-400 font-bold text-lg mb-2">Direct Contact</h3>
                    <a href="tel:+918956464977" className="text-2xl text-white font-bold hover:text-teal-300 transition-colors">
                      +91 89564 64977
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-teal-600/10 p-10 rounded-3xl border border-teal-500/20 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                    <span>Mon - Sat</span>
                    <span className="text-teal-400 font-mono">09:00 AM - 07:00 PM</span>
                  </div>
                  <div className="flex justify-between text-white/70 border-b border-white/10 pb-2">
                    <span>Sunday</span>
                    <span className="text-teal-400 font-mono">10:00 AM - 05:00 PM</span>
                  </div>
                </div>
                <a
                  href="mailto:contact@krishnagroup.com"
                  className="mt-10 bg-teal-500 hover:bg-teal-400 text-slate-900 font-black py-4 rounded-2xl text-center transition-all transform hover:scale-105"
                >
                  Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>© 2026 Krishna Group. All rights reserved. | Women-Led Entrepreneurship.</p>
      </footer>
    </div>
  );
};

export default KRISHNAEVEHICLETRADERS;