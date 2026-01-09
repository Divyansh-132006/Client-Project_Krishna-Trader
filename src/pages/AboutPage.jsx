import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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

    const seoData = {
        title: "About Krishna Group | Legacy to Leadership in E-Mobility | Founded by Satish Chandra Sharma",
        description: "Discover Krishna Group's inspiring journey from a small Chandausi unit to India's leading e-mobility manufacturer. Learn about founder Satish Chandra Sharma's vision for Atmanirbhar Bharat and our 5 innovative divisions driving green transportation revolution since 2012.",
        keywords: "Krishna Group history, Satish Chandra Sharma, e-mobility India, electric rickshaw manufacturer, e-scooter production, Atmanirbhar Bharat, sustainable transportation, green revolution India, Chandausi manufacturing, Sambhal industries",
        url: "https://www.krishnagroup.com/about",
        image: founderImage,
        type: "website"
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Krishna Group",
        "alternateName": "Krishna E-Mobility Group",
        "url": "https://www.krishnagroup.com",
        "logo": "https://www.krishnagroup.com/logo.png",
        "description": seoData.description,
        "foundingDate": "2012",
        "foundingLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chandausi",
                "addressRegion": "Sambhal",
                "addressCountry": "IN",
                "postalCode": "244412"
            }
        },
        "founder": {
            "@type": "Person",
            "name": "Satish Chandra Sharma",
            "jobTitle": "Founder & Managing Director",
            "image": founderImage,
            "alumniOf": [
                {
                    "@type": "EducationalOrganization",
                    "name": "Delhi Public School"
                },
                {
                    "@type": "EducationalOrganization",
                    "name": "Mahatma Jyotiba Phule Rohilkhand University"
                }
            ],
            "parent": {
                "@type": "Person",
                "name": "Hemchandra Sharma",
                "jobTitle": "Subedar Havildar, Indian Army",
                "award": ["Raksha Medal", "Military Service Medal", "Jammu & Kashmir Operation Medal"]
            }
        },
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "500+"
        },
        "department": [
            {
                "@type": "Organization",
                "name": "Shri Shyam Enterprises",
                "description": "Modern electric scooter manufacturing with cutting-edge technology",
                "url": "https://www.krishnagroup.com/shrishyamenterprises"
            },
            {
                "@type": "Organization",
                "name": "Krishna E-Rickshaw Enterprises",
                "description": "Safe & reliable e-rickshaw production for sustainable mobility",
                "url": "https://www.krishnagroup.com/krishnaerickshawenterprises"
            },
            {
                "@type": "Organization",
                "name": "Prince Globale",
                "description": "International standard parts import and global trade solutions",
                "url": "https://www.krishnagroup.com/princeglobalcompany"
            },
            {
                "@type": "Organization",
                "name": "Krishna E-Vehicle Traders",
                "description": "Nationwide spare parts distribution network",
                "url": "https://www.krishnagroup.com/krishnaevehicletraders"
            },
            {
                "@type": "Organization",
                "name": "Krishna Power Solution",
                "description": "Youth employment programs & technical solutions",
                "url": "https://www.krishnagroup.com/krishnapowersolutionprivatelimited"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/krishnagroup",
            "https://www.linkedin.com/company/krishnagroup",
            "https://twitter.com/krishnagroup"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.krishnagroup.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.krishnagroup.com/about"
            }
        ]
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
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

        return () => ctx.revert();
    }, []);

    const divisions = [
        { 
            name: 'Shri Shyam Enterprises', 
            desc: 'Modern electric scooter manufacturing with cutting-edge technology', 
            icon: '🛵',
            link: "/shrishyamenterprises"
        },
        { 
            name: 'Krishna E-Rickshaw Enterprises', 
            desc: 'Safe & reliable e-rickshaw production for sustainable mobility', 
            icon: '🛺',
            link: "/krishnaerickshawenterprises"
        },
        { 
            name: 'Prince Globale', 
            desc: 'International standard parts import and global trade solutions', 
            icon: '🌍',
            link: "/princeglobalcompany"
        },
        { 
            name: 'Krishna E-Vehicle Traders', 
            desc: 'Nationwide spare parts distribution network', 
            icon: '🔋',
            link: "/krishnaevehicletraders"
        },
        { 
            name: 'Krishna Power Solution', 
            desc: 'Youth employment programs & technical solutions', 
            icon: '💼',
            link: "/krishnapowersolutionprivatelimited"
        }
    ];

    const medals = [
        'Raksha Medal',
        'Military Service Medal',
        'Jammu & Kashmir Operation Medal'
    ];

    return (
        <>
            <Helmet>
               +
                <title>{seoData.title}</title>
                <meta name="title" content={seoData.title} />
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />
                <link rel="canonical" href={seoData.url} />
                
                <meta property="og:type" content={seoData.type} />
                <meta property="og:url" content={seoData.url} />
                <meta property="og:title" content={seoData.title} />
                <meta property="og:description" content={seoData.description} />
                <meta property="og:image" content={seoData.image} />
                <meta property="og:site_name" content="Krishna Group" />
                
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={seoData.url} />
                <meta property="twitter:title" content={seoData.title} />
                <meta property="twitter:description" content={seoData.description} />
                <meta property="twitter:image" content={seoData.image} />
                
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="author" content="Krishna Group" />
                <meta name="geo.region" content="IN-UP" />
                <meta name="geo.placename" content="Chandausi, Sambhal" />
                
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                
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

                <section ref={founderSectionRef} className="px-6 md:px-16 lg:px-24 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                            
                            <div ref={founderImageRef} className="lg:col-span-2">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                                    <img
                                        src={founderImage}
                                        alt="Satish Chandra Sharma - Founder and Managing Director of Krishna Group"
                                        className="relative w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl border-4 border-white"
                                        loading="lazy"
                                        width="400"
                                        height="533"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 rounded-b-3xl">
                                        <p className="text-white font-bold text-2xl">Shri Satish Chandra Sharma</p>
                                        <p className="text-amber-300 text-lg">Founder & Managing Director</p>
                                    </div>
                                </div>

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

                            <article ref={founderTextRef} className="lg:col-span-3 space-y-6">
                                
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
        </>
    );
}

export default AboutPage;