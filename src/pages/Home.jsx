import React, { lazy, Suspense } from 'react';
import AboutPage from './AboutPage.jsx';
import BussinessLanding from './BusinessLanding.jsx';
// import MediaPage from './MediaPage.jsx';
import ContactPage from './ContactPage.jsx';
import { Link } from "react-router-dom";


const HomePage = () => {

  return (
    <div className="relative w-full bg-white text-gray-900">
      
      <div className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata" 
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763403757/videoplayback_online-video-cutter.com_kfden5.webm" type="video/webm" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline 
          className="md:hidden absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drgbysqgy/video/upload/v1763486864/videoplayback-online-video-cutte_hqrxal.webm" type="video/webm"/>
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
          <div className="text-center space-y-6 max-w-4xl text-black">
            <div className="inline-block px-4 py-2 bg-emerald-600 rounded-md mb-4">
              <span className="text-sm font-medium">Since 2012 • Pioneering E-Mobility</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              From Legacy to Green Future
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Building India's sustainable mobility ecosystem with innovative e-vehicles and nationwide distribution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button className="px-8 py-3 bg-emerald-600 rounded-md font-semibold hover:bg-emerald-700 transition-colors">
                Explore Our Vision →
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Our Products
              </button>
            </div>
          </div>
        </div>
      </div>
        <AboutPage/>
        <BussinessLanding/>
        {/* <MediaPage/> */}
        <ContactPage/>
      
    </div>
  );
}

export default HomePage;