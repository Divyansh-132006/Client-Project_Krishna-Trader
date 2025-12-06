import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const fiverrlogo = "/fiverrlogo.jpg";
const founderImage = "/ElonBhaii.webp";

const AboutPage = () => {
    // All existing refs are kept for GSAP functionality
    const founderSectionRef = useRef(null);
    const founderImageRef = useRef(null);
    const founderTextRef = useRef(null);
    const missionRef = useRef(null);
    const divisionCardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // GSAP animations (kept identical to previous version)
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

        return () => {
            ctx.revert();
        };
    }, []);

 const divisions = [
    { 
        name: 'Shri Shyam Enterprises', 
        desc: 'E-Scooty Division - Modern electric scooter manufacturing', 
        icon: '🛵',
        link: '/company1'
    },
    { 
        name: 'Krishna E-Rickshaw Enterprises', 
        desc: 'E-Rickshaw Division - Safe & reliable e-rickshaw production', 
        icon: '🛺',
        link: '/company2'
    },
    { 
        name: 'Prince Globale', 
        desc: 'Global Trade - International standard parts import', 
        icon: '🌍',
        link: '/company3'
    },
    { 
        name: 'Krishna E-Vehicle Traders', 
        desc: 'Domestic Distribution - Nationwide spare parts supply', 
        icon: '🔋',
        link: '/company4'
    },
    { 
        name: 'Krishna Power Solution', 
        desc: 'HR & Electronics - Youth employment & technical solutions', 
        icon: '💼',
        link: '/company5'
    }
];

    // SEO Data (kept the same)
    const pageTitle = "About Krishna Group | E-Vehicle Manufacturing & Atmanirbhar Bharat";
    const pageDescription = "Discover Krishna Group's journey from 2012 to becoming India's leading e-vehicle manufacturer. Founded by Shri Satish Chandra Sharma, we pioneer green transportation through e-scooters, e-rickshaws & sustainable mobility solutions.";
    const pageKeywords = "Krishna Group, e-vehicle manufacturer India, electric scooter India, e-rickshaw manufacturing, Satish Chandra Sharma, Atmanirbhar Bharat, green transportation, sustainable mobility, Made in India e-vehicles, Shri Shyam Enterprises";
    const pageUrl = "https://www.krishnagroup.com/about";
    const pageImage = `${window.location.origin}${founderImage}`;

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                {/* ... other meta and schema tags ... */}
            </Helmet>

            <div className="relative min-h-screen w-full bg-amber-20 overflow-hidden">

                <div ref={founderSectionRef} className="relative z-[3] px-6 md:px-16 lg:px-24 py-20">
                    <div className="max-w-7xl mx-auto">
                        <header className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 bg-clip-text bg-gradient-to-r from-red-800 via-yellow-900 to-red-900 mb-4">
                                From a Legacy of Bravery to the Pinnacle of Self-Reliance
                            </h1>
                            <p className="text-xl md:text-2xl text-amber-900 font-semibold">
                                The glorious story of the Founder and Managing Director of the Krishna Group
                            </p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

                            <div ref={founderImageRef} className="lg:col-span-1 flex flex-col gap-6">
                                <div className="relative group">
                                    {/* Soft blur matched to the amber background */}
                                    <div className="bg-amber-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    <img
                                        src={founderImage}
                                        alt="Shri Satish Chandra Sharma - Founder of Krishna Group, E-Vehicle Manufacturing Pioneer"
                                        className="relative w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-amber-500/40 group-hover:border-amber-500/60 transition-all duration-300"
                                        loading="lazy"
                                        width="400"
                                        height="384"
                                    />
                                    {/* Footer text uses soft yellow and white */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                                        <p className="text-white font-bold text-xl text-center">Shri Satish Chandra Sharma</p>
                                        <p className="text-yellow-400 text-center">Founder & Managing Director</p>
                                    </div>
                                </div>
                            </div>

                            <article ref={founderTextRef} className="lg:col-span-2 space-y-6">
                                {/* Founder’s Story Section - White card on wheatish background */}
                                <div className="bg-white p-6 shadow-xl rounded-2xl border border-amber-200">
                                    {/* Heading uses a rich brown/gold tone */}
                                    <h2 className="text-3xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                                        <span className="text-4xl" role="img" aria-label="medal">🎖️</span>
                                        Mr. Satish Chandra Sharma
                                    </h2>
                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p className="text-lg">
                                            <strong className="font-bold text-amber-600">Roots of Valor and Culture:</strong> Mr. Sharma's revered father, Mr. Hemchandra, was a courageous freedom fighter and a respected Subedar Havildar in the Indian Army. The Government of India honored him with the <span className="text-red-700 font-semibold">Raksha Medal, Military Service Medal, and Jammu and Kashmir Operation Medal</span> for his exceptional gallantry in the 1965 Indo-Pak War.
                                        </p>
                                        <p className="text-lg">
                                            <strong className="font-bold text-amber-600">Education and Vision:</strong> He completed his schooling at Delhi Public School (DPS) and Holychild School, later earning a bachelor's degree from Mahatma Jyotiba Phule Rohilkhand University.
                                        </p>
                                        <p className="text-lg">
                                            <strong className="font-bold text-amber-600">2012: The Revolution Begins:</strong> In 2012, Mr. Sharma founded a small manufacturing unit in Chandausi (District Sambhal), which was not just a business venture, but a mission to build a self-reliant India and bring dignity and economic independence to millions of rickshaw pullers across the nation.
                                        </p>
                                    </div>
                                </div>

                                <div className="backdrop-blur-sm bg-red-900/95 p-8 rounded-3xl border border-red-700/50 shadow-2xl">
                                    <h3 className="text-2xl font-bold text-red-200 mb-4">Origin & Vision</h3>
                                    <p className="text-white text-lg leading-relaxed">
                                        Hailing from the village of Hasanpur Tappa Vais in Badaun district, Uttar Pradesh, Shri Sharma envisioned transforming India's traditional rickshaw industry into a modern, eco-friendly e-mobility ecosystem. His journey, from agricultural roots to founding Krishna Group, exemplifies the spirit of <span className="text-yellow-400 font-semibold">Atmanirbhar Bharat</span>.
                                    </p>
                                </div>

                                <div className="bg-amber-100 p-6 rounded-2xl border border-amber-300 shadow-xl">
                                    <h4 className="text-xl font-bold text-amber-800 mb-3 text-center">🏅 Family Legacy</h4>
                                    <ul className="text-gray-700 text-base space-y-2">
                                        <li>Defence Medal</li>
                                        <li>Military Service Medal</li>
                                        <li>Jammu and Kashmir Operation Medal</li>
                                        <li className="text-red-700 font-semibold pt-2">- Shri Hemchandra Ji (Father)</li>
                                    </ul>
                                </div>
                            </article>

                        </div>

                        <section className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700 mb-12">
                                Krishna Group: Five Dimensions of Innovation
                            </h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {divisions.map((division, index) => (
                                    <Link to={division.link} key={index}>
                                        <article
                                            ref={(el) => (divisionCardsRef.current[index] = el)}
                                            className="bg-teal-50 p-6 rounded-2xl border border-teal-300/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-teal-500/70 cursor-pointer"
                                        >
                                            <div className="text-5xl mb-4">{division.icon}</div>
                                            <h3 className="text-xl font-bold text-teal-700 mb-2">
                                                {division.name}
                                            </h3>
                                            <p className="text-gray-700">{division.desc}</p>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <section ref={missionRef} className="bg-green-800/90 p-10 rounded-3xl border-2 border-green-500/50 shadow-2xl">
                            <div className="text-center mb-6">
                                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 mb-2">
                                    🌿 Krishna Group's Mission
                                </h2>
                            </div>
                            <div className="space-y-4 text-white text-lg leading-relaxed max-w-4xl mx-auto">
                                <p className="text-center italic text-xl text-green-200">
                                    "Our aim is to lead India towards green, clean and self-reliant transportation"
                                </p>
                                <p>
                                    Krishna Group, carrying the pride of <strong className="font-bold text-yellow-300">'Made In India'</strong>, aims to provide accessible, safe, and environment-friendly e-vehicles to every Indian through innovative technology, high quality, and social responsibility.
                                </p>
                                <p className="text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300 pt-4">
                                    "Leading India towards a sustainable future with green transportation"
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;