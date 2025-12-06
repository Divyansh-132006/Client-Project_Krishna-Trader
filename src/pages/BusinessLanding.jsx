// import React, { useState, useEffect } from 'react';
// import {
//     ArrowRight, Zap, Shield, Users, TrendingUp, Star, BarChart
// } from 'lucide-react';
// import { Link } from "react-router-dom";
// import { Helmet } from 'react-helmet';

// const companies = [
//     {
//         icon: Zap,
//         title: "SHRI SHYAM ENTERPRISES",
//         description: "Built for Indian roads, powered by world-class technology. Slogan: Power, Style, and Dealership Trust – TORA",
//         link: "/company1"
//     },
//     {
//         icon: Shield,
//         title: "PRINCE GLOBAL COMPANY",
//         description: "The largest wholesaler of high-quality spare parts for electric and conventional vehicles. 'The right part for every vehicle, at the right time.'",
//         link: "/company2"
//     },
//     {
//         icon: TrendingUp,
//         title: "KRISHNA E-VEHICLE TRADERS",
//         description: "Krishna E-Vehicle Traders is the leading commercial hub for Electric Mobility (EV) and Solar Systems, providing comprehensive energy solutions in Chandausi (Sambhal).",
//         link: "/company3"
//     },
//     {
//         icon: Users,
//         title: "KRISHNA POWER SOLUTION",
//         description: "India's reliable name in power, technology, and global trade — Integrated solutions in EV manufacturing, International Trading, Industrial Services, and Government Projects",
//         link: "/company4"
//     },
//     {
//         icon: Star,
//         title: "Krishna E-Rickshaw Enterprises",
//         description: "India's Roads, India's Strength — We Build the Future of Transportation Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws that promote eco-friendly mobility not only in India but worldwide.",
//         link: "/company5"
//     }
// ];

// const benefits = [
//     {
//         icon: BarChart,
//         title: "Proven Results",
//         description: "Our portfolio of companies has a track record of delivering measurable growth and success."
//     },
//     {
//         icon: Zap,
//         title: "Synergistic Innovation",
//         description: "We foster collaboration between our businesses to create cutting-edge, integrated solutions."
//     },
//     {
//         icon: Shield,
//         title: "Trusted & Secure",
//         description: "Rely on a foundation of security and reliability that underpins all our services and platforms."
//     }
// ];

// function BusinessLanding() {
//     const [isLoaded, setIsLoaded] = useState(false);

//     useEffect(() => {
//         setIsLoaded(true);
//     }, []);

//     // SEO Data (kept the same)
//     const pageTitle = "Our Business Portfolio | Krishna Group - E-Vehicle & Power Solutions";
//     const pageDescription = "Explore Krishna Group's business ecosystem: Shri Shyam Enterprises (E-Vehicles), Prince Global (Spare Parts), Krishna E-Vehicle Traders (EV & Solar), and Krishna Power Solution (Integrated Energy Solutions).";
//     const pageKeywords = "Krishna Group businesses, e-vehicle companies India, electric vehicle spare parts, solar energy solutions, power solutions India, TORA e-scooter, EV trading Chandausi, integrated energy solutions";
//     const pageUrl = "https://www.krishnagroup.com/business";

//     return (
//         <>
//             <Helmet>
//                 <title>{pageTitle}</title>
//                 <meta name="description" content={pageDescription} />
//                 {/* ... other meta and schema tags ... */}
//             </Helmet>

      
//             <div className="min-h-screen bg-yellow-50 relative overflow-hidden">

//                 <div className="relative z-10 container mx-auto px-6 py-20">

//                     <header className="text-center mb-16">
//                         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//                             Unlock Your
//                             <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
//                                 Business Potential & Pathway
//                             </span>
//                         </h1>

//                         <p
//                             className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
//                         >
//                             We are more than just a company; we are an **ecosystem of innovative businesses**
//                             dedicated to your success. Discover our specialized services, all
//                             designed to help you thrive in a competitive landscape.
//                         </p>
//                     </header>

//                     <section className="mb-24">
//                         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//                             {benefits.map((benefit, index) => (
//                                 <article
//                                     key={index}
                                 
//                                     className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow duration-300"
//                                     style={{ transitionDelay: `${400 + index * 150}ms` }}
//                                 >
//                                     <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full mb-6 shadow-md">
//                                         <benefit.icon className="w-8 h-8" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                                         {benefit.title}
//                                     </h3>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         {benefit.description}
//                                     </p>
//                                 </article>
//                             ))}
//                         </div>
//                     </section>

//                     <section>
//                         <div className="text-center mb-16">
//                             <h2
//                                 className="text-4xl font-bold text-gray-800"
//                                 style={{ transitionDelay: '700ms' }}
//                             >
//                                 Our Portfolio of Businesses
//                             </h2>
//                         </div>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//                             {companies.map((company, index) => (
//                                 <Link
//                                     key={index}
//                                     to={company.link}
//                                     className="group block relative rounded-xl p-6 transition-all duration-500bg-white shadow-md border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-cyan-100 hover:-translate-y-1"
//                                     style={{ transitionDelay: `${800 + index * 150}ms` }}
//                                     aria-label={`Learn more about ${company.title}`}
//                                 >
//                                     <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-[0.05] rounded-xl transition-opacity duration-500"></div>

//                                     <div className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-lg mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
//                                         <company.icon className="w-6 h-6" />
//                                     </div>

//                                     <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
//                                         {company.title}
//                                     </h3>

//                                     <p className="text-gray-600 text-sm leading-relaxed">
//                                         {company.description}
//                                     </p>

//                                     <div className="mt-4 flex items-center text-teal-600 group-hover:text-cyan-700 transition-all duration-300">
//                                         <span className="text-base font-semibold">
//                                             Explore
//                                         </span>
//                                         <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BusinessLanding;


import React, { useState, useEffect } from 'react';
import {
    ArrowRight, Zap, Shield, Users, TrendingUp, Star, BarChart, Building, Globe, Cpu, Wrench, Package
} from 'lucide-react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// --- Replicating the Visual Structure/Content from the Video ---

// Map icon props to the desired business name and content
const companyMap = {
    // These link to the company index in the main 'companies' array below
    'EV': 0, // SHRI SHYAM ENTERPRISES
    'RT': 1, // PRINCE GLOBAL COMPANY
    'PE': 2, // KRISHNA E-VEHICLE TRADERS
    'GB': 3, // KRISHNA POWER SOLUTION (Global/Integrated)
    'ER': 4, // Krishna E-Rickshaw Enterprises
};

const BusinessContent = ({ activeCompany, companies }) => {
    const company = companies[activeCompany];
    if (!company) return null;

    let contentIcon, contentTitle, contentSlogan;
    switch (company.title) {
        case "SHRI SHYAM ENTERPRISES":
            contentTitle = "SHRI SHYAM ENTERPRISES";
            contentSlogan = "Built for Indian roads, powered by world-class technology. Slogan: Power, Style, and Dealership Trust – TORA";
            break;
        case "PRINCE GLOBAL COMPANY":
            contentTitle = "PRINCE GLOBAL COMPANY";
            contentSlogan = "The largest wholesaler of high-quality spare parts for electric and conventional vehicles. 'The right part for every vehicle, at the right time.";
            break;
        case "KRISHNA POWER SOLUTION":
            contentTitle = "KRISHNA POWER SOLUTION";
            contentSlogan = "India's reliable name in power, technology, and global trade — Integrated solutions in EV manufacturing, International Trading, Industrial Services, and Government Projects";
            break;
        case "KRISHNA E-VEHICLE TRADERS":
            contentTitle = "KRISHNA E-VEHICLE TRADERS";
            contentSlogan = "Krishna E-Vehicle Traders is the leading commercial hub for Electric Mobility (EV) and Solar Systems, providing comprehensive energy solutions in Chandausi (Sambhal).";
            break;
        case "Krishna E-Rickshaw Enterprises":
            contentTitle = "Krishna E-Rickshaw Enterprises";
            contentSlogan = "India's Roads, India's Strength — We Build the Future of Transportation Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws that promote eco-friendly mobility not only in India but worldwide.";
            break;
        default:
            contentIcon = <Building className="w-10 h-10 text-white" />;
            contentTitle = company.title;
            contentSlogan = company.description;
    }


    return (
        <div className="relative w-full h-full p-8 md:p-12 bg-white rounded-xl shadow-2xl border border-gray-100">
           
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                {contentTitle}
            </h3>
            <p className="text-lg text-gray-700 max-w-lg mb-6 leading-relaxed">
                {contentSlogan}
            </p>
            <p className="text-sm text-gray-500 mb-8 italic">
                {company.description}
            </p>
            <Link
                to={company.link}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-300"
            >
                Read More 
                <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
            </Link>
        </div>
    );
};




const companies = [
    {
        icon: Zap,
        title: "SHRI SHYAM ENTERPRISES",
        description: "Built for Indian roads, powered by world-class technology. Slogan: Power, Style, and Dealership Trust – TORA",
        link: "/company1"
    },
    {
        icon: Shield,
        title: "PRINCE GLOBAL COMPANY",
        description: "The largest wholesaler of high-quality spare parts for electric and conventional vehicles. 'The right part for every vehicle, at the right time.'",
        link: "/company2"
    },
    {
        icon: TrendingUp,
        title: "KRISHNA E-VEHICLE TRADERS",
        description: "Krishna E-Vehicle Traders is the leading commercial hub for Electric Mobility (EV) and Solar Systems, providing comprehensive energy solutions in Chandausi (Sambhal).",
        link: "/company3"
    },
    {
        icon: Users,
        title: "KRISHNA POWER SOLUTION",
        description: "India's reliable name in power, technology, and global trade — Integrated solutions in EV manufacturing, International Trading, Industrial Services, and Government Projects",
        link: "/company4"
    },
    {
        icon: Star,
        title: "Krishna E-Rickshaw Enterprises",
        description: "India's Roads, India's Strength — We Build the Future of Transportation Inspired by the Make in India spirit, we manufacture sustainable, safe, and high-performance electric rickshaws that promote eco-friendly mobility not only in India but worldwide.",
        link: "/company5"
    }
];

const benefits = [
    {
        icon: BarChart,
        title: "Proven Results",
        description: "Our portfolio of companies has a track record of delivering measurable growth and success."
    },
    {
        icon: Zap,
        title: "Synergistic Innovation",
        description: "We foster collaboration between our businesses to create cutting-edge, integrated solutions."
    },
    {
        icon: Shield,
        title: "Trusted & Secure",
        description: "Rely on a foundation of security and reliability that underpins all our services and platforms."
    }
];

function BusinessLanding() {
    const [isLoaded, setIsLoaded] = useState(false);
    // State to manage the active company content. Default to the first one (index 0)
    const [activeCompanyIndex, setActiveCompanyIndex] = useState(0); 

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const pageTitle = "Our Business Portfolio | Krishna Group - E-Vehicle & Power Solutions";
    const pageDescription = "Explore Krishna Group's business ecosystem: Shri Shyam Enterprises (E-Vehicles), Prince Global (Spare Parts), Krishna E-Vehicle Traders (EV & Solar), and Krishna Power Solution (Integrated Energy Solutions).";
    const pageKeywords = "Krishna Group businesses, e-vehicle companies India, electric vehicle spare parts, solar energy solutions, power solutions India, TORA e-scooter, EV trading Chandausi, integrated energy solutions";
    const pageUrl = "https://www.krishnagroup.com/business";

    // Sidebar button data structure - using abbreviations seen in video
    const sidebarButtons = [
        { key: 0, label: 'EV', icon: Zap, link: '/company1' },
        { key: 1, label: 'RT', icon: Shield, link: '/company2' },
        { key: 2, label: 'PE', icon: TrendingUp, link: '/company3' },
        { key: 3, label: 'GB', icon: Users, link: '/company4' },
        { key: 4, label: 'ER', icon: Star, link: '/company5' },
    ];

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>

            <div className="min-h-screen bg-yellow-50 relative overflow-hidden">

                <hr className="border-t border-gray-200" />
                
                <div className="relative z-10 container mx-auto px-6 py-20">

                    {/* --- 1. INTERACTIVE BUSINESSES SECTION (Video Style) --- */}
                  
                    {/* --- END INTERACTIVE BUSINESSES SECTION --- */}

                    <header className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                            Unlock Your
                            <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Business Potential & Pathway
                            </span>
                        </h1>

                        <p
                            className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed"
                        >
                            We are more than just a company; we are an **ecosystem of innovative businesses**
                            dedicated to your success. Discover our specialized services, all
                            designed to help you thrive in a competitive landscape.
                        </p>
                    </header>
  <section className="mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Businesses</h2>
                            <p className="text-lg text-gray-600">Click on a business unit to see detailed information.</p>
                        </div>

                        <div className="flex flex-col lg:flex-row max-w-6xl h-112 mx-auto shadow-2xl rounded-xl overflow-hidden">
                            
                            <div className="w-full lg:w-20 bg-slate-900 flex lg:flex-col justify-center items-center p-4 lg:p-0 space-x-4 lg:space-x-0 lg:space-y-4">
                                {sidebarButtons.map((btn) => (
                                    <button
                                        key={btn.key}
                                        onClick={() => setActiveCompanyIndex(btn.key)}
                                        className={`
                                            relative w-12 h-12 flex items-center justify-center 
                                            text-white font-bold rounded-full text-sm transition-all duration-300
                                            ${activeCompanyIndex === btn.key 
                                                // Active button style (matches video's light color)
                                                ? 'bg-amber-500 shadow-xl ring-2 ring-amber-300 transform scale-105' 
                                                // Inactive button style (matches video's dark background)
                                                : 'bg-slate-700 hover:bg-teal-700 opacity-80'
                                            }
                                        `}
                                    >
                                        <btn.icon className="w-5 h-5" />
                                        <span className="absolute top-1/2 left-full ml-3 hidden lg:block text-white text-xs font-medium bg-slate-800 px-2 py-1 rounded shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                                            {companies[btn.key].title}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            
                            <div className="flex-grow p-0 bg-yellow-50">
                                <BusinessContent activeCompany={activeCompanyIndex} companies={companies} />
                            </div>
                        </div>
                    </section>
                    <section className="mb-24">
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <article
                                    key={index}
                                    className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg border border-yellow-200 hover:shadow-xl transition-shadow duration-300"
                                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                                >
                                    <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full mb-6 shadow-md">
                                        <benefit.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>
                    
                    <hr className="border-t border-gray-200" />

                    <section>
                        <div className="text-center mb-16 pt-12">
                            <h2
                                className="text-4xl font-bold text-gray-800"
                                style={{ transitionDelay: '700ms' }}
                            >
                                Our Portfolio of Businesses
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {companies.map((company, index) => (
                                <Link
                                    key={index}
                                    to={company.link}
                                    className="group block relative rounded-xl p-6 transition-all duration-500 bg-white shadow-md border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-cyan-100 hover:-translate-y-1"
                                    style={{ transitionDelay: `${800 + index * 150}ms` }}
                                    aria-label={`Learn more about ${company.title}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-[0.05] rounded-xl transition-opacity duration-500"></div>

                                    <div className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-lg mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                        <company.icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                        {company.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {company.description}
                                    </p>

                                    <div className="mt-4 flex items-center text-teal-600 group-hover:text-cyan-700 transition-all duration-300">
                                        <span className="text-base font-semibold">
                                            Explore
                                        </span>
                                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default BusinessLanding;