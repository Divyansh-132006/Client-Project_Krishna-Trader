// import React, { lazy, Suspense } from 'react';
// const AboutPage = lazy(() => import('./AboutPage.jsx'));
// const BusinessLanding = lazy(() => import('./BusinessLanding.jsx'));
// const ContactPage = lazy(() => import('./ContactPage.jsx'));
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';


const HomePage = () => {
  // SEO Data (Kept as is - it is comprehensive and well-structured)
  const pageTitle = "Krishna Group - Leading E-Vehicle Manufacturer in India | Sustainable Mobility Solutions";
  const pageDescription = "Krishna Group is India's premier e-vehicle manufacturer since 2012. Specializing in electric scooters, e-rickshaws, spare parts, and solar solutions. Building India's sustainable mobility ecosystem with TORA brand and nationwide distribution.";
  const pageKeywords = "Krishna Group, e-vehicle manufacturer India, electric scooter India, e-rickshaw manufacturer, TORA electric scooter, sustainable mobility India, electric vehicle India, e-vehicle spare parts, solar energy solutions, Atmanirbhar Bharat, green transportation India, Chandausi e-vehicles";
  const pageUrl = "https://www.krishnagroup.com";

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        {/* ... other meta and schema tags ... */}
      </Helmet>

      {/* Main container should match the background of the sub-pages (e.g., bg-yellow-50 from previous components) */}
      <div className="relative w-full bg-yellow-50 text-gray-900">

        <header className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Krishna Group electric vehicle manufacturing showcase"
          >
            <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763403757/videoplayback_online-video-cutter.com_kfden5.webm" type="video/webm" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden absolute top-0 left-0 w-full h-full object-cover"
            aria-label="Krishna Group mobile showcase"
          >
            <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763486864/videoplayback-online-video-cutte_hqrxal.webm" type="video/webm" />
          </video>

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
            <div className="text-center space-y-6 max-w-4xl">

              <div className="inline-block px-5 py-2 bg-emerald-600 rounded-full shadow-lg mb-4">
                <span className="text-sm font-semibold text-white tracking-wider uppercase">Since 2012 • Pioneering E-Mobility</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                From Legacy to Green Future
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                Building India's sustainable mobility ecosystem with innovative e-vehicles and nationwide distribution
              </p>

              <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link
                  to="/about"
                  className="px-10 py-3 bg-emerald-600 text-white rounded-lg font-bold shadow-lg 
                    hover:bg-emerald-700 transition-all duration-300 transform hover:scale-[1.03]"
                  aria-label="Learn more about Krishna Group's vision"
                >
                  Explore Our Vision →
                </Link>
                <Link
                  to="/business"
                  className="px-10 py-3 bg-white/20 text-white border border-white/40 rounded-lg font-bold shadow-lg backdrop-blur-sm hover:bg-white/30 hover:text-white transition-all duration-300 transform hover:scale-[1.03]"
                  aria-label="View Krishna Group products"
                >
                  Our Products
                </Link>
              </nav>
            </div>
          </div>
        </header>

      {/* <Suspense fallback="Loading">
        <AboutPage />
        <BusinessLanding />
        <ContactPage />
</Suspense> */}
      </div>
    </>
  );
}

export default HomePage;