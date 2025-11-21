import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fiverrlogo = "/fiverrlogo.jpg";
const founderImage = "/ElonBhaii.webp";

const AboutPage = () => {
  const textContainerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const founderSectionRef = useRef(null);
  const founderImageRef = useRef(null);
  const founderTextRef = useRef(null);
  const missionRef = useRef(null);
  const divisionCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        textContainerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      );

      [paragraph1Ref, paragraph2Ref, paragraph3Ref].forEach((ref, index) => {
        gsap.fromTo(
          ref.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.6 + (index * 0.3),
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0, scale: 0.8, rotation: 5 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const divisions = [
    { name: 'Shri Shyam Enterprises', desc: 'E-Scooty Division - Modern electric scooter manufacturing', icon: '🛵' },
    { name: 'Krishna E-Rickshaw Enterprises', desc: 'E-Rickshaw Division - Safe & reliable e-rickshaw production', icon: '🚗' },
    { name: 'Prince Globale', desc: 'Global Trade - International standard parts import', icon: '🌍' },
    { name: 'Krishna E-Vehicle Traders', desc: 'Domestic Distribution - Nationwide spare parts supply', icon: '🔋' },
    { name: 'Brother & Company', desc: 'HR & Electronics - Youth employment & technical solutions', icon: '💼' }
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      
      <div ref={founderSectionRef} className="relative z-[3] px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-4">
              In From a legacy of bravery to the pinnacle of self-reliance
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold">
              The glorious story of the Founder and Managing Director of the Krishna Group
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

            <div ref={founderImageRef} className="lg:col-span-1 flex flex-col gap-6">
              <div className="relative group">
                <div className=" bg-gray-900 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img
                  src={founderImage}
                  alt="Founder - Shri Satish Chandra Sharma"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-orange-300/40 group-hover:border-orange-300/60 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl">
                  {/* <p className="text-white font-bold text-xl text-center">Shri Satish Chandra Sharma</p>
                  <p className="text-orange-300 text-center">Founder & Managing Director</p> */}
                </div>
              </div>

              
            </div>
            <div ref={founderTextRef} className="lg:col-span-2 space-y-6">
              <div className=" bg-gray-600 shadow-2xl rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">🎖️</span>
                  Mr. Satish Chandra Sharma
                </h3>
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p className="text-lg">
                    <span className="font-bold text-amber-600">Roots of Valor and Culture:</span> Mr. Sharma's revered father, Mr. Hemchandra, was a courageous freedom fighter and a respected Subedar Havildar in the Indian Army. The Government of IndiaHe was awarded the <span className="text-red-400 font-semibold">Raksha Medal, Military Service Medal, and Jammu and Kashmir Operation Medal</span> for his exceptional gallantry in the 1965 Indo-Pak War.
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-amber-600">Education and Vision:</span> She was educated at Delhi Public School (DPS), Holychild School and earned a bachelor's degree from Mahatma Jyotiba Phule Rohilkhand University.
                  </p>
                  <p className="text-lg">
                    <span className="font-bold text-amber-600">2012: The Revolution Begins:</span> Established a small manufacturing unit in Chandausi (District Sambhal) in 2012. This was not just a business, but a mission to build a self-reliant India and bring dignity and economic independence to millions of rickshaw pullers.
                  </p>
                </div>
                
              </div>

              <div className="backdrop-blur-md bg-gray-800 p-8 rounded-3xl border border-blue-300/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Origin & Vision</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  From the village of Hasanpur Tappa Vais in Badaun district, Uttar Pradesh, Shri Sharma envisioned transforming India's traditional rickshaw industry into a modern, eco-friendly e-mobility ecosystem. His journey from agricultural roots to establishing Krishna Group exemplifies the spirit of <span className="text-yellow-300 font-semibold">Atmanirbhar Bharat</span>.
                </p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-6 rounded-2xl border border-yellow-400/30 shadow-xl">
                <h4 className="text-xl font-bold text-yellow-300 mb-3 text-center">🏅 Family Legacy</h4>
                <ul className="text-white/90 text-sm space-y-2">
                  <li> Defence Medal</li>
                  <li> Military Service Medal</li>
                  <li> Jammu and Kashmir Operation Medal</li>
                  <li className="text-orange-300 font-semibold pt-2">- Shri Hemchandra Ji (Father)</li>
                </ul>
              </div>
            </div>


            
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-12">
              Krishna Group: Five Dimensions of Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((division, index) => (
                <div
                  key={index}
                  ref={(el) => (divisionCardsRef.current[index] = el)}
                  className="backdrop-blur-md bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-2xl border border-indigo-300/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-indigo-300/40"
                >
                  <div className="text-5xl mb-4">{division.icon}</div>
                  <h4 className="text-xl font-bold text-indigo-300 mb-2">{division.name}</h4>
                  <p className="text-white/80 text-sm">{division.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={missionRef} className="backdrop-blur-lg bg-gray-800 p-10 rounded-3xl border-2 border-green-400/30 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                🌿 Krishna Groups Mission
              </h3>
            </div>
            <div className="space-y-4 text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
              <p className="text-center italic text-xl text-green-300">
                "Our aim is to lead India towards green, clean and self-reliant transportation"
              </p>
              <p>
                Krishna Groups <span className="font-bold text-yellow-300">'Made In India'</span> Carrying the pride of, aims to provide accessible, safe and environment-friendly e-vehicles to every Indian through innovative technology, high quality and social responsibility.
              </p>
              <p className="text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 pt-4">
                "Our aim is to lead India towards green, clean and self-reliant transportation"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;