import React from 'react';
import { Truck, Mail, Phone, MapPin, Zap, Package, Shield } from 'lucide-react';
import { 
  electricVehiclesData, 
  bikePartsData, 
  productRange, 
  supplyChain, 
  keyMetrics 
} from './data';
import MetricCard from './common/MetricCard';
import SectionCard from './common/SectionCard';
import ProductTable from './common/ProductTable';

const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-orange-50 pt-8">
      
      <header className="relative bg-gradient-to-r from-stone-900 via-stone-800 to-amber-900 text-white py-24 px-4 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400">
              PRINCE GLOBAL COMPANY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 font-light">
            Powering India's Electric & Bike Industry
          </p>
        </div>
      </header>

      <SectionCard className="mt-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">PG</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Leading Wholesale Trading House
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              A trusted supplier of spare parts for electric vehicles (e-scooties, e-rickshaws) and conventional two-wheelers in India. We strengthen the industry by delivering high-quality components that power sustainable mobility.
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm">
              <p className="text-stone-700 italic text-lg font-medium">
                "Success means creating sustainable value for people and the environment."
              </p>
              <p className="text-stone-500 text-sm mt-2">— Mr. Prince Kumar Sharma</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {keyMetrics.map((stat, idx) => (
            <MetricCard key={idx} metric={stat} />
          ))}
        </div>
      </section>

      <SectionCard>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Leadership – Mr. Prince Kumar Sharma
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            At PRINCE GLOBAL COMPANY, we're more than a supplier—we're your business partner. 
            Our commitment is to deliver exceptional quality, timely service, and reliable partnerships 
            that drive your success forward.
          </p>
        </div>
      </SectionCard>

      <SectionCard>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 text-center">
          Our Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-stone-700 text-lg">
              Providing spare parts from the most reliable and high-quality brands in the industry
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-200">
            <div className="text-4xl mb-3">🔗</div>
            <p className="text-stone-700 text-lg">
              Strengthening supply chains for service centres, dealers and manufacturing units
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="bg-gradient-to-br from-white to-amber-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-6 text-center">
              Our Product Range & Trusted Brands
            </h2>
            <p className="text-stone-600 mb-12 text-center text-lg max-w-3xl mx-auto">
              We provide premium spare parts for both electric and petrol segments, 
              supplying only certified and durable components that meet industry standards.
            </p>

            <ProductTable 
              data={electricVehiclesData} 
              title="Electric Vehicle Parts (E-Scooty & E-Rickshaw)"
              emoji="⚡"
            />

            <ProductTable 
              data={bikePartsData} 
              title="Bike (Two-Wheeler) Spare Parts"
              emoji="🏍️"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-6 text-center">
            Our Trading Expertise
          </h2>
          <p className="text-stone-600 mb-12 text-center text-lg max-w-2xl mx-auto">
            Beyond selling parts, we provide comprehensive supply chain support to the industry.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800">
                  Wide Product Range
                </h3>
              </div>
              <p className="text-stone-600 mb-4">
                Thousands of spare parts across multiple categories:
              </p>
              <ul className="space-y-2">
                {productRange.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-stone-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800">
                  Fast & Reliable Supply Chain
                </h3>
              </div>
              <ul className="space-y-4">
                {supplyChain.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-900 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-amber-300 mb-2 text-lg">Company</h3>
                  <p className="text-lg">PRINCE GLOBAL COMPANY</p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-300 mb-2 text-lg">Proprietor</h3>
                  <p className="text-lg">Mr. Prince Kumar Sharma</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-300 mb-1">Office Address</h3>
                    <p>Gumthal Road, Near Police Fire Station, Chandausi<br />Sambhal, Uttar Pradesh – 244412</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-300 mb-1">Contact</h3>
                    <a href="tel:+918956464977" className="hover:text-amber-300 transition-colors text-lg">
                      +91 89564 64977
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-300 mb-1">Email</h3>
                    <a href="mailto:princeglobal@example.com" className="hover:text-amber-300 transition-colors">
                      princeglobal@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-8 text-center">
            📸 Photo Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-lg">TORA Model {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏭</span>
                Our Manufacturing Unit
              </h3>
              <div className="aspect-video bg-gradient-to-br from-stone-300 to-stone-500 rounded-lg flex items-center justify-center">
                <Shield className="w-20 h-20 text-white" />
              </div>
              <p className="text-stone-600 mt-4">Modern facility in Uttar Pradesh</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Our Warehouse
              </h3>
              <div className="aspect-video bg-gradient-to-br from-stone-300 to-stone-500 rounded-lg flex items-center justify-center">
                <Package className="w-20 h-20 text-white" />
              </div>
              <p className="text-stone-600 mt-4">Large inventory ready for dispatch</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-8 text-center">
        <p className="text-gray-400">© 2025 PRINCE GLOBAL COMPANY</p>
        <p className="text-amber-400 mt-2 font-medium">Powering the Future of Mobility</p>
      </footer>
    </div>
  );
};

export default CompanyProfile;