import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import useImageHandler from '../../hooks/imagehandler';

const imagekitimage1 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/1_q8jq1p.jpg?updatedAt=1767171024356';
const cloudinaryimage1 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198874/1_q8jq1p_otegkh.jpg';

const cloudinaryimage2 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198874/2_nob8vj_uszyqq.jpg';
const imagekitimage2 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/2_nob8vj.jpg?updatedAt=1767171026483';

const cloudinaryimage3 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198874/3_umtaay_jru6fl.jpg';
const imagekitimage3 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/3_umtaay.jpg?updatedAt=1767171025298';

const cloudinaryimage4 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198875/4_jcnhxk_xe6huv.jpg';
const imagekitimage4 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/4_jcnhxk.jpg?updatedAt=1767171025872';

const cloudinaryimage5 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198876/6_zvj79n_znpovj.jpg';
const imagekitimage5 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/6_zvj79n.jpg?updatedAt=1767171024506';

const cloudinaryimage6 = 'https://res.cloudinary.com/ddiyjetob/image/upload/v1767198877/5_heyobg_hxiuzx.jpg';
const imagekitimage6 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/5_heyobg.jpg?updatedAt=1767171026122';

const galleryImages = [
  { cloudinary: cloudinaryimage1, imagekit: imagekitimage1 },
  { cloudinary: cloudinaryimage2, imagekit: imagekitimage2 },
  { cloudinary: cloudinaryimage3, imagekit: imagekitimage3 },
  { cloudinary: cloudinaryimage4, imagekit: imagekitimage4 },
  { cloudinary: cloudinaryimage5, imagekit: imagekitimage5 },
  { cloudinary: cloudinaryimage6, imagekit: imagekitimage6 }
];

// Create a separate component for each gallery image
const GalleryImage = ({ cloudinaryUrl, imagekitUrl, index }) => {
  const imageSrc = useImageHandler(cloudinaryUrl, imagekitUrl);
  
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-emerald-100 aspect-square">
      <img
        src={imageSrc}
        alt={`Gallery Image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

const C1ContactGallery = () => {
  return (
    <>
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
                  <p className="text-xl font-semibold">TORA E-SCOOTY</p>
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
                    <p className='font-medium'>Gumthal Road, Chandausi<br />Sambhal, Uttar Pradesh – 244412</p>
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

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8 text-center">
            📸 **TORA** Photo Gallery
          </h2>
          <p className="text-center text-slate-600 mb-8 text-lg">
            Explore our **TORA E-SCOOTY** models and key features in detail.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((imageData, index) => (
              <GalleryImage
                key={index}
                cloudinaryUrl={imageData.cloudinary}
                imagekitUrl={imageData.imagekit}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default C1ContactGallery;