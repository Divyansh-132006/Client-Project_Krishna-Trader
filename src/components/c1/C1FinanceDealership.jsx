import React from 'react';
import { ArrowRight } from 'lucide-react';
import eduVanzLogo from '../../assets/tora/torascooty.png';
const dealershipBenefits = [
  { icon: "💰", title: "High Profit", desc: "20-30% margins" },
  { icon: "🚀", title: "Fast Sales", desc: "Rapid market growth" },
  { icon: "📱", title: "Marketing", desc: "Digital support" },
  { icon: "⚡", title: "Fast Delivery", desc: "Timely stock" }
];

const C1FinanceDealership = ({handleDealershipClick }) => (
  <>
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Finance & Insurance
          </div>
          <h2 className="text-4xl font-bold text-slate-900">
            Easy Financing Options for Your TORA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-700 border-b-2 border-emerald-200 pb-2 inline-block">Our Partners</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              To make the process of TORA Electric scooty purchase hustle and hassle-free, customers are
              provided with the finance and insurance assistance @ **80% Finance** and **20% Down Payment**.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-inner">
              <p className="text-lg font-bold text-emerald-700">
                So, Grab The Keys of your favourite TORA Electric  scooter. And VVVVRRROOOOOMMMMM.......
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
              <img src={eduVanzLogo} alt="EduVanz Partner Logo" className="max-w-full h-auto object-contain" />
              <p className='text-center text-purple-700 font-semibold mt-4'>Proud Financing Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-xl text-emerald-100">
            Join India's Fastest Growing **TORA** E-Scooter Network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealershipBenefits.map((item, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="text-emerald-100 text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleDealershipClick}
            className="group inline-flex items-center gap-3 bg-white text-emerald-600 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>BECOME A DEALER TODAY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  </>
);

export default C1FinanceDealership;