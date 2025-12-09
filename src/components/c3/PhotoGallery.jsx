import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

// --- IMAGE IMPORTS ---
// Assuming these paths are correct relative to your project root or defined in Company3
import one from '../../assets/bgtop/rooftop.png';
import two from '../../assets/bgtop/image.png';
import three from '../../assets/bgtop/imagee.png';
import four from '../../assets/bgtop/scooty.png';
import five from '../../assets/bgtop/lead.png';

const PhotoGallery = () => {
  const galleryImages = [
    { src: one, alt: 'Rooftop Solar Installation', title: 'Rooftop Solar' },
    { src: three, alt: 'Advanced Lithium Battery', title: 'Lithium Battery' },
    { src: two, alt: 'E-Vehicle on Road', title: 'E-Vehicle Solutions' },
    { src: four, alt: 'Electric Scooter Battery Pack', title: 'E-Scooty Battery' },
    { src: five, alt: 'Lead Acid Battery System', title: 'Lead Acid Battery' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            📸 Photo Gallery & Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See our commitment to quality in action across our product range and installations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer h-80 bg-slate-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ImageIcon className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-300 text-sm font-medium">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;