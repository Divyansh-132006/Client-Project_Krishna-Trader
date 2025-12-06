import React, { useState } from 'react';
import { Factory, Zap, Globe, Award, Phone, Mail, MapPin, CheckCircle, Truck, Shield, Settings } from 'lucide-react';

export default function Company5() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Strong Chassis", desc: "High-grade iron construction that withstands up to 500kg load" },
    { icon: <Settings className="w-6 h-6" />, title: "Superior Suspension", desc: "Comfortable ride even on rough terrain" },
    { icon: <Zap className="w-6 h-6" />, title: "Long-Life Battery", desc: "Compatible with multiple battery brands including lithium options" },
    { icon: <Truck className="w-6 h-6" />, title: "High Load Capacity", desc: "Ideal for commercial use with 400-500kg capacity" }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50K+", label: "Annual Production" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "10K+", label: "Units Exported" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Factory className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Krishna E-Rickshaw Enterprises</h1>
          </div>
          <p className="text-xl font-semibold text-emerald-100 mb-2 tracking-wide uppercase">
            India's Roads, India's Strength — We Build the Future of Transportation
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws 
            that promote eco-friendly mobility not only in India but worldwide.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-bold text-gray-900">1. Leadership & Vision</h2>
          </div>
          <p className="text-gray-700 mb-4">
            <strong className="text-gray-900">Proprietor:</strong> Mr. Satish Chandra Sharma
          </p>
          <p className="text-gray-700 mb-6">
            Under his leadership, the company is setting new standards every year. Mr. Sharma's objective is to 
            <strong> "Make India the global center of e-mobility"</strong> and provide reliable products to customers. 
            His experience has led the company to adopt technological innovations such as lithium battery integration 
            and solar charging support.
          </p>
          <blockquote className="border-l-4 border-emerald-700 bg-emerald-50 p-6 rounded-r-lg italic">
            <p className="text-gray-800 leading-relaxed">
              "We don't just forge products, but the future of India's mobility. Our rickshaws not only create employment 
              but also protect the environment."
            </p>
          </blockquote>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-emerald-50 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-emerald-700 mb-2">{stat.value}</h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Welcome to Krishna E-Rickshaw Enterprises</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Where technology, quality, and Indian engineering converge. We don't just manufacture e-rickshaws — we create 
            <strong> smart, sustainable, and future-oriented</strong> mobility solutions. Our vehicles are designed with 
            Indian road challenges in mind, featuring high load capacity, low maintenance, and energy efficiency.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every vehicle from our company is shipped to international markets with the same quality standards, helping us 
            contribute towards making India a global center for e-mobility. Our focus is on customer satisfaction, and we 
            prepare every product with precision and trust.
          </p>
      
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Our Core Capabilities</h2>
          <p className="text-gray-700 mb-6">Our expertise is what sets us apart in the industry:</p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">Innovative Engineering:</strong>
                <span className="text-gray-700"> Advanced design with superior strength and high load capacity — our rickshaws can handle 400-500kg loads.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">Chassis Mastercraft:</strong>
                <span className="text-gray-700"> Robust and durable chassis designed for Indian roads — our biggest USP, rust-proof with long lifespan.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">OEM Partnership:</strong>
                <span className="text-gray-700"> Manufacturing for leading brands like Xtreme and Citystar, including customized design and branding.</span>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900">100% In-House Control:</strong>
                <span className="text-gray-700"> Quality control on all major parts, inspection at every step, and ISO standards compliance.</span>
              </div>
            </li>
          </ul>
          <div className="bg-emerald-50 rounded-lg p-6">
            <p className="text-gray-900">
              <strong>Our Plant:</strong> Modern manufacturing facility in Muzaffarnagar — where every vehicle is crafted 
              with precision technology, including robotic assembly and quality testing. Our production capacity is 50,000+ 
              units annually, sufficient to meet market demand.
            </p>
          </div>
        </section>

        {/* 4. Product Features */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Our E-Rickshaw Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                <div className="bg-white p-3 rounded-lg text-emerald-700 shadow-sm">
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

        {/* 5. Market Reach */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-emerald-700" />
              <h2 className="text-2xl font-bold text-gray-900">5. National & International Reach</h2>
            </div>
            <p className="text-gray-700 mb-4">Our business extends from India to international borders:</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">National distribution — Supply and assembly network across India, including Delhi, Mumbai, Bengaluru and other cities.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">International exports — Nepal, Bangladesh and soon expanding to other Asian countries, having already exported 10,000+ units.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Reliable performance and long lifespan — average 5-7 years without major repairs.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Customized solutions for various markets — special suspension for hilly areas.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Service and spare support availability — 24/7 helpline and on-site service.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. OEM Manufacturing */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Factory className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-bold text-gray-900">OEM Manufacturing</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Krishna E-Rickshaw Enterprises also provides OEM (Original Equipment Manufacturer) services. Many brands 
            entrust us with manufacturing vehicles under their name, and we maintain premium quality standards aligned 
            with their brand values.
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Brand-based design and color customization — your logo and theme.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">In-house paint booth and frame fabrication — high-quality finish.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">High volume production capacity — ready for bulk orders.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Confidentiality and brand integrity compliance — NDA and legal protection.</span>
            </li>
          </ul>
        </section>

        {/* 7. Contact & Location */}
        <section id="contact" className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">7. Contact & Location</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
                Corporate Office
              </div>
              <p className="text-gray-700 mb-6">
                Gumthal Road, Near Police Fire Station, Chandausi, Sambhal, Uttar Pradesh — 244412
              </p>

              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
                Manufacturing Plant
              </div>
              <p className="text-gray-700">Muzaffarnagar, Uttar Pradesh</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 mb-2">Proprietor</p>
                <p className="text-gray-700">Mr. Satish Chandra Sharma</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-700" />
                <a href="tel:895646497" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  895646497
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-700" />
                <a href="mailto:krishnagroup@gmail.com" className="text-emerald-700 hover:text-emerald-800 font-medium">
                  krishnagroup@gmail.com
                </a>
              </div>

              <p className="text-gray-700 mt-6">
                For partnerships, bulk orders, or exports, please connect with us. Our team will respond to your query promptly.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="mailto:krishnagroup@gmail.com" 
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}