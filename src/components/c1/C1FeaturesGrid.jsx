import {
  Lock,
  Smartphone,
  Bike,
  Wrench,
  Gauge,
  Leaf,
  Sparkles,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";

import one1 from '../../assets/tora/one1.jpg';
import two2 from '../../assets/tora/two2.jpg';
import three3 from '../../assets/tora/three3.jpg';
import four4 from '../../assets/tora/four4.jpg';


const moreAboutFeatures = [
  { icon: <Lock className="w-6 h-6" />, title: "Anti Theft Protection" },
  { icon: <Smartphone className="w-6 h-6" />, title: "IOT Inside" },
  { icon: <Bike className="w-6 h-6" />, title: "Parking Assist" },
  { icon: <Wrench className="w-6 h-6" />, title: "One Touch Repair" },
  { icon: <Gauge className="w-6 h-6" />, title: "High Acceleration" },
  { icon: <Leaf className="w-6 h-6" />, title: "Zero Pollution & Eco Friendly" },
  { icon: <Sparkles className="w-6 h-6" />, title: "Low Maintenance & Excellent Services" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Upto 3 years Warranty" },
  { icon: <BatteryCharging className="w-6 h-6" />, title: "Only 15 p/km Running Cost" },
];


const imageFeatures = [
    { src: one1, title: "Tubeless Tyres", subtitle: "With You Through Every Turn !" },
    { src: two2, title: "Headlights", subtitle: "Twin Projector Lamp With DRL" },
    { src: three3, title: "Tail lights", subtitle: "We got your back!" },
    { src: four4, title: "Shockers", subtitle: "For A Comfortable And Smooth Ride" },
];
const C1FeaturesGrid = () => (
  <section className="max-w-7xl mx-auto px-4 mb-20">
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
        Advanced Features
      </div>
      <h2 className="text-4xl font-bold text-slate-900">
        Smart Technology Inside TORA
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
      {moreAboutFeatures.map((feature, idx) => (
        <div key={idx} className="group text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <p className="font-bold text-slate-800">{feature.title}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {imageFeatures.map((item, idx) => (
        <div key={idx} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            {/* NOTE: Original image imports are placeholders. You must ensure they are correctly linked. */}
            <img
              src={item.src} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default C1FeaturesGrid;