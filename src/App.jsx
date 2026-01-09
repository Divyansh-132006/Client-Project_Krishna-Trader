import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet'; 

import Navbar from './Navbar/Navbar.jsx';
import './App.css';

import Loading from './hooks/Loading.jsx';
import ScrollBar from './hooks/ScrollBar.jsx';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  
  return null;
};

const HomePage = lazy(() => import('./pages/Home.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const BusinessLanding = lazy(() => import('./pages/BusinessLanding.jsx'));
const MediaPage = lazy(() => import('./pages/MediaPage.jsx'));

const ShriShyamEnterprises = lazy(() =>
  import('./pages/ShriShyamEnterprises.jsx')
);

const PrinceGlobalCompany = lazy(() =>
  import('./pages/PRINCEGLOBALCOMPANY.jsx')
);

const KrishnaEVehicleTraders = lazy(() =>
  import('./pages/KRISHNAEVEHICLETRADERS.jsx')
);

const KrishnaPowerSolutionPrivateLimited = lazy(() =>
  import('./pages/KRISHNAPOWERSOLUTIONPRIVATELIMITED.jsx')
);

const KrishnaERickshawEnterprises = lazy(() =>
  import('./pages/KRISHNAERICHSAWENTER.jsx')
);

const Dealership = lazy(() =>
  import('./components/c1/Dealership.jsx')
);


const App = () => {
  return (
    <Router>
     
      <ScrollToTop />
      
      <Navbar />

      <ScrollBar>
        <Suspense fallback={<Loading />}>
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/business" element={<BusinessLanding />} />
            <Route path="/media" element={<MediaPage />} />

            <Route
              path="/shrishyamenterprises"
              element={<ShriShyamEnterprises />}
            />

            <Route
              path="/princeglobalcompany"
              element={<PrinceGlobalCompany />}
            />

            <Route
              path="/krishnaevehicletraders"
              element={<KrishnaEVehicleTraders />}
            />

            <Route
              path="/krishnapowersolutionprivatelimited"
              element={<KrishnaPowerSolutionPrivateLimited />}
            />

            <Route
              path="/krishnaerickshawenterprises"
              element={<KrishnaERickshawEnterprises />}
            />

            {/* Other */}
            <Route path="/dealership" element={<Dealership />} />

          </Routes>
        </Suspense>
      </ScrollBar>
    </Router>
  );
};

export default App;