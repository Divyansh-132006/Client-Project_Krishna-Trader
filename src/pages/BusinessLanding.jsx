import React, { useState, useEffect } from 'react';

const companies = [
    {
        emoji: "⚡",
        title: "SHRI SHYAM ENTERPRISES",
        description: "Built for Indian roads, powered by world-class technology.",
        slogan: "Power, Style, and Dealership Trust – TORA",
        link: "/company1",
        label: "EV"
    },
    {
        emoji: "🛡️",
        title: "PRINCE GLOBAL COMPANY",
        description: "The largest wholesaler of high-quality spare parts for electric and conventional vehicles.",
        slogan: "The right part for every vehicle, at the right time.",
        link: "/company2",
        label: "RT"
    },
    {
        emoji: "📈",
        title: "KRISHNA E-VEHICLE TRADERS",
        description: "Leading commercial hub for Electric Mobility (EV) and Solar Systems in Chandausi (Sambhal).",
        slogan: "Comprehensive energy solutions for a sustainable future.",
        link: "/company3",
        label: "PE"
    },
    {
        emoji: "👥",
        title: "KRISHNA POWER SOLUTION",
        description: "India's reliable name in power, technology, and global trade.",
        slogan: "Integrated solutions in EV manufacturing, International Trading, Industrial Services, and Government Projects.",
        link: "/company4",
        label: "GB"
    },
    {
        emoji: "⭐",
        title: "KRISHNA E-RICKSHAW ENTERPRISES",
        description: "Manufacturing sustainable, safe, and high-performance electric rickshaws.",
        slogan: "India's Roads, India's Strength — Building the Future of Transportation.",
        link: "/company5",
        label: "ER"
    }
];

const benefits = [
    {
        emoji: "📊",
        title: "Proven Results",
        description: "Our portfolio of companies has a track record of delivering measurable growth and success."
    },
    {
        emoji: "⚡",
        title: "Synergistic Innovation",
        description: "We foster collaboration between our businesses to create cutting-edge, integrated solutions."
    },
    {
        emoji: "🛡️",
        title: "Trusted & Secure",
        description: "Rely on a foundation of security and reliability that underpins all our services and platforms."
    }
];

const BusinessContent = ({ company }) => {
    return (
        <div className="relative w-full h-full p-6 sm:p-8 md:p-12 bg-gradient-to-br from-white to-yellow-50 rounded-xl overflow-y-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-2xl sm:text-3xl flex-shrink-0">
                    {company.emoji}
                </div>
                <div className="px-3 py-1 bg-amber-100 rounded-full">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{company.label}</span>
                </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {company.title}
            </h3>
            
            <p className="text-base sm:text-lg text-amber-700 font-semibold mb-3 sm:mb-4 leading-relaxed">
                {company.slogan}
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {company.description}
            </p>
            
            <a
                href={company.link}
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
                Learn More
                <span className="ml-2 text-lg sm:text-xl">→</span>
            </a>
        </div>
    );
};

function BusinessLanding() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % companies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev - 1 + companies.length) % companies.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setActiveIndex((prev) => (prev + 1) % companies.length);
    };

    const handleDotClick = (index) => {
        setIsAutoPlaying(false);
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
            <div className="container mx-auto px-6 py-20">
                
                {/* Header Section */}
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Unlock Your
                        <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
                            Business Potential
                        </span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We are more than just a company; we are an ecosystem of innovative businesses
                        dedicated to your success. Discover our specialized services designed to help you thrive.
                    </p>
                </header>

                {/* Interactive Businesses Carousel */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Businesses</h2>
                        <p className="text-lg text-gray-600">Explore our diverse portfolio of companies</p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                            
                            {/* Navigation Buttons */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-2xl font-bold text-gray-800"
                                aria-label="Previous business"
                            >
                                ‹
                            </button>
                            
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-2xl font-bold text-gray-800"
                                aria-label="Next business"
                            >
                                ›
                            </button>

                            {/* Content Slider */}
                            <div className="relative h-96 overflow-hidden">
                                {companies.map((company, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                            index === activeIndex
                                                ? 'translate-x-0 opacity-100'
                                                : index < activeIndex
                                                ? '-translate-x-full opacity-0'
                                                : 'translate-x-full opacity-0'
                                        }`}
                                    >
                                        <BusinessContent company={company} />
                                    </div>
                                ))}
                            </div>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                                {companies.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`transition-all duration-300 rounded-full ${
                                            index === activeIndex
                                                ? 'w-8 h-3 bg-amber-600'
                                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Go to business ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <article
                                key={index}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full mb-6 shadow-lg flex items-center justify-center text-3xl">
                                    {benefit.emoji}
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

              
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Complete Portfolio
                        </h2>
                        <p className="text-lg text-gray-600">Quick access to all our businesses</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {companies.map((company, index) => (
                            <a
                                key={index}
                                href={company.link}
                                className="group block relative rounded-2xl p-6 bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />

                                <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-2xl">
                                    {company.emoji}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                                    {company.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {company.description}
                                </p>

                                <div className="flex items-center text-teal-600 group-hover:text-cyan-700 transition-all duration-300">
                                    <span className="text-sm font-semibold">Explore</span>
                                    <span className="ml-1.5 group-hover:translate-x-1 transition-transform inline-block">→</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BusinessLanding;