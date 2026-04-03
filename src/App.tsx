import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { pdfjs } from "react-pdf";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import Contact from './components/sections/contacts';
import Analytics from './components/sections/DataAnalytics';
import Insights from './components/sections/DataScience';
import Analysis from './components/sections/Research';
import Testimonials from './components/Testimonials';
import { Home } from './pages/Home';
import Projects from './pages/projects/projects';
import SinglePagePortfolio from './pages/SinglePagePortfolio';
import { Skills } from './pages/Skills';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function WelcomePopup({ onClose }: { onClose: () => void }) {
  const goToProjects = () => {
    onClose();
    const el = document.getElementById('projects');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 22 } },
    exit: { opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4"
      onClick={onClose}>
      <motion.div
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-gray-950 border border-teal-500/20 rounded-2xl shadow-2xl overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl bg-teal-500/8 pointer-events-none" />

        <div className="relative z-10 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-600 hover:text-white hover:bg-white/5 transition-all duration-200 text-xs">
            ✕
          </button>

          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20">
              <Sparkles className="h-4 w-4 text-teal-400" />
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-teal-400 uppercase">Welcome</span>
          </div>

          <h3 className="text-white font-bold text-lg mb-2 leading-snug pr-6">
            AI & Healthcare Portfolio
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Explore data science projects, ML models, and research in AI-driven healthcare diagnostics — built to improve lives across Africa.
          </p>

          <div className="flex gap-2.5">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-300 border border-white/8 hover:border-white/15 transition-all duration-200">
              Explore freely
            </button>
            <button
              onClick={goToProjects}
              className="flex-1 py-2.5 rounded-full text-sm font-semibold bg-teal-500/15 border border-teal-500/30 text-teal-300 hover:bg-teal-500/25 transition-all duration-200 flex items-center justify-center gap-1.5">
              View Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Layout() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('portfolio_visited');
    if (!visited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('portfolio_visited', 'true');
        setTimeout(() => setShowPopup(false), 10000);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative" style={{ background: '#0a1628' }}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SinglePagePortfolio />} />
          <Route path="/single-page" element={<SinglePagePortfolio />} />
          <Route path="/home" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/dataanalytics" element={<Analytics />} />
        </Routes>
      </main>

      {location.pathname !== "/contact" && <Footer />}

      <AnimatePresence>
        {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
