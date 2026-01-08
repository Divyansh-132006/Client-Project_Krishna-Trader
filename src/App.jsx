import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './Navbar/Navbar.jsx';
import './App.css';

import Loading from './hooks/Loading.jsx';
import ScrollBar from './hooks/ScrollBar.jsx';

/* =======================
   LAZY LOADED PAGES
   ======================= */

// Core Pages
const HomePage = lazy(() => import('./pages/Home.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const BusinessLanding = lazy(() => import('./pages/BusinessLanding.jsx'));
const MediaPage = lazy(() => import('./pages/MediaPage.jsx'));

// Company Pages (ONE FILE = ONE COMPANY)
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

// Other
const Dealership = lazy(() =>
  import('./components/c1/Dealership.jsx')
);

/* =======================
   APP ROOT
   ======================= */

const App = () => {
  return (
    <Router>
      <Navbar />

      <ScrollBar>
        <Suspense fallback={<Loading />}>
          <Routes>

            {/* Core Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/business" element={<BusinessLanding />} />
            <Route path="/media" element={<MediaPage />} />

            {/* Company Routes */}
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
