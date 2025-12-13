import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const seoConfig = {
    title: "Krishna Group - Leading E-Vehicle Manufacturer in India | Sustainable Mobility Solutions",
    description: "Krishna Group is India's premier e-vehicle manufacturer since 2012. Specializing in electric scooters, e-rickshaws, spare parts, and solar solutions.",
    url: "https://www.krishnagroup.com"
  };

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <link rel="canonical" href={seoConfig.url} />
      </Helmet>

      <div className="relative w-full">
        
        <header className="relative h-screen w-full overflow-hidden">
          
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            aria-label="Krishna Group electric vehicle manufacturing showcase"
          >
            <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763403757/videoplayback_online-video-cutter.com_kfden5.webm" type="video/webm" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden absolute inset-0 w-full h-full object-cover"
            aria-label="Krishna Group mobile showcase"
          >
            <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763486864/videoplayback-online-video-cutte_hqrxal.webm" type="video/webm" />
          </video>

          {/* Simple Dark Overlay */}
          <div className="absolute inset-0"></div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
            <div className="max-w-5xl text-center space-y-8">
              
              {/* Badge */}
              <div className="inline-block">
                <span className="mt:8 inline-flex items-center px-5 py-2 bg-white/90 rounded-full text-sm font-medium text-gray-900">
                  Pioneering E-Mobility Since 2012
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Building India's Sustainable
                <br />
                <span className="text-emerald-400">Mobility Ecosystem</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                Premium electric vehicles and comprehensive distribution network serving customers across India
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white text-base font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                  aria-label="Learn more about Krishna Group"
                >
                  Explore Our Vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/business"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="View Krishna Group products"
                >
                  Our Products
                </Link>
              </div>

              {/* Stats - Clean and Simple */}
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