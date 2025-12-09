import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const toraGalleryImages = [
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765296934/1_q8jq1p.jpg", alt: "TORA Model X in Action" },
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765297376/2_nob8vj.jpg", alt: "TORA Battery Charging" },
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765297403/3_umtaay.jpg", alt: "TORA Digital Dashboard" },
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765297532/6_zvj79n.jpg", alt: "TORA Safety Features" },
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765297433/4_jcnhxk.jpg", alt: "TORA in Blue finish" },
  { url: "https://res.cloudinary.com/drgbysqgy/image/upload/v1765297467/5_heyobg.jpg", alt: "TORA on a rugged road" },
];

const C1ContactGallery = () => (
  <>
    {/* Contact */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Company</p>
                <p className="text-xl font-semibold">Shri Shyam Enterprises</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Brand</p>
                <p className="text-xl font-semibold">**TORA E-SCOOTY**</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Proprietor</p>
                <p className="text-xl font-semibold">Mr. Ravi Kumar</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-3 items-start">
                <MapPin className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm mb-1">Office Address</p>
                  <p className='font-medium'>Gupthal Road, Chandausi<br />Sambhal, Uttar Pradesh – 244412</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm mb-1">Contact Number</p>
                  <a href="tel:+919876543210" className="text-lg font-medium hover:text-emerald-400 transition-colors">+91 9876 543 210</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <a href="mailto:krishnagroup@gmail.com" className="text-lg font-medium hover:text-emerald-400 transition-colors">krishnagroup@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8 text-center">
          📸 **TORA** Photo Gallery
        </h2>
        <p className="text-center text-slate-600 mb-8 text-lg">
          Explore our **TORA E-SCOOTY** models and key features in detail.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {toraGalleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-emerald-100 aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {toraGalleryImages.length < 9 && (
          <p className="mt-8 text-center text-sm text-slate-500">
            Displaying {toraGalleryImages.length} images. Add more to fill the entire 3x3 grid!
          </p>
        )}
      </div>
    </section>
  </>
);

export default C1ContactGallery;
