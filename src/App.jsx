import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import './App.css';
import { Suspense, lazy } from 'react';
import Loading from './pages/Loading.jsx';
import ScrollBar from './pages/ScrollBar.jsx';
const HomePage = lazy(() => import('./pages/Home.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const BusinessLanding = lazy(() => import('./pages/BusinessLanding.jsx'));
const Company1 = lazy(() => import('./pages/ShriShyamEnterprises.jsx'));
const Company2 = lazy(() => import('./pages/PRINCEGLOBALCOMPANY.jsx'));
const Company3 = lazy(() => import('./pages/KRISHNAEVEHICLETRADERS.jsx'));
const Company4 = lazy(() => import('./pages/KRISHNAPOWERSOLUTIONPRIVATELIMITED.jsx'));
const Company5 = lazy(() => import('./pages/KRISHNAERICHSAWENTER.jsx'));
const MediaPage = lazy(()=>import('./pages/MediaPage.jsx'))
const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollBar>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessLanding />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/company1" element={<Company1 />} />
          <Route path="/company2" element={<Company2 />} />
          <Route path="/company3" element={<Company3 />} />
          <Route path="/company4" element={<Company4 />} />
          <Route path="/company5" element={<Company5 />} />
        </Routes>
      </Suspense>
    </ScrollBar>
    </Router>
  );
};
export default App;
