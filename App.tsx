import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { IndustryInfo } from './pages/IndustryInfo';
import { ForCandidates } from './pages/ForCandidates';
import { ForEmployers } from './pages/ForEmployers';
import { Impressum } from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branche" element={<IndustryInfo />} />
            <Route path="/bewerber" element={<ForCandidates />} />
            <Route path="/arbeitgeber" element={<ForEmployers />} />
            <Route path="/impressum" element={<Impressum />} />
                    {/* // HR-UPDATER: v1.0 */}
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;