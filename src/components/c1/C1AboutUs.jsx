import React from 'react';
import { Check } from 'lucide-react';

const C1AboutUs = ({ kg }) => (
  <>
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Shri Shyam Enterprises
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Through our flagship brand **TORA E-SCOOTY**, we're revolutionizing India's electric two-wheeler industry. We specialize in e-scooter manufacturing, international imports, wholesale distribution, and dealership network expansion.
            </p>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl">
              <p className="text-slate-700 italic font-medium">
                "Success is not just about profits, but creating sustainable value for people and the environment."
              </p>
              <p className="text-sm text-slate-600 mt-2">— Founder & CEO</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white">
                <img src={kg} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
          Leadership
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Mr. Ravi Kumar
        </h2>
        <p className="text-lg text-slate-700 mb-4 leading-relaxed">
          Under the experienced leadership of Mr. Ravi Kumar, **TORA** has achieved remarkable popularity and credibility in record time.
        </p>
        <div className="flex items-center gap-2 text-slate-600">
          <Check className="w-5 h-5 text-emerald-600" />
          <span className="font-semibold">15+ years of industry experience</span>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Our Vision
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Transforming India's Mobility 🌍
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            To provide India with accessible, affordable, and eco-friendly electric mobility solutions. Every **TORA** model is designed for Indian roads, weather, and user needs—making daily commutes safer, comfortable, and smarter.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-100">
          <img src="https://res.cloudinary.com/drgbysqgy/image/upload/v1765430637/Gemini_Generated_Image_ik89tpik89tpik89_nfldiz.png" alt="TORA Vision Image" />
        </div>
      </div>
    </section>
  </>
);

export default C1AboutUs;