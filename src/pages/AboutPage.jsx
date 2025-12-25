import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const fiverrlogo = "/fiverrlogo.jpg";
const founderImage = "/ElonBhaii.webp";

const AboutPage = () => {
    const founderSectionRef = useRef(null);
    const founderImageRef = useRef(null);
    const founderTextRef = useRef(null);
    const missionRef = useRef(null);
    const divisionCardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Founder section fade-in
            gsap.fromTo(
                founderSectionRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: founderSectionRef.current,
                        start: 'top 75%',
                        end: 'top 40%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Founder image animation
            gsap.fromTo(
                founderImageRef.current,
                { x: 100, opacity: 0, scale: 0.9 },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: founderImageRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Founder text animation
            gsap.fromTo(
                founderTextRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: founderTextRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Division cards stagger animation
            if (divisionCardsRef.current.length > 0) {
                gsap.fromTo(
                    divisionCardsRef.current,
                    { y: 50, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: divisionCardsRef.current[0],
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }

            // Mission section animation
            gsap.fromTo(
                missionRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: missionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const divisions = [
        { 
            name: 'Shri Shyam Enterprises', 
            desc: 'Modern electric scooter manufacturing with cutting-edge technology', 
            icon: '🛵',
            link: '/company1'
        },
        { 
            name: 'Krishna E-Rickshaw Enterprises', 
            desc: 'Safe & reliable e-rickshaw production for sustainable mobility', 
            icon: '🛺',
            link: '/company5'
        },
        { 
            name: 'Prince Globale', 
            desc: 'International standard parts import and global trade solutions', 
            icon: '🌍',
            link: '/company2'
        },
        { 
            name: 'Krishna E-Vehicle Traders', 
            desc: 'Nationwide spare parts distribution network', 
            icon: '🔋',
            link: '/company3'
        },
        { 
            name: 'Krishna Power Solution', 
            desc: 'Youth employment programs & technical solutions', 
            icon: '💼',
            link: '/company4'
        }
    ];

    const medals = [
        'Raksha Medal',
        'Military Service Medal',
        'Jammu & Kashmir Operation Medal'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 mb-6 leading-tight">
                        From Legacy to Leadership
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                        The inspiring journey of Shri Satish Chandra Sharma and the Krishna Group
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section ref={founderSectionRef} className="px-6 md:px-16 lg:px-24 py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        
                        {/* Founder Image */}
                        <div ref={founderImageRef} className="lg:col-span-2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <img
                                    src={founderImage}
                                    alt=""
                                    className="relative w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl border-4 border-white"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-3xl">
                                    <p className="text-white font-bold text-2xl">Shri Satish Chandra Sharma</p>
                                    <p className="text-amber-300 text-lg">Founder & Managing Director</p>
                                </div>
                            </div>

                            {/* Family Legacy Card */}
                            <div className="mt-8 bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200 shadow-lg">
                                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                                    🎖️ Family Legacy of Valor
                                </h3>
                                <p className="text-gray-700 mb-3 text-sm font-medium">
                                    Shri Hemchandra Ji (Father)
                                </p>
                                <ul className="space-y-2">
                                    {medals.map((medal, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-700">
                                            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                            {medal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Founder Story */}
                        <article ref={founderTextRef} className="lg:col-span-3 space-y-6">
                            
                            {/* Main Story Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                                <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                                    <span className="text-4xl">🏆</span>
                                    The Visionary Behind Krishna Group
                                </h2>
                                
                                <div className="space-y-5 text-gray-700 leading-relaxed">
                                    <div>
                                        <h3 className="font-bold text-amber-700 text-lg mb-2">Roots of Valor</h3>
                                        <p>
                                            Born in Hasanpur Tappa Vais, Badaun district, Uttar Pradesh, Mr. Sharma's father, Shri Hemchandra, was a decorated Indian Army Subedar Havildar and freedom fighter. His exceptional gallantry in the 1965 Indo-Pak War earned him the Raksha Medal, Military Service Medal, and Jammu & Kashmir Operation Medal.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-amber-700 text-lg mb-2">Education & Foundation</h3>
                                        <p>
                                            Educated at Delhi Public School (DPS) and Holychild School, Mr. Sharma later earned his bachelor's degree from Mahatma Jyotiba Phule Rohilkhand University, laying the foundation for his entrepreneurial journey.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-amber-700 text-lg mb-2">2012: The Revolution Begins</h3>
                                        <p>
                                            In 2012, Mr. Sharma founded a small manufacturing unit in Chandausi, District Sambhal. This wasn't just a business—it was a mission to build a self-reliant India and bring dignity and economic independence to millions of rickshaw pullers across the nation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="bg-gray-100 p-8 rounded-3xl shadow-xl border border-orange-400">
                                <h3 className="text-2xl font-bold text-black mb-4">Vision & Mission</h3>
                                <p className="text-black text-lg leading-relaxed">
                                    Shri Sharma envisioned transforming India's traditional rickshaw industry into a modern, eco-friendly e-mobility ecosystem. His journey exemplifies the spirit of <span className="text-black font-bold">Atmanirbhar Bharat</span>, bridging agricultural roots with cutting-edge green technology.
                                </p>
                            </div>

                        </article>
                    </div>
                </div>
            </section>

            {/* Divisions Section */}
            <section className="px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-700 mb-4">
                            Five Pillars of Innovation
                        </h2>
                        <p className="text-gray-600 text-lg">Driving India's green revolution across multiple sectors</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {divisions.map((division, index) => (
                            <Link to={division.link} key={index} className="block">
                                <article
                                    ref={(el) => (divisionCardsRef.current[index] = el)}
                                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 hover:border-teal-300 hover:-translate-y-2 cursor-pointer group h-full"
                                >
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {division.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-teal-800 mb-3">
                                        {division.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{division.desc}</p>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section ref={missionRef} className="px-6 md:px-16 lg:px-24 py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-green-700 to-emerald-800 p-12 rounded-3xl shadow-2xl border-4 border-green-500">
                        <div className="text-center mb-8">
                            <span className="text-6xl mb-4 inline-block">🌿</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Our Mission
                            </h2>
                            <p className="text-green-200 text-xl italic">
                                "Leading India towards green, clean and self-reliant transportation"
                            </p>
                        </div>
                        
                        <div className="space-y-6 text-white text-lg leading-relaxed">
                            <p className="text-center">
                                Krishna Group, carrying the pride of <span className="text-yellow-300 font-bold">'Made In India'</span>, aims to provide accessible, safe, and environment-friendly e-vehicles to every Indian through innovative technology, high quality, and social responsibility.
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                <p className="text-center font-bold text-2xl text-yellow-300">
                                    "Building a sustainable future with green transportation for all"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutPage;