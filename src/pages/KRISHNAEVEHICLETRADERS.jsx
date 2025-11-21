import React from 'react';
import { Zap, Shield, Package, Truck, Users, Star, BatteryCharging, Sunrise, MapPin, Phone, Mail, Globe } from 'lucide-react';

// --- Translated Data ---
const electricVehiclesData = [
  {
    segment: 'E-Rickshaw / Inverter Battery',
    brands: 'EASTMAN, LIVGUARD, LUMINOUS',
    advantages: 'Ensures long life (Tubular Technology), deep discharge capability, and high backup.',
  },
  {
    segment: 'E-Scooty Battery',
    brands: 'CHILWEE, KIJO',
    advantages: 'Modern Lithium-Ion technology, lightweight, fast charging, and excellent mileage.',
  }
];

const lithiumBatteriesData = [
  {
    segment: 'Lithium E-Rickshaw Battery',
    brands: 'WATSMAN',
    advantages: 'Imported from China, long range, fast charging, lightweight, and high efficiency.',
  },
  {
    segment: 'Lithium E-Scooty Battery',
    brands: 'KIJO',
    advantages: 'Imported from China, modern Lithium-Ion technology, lightweight, fast charging, and excellent mileage.',
  }
];

const solarData = [
  {
    segment: 'Solar Panels',
    brands: 'TATA POWER SOLAR, ADANI SOLAR',
    advantages: 'High efficiency and performance: Reliable 25-year performance warranty, latest top-notch technological panels.',
  },
  {
    segment: 'Solar Inverters / Systems',
    brands: 'LUMINOUS, EASTMAN, LIVGUARD',
    advantages: 'High-quality inverters for On-Grid, Off-Grid, and Hybrid systems that work seamlessly with solar batteries and panels.',
  }
];

const productRange = [
  'Motors',
  'Controllers',
  'Brake Assemblies',
  'Wiring Harnesses',
  'Chassis Parts',
  'Shock Absorbers',
  'Plastic Body Parts',
  'Chargers, BMS, Converters',
];

const supplyChain = [
  'Large and continuous stock availability',
  'Immediate dispatch facility',
  'Fast and secure delivery across India',
  'Special supply support for OEMs and Service Centers',
];

// --- Reusable Components ---

const TableHeader = ({ headers }) => (
  <thead className="bg-blue-600">
    <tr>
      {headers.map((header, idx) => (
        <th
          key={idx}
          scope="col"
          className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:border-blue-300">
    <Icon className="w-8 h-8 text-blue-600 mb-3" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// --- Main Component ---

const Company3 = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <Zap className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            KRISHNA E-VEHICLE TRADERS
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-200 mt-4">
            Revolutionizing the Energy Sector with Women's Leadership — Power, Reliability, and Trust for a Green Future
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Section 1: Welcome/About Us */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-blue-600">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" /> Welcome Home
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Krishna E-Vehicle Traders is the leading commercial hub for Electric Mobility (EV) and Solar Systems, providing comprehensive energy solutions in Chandausi (Sambhal).
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Under the strong leadership of our proprietor, **Smt. Krishna Devi**, we are committed to providing customers with the best brands, high-quality products, and outstanding service. Our primary goal is to ensure you get the **right product at the right price**.
            </p>
          </div>
        </section>

        {/* Section 2: Leadership Message */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-yellow-600" /> Leadership Message: Smt. Krishna Devi
            </h2>
            <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 italic text-lg text-gray-800">
              "We deeply value your trust. We believe that **Quality and Transparency** are the foundation of business. At Krishna E-Vehicle Traders, we don't just sell batteries—we provide solutions for a greener, more sustainable future. As a woman entrepreneur, my goal is to set a new standard of excellence in this sector."
            </blockquote>
          </div>
        </section>

        {/* Section 3: Product Portfolio */}
        <section className="bg-white p-8 rounded-2xl shadow-2xl mb-16 border-t-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Package className="w-8 h-8 text-blue-600" /> Product and Brand Portfolio
          </h2>

          {/* E-Vehicle & Inverter Batteries */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b pb-2">
              A. E-Vehicle and Inverter Batteries
            </h3>
            <p className="text-gray-600 mb-6">
              Durable and powerful energy sources for your transportation and power backup needs.
            </p>
            <div className="shadow-xl rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHeader headers={['Product Segment', 'Top Brands', 'Key Advantages']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {electricVehiclesData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-base font-medium text-gray-900">{item.segment}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.brands}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Lithium Batteries */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b pb-2">
              B. Premium Lithium Batteries
            </h3>
            <p className="text-gray-600 mb-6">
              Our Lithium battery range features the highest technology, offering reliable, imported performance and durability.
            </p>
            <div className="shadow-xl rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHeader headers={['Product Segment', 'Top Brands', 'Key Advantages']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {lithiumBatteriesData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-base font-medium text-gray-900">{item.segment}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.brands}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Solar Power Solutions */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b pb-2 flex items-center gap-2">
              <Sunrise className="w-5 h-5" /> C. Solar Power Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              Save electricity and protect nature. We have a complete range for:
            </p>
            <div className="shadow-xl rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHeader headers={['Product Segment', 'Brands', 'Features & Benefits']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {solarData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-base font-medium text-gray-900">{item.segment}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.brands}</td>
                      <td className="px-6 py-4 text-base text-gray-600">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <FeatureCard 
            icon={Star} 
            title="Global Sourcing & Quality Imports"
            description="We import high-quality, high-performance lithium batteries directly from China. This ensures we provide customers with the latest technology at competitive prices. Our imported WATSMAN e-rickshaw and KIJO e-scooter batteries guarantee long range, fast charging, and durability. We conduct rigorous quality checks on all imported products to uphold your trust."
          />
        </section>
        <section className="mb-16">
          <FeatureCard 
            icon={Star} 
            title="Why Us ?"
            description="🏆 Premium Brands: Stocks only verified and trusted brands like Tata, Adani, Luminous, Eastman, Livguard.
💡 Solutions Expertise: From e-rickshaws to home solar power—complete energy solutions under one roof.
🤝 Customer-Centric Service: After-sales service and expert guidance in choosing the right product.
🌍 Local Reach: Quick service and reliable delivery in Chandausi and Sambhal areas."
          />
        </section>


        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-10 text-center text-yellow-300">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-blue-200 block text-lg">Company Name:</span>
                    <span className="text-white text-xl">KRISHNA E-VEHICLE TRADERS</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-blue-200 block text-lg">Proprietor:</span>
                    <span className="text-white text-xl">Smt. Krishna Devi</span>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-blue-200 block text-lg">Office Address:</span>
                    <address className="not-italic text-white text-xl">
                      Gumthal Road, Near Police Fire Station, Chandausi<br />
                      Sambhal, Uttar Pradesh – 244412
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-blue-200 block text-lg">Contact:</span>
                    <a href="tel:+918956464977" className="text-white text-xl hover:text-yellow-300 transition-colors block">+91 89564 64977</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-blue-200 block text-lg">Email:</span>
                    <a href="mailto:krishnaevehicle@example.com" className="text-white text-xl hover:text-yellow-300 transition-colors block">krishnaevehicle@example.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-white py-8 text-center mt-12">
        <p className="text-gray-400 text-sm">© 2025 KRISHNA E-VEHICLE TRADERS. All rights reserved.</p>
        <p className="text-yellow-400 mt-2 text-lg font-medium">Powering the Mobility of Tomorrow</p>
      </footer>
    </div>
  );
};

export default Company3;