import React, { useState, useEffect } from 'react';
import {
    ArrowRight, Zap, Shield, Users, TrendingUp, Star, BarChart
} from 'lucide-react';
import { Link } from "react-router-dom";

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

    useEffect(() => {
        setIsLoaded(true);
    }, []);

   

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">

            <div className="relative z-10 container mx-auto px-3 pt-2 pb-32">

                <div className="text-center mb-10">
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight ">
                        Unlock Your
                        <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            Business Potential & Pathway
                        </span>
                    </h1>

                    <p
                        className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed"
                        style={{ transitionDelay: '200ms' }}
                    >
                        We are more than just a company; we are an ecosystem of innovative businesses
                        dedicated to your success. Discover our specialized services, all
                        designed to help you thrive in a competitive landscape.
                    </p>
                </div>

                <div className="mb-24">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6"
                                style={{ transitionDelay: `${400 + index * 150}ms` }}
                            >
                                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 text-blue-600 rounded-xl mb-6 shadow-sm">
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-200 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2
                        className="text-4xl font-bold text-gray-900"
                        style={{ transitionDelay: '700ms' }}
                    >
                        Our Portfolio of Businesses
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {companies.map((company, index) => (
                        <Link
                            key={index}
                            to={company.link}
                            className="group block relative rounded-2xl p-8 transition-all duration-500
                                        bg-white/60 backdrop-blur-lg border border-white/30
                                        hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                                        
                            style={{ transitionDelay: `${800 + index * 150}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>

                            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <company.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {company.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                {company.description}
                            </p>

                            <div className="mt-6 flex items-center text-blue-600 transition-all duration-300">
                                <span className="text-lg font-semibold">
                                    Learn More
                                </span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BusinessLanding;