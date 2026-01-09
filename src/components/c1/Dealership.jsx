import React, { useState, useEffect } from "react";
import { CheckCircle, Zap, Award, TrendingUp, Shield, Users } from "lucide-react";

const Dealership = () => {
  const [showEV, setShowEV] = useState(false);
  const [showService, setShowService] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drgbysqgy/image/upload/v1765305950/Gemini_Generated_Image_b0uyugb0uyugb0uy_qmobib.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-green-900/40 to-black/70"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className={`relative z-10 max-w-6xl w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] px-6 md:px-12 py-12 rounded-3xl hover:shadow-[0_20px_80px_rgba(34,197,94,0.3)] transition-all duration-500">
          
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-400/20 to-green-500/20 border border-green-400/40 rounded-full mb-6 animate-pulse">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-bold text-sm tracking-wider">DEALERSHIP OPPORTUNITY</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
            TORA Automotive
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-xl md:text-2xl mt-6 leading-relaxed text-green-100 font-semibold drop-shadow-lg">
            India's Fastest Growing Electric Scooter Network
          </p>

          <div className="mt-8 p-6 bg-black/30 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-black/40 transition-all duration-300">
            <p className="text-base md:text-lg leading-relaxed text-gray-100">
              Join India's fastest-growing electric two-wheeler revolution. TORA Automotive, headquartered in 
              <span className="text-green-300 font-semibold"> Chandausi, Uttar Pradesh</span>, is expanding nationwide. 
              Partner with us to deliver high-performance EVs with exceptional service at affordable prices.
            </p>
          </div>

          <div className="mt-6 p-4 border-2 border-green-400/50 rounded-xl backdrop-blur-sm hover:border-green-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <p className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">
              ⚡ Ready to Electrify Your Business? Fill the Form to Apply for Dealership →
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="p-6  border border-green-400/30 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black text-white mb-2">100%</h3>
              <p className="text-green-300 font-semibold">Return on Investment</p>
            </div>

            <div className="p-6  to-green-600/10 border border-green-400/30 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <Award className="w-10 h-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black text-white mb-2">Best</h3>
              <p className="text-green-300 font-semibold">EVs in India</p>
            </div>

            <div className="p-6 to-green-600/10 border border-green-400/30 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <Shield className="w-10 h-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black text-white mb-2">Premium</h3>
              <p className="text-green-300 font-semibold">Service Support</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
            
            <div
              onClick={() => setShowEV(!showEV)}
              className={`cursor-pointer flex flex-col px-6 py-5 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 flex-1
                ${showEV 
                  ? "border-green-400 bg-gradient-to-br from-green-500/30 to-green-600/20 shadow-[0_10px_40px_rgba(34,197,94,0.4)] scale-[1.02]" 
                  : "border-green-400/50 bg-white/5 hover:bg-white/10 hover:border-green-400 hover:scale-[1.02]"
                }
              `}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className={`w-6 h-6 text-green-400 transition-all duration-300 ${showEV ? "scale-125 rotate-12" : ""}`} />
                <h3 className="text-xl font-bold text-white">Best EVs in India</h3>
                <Award className={`w-6 h-6 text-green-400 transition-all duration-300 ${showEV ? "scale-125 -rotate-12" : ""}`} />
              </div>

              {showEV && (
                <div className="text-sm leading-relaxed text-gray-100 mt-4 p-4 bg-black/20 rounded-xl border border-green-400/20 animate-fadeIn">
                  TORA Electric Scooters deliver exceptional riding experiences with ultra-low running costs and industry-leading performance. Every model features remarkable range, fast-charging lithium batteries, and smooth, silent rides built for modern city commuting. Advanced EV technology ensures minimal maintenance, zero emissions, and long-term reliability—making TORA one of India's most cost-efficient mobility choices. Smart features include GPS tracking, anti-theft protection, regenerative braking, and keyless start. Backed by a strong service network and customer-first approach, TORA empowers riders with a future-ready, eco-friendly alternative delivering true value, trust, and long-term savings.
                </div>
              )}
              
              <div className="mt-3 text-xs text-green-300 font-semibold">
                {showEV ? "▲ Click to collapse" : "▼ Click to learn more"}
              </div>
            </div>

            <div
              onClick={() => setShowService(!showService)}
              className={`cursor-pointer flex flex-col px-6 py-5 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 flex-1
                ${showService 
                  ? "border-green-400 bg-gradient-to-br from-green-400/30 to-green-600/20 shadow-[0_10px_40px_rgba(34,197,94,0.4)] scale-[1.02]" 
                  : "border-green-400/50 bg-white/5 hover:bg-white/10 hover:border-green-400 hover:scale-[1.02]"
                }
              `}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Shield className={`w-6 h-6 text-green-400 transition-all duration-300 ${showService ? "scale-125 rotate-12" : ""}`} />
                <h3 className="text-xl font-bold text-white">Best Service Support</h3>
                <Shield className={`w-6 h-6 text-green-400 transition-all duration-300 ${showService ? "scale-125 -rotate-12" : ""}`} />
              </div>

              {showService && (
                <div className="text-sm leading-relaxed text-gray-100 mt-4 p-4 bg-black/20 rounded-xl border border-green-400/20 animate-fadeIn">
                  TORA delivers the best service support in the electric two-wheeler industry, ensuring every rider enjoys a seamless ownership experience. With a fast-response service network, expert technicians, and readily available spare parts, TORA guarantees quick turnaround times and dependable assistance. Our customer-first approach includes doorstep servicing, battery health checks, and real-time support through smart diagnostic systems. By combining advanced EV technology with exceptional after-sales care, TORA provides unmatched reliability, long-term satisfaction, and complete peace of mind—making TORA the most trusted choice for electric mobility in India.
                </div>
              )}
              
              <div className="mt-3 text-xs text-green-300 font-semibold">
                {showService ? "▲ Click to collapse" : "▼ Click to learn more"}
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeLuBFMsZX0l1fz3TccGdmyQyxyTTYryFzjPo-wAdsXLgugAQ/viewform",
                "_blank"
              )
            }
            className="mt-12 px-12 py-5 uppercase font-black text-lg text-black bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_15px_60px_rgba(34,197,94,0.7)] hover:scale-110 hover:from-green-300 hover:to-green-400 transition-all duration-300 border-2 border-green-300"
          >
            Apply For Dealership Now
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-6 items-center text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Quick Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Nationwide Expansion</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Comprehensive Training</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dealership;