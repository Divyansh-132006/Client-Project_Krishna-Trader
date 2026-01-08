import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import useVideoHandler from '../hooks/videohandler.js';

const HomePage = () => {
  const seoConfig = {
    title: "Krishna Group - Leading E-Vehicle Manufacturer in India | Sustainable Mobility Solutions",
    description: "Krishna Group is India's premier e-vehicle manufacturer since 2012. Specializing in electric scooters, e-rickshaws, spare parts, and solar solutions.",
    url: "https://www.krishnagroup.com"
  };

  const cloudinaryUrl1 = "https://res.cloudinary.com/drgbysqgy/video/upload/v1763403757/videoplayback_online-video-cutter.com_kfden5.webm";
  const imagekitUrl1 = "https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/videoplayback_online-video-cutter.com_kfden5.webm/ik-video.mp4?updatedAt=1767171035309";
  const cloudinaryUrl2 = 'https://res.cloudinary.com/ddiyjetob/video/upload/v1767198881/videoplayback-online-video-cutte_hqrxal_uwgdgf.webm';
  const imagekitUrl2 = 'https://ik.imagekit.io/h5k64whau/Cloudinary_Archive_2025-12-31_13_57_15_Originals/videoplayback-online-video-cutte_hqrxal.webm/ik-video.mp4?updatedAt=1767171033726';

  // Use hooks properly - pass single object with both URLs
  const videoSrc1 = useVideoHandler({ cloudinaryUrl: cloudinaryUrl1, imagekitUrl: imagekitUrl1 });
  const videoSrc2 = useVideoHandler({ cloudinaryUrl: cloudinaryUrl2, imagekitUrl: imagekitUrl2 });

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <link rel="canonical" href={seoConfig.url} />
      </Helmet>

      <div className="relative w-full">
        <header className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            aria-label="Krishna Group electric vehicle manufacturing showcase"
          >
            <source src={videoSrc1} type="video/webm" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden absolute inset-0 w-full h-full object-cover"
            aria-label="Krishna Group mobile showcase"
          >
            <source src={videoSrc2} type="video/webm" />
          </video>

          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
            <div className="max-w-5xl text-center space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center px-5 py-2 bg-white/90 rounded-full text-sm font-medium text-gray-900">
                  Pioneering E-Mobility Since 2012
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Building India's Sustainable
                <br />
                <span className="text-emerald-400">Mobility Ecosystem</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                Premium electric vehicles and comprehensive distribution network serving customers across India
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white text-base font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                  Explore Our Vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/business" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Our Products
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-black">12+</div>
                  <div className="text-sm text-black">Years of Excellence</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-black">50K+</div>
                  <div className="text-sm text-black">Happy Customers</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-black">Pan India</div>
                  <div className="text-sm text-black">Distribution</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-black">100%</div>
                  <div className="text-sm text-black">Eco-Friendly</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HomePage;