import React from 'react';
import { Zap, Shield, Package, Globe } from 'lucide-react';

const front = 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&q=80';
const back = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&q=80';
const lower = 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&q=80';
const side = 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&q=80';

const ProductShowcase = () => {
  const features = [
    {
      title: 'Advanced Battery Systems',
      description: 'Cutting-edge energy storage solutions',
      image: front,
      icon: Zap,
    },
    {
      title: 'Solar Panel Technology',
      description: 'High-efficiency renewable energy',
      image: back,
      icon: Shield,
    },
    {
      title: 'Lithium Innovation',
      description: 'Next-generation power solutions',
      image: lower,
      icon: Package,
    },
    {
      title: 'Sustainable Future',
      description: 'Eco-friendly energy systems',
      image: side,
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Energy Solutions
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of batteries and solar systems designed for the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="w-5 h-5 text-teal-400" />
                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                  </div>
                </div>

              </div>
              <div className="p-5">
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;