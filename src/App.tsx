import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Popup from './components/common/Popup';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import Contact from './components/sections/contacts';
import Insights from './components/sections/DataScience';
import Analytics from './components/sections/DataAnalytics';
import Analysis from './components/sections/Research';
import Testimonials from './components/Testimonials';
import { Home } from './pages/Home';
import Projects from './pages/projects/projects';
import { Skills } from './pages/Skills';
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// 👇 This component is inside the Router context
function Layout() {
  const location = useLocation();
  const [welcomePopup, setWelcomePopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);

  useEffect(() => {
    setWelcomePopup(true);
    const timer = setTimeout(() => setWelcomePopup(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdatePopup(true);
      setTimeout(() => setUpdatePopup(false), 4000);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col relative">
			<Header />
			<main className="flex-grow">
				<Routes>
					<Route path="/" element={<Home />} />
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

			{/* Only show footer if not on /contact */}
			{location.pathname !== "/contact" && <Footer />}

			<Popup
				isOpen={welcomePopup}
				onClose={() => setWelcomePopup(false)}
				title={
					<span className="flex items-center justify-center gap-3">
						Welcome to my innovation hub!
						<Heart className="h-6 w-6 text-teal-300 animate-pulse" />
					</span>
				}
				message="Step into a world of creativity and innovation! Explore my portfolio filled with Data Science Projects, Machine Learning Projects and Research Interests ."
				variant="info"
				actionLabel="Begin Your Journey"
				onAction={() => setWelcomePopup(false)}
			/>

			<Popup
				isOpen={updatePopup}
				onClose={() => setUpdatePopup(false)}
				title={
					<span className="flex items-center justify-center gap-2">
						Fresh Update!
						<Sparkles className="h-5 w-5 text-yellow-300" />
					</span>
				}
				message="A new project has just blossomed in the portfolio.Take a peek!"
				variant="success"
				actionLabel="Discover Now"
				onAction={() => setUpdatePopup(false)}
			/>
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
