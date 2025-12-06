// import React from 'react';
// import { Zap, Shield, Sparkles, Award, TrendingUp, Users, Star, Package, Truck } from 'lucide-react';

// const electricVehiclesData = [
//   {
//     brand: 'SAI',
//     specialization: 'E-Scooty & E-Rickshaw Parts',
//     features: 'Known for long life and excellent performance.',
//   },
//   {
//     brand: 'CY GOLD',
//     specialization: 'Electric Vehicle Parts',
//     features: 'Reliability, strong fitting, and high-grade materials.',
//   },
//   {
//     brand: '999',
//     specialization: 'EV Components',
//     features: 'Premium quality at an affordable price.',
//   },
//   {
//     brand: 'GY',
//     specialization: 'Battery, Motor, Controller Parts',
//     features: 'Designed for South and all Indian road conditions.',
//   },
//   {
//     brand: 'UNAITED',
//     specialization: 'EV Spare Parts',
//     features: 'Strong, durable, and ideal for high-torque vehicles.',
//   },
// ];

// const bikePartsData = [
//   {
//     brand: 'HERO',
//     specialization: 'Bike Spare Parts',
//     features: 'Reliable, high-demand, genuine products.',
//   },
//   {
//     brand: 'BAJAJ',
//     specialization: 'Bike Spare Parts',
//     features: 'Strong and maximum performance on Indian roads.',
//   },
// ];

// const productRange = [
//   'Motors',
//   'Controllers',
//   'Brake Assemblies',
//   'Wiring Harnesses',
//   'Chassis Parts',
//   'Shock Absorbers',
//   'Plastic Body Parts',
//   'Chargers, BMS, Converters',
// ];

// const supplyChain = [
//   'Large and consistent stock availability',
//   'Immediate dispatch facility',
//   'Fast and secure delivery across India',
//   'Special supply support for OEMs and Service Centers',
// ];

// const tableHeaders = ['Brand', 'Specialization', 'Key Features'];


// const keyMetrics = [
//   { number: '500+', label: 'Dealer Network', icon: <Users className="w-8 h-8" /> },
//   { number: '50,000+', label: 'Parts Sold', icon: <Package className="w-8 h-8" /> },
//   { number: '97%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> },
// ];

// const TableHeader = ({ headers, bgClass }) => (
//   <thead className={bgClass || 'bg-amber-50'}>
//     <tr>
//       {headers.map((header) => (
//         <th
//           key={header}
//           scope="col"
//           className="px-6 py-4 text-left text-sm font-semibold text-amber-800 uppercase tracking-wider"
//         >
//           {header}
//         </th>
//       ))}
//     </tr>
//   </thead>
// );

// const Company2 = () => {
//   const kg = '/ElonBhaii.webp';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100 font-sans">
      
//       <header className="relative bg-gradient-to-r from-stone-800 via-stone-900 to-black text-white py-20 px-4 shadow-2xl">
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <div className="inline-block mb-4">
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-300">
//             PRINCE GLOBAL COMPANY
//           </h1>
//         </div>
//       </header>
//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-shrink-0 group">
//               <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white group-hover:scale-105 transition-transform duration-300">
//                 <img src={kg} alt="" className="w-full h-full object-cover" />
//               </div>
//             </div>

//             <div className="flex-1 text-center md:text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
//                 PRINCE GLOBAL COMPANY
//               </h2>
//               <p className="text-stone-700 text-lg leading-relaxed mb-4">
//                 Is a leading and trusted wholesale trading house of spare parts for electric vehicles (e-scooties, e-rickshaws) and conventional two-wheelers (bikes) in India. We contribute to strengthening the industry by supplying high-quality spare parts.
//               </p>
//               <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
//                 <p className="text-stone-600 italic">
//                   "For us, success is not just about earning profits, but about creating sustainable value for people and the environment."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="grid md:grid-cols-3 gap-6">
//           {keyMetrics.map((stat, idx) => (
//             <div
//               key={idx}
//               className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl"
//             >
//               <div className="flex justify-center mb-4 opacity-80">
//                 {stat.icon}
//               </div>
//               <div className="text-4xl font-bold mb-2">{stat.number}</div>
//               <div className="text-amber-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 text-center">
//           Leadership – Mr. Prince Kumar Sharma
//         </h2>
//         <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-8 border-2 border-stone-200 hover:shadow-xl transition-all duration-300">
//           <p className="text-lg text-stone-700 mb-4 leading-relaxed">
//             At PRINCE GLOBAL COMPANY, we're not just a supplier—we're your business partner. Our goal is to provide every customer with the best quality, timely delivery, and a reliable partnership.
//           </p>
          
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
//           <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
//             Our Vision
//           </h2>
//           <p className="text-stone-700 text-lg leading-relaxed">
//             Providing spare parts from the most reliable and high-quality brands in the industry.
//             <br />
//             Strengthening and streamlining the supply chain of service centres, dealers and manufacturing units.
//           </p>
//         </div>
//       </section>

//       <div className="bg-white p-8 max-w-6xl mx-auto font-sans rounded-2xl shadow-xl mb-12">
//         <h2 className="text-3xl font-bold text-stone-800 mb-4">
//           <span className="text-amber-700">1.</span> Our Product Range & Trusted Brands
//         </h2>
//         <p className="text-stone-600 mb-8 text-base">
//           PRINCE GLOBAL COMPANY provides high-level spare parts for both electric and petrol segments, keeping market needs in mind. We only supply certified and durable parts.
//         </p>

//         <section className="mb-12">
//           <h3 className="text-2xl font-semibold text-amber-700 mb-3">
//             💡 A. Electric Vehicle Parts (E-Scooty & E-Rickshaw)
//           </h3>
//           <p className="text-stone-600 mb-6">
//             We work with the following top Indian brands, known for their quality, durability, and performance:
//           </p>
//           <div className="shadow-lg rounded-lg overflow-hidden border border-stone-200">
//             <table className="min-w-full divide-y divide-stone-200">
//               <TableHeader headers={tableHeaders} bgClass="bg-amber-50" />
//               <tbody className="bg-white divide-y divide-stone-200">
//                 {electricVehiclesData.map((item) => (
//                   <tr key={item.brand}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
//                       {item.brand}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
//                       {item.specialization}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-stone-600">
//                       {item.features}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold text-amber-700 mb-3">
//             🏍️ B. Bike (Two-Wheeler) Spare Parts
//           </h3>
//           <p className="text-stone-600 mb-6">
//             We trade in genuine spare parts from India's largest and most popular brands:
//           </p>
//           <div className="shadow-lg rounded-lg overflow-hidden border border-stone-200">
//             <table className="min-w-full divide-y divide-stone-200">
//               <TableHeader headers={tableHeaders} bgClass="bg-amber-50" />
//               <tbody className="bg-white divide-y divide-stone-200">
//                 {bikePartsData.map((item) => (
//                   <tr key={item.brand}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
//                       {item.brand}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
//                       {item.specialization}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-stone-600">
//                       {item.features}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>

//       <div className="bg-white p-8 max-w-6xl mx-auto font-sans rounded-2xl shadow-xl mb-12">
//         <h2 className="text-3xl font-bold text-stone-800 mb-4">
//           <span className="text-amber-700">2.</span> Our Trading Expertise
//         </h2>
//         <p className="text-stone-600 mb-8 text-base">
//           We don't just sell parts—we provide reliable supply chain support to the industry.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <section>
//             <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
//               <Package className="w-5 h-5" />
//               Wide Product Range
//             </h3>
//             <p className="text-stone-600 mb-4">
//               We offer thousands of types of spare parts across all the following categories:
//             </p>
//             <ul className="list-disc list-inside text-stone-700 space-y-2 pl-4">
//               {productRange.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </section>

//           <section>
//             <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
//               <Truck className="w-5 h-5" />
//               Fast & Reliable Supply Chain
//             </h3>
//             <ul className="list-disc list-inside text-stone-700 space-y-2 pl-4">
//               {supplyChain.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </section>
//         </div>
//       </div>

//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="p-8 md:p-12">
//             <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <span className="font-bold text-amber-300">Company:</span>
//                   <span>PRINCE GLOBAL COMPANY</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="font-bold text-amber-300">Proprietor:</span>
//                   <span>Mr. Prince Kumar Sharma</span>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <span className="font-bold text-amber-300">Office:</span>
//                   <span>Gumthal Road, Near Police Fire Station, Chandausi<br />Sambhal, Uttar Pradesh – 244412</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="font-bold text-amber-300">Contact:</span>
//                   <a href="tel:+91895646497" className="hover:text-amber-300 transition-colors">+91 89564 6497</a>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="font-bold text-amber-300">Email:</span>
//                   <a href="mailto:princeglobal@example.com" className="hover:text-amber-300 transition-colors">princeglobal@example.com</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-6xl mx-auto px-4 mb-12">
//         <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl p-8 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
//             📸 Photo Gallery
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {[1, 2, 3].map((item) => (
//               <div
//                 key={item}
//                 className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
//               >
//                 <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <Zap className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
//                     <p className="font-semibold">TORA Model {item}</p>
//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-stone-800 mb-3">🏭 Our Manufacturing Unit</h3>
//               <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-400 rounded-lg flex items-center justify-center">
//                 <Shield className="w-16 h-16 text-white" />
//               </div>
//               <p className="text-stone-600 mt-3 text-sm">Modern factory located in Uttar Pradesh (Placeholder)</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-stone-800 mb-3">📦 Our Warehouse</h3>
//               <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-400 rounded-lg flex items-center justify-center">
//                 <Package className="w-16 h-16 text-white" />
//               </div>
//               <p className="text-stone-600 mt-3 text-sm">Large stock inventory ready for dispatch (Placeholder)</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gray-900 text-white py-8 text-center">
//         <p className="text-gray-400">© 2025 PRINCE GLOBAL COMPANY</p>
//         <p className="text-amber-400 mt-2">Powering the Future of Mobility</p>
//       </footer>
//     </div>
//   );
// };

// export default Company2;




import React from 'react';
import { Zap, Shield, Sparkles, Award, TrendingUp, Users, Star, Package, Truck } from 'lucide-react';
import { Helmet } from 'react-helmet';

const electricVehiclesData = [
  {
    brand: 'SAI',
    specialization: 'E-Scooty & E-Rickshaw Parts',
    features: 'Known for long life and excellent performance.',
  },
  {
    brand: 'CY GOLD',
    specialization: 'Electric Vehicle Parts',
    features: 'Reliability, strong fitting, and high-grade materials.',
  },
  {
    brand: '999',
    specialization: 'EV Components',
    features: 'Premium quality at an affordable price.',
  },
  {
    brand: 'GY',
    specialization: 'Battery, Motor, Controller Parts',
    features: 'Designed for South and all Indian road conditions.',
  },
  {
    brand: 'UNAITED',
    specialization: 'EV Spare Parts',
    features: 'Strong, durable, and ideal for high-torque vehicles.',
  },
];

const bikePartsData = [
  {
    brand: 'HERO',
    specialization: 'Bike Spare Parts',
    features: 'Reliable, high-demand, genuine products.',
  },
  {
    brand: 'BAJAJ',
    specialization: 'Bike Spare Parts',
    features: 'Strong and maximum performance on Indian roads.',
  },
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
  'Large and consistent stock availability',
  'Immediate dispatch facility',
  'Fast and secure delivery across India',
  'Special supply support for OEMs and Service Centers',
];

const tableHeaders = ['Brand', 'Specialization', 'Key Features'];

const keyMetrics = [
  { number: '500+', label: 'Dealer Network', icon: <Users className="w-8 h-8" /> },
  { number: '50,000+', label: 'Parts Sold', icon: <Package className="w-8 h-8" /> },
  { number: '97%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> },
];

const TableHeader = ({ headers, bgClass }) => (
  <thead className={bgClass || 'bg-amber-50'}>
    <tr>
      {headers.map((header) => (
        <th
          key={header}
          scope="col"
          className="px-6 py-4 text-left text-sm font-semibold text-amber-800 uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const Company2 = () => {
  const kg = '/ElonBhaii.webp';

  // SEO Data
  const pageTitle = "Prince Global Company | Wholesale EV & Bike Spare Parts Supplier in India";
  const pageDescription = "Prince Global Company is India's leading wholesale supplier of electric vehicle (e-scooty, e-rickshaw) and bike spare parts. Top brands: SAI, CY GOLD, 999, GY, UNAITED, HERO, BAJAJ. 500+ dealer network, 50,000+ parts sold. Fast delivery across India from Chandausi, Sambhal.";
  const pageKeywords = "Prince Global Company, EV spare parts wholesale India, e-rickshaw parts supplier, e-scooty spare parts, bike spare parts wholesale, SAI parts, CY GOLD, HERO spare parts, BAJAJ spare parts, electric vehicle components, motors controllers India, Prince Kumar Sharma, wholesale trading Chandausi";
  const pageUrl = "https://www.krishnagroup.com/company2";

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="author" content="Prince Global Company" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${window.location.origin}/prince-global-banner.jpg`} />
        <meta property="og:site_name" content="Krishna Group" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={`${window.location.origin}/prince-global-banner.jpg`} />

        {/* Geo Location Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Chandausi, Sambhal" />
        <meta name="geo.position" content="28.470848;78.759414" />
        <meta name="ICBM" content="28.470848, 78.759414" />

        {/* JSON-LD Schema - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Prince Global Company",
            "description": pageDescription,
            "url": pageUrl,
            "telephone": "+918956464977",
            "email": "princeglobal@example.com",
            "image": `${window.location.origin}/prince-global-company.jpg`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gumthal Road, Near Police Fire Station",
              "addressLocality": "Chandausi",
              "addressRegion": "Sambhal, Uttar Pradesh",
              "postalCode": "244412",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.470848",
              "longitude": "78.759414"
            },
            "founder": {
              "@type": "Person",
              "name": "Mr. Prince Kumar Sharma",
              "jobTitle": "Proprietor"
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Krishna Group"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5"
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ]
          })}
        </script>

        {/* JSON-LD Schema - Product Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Electric Vehicle Spare Parts Catalog",
            "description": "Comprehensive catalog of EV and bike spare parts",
            "itemListElement": [
              {
                "@type": "Product",
                "position": 1,
                "name": "SAI E-Scooty Parts",
                "brand": "SAI",
                "description": "Long life and excellent performance EV parts"
              },
              {
                "@type": "Product",
                "position": 2,
                "name": "CY GOLD Electric Vehicle Parts",
                "brand": "CY GOLD",
                "description": "Reliability, strong fitting, high-grade materials"
              },
              {
                "@type": "Product",
                "position": 3,
                "name": "999 EV Components",
                "brand": "999",
                "description": "Premium quality at affordable price"
              },
              {
                "@type": "Product",
                "position": 4,
                "name": "GY Battery Motor Controller Parts",
                "brand": "GY",
                "description": "Designed for Indian road conditions"
              },
              {
                "@type": "Product",
                "position": 5,
                "name": "UNAITED EV Spare Parts",
                "brand": "UNAITED",
                "description": "Strong, durable, high-torque vehicle parts"
              },
              {
                "@type": "Product",
                "position": 6,
                "name": "HERO Bike Spare Parts",
                "brand": "HERO",
                "description": "Genuine, reliable, high-demand products"
              },
              {
                "@type": "Product",
                "position": 7,
                "name": "BAJAJ Bike Spare Parts",
                "brand": "BAJAJ",
                "description": "Maximum performance on Indian roads"
              }
            ]
          })}
        </script>

        {/* JSON-LD Schema - Wholesale Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WholesaleStore",
            "name": "Prince Global Company",
            "description": "Leading wholesale supplier of EV and bike spare parts",
            "url": pageUrl,
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spare Parts Catalog",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "EV Parts",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Motors" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Controllers" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Battery Management Systems" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chargers" } }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Bike Parts",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Brake Assemblies" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Shock Absorbers" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Wiring Harnesses" } }
                  ]
                }
              ]
            }
          })}
        </script>

        {/* JSON-LD Schema - Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mr. Prince Kumar Sharma",
            "jobTitle": "Proprietor",
            "worksFor": {
              "@type": "Organization",
              "name": "Prince Global Company"
            },
            "affiliation": {
              "@type": "Organization",
              "name": "Krishna Group"
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Business",
                "item": `${window.location.origin}/business`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Prince Global Company",
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100 font-sans">
        
        <header className="relative bg-gradient-to-r from-stone-800 via-stone-900 to-black text-white py-20 px-4 shadow-2xl">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-block mb-4">
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-300">
              PRINCE GLOBAL COMPANY
            </h1>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 group">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white group-hover:scale-105 transition-transform duration-300">
                  <img src={kg} alt="Prince Kumar Sharma - Proprietor of Prince Global Company" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">
                  PRINCE GLOBAL COMPANY
                </h2>
                <p className="text-stone-700 text-lg leading-relaxed mb-4">
                  Is a leading and trusted wholesale trading house of spare parts for electric vehicles (e-scooties, e-rickshaws) and conventional two-wheelers (bikes) in India. We contribute to strengthening the industry by supplying high-quality spare parts.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-stone-600 italic">
                    "For us, success is not just about earning profits, but about creating sustainable value for people and the environment."
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {keyMetrics.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <div className="flex justify-center mb-4 opacity-80">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <article className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-8 border-2 border-stone-200 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 text-center">
              Leadership – Mr. Prince Kumar Sharma
            </h2>
            <p className="text-lg text-stone-700 mb-4 leading-relaxed">
              At PRINCE GLOBAL COMPANY, we're not just a supplier—we're your business partner. Our goal is to provide every customer with the best quality, timely delivery, and a reliable partnership.
            </p>
          </article>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              Our Vision
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed">
              Providing spare parts from the most reliable and high-quality brands in the industry.
              <br />
              Strengthening and streamlining the supply chain of service centres, dealers and manufacturing units.
            </p>
          </article>
        </section>

        <article className="bg-white p-8 max-w-6xl mx-auto font-sans rounded-2xl shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            <span className="text-amber-700">1.</span> Our Product Range & Trusted Brands
          </h2>
          <p className="text-stone-600 mb-8 text-base">
            PRINCE GLOBAL COMPANY provides high-level spare parts for both electric and petrol segments, keeping market needs in mind. We only supply certified and durable parts.
          </p>

          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              💡 A. Electric Vehicle Parts (E-Scooty & E-Rickshaw)
            </h3>
            <p className="text-stone-600 mb-6">
              We work with the following top Indian brands, known for their quality, durability, and performance:
            </p>
            <div className="shadow-lg rounded-lg overflow-hidden border border-stone-200">
              <table className="min-w-full divide-y divide-stone-200">
                <TableHeader headers={tableHeaders} bgClass="bg-amber-50" />
                <tbody className="bg-white divide-y divide-stone-200">
                  {electricVehiclesData.map((item) => (
                    <tr key={item.brand}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
                        {item.brand}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                        {item.specialization}
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-600">
                        {item.features}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
              🏍️ B. Bike (Two-Wheeler) Spare Parts
            </h3>
            <p className="text-stone-600 mb-6">
              We trade in genuine spare parts from India's largest and most popular brands:
            </p>
            <div className="shadow-lg rounded-lg overflow-hidden border border-stone-200">
              <table className="min-w-full divide-y divide-stone-200">
                <TableHeader headers={tableHeaders} bgClass="bg-amber-50" />
                <tbody className="bg-white divide-y divide-stone-200">
                  {bikePartsData.map((item) => (
                    <tr key={item.brand}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-900">
                        {item.brand}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                        {item.specialization}
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-600">
                        {item.features}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </article>

        <article className="bg-white p-8 max-w-6xl mx-auto font-sans rounded-2xl shadow-xl mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            <span className="text-amber-700">2.</span> Our Trading Expertise
          </h2>
          <p className="text-stone-600 mb-8 text-base">
            We don't just sell parts—we provide reliable supply chain support to the industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Wide Product Range
              </h3>
              <p className="text-stone-600 mb-4">
                We offer thousands of types of spare parts across all the following categories:
              </p>
              <ul className="list-disc list-inside text-stone-700 space-y-2 pl-4">
                {productRange.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Fast & Reliable Supply Chain
              </h3>
              <ul className="list-disc list-inside text-stone-700 space-y-2 pl-4">
                {supplyChain.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <article className="bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
              <address className="grid md:grid-cols-2 gap-6 not-italic">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-300">Company:</span>
                    <span>PRINCE GLOBAL COMPANY</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-300">Proprietor:</span>
                    <span>Mr. Prince Kumar Sharma</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-300">Office:</span>
                    <span>Gumthal Road, Near Police Fire Station, Chandausi<br />Sambhal, Uttar Pradesh – 244412</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-300">Contact:</span>
                    <a href="tel:+918956464977" className="hover:text-amber-300 transition-colors">+91 89564 64977</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-amber-300">Email:</span>
                    <a href="mailto:princeglobal@example.com" className="hover:text-amber-300 transition-colors">princeglobal@example.com</a>
                  </div>
                </div>
              </address>
            </div>
          </article>
        </section>

        <section className="max-w-6xl mx-auto px-4 mb-12">
          <article className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              📸 Photo Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Zap className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="font-semibold">TORA Model {item}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-800 mb-3">🏭 Our Manufacturing Unit</h3>
                <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <p className="text-stone-600 mt-3 text-sm">Modern factory located in Uttar Pradesh (Placeholder)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-800 mb-3">📦 Our Warehouse</h3>
                <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-400 rounded-lg flex items-center justify-center">
                  <Package className="w-16 h-16 text-white" />
                </div>
                <p className="text-stone-600 mt-3 text-sm">Large stock inventory ready for dispatch (Placeholder)</p>
              </div>
            </div>
          </article>
        </section>

      
      </div>
    </>
  );
};

export default Company2;