import React from 'react';
import {
  Zap,
  Shield,
  Package,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Truck, 
  HardHat, 
  Clock, 
  Wifi, 
  RefreshCcw, 
  ParkingCircle, 
  Wrench, 
} from 'lucide-react';
import { Helmet } from 'react-helmet';

import EASTMAN_LOGO from '../assets/updated-eastman-logo-black.png';
import LIVGUARD_LOGO from '../assets/logo-light.svg';
import LUMINOUS_LOGO from '../assets/LuminousLogoBlue.webp';
import CHILWEE_LOGO from '../assets/logo2.png';
import KIJO_LOGO from '../assets/kijo1.png';
import TATA_SOLAR_LOGO from '../assets/tata-power-solar-logo.jpg';
import ADANI_SOLAR_LOGO from '../assets/logoSolar.png';

import front from '../assets/auto/frontview.png'
import back from '../assets/auto/backview.png'
import lower from '../assets/auto/lowerview.png'
import side from '../assets/auto/sideview.png'

const allBrands = [
  { name: 'EASTMAN', logoPath: EASTMAN_LOGO },
  { name: 'LIVGUARD', logoPath: LIVGUARD_LOGO },
  { name: 'LUMINOUS', logoPath: LUMINOUS_LOGO },
  { name: 'CHILWEE', logoPath: CHILWEE_LOGO },
  { name: 'KIJO', logoPath: KIJO_LOGO },
  { name: 'TATA POWER SOLAR', logoPath: TATA_SOLAR_LOGO },
  { name: 'ADANI SOLAR', logoPath: ADANI_SOLAR_LOGO }
];

const BrandScroller = () => {
  const items = [...allBrands, ...allBrands];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 border-y border-teal-200 shadow-inner">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-10 tracking-wide">
        Our Trusted Brand Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center space-x-12 animate-logo-scroll">
          {items.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 py-3 bg-white rounded-xl shadow-md border border-teal-100 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={brand.logoPath}
                alt={brand.name}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .animate-logo-scroll {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

// -------------------------------------------
// TABLE DATA
// -------------------------------------------
const electricVehiclesData = [
  {
    segment: 'E-Rickshaw / Inverter Battery',
    brands: 'EASTMAN, LIVGUARD, LUMINOUS',
    advantages:
      'Long life tubular technology, deep discharge capability, high backup.'
  },
  {
    segment: 'E-Scooty Battery',
    brands: 'CHILWEE, KIJO',
    advantages:
      'Lithium-Ion technology, lightweight, fast charging, excellent mileage.'
  }
];

const lithiumBatteriesData = [
  {
    segment: 'Lithium E-Rickshaw Battery',
    brands: 'WATSMAN',
    advantages:
      'Imported, long range, fast charging, lightweight, high efficiency.'
  },
  {
    segment: 'Lithium E-Scooty Battery',
    brands: 'KIJO',
    advantages:
      'Imported, fast charging, modern Li-Ion technology, reliable durability.'
  }
];

const solarData = [
  {
    segment: 'Solar Panels',
    brands: 'TATA POWER SOLAR, ADANI SOLAR',
    advantages:
      'High efficiency, 25-year performance warranty, advanced mono PERC tech.'
  },
  {
    segment: 'Solar Inverters / Systems',
    brands: 'LUMINOUS, EASTMAN, LIVGUARD',
    advantages:
      'High-quality inverters for on-grid, off-grid and hybrid systems.'
  }
];

// -------------------------------------------
// NEW COMPONENT FOR IMAGE CONTENT
// -------------------------------------------
const EVMotorcycleFeatures = () => {
  const mainFeatures = [
    { title: 'Anti-Theft Protection', icon: HardHat },
    { title: 'Up-to 3 Years Warranty', icon: Clock },
    { title: 'IOT Inside', icon: Wifi },
    { title: 'Reverse Assist', icon: RefreshCcw },
    { title: 'Parking Assist', icon: ParkingCircle },
    { title: 'One Touch Repair', icon: Wrench },
  ];

  const bottomFeatures = [
    { 
      title: 'Front-View', 
      description: 'With You Through Every Turn!',
      image: front,
    },
    { 
      title: 'Backlights', 
      description: 'Twin Projector Lamp With DRL',
      image: back,
    },
    { 
      title: 'Behind the seen Value', 
      description: 'Know Everything',
      image: lower,
    },
    { 
      title: 'Side-Phase Always Attract', 
      description: 'For A Comfortable And Smooth Ride',
      image: side,
    },
  ];

  return (
    <section className="mb-16">
      <div className="bg-teal-900 rounded-2xl shadow-xl p-10 border-b-4 border-yellow-400">
        <h2 className="text-4xl font-bold text-yellow-300 mb-5 flex items-center gap-2 justify-center">
          <Truck className="w-8 h-8 text-yellow-300" />
          A Lot More About Our E-Scooty Solutions
        </h2>
        <p className="text-center text-teal-200 mb-8">
          Features you can expect from our associated E-Scooter models (like the X-PRO).
        </p>
        
        {/* Top Features (Text/Icon based) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {mainFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 bg-teal-800 rounded-lg shadow-inner">
              <feature.icon className="w-8 h-8 text-cyan-300 mb-2" />
              <p className="text-white font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Features (Visual/Product based) */}
        <div className="grid md:grid-cols-4 gap-6">
          {bottomFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-lg border border-teal-200">
              <div className="w-full h-32 overflow-hidden rounded-lg mb-3 bg-gray-100 flex items-center justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-teal-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------
// SHARED COMPONENTS
// -------------------------------------------
const TableHeader = ({ headers }) => (
  <thead className="bg-teal-700">
    <tr>
      {headers.map((h, i) => (
        <th
          key={i}
          className="px-6 py-4 text-left text-sm font-bold text-white uppercase"
        >
          {h}
        </th>
      ))}
    </tr>
  </thead>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg border border-teal-300 transition hover:shadow-2xl hover:border-teal-600">
    <Icon className="w-10 h-10 text-teal-700 mb-3" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------
const Company3 = () => {
  const pageTitle =
    'Krishna E-Vehicle Traders | EV Batteries, Solar Solutions & Lithium Batteries in Chandausi';
  const pageDescription =
    'Premium EV, Solar, and Lithium energy solutions in Chandausi led by Smt. Krishna Devi. Import-quality batteries with expert service.';
  const pageUrl = 'https://www.krishnagroup.com/company3';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 font-sans">

        {/* HEADER */}
        <header className="bg-gradient-to-r from-teal-800 via-cyan-900 to-teal-900 text-white py-20 px-4 shadow-2xl">
          <div className="max-w-7xl mx-auto text-center">
            <Zap className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
            <h1 className="text-6xl font-extrabold tracking-tight">
              KRISHNA E-VEHICLE TRADERS
            </h1>
            <p className="text-xl mt-4 text-cyan-200">
              Women-led excellence in Electric Mobility and Solar Energy
            </p>
          </div>
        </header>

        {/* SCROLLER */}
        <BrandScroller />

        {/* MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-4 py-16">

          {/* WELCOME SECTION */}
          <section className="mb-16">
            <article className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-teal-600">
              <h2 className="text-4xl font-bold text-teal-800 mb-5 flex items-center gap-2">
                <Globe className="w-8 h-8 text-teal-700" />
                Welcome Home
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Krishna E-Vehicle Traders is Chandausi's leading commercial hub
                for EV and Solar power solutions.
              </p>
              <p className="text-gray-700 text-lg">
                Led by <strong>Smt. Krishna Devi</strong>, our mission is to
                deliver reliable, premium-grade energy solutions at the right
                price.
              </p>
            </article>
          </section>

          {/* LEADERSHIP MESSAGE */}
          <section className="mb-16">
            <article className="bg-yellow-100 rounded-2xl p-10 border-2 border-amber-300 shadow-xl">
              <h2 className="text-4xl font-bold text-amber-800 mb-5 flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-700" />
                Leadership Message: Smt. Krishna Devi
              </h2>
              <blockquote className="border-l-4 border-teal-600 pl-6 italic text-lg text-gray-800">
                "We value your trust. Quality and transparency are our core
                principles. We provide long-lasting solutions for a greener,
                sustainable future. As a woman entrepreneur, my goal is to set
                new standards of excellence."
              </blockquote>
            </article>
          </section>

          <EVMotorcycleFeatures />

          <section className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-teal-700 mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-10 flex items-center gap-3">
              <Package className="w-8 h-8 text-teal-700" /> Product Portfolio
            </h2>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-teal-800 mb-3">A. EV & Inverter Batteries</h3>
              <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
                <TableHeader headers={['Segment', 'Brands', 'Advantages']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {electricVehiclesData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{item.segment}</td>
                      <td className="px-6 py-4">{item.brands}</td>
                      <td className="px-6 py-4">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* LITHIUM */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-teal-800 mb-3">B. Premium Lithium Batteries</h3>
              <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
                <TableHeader headers={['Segment', 'Brands', 'Advantages']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {lithiumBatteriesData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{item.segment}</td>
                      <td className="px-6 py-4">{item.brands}</td>
                      <td className="px-6 py-4">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SOLAR */}
            <div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3">C. Solar Solutions</h3>
              <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
                <TableHeader headers={['Segment', 'Brands', 'Benefits']} />
                <tbody className="bg-white divide-y divide-gray-100">
                  {solarData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{item.segment}</td>
                      <td className="px-6 py-4">{item.brands}</td>
                      <td className="px-6 py-4">{item.advantages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FEATURE CARDS */}
          <section className="grid md:grid-cols-2 gap-10 mb-20">
            <FeatureCard
              icon={Star}
              title="Global Sourcing & Quality Imports"
              description="We import high-grade lithium batteries from China, ensuring latest technology, long backup, and fast charging with strict quality checks."
            />
            <FeatureCard
              icon={Star}
              title="Why Choose Us?"
              description="Premium brands, expert guidance, complete EV & solar solutions, and trusted service across Chandausi and Sambhal."
            />
          </section>

          {/* CONTACT SECTION */}
          <section className="bg-gradient-to-r from-teal-800 via-cyan-900 to-teal-900 text-white p-12 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-center text-yellow-300 mb-10">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">

                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-cyan-200 text-lg font-bold">Company</p>
                    <p className="text-white text-xl">KRISHNA E-VEHICLE TRADERS</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-cyan-200 text-lg font-bold">Proprietor</p>
                    <p className="text-white text-xl">Smt. Krishna Devi</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-cyan-200 text-lg font-bold">Office Address</p>
                    <p className="text-white text-lg">
                      Gumthal Road, Near Fire Station, Chandausi,
                      <br />
                      Sambhal, Uttar Pradesh – 244412
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-cyan-200 text-lg font-bold">Contact</p>
                    <a
                      href="tel:+918956464977"
                      className="text-white text-xl hover:text-yellow-300"
                    >
                      +91 89564 64977
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-cyan-200 text-lg font-bold">Email</p>
                    <a
                      href="mailto:krishnaevehicle@example.com"
                      className="text-white text-xl hover:text-yellow-300"
                    >
                      krishnaevehicle@example.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
};

export default Company3;