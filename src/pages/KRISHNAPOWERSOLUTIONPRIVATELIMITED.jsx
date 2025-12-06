import { useState } from 'react';
import { Zap, Shield, Globe, Award, TrendingUp, Users, Star, CheckCircle, Cpu, Truck, FileCheck, Wrench, Building, Package, ChevronRight, Sun } from 'lucide-react';
import { Helmet } from 'react-helmet';
const exportRegionFlags = [
  { name: "Nepal", path: "/assets/Flag_of_Nepal.svg.png" },
  { name: "Bangladesh", path: "/assets/Flag_of_Bangladesh.svg.webp" },
  { name: "Bhutan", path: "/assets/Flag_of_Bhutan.svg.png" },
  { name: "Sri Lanka", path: "/assets/Flag_of_Sri_Lanka.svg.webp" },
  { name: "UAE", path: "/assets/Flag_of_the_United_Arab_Emirates.svg.webp" },
  { name: "Saudi Arabia", path: "/assets/Flag_of_Saudi_Arabia.svg.webp" },
  { name: "Qatar", path: "/assets/Flag_of_Qatar.svg.png" },
  { name: "Kenya", path: "/assets/Flag_of_Kenya.svg.webp" },
  { name: "South Africa", path: "/assets/Flag_of_South_Africa.svg.webp" },
];

const scrollingRegions = [...exportRegionFlags, ...exportRegionFlags, ...exportRegionFlags, ...exportRegionFlags];

const ExportRegionScroller = () => {

 const translatePercentage = 25;

  return (
    <div className="relative w-full overflow-hidden py-8 bg-amber-50 border-y border-amber-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Active International Export Regions 🌎
      </h2>

      <div className="w-full h-16 mx-auto max-w-full">
        <div className="horizontal-scroller flex flex-row space-x-6 h-full">
          {scrollingRegions.map((region, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 h-full min-w-[180px] bg-white rounded-lg shadow-md border border-amber-200 transition-transform duration-10 hover:scale-105"
            >
              <img
                src={region.path}
                alt={`${region.name} flag`}
                className="w-22 h-11 mr-2 object-cover rounded-sm border border-gray-200"
              />
              <span className="text-md font-semibold text-gray-800 whitespace-nowrap">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
                .horizontal-scroller {
                    animation: scroll-regions 5s linear infinite;
                }

                @keyframes scroll-regions {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-25%);
                    }
                }
            `}</style>
    </div>
  );
};


const Company4 = () => {
  const [activeTab, setActiveTab] = useState('ev');


  const stats = [
    { number: "10+", label: "Countries of Presence", icon: <Globe className="w-6 h-6" /> },
    { number: "1,00,000+", label: "Products Exported", icon: <Package className="w-6 h-6" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const techFeatures = [
    { icon: <Shield className="w-5 h-5" />, text: "BMS Thermal Protection Design" },
    { icon: <Zap className="w-5 h-5" />, text: "High-Torque Hub Motor Engineering" },
    { icon: <Cpu className="w-5 h-5" />, text: "Energy-Optimized Controller Software" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Smart Charging Algorithms" },
    { icon: <Star className="w-5 h-5" />, text: "AI-Driven Quality Analytics (Future Expand)" }
  ];

  const credentials = [
    "Export Documentation & Compliance Expertise",
    "Industry Recognized Vendor Ratings",
    "National-Level Supply Chain Projects",
    "100+ B2B Clients Served"
  ];

  const partners = ["EV Manufacturers", "Industrial Importers", "Government Contractors", "Retail Distribution Agencies"];

  const whyUsFeatures = [
    { title: "Integrated Business Model", desc: "Manufacturing + Trading + Government + Services — All under one roof." },
    { title: "World-Class Quality Testing", desc: "Thermal, Vibration, Load, Insulation, and Final Road-Test." },
    { title: "Global Compliance", desc: "ISO, Export Standards, ISPM-15 Packaging, Digital Tracking Logistics!" },
    { title: "10+ Years of Industry Experience", desc: "Strong foothold in EV, Trading, and Government Projects." },
    { title: "Ultra-Fast Delivery Network", desc: "PAN India + International Logistics Support!" }
  ];

  const pageTitle = "Krishna Power Solution Pvt Ltd | EV Manufacturing, International Trade & Government Services";
  const pageDescription = "Krishna Power Solution is India's leading EV component manufacturer, international trader, and government services provider. Export to 10+ countries including UAE, Bangladesh, Kenya. OEM manufacturing, government tenders, industrial solutions, and Make in India initiative.";
  const pageKeywords = "Krishna Power Solution, EV manufacturing India, international trade company, government tender services, OEM manufacturing, export to UAE, Bangladesh exports, Kenya exports, EV components export, industrial supply chain, Make in India, white label manufacturing, government projects India";
  const pageUrl = "https://www.krishnagroup.com/company4";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* ... other meta and schema tags ... */}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-teal-50 to-amber-50">

        <header className="relative bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sun className="w-12 h-12 text-yellow-300 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                KRISHNA POWER SOLUTION
              </h1>
            </div>
            <p className="text-lg md:text-xl text-teal-200 text-center max-w-4xl mx-auto mb-4">
              India's reliable name in power, technology, and global trade — Integrated solutions in EV manufacturing, International Trading, Industrial Services, and Government Projects
            </p>
            <p className="text-center text-yellow-300 italic text-lg">
              Our Mission: To take "Make in India" to a global level
            </p>
          </div>
        </header>

        <ExportRegionScroller />

        <section className="max-w-7xl mx-auto px-4 py-12">
          <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
              <span className="w-2 h-10 bg-emerald-500 rounded-full"></span>
              Introduction & Expanded Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              KRISHNA POWER SOLUTION PRIVATE LIMITED is a multi-sector corporate entity, leading in providing EV manufacturing, international import/export, government services, industrial supply, and technical solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our vision is not just limited to product manufacturing — we are committed to establishing India's technology and skill on the global stage.
            </p>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
              <p className="font-semibold text-lg">
                <span className="text-yellow-300">Future Strategy:</span> To become India's most trusted EV Export Hub, a leading supplier in Government/Corporate Projects, and establish a Global Footprint in 10+ countries.
              </p>
            </div>
            <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
              <p className="text-emerald-800 font-medium">
                <span className="font-bold">Our Metrics:</span> 1,00,000+ EV components exported in 2023, 98% Customer Satisfaction, and 50+ Government Projects completed.
              </p>
            </div>
          </article>
        </section>

        <hr className="max-w-7xl mx-auto" />

        <section className="max-w-7xl mx-auto px-4 py-8">
          <nav className="flex flex-wrap gap-3 mb-8 justify-center" role="tablist">
            {[
              { id: 'ev', label: 'EV Manufacturing', icon: <Zap className="w-4 h-4" /> },
              { id: 'trade', label: 'International Trade', icon: <Globe className="w-4 h-4" /> },
              { id: 'govt', label: 'Government Services', icon: <Building className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-300' // Strong active state
                  : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
                  }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>

          <div className="grid md:grid-cols-2 gap-8">

            <article
              id="ev-panel"
              role="tabpanel"
              className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 ${activeTab === 'ev' ? 'border-emerald-400 scale-[1.02]' : 'border-transparent opacity-80'}`}
            >
              <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-xl">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                A. EV Manufacturing & Technical Solutions
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">EV Components Manufacturing:</h4>
                  <p className="text-sm leading-relaxed">
                    Chassis, Motor, Controller, Smart-BMS, Charger, Harness, Plastic Body Parts — all products according to International QC standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">R&D Excellence:</h4>
                  <p className="text-sm leading-relaxed">
                    Our laboratory is continuously working on new technology — High Efficiency Motors, Heat-Safe BMS, Long-Life Controllers, and Lightweight EV Designs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">OEM Support:</h4>
                  <p className="text-sm leading-relaxed">
                    We also do White-Label and OEM Manufacturing for many companies in India and abroad.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="trade-panel"
              role="tabpanel"
              className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 ${activeTab === 'trade' ? 'border-amber-400 scale-[1.02]' : 'border-transparent opacity-80'}`}
            >
              <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-xl">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                B. International Trade, Import-Export & Global Supply
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Industrial & Commercial Goods Export:</h4>
                  <p className="text-sm">Large-scale export of Machinery, Electrical Equipment, Raw Materials, and Retail Goods.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Handicrafts and Cultural Products:</h4>
                  <p className="text-sm">Promoting the "Indian Art Global" campaign by taking the products of Indian artisans to the international market.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Active Export Regions:</h4>
                  <p className="text-sm">Active exporting nations are visualized below in the scrolling section.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <hr className="max-w-7xl mx-auto" />

        {/* Government Services (Dark Slate/Green) */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <article
            id="govt-panel"
            role="tabpanel"
            className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white transition-all duration-500 ${activeTab === 'govt' ? 'ring-4 ring-emerald-400' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-emerald-400" />
              C. Government, Corporate, and Industrial Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Government Tender Management:</h4>
                    <p className="text-gray-300 text-sm">Completion of supply, service, construction, and technical projects with timely execution and compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Manpower Supply:</h4>
                    <p className="text-gray-300 text-sm">Large-scale management and deployment of skilled, semi-skilled, and technical staff.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Service Export:</h4>
                    <p className="text-gray-300 text-sm">International export of technical support, supply chain consulting, and after-sales servicing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Turnkey Industrial Solutions:</h4>
                    <p className="text-gray-300 text-sm">Factory setup, machine installation, process optimization, and outsourced manufacturing.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <hr className="max-w-7xl mx-auto" />

        <section className="max-w-7xl mx-auto px-4 py-12">
          <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
              Our Distinguishing Features — Why We Stand Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyUsFeatures.map((feature, idx) => (
                <div key={idx} className="group p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <hr className="max-w-7xl mx-auto" />

        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">

            <article className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-7 h-7 text-cyan-300" />
                Advanced Technology and Innovation
              </h3>
              <div className="space-y-4">
                {techFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur">
                    <div className="text-cyan-300">{feat.icon}</div>
                    <span className="text-sm">{feat.text}</span>
                  </div>
                ))}
              </div>
            </article>


            <article className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-yellow-300" />
                Certifications, Achievements, and Reliability
              </h3>
              <div className="space-y-4">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">{cred}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <hr className="max-w-7xl mx-auto" />

        <section className="max-w-7xl mx-auto px-4 py-12">
          <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-amber-500" />
              International Presence and Partnership Network
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Our company actively exports across Asia, Africa, and the Middle East and has established long-term corporate partnerships.
            </p>
            <div className="mb-8">
              <h4 className="font-bold text-gray-800 mb-4">Key Partner Categories:</h4>
              <div className="flex flex-wrap gap-3">
                {partners.map((partner, idx) => (
                  <span key={idx} className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-medium">
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl text-white">
                  <div className="flex justify-center mb-2 opacity-80">{stat.icon}</div>
                  <div className="text-3xl font-black">{stat.number}</div>
                  <div className="text-amber-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </article>
        </section>

      </div>
    </>
  );
};

export default Company4;