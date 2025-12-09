import React from 'react';
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

// --- IMPORT SUB-COMPONENTS ---
import BrandScroller from '../components/c3/BrandScroller';
import ProductShowcase from '../components/c3/ProductShowcase';
import ProductTable from '../components/c3/ProductTable';
import FeatureCard from '../components/c3/FeatureCard';
import BusinessCarousel from '../components/c3/BusinessCarousel';
import PhotoGallery from '../components/c3/PhotoGallery';

// --- DATA DEFINITIONS FOR TABLES ---
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

const Company3 = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- HERO SECTION (VIDEO BACKGROUND) --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drgbysqgy/video/upload/f_auto,q_auto:best/krishna_zlyxib.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/drgbysqgy/video/upload/f_auto,q_auto:best/krishna_zlyxib.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-5xl text-center">
            <div className="inline-block mt:4 px-6 py- rounded-full border border-white/30">
              <span className="text-white font-semibold">Women-Led Excellence in Clean Energy</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mt:24 tracking-tight leading-tight">
              KRISHNA E-VEHICLE<br />TRADERS
            </h1>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* --- BRAND SCROLLER --- */}
      <BrandScroller />

      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* --- INTRODUCTION & QUICK STATS --- */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white via-teal-50/30 to-white rounded-3xl shadow-xl p-12 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-10 h-10 text-teal-600" />
              <h2 className="text-4xl font-bold text-slate-900">Welcome to the Future</h2>
            </div>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                **Krishna E-Vehicle Traders** stands as Chandausi's premier destination for cutting-edge EV and Solar power solutions, combining innovation with reliability.
              </p>
              <p>
                Under the visionary leadership of <strong className="text-teal-700">Smt. Krishna Devi</strong>, we're committed to delivering premium-grade energy solutions that don't compromise on quality or value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-teal-600" />
                <div>
                  <div className="font-bold text-slate-900">Premium Quality</div>
                  <div className="text-sm text-slate-600">Imported Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Target className="w-8 h-8 text-teal-600" />
                <div>
                  <div className="font-bold text-slate-900">Expert Service</div>
                  <div className="text-sm text-slate-600">Trusted Support</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <Shield className="w-8 h-8 text-teal-600" />
                <div>
                  <div className="font-bold text-slate-900">Guaranteed</div>
                  <div className="text-sm text-slate-600">Long-term Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LEADERSHIP QUOTE --- */}
        <section className="mb-20">
          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 rounded-3xl p-12 shadow-xl border-l-8 border-amber-400">
            <div className="absolute top-8 right-8 text-amber-200 opacity-20">
              <Users className="w-32 h-32" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8" />
                Leadership Vision
              </h2>
              <div className="text-7xl text-amber-300 mb-4">"</div>
              <blockquote className="text-xl text-slate-800 leading-relaxed mb-6 italic">
                We value your trust. Quality and transparency are our core principles. We provide long-lasting solutions for a greener, sustainable future. As a woman entrepreneur, my goal is to set new standards of excellence.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Smt. Krishna Devi</div>
                  <div className="text-slate-600">Founder & Proprietor</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCT SHOWCASE GRID --- */}
        <ProductShowcase />

        {/* --- PRODUCT TABLES --- */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Product Range
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From EV batteries to solar solutions, we offer complete energy systems
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
            <ProductTable
              title="EV & Inverter Batteries"
              data={electricVehiclesData}
              icon={Zap}
            />
            <ProductTable
              title="Premium Lithium Batteries"
              data={lithiumBatteriesData}
              icon={Package}
            />
            <ProductTable
              title="Solar Solutions"
              data={solarData}
              icon={Globe}
            />
          </div>
        </section>

        {/* --- BUSINESS CAROUSEL --- */}
        <BusinessCarousel />

        {/* --- WHY CHOOSE US FEATURES --- */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Krishna E-Vehicle Traders?
            </h2>
            <p className="text-slate-600 text-lg">
              Excellence in every aspect of our service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <FeatureCard
              icon={Users}
              title="Comprehensive Solutions"
              description="Premium brands, expert guidance, complete EV & solar solutions, and trusted service across Chandausi and Sambhal with dedicated customer support."
            />
            <FeatureCard
              icon={Shield}
              title="Quality Assurance"
              description="Every product undergoes rigorous testing and comes with manufacturer warranties, ensuring peace of mind and long-term reliability for your investment."
            />
            <FeatureCard
              icon={Target}
              title="Expert Consultation"
              description="Our experienced team provides personalized recommendations based on your specific needs, helping you choose the perfect energy solution."
            />
          </div>
        </section>

        {/* --- PHOTO GALLERY --- */}
        <PhotoGallery />

        {/* --- CONTACT SECTION --- */}
        <section className="py-20">
          <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 md:p-12">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
                  Get In Touch
                </h2>
                <p className="text-teal-200 text-base md:text-lg">
                  Visit our showroom or reach out to discuss your energy needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-teal-300 font-semibold mb-1 text-sm md:text-base">Company</p>
                      <p className="text-white text-base md:text-lg">KRISHNA E-VEHICLE TRADERS</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-teal-300 font-semibold mb-1 text-sm md:text-base">Proprietor</p>
                      <p className="text-white text-base md:text-lg">Smt. Krishna Devi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-teal-300 font-semibold mb-1 text-sm md:text-base">Address</p>
                      <p className="text-white text-sm md:text-base">
                        Gumthal Road, Near Fire Station<br />
                        Chandausi, Sambhal<br />
                        Uttar Pradesh – 244412
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-teal-300 font-semibold mb-1 text-sm md:text-base">Phone</p>
                      <a href="tel:+918956464977" className="text-white text-base md:text-lg hover:text-teal-300 transition-colors block">
                        +91 89564 64977
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-teal-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-teal-300 font-semibold mb-1 text-sm md:text-base">Email</p>
                      <a href="mailto:krishnaevehicle@example.com" className="text-white text-base md:text-lg hover:text-teal-300 transition-colors break-all">
                        krishnaevehicle@example.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-2xl border border-white/20">
                    <p className="text-white font-semibold mb-2 text-sm md:text-base">Business Hours</p>
                    <p className="text-teal-100 text-sm md:text-base">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-teal-100 text-sm md:text-base">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Company3;