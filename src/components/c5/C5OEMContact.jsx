import React from 'react';
import { Factory, CheckCircle, Phone, Mail } from 'lucide-react';
import { oemManufacturingList } from './C5Data';

export function C5OEMContact() {
  return (
    <>
      <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Factory className="w-8 h-8 text-emerald-700" />
          <h2 className="text-3xl font-bold text-gray-900">8. OEM Manufacturing</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Krishna E-Rickshaw Enterprises also provides OEM (Original Equipment Manufacturer) services. Many brands
          entrust us with manufacturing vehicles under their name, and we maintain premium quality standards aligned
          with their brand values.
        </p>
        <ul className="space-y-3">
          {oemManufacturingList.map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">
                <strong className="text-gray-900 font-semibold">{item.text}</strong>
                {item.span}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">9. Contact & Location</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
              Corporate Office
            </div>
            <p className="text-gray-700 mb-6">
              Gumthal Road, Near Police Fire Station, Chandausi, Sambhal, Uttar Pradesh — 244412
            </p>
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
              Manufacturing Plant
            </div>
            <p className="text-gray-700">Muzaffarnagar, Uttar Pradesh</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900 mb-2">Proprietor</p>
              <p className="text-gray-700">Mr. Satish Chandra Sharma</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-700" />
              <a href="tel:895646497" className="text-emerald-700 hover:text-emerald-800 font-medium">
                895646497
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-700" />
              <a href="mailto:krishnagroup@gmail.com" className="text-emerald-700 hover:text-emerald-800 font-medium">
                krishnagroup@gmail.com
              </a>
            </div>

            <p className="text-gray-700 mt-6">
              For partnerships, bulk orders, or exports, please connect with us. Our team will respond to your query promptly.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:krishnagroup@gmail.com"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}