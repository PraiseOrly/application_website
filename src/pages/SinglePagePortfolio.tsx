import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import AcademicExcellenceChampion from '../assets/images/AcademicExcellenceChampion.jpg';
import AIinMedicine from '../assets/images/AIinMedicine.jpg';
import AIInnovation from '../assets/images/AIInnovation.jpg';
import PresidentofAlliance4AI from '../assets/images/PresidentofAlliance4AI.jpg';
import SocialImpactCoderina from '../assets/images/SocialImpactCoderina.jpg';
import ContactForm from '../components/sections/contacts';
import { About } from '../layout/About';
import { Education } from '../layout/Education';
import { Experience } from '../layout/Experience';
import { ResearchSection } from '../layout/ResearchSection';
import { Skills } from '../layout/Skills';
import Projects from '../pages/projects/projects';

const slideshowData = [
  {
    title: 'Revolutionizing Healthcare',
    subtitle: 'AI-Powered Diagnostics',
    description:
      'Built CardiacTEK — an AI ECG analysis tool achieving 96% diagnostic accuracy across 10,000+ PhysioNet records, reducing cardiologist workload by 70% in resource-constrained settings.',
    image: AIInnovation,
    accentColor: '#14B8A6',
    buttonText: 'Explore Work',
    buttonLink: '#experience',
    tag: 'CardiacTEK · Deep Learning · ECG Analysis',
  },
  {
    title: 'Empowering Communities',
    subtitle: 'Tech Leadership',
    description:
      "Led 8+ ML workshops with Alliance4AI, with 40% of participants securing AI roles. Directed Rwanda's She Innovate Summer School — training 30 girls in tech with a 40% retention increase.",
    image: PresidentofAlliance4AI,
    accentColor: '#8B5CF6',
    buttonText: 'See Impact',
    buttonLink: '#skills',
    tag: 'Alliance4AI · She Innovate · STEM Education',
  },
  {
    title: 'Academic Excellence',
    subtitle: 'Software Engineering · AI',
    description:
      'Top-ranked student at African Leadership University with a 4.56 GPA and First Class Honours. Specializing in AI-driven healthcare diagnostics and machine learning systems.',
    image: AcademicExcellenceChampion,
    accentColor: '#4B5EAA',
    buttonText: 'View Journey',
    buttonLink: '#education',
    tag: 'ALU · First Class Honours · 4.56 GPA',
  },
  {
    title: 'Future of Medicine',
    subtitle: 'Innovative AI Solutions',
    description:
      'Pioneering predictive models for stroke (AUC >0.85), diabetes risk stratification, and 12-lead ECG classification — democratizing diagnostic precision for underserved communities across Africa.',
    image: AIinMedicine,
    accentColor: '#f59e0b',
    buttonText: 'See Projects',
    buttonLink: '#projects',
    tag: 'Predictive Modeling · Health AI · Impact at Scale',
  },
  {
    title: 'Tech for Good',
    subtitle: 'Social Impact',
    description:
      "Improved literacy and numeracy outcomes for 70% of 30 students in Nairobi's underserved communities. Building inclusive, tech-powered health platforms that reach thousands across Africa.",
    image: SocialImpactCoderina,
    accentColor: '#06b6d4',
    buttonText: 'Get Involved',
    buttonLink: '#contact',
    tag: 'AIESEC · Nairobi · Inclusive Education',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.5, ease: 'easeIn' } }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.14, ease: 'easeOut' },
  }),
};

export function SinglePagePortfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => { setDirection(1); setCurrentSlide((prev) => (prev + 1) % slideshowData.length); };
  const handlePrev = () => { setDirection(-1); setCurrentSlide((prev) => (prev - 1 + slideshowData.length) % slideshowData.length); };

  const slide = slideshowData[currentSlide];

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-white" style={{ background: '#030712' }}>

      {/* ── Hero Section ── */}
      <section id="home" className="relative h-[96vh] overflow-hidden" style={{ background: '#030712' }}>

        {/* Per-slide ambient glow */}
        <motion.div
          key={currentSlide + '-glow'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 65% 55% at 72% 50%, ${slide.accentColor}14 0%, transparent 70%)` }}
        />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-12">

              {/* Text */}
              <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border mb-4"
                    style={{ color: slide.accentColor, borderColor: `${slide.accentColor}35`, background: `${slide.accentColor}10` }}>
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  custom={1} variants={textVariants} initial="hidden" animate="visible"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  {slide.title}
                </motion.h1>

                <motion.p
                  custom={2} variants={textVariants} initial="hidden" animate="visible"
                  className="text-[15px] md:text-base text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                  {slide.description}
                </motion.p>

                <motion.div
                  custom={3} variants={textVariants} initial="hidden" animate="visible"
                  className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                  <motion.a
                    href={slide.buttonLink}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white shadow-lg transition-all"
                    style={{ background: `linear-gradient(135deg, ${slide.accentColor}cc, ${slide.accentColor}88)` }}>
                    {slide.buttonText}
                    <ArrowRightIcon className="h-4 w-4" />
                  </motion.a>
                  <span className="text-xs text-gray-600 font-medium tracking-wide">{slide.tag}</span>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className="md:w-1/2 relative">
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-20 -z-10 scale-105"
                  style={{ background: `linear-gradient(135deg, ${slide.accentColor}, transparent)` }}
                />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-72 md:h-[460px] object-cover rounded-2xl shadow-2xl"
                  style={{ border: `1px solid ${slide.accentColor}25` }}
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-white/10 text-xs font-medium text-white/70">
                  Praise Orly Atadja
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          aria-label="Next">
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slideshowData.map((s, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                height: 4,
                width: i === currentSlide ? 28 : 8,
                background: i === currentSlide ? s.accentColor : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Main Sections ── */}
      <main className="relative z-10">
        <About />
        <Experience />
        <Education />
        <Skills />

        <section id="projects" className="w-full">
          <Projects />
        </section>

        {/* Research Section */}
        <ResearchSection />
      </main>

      {/* ── Contact ── */}
      <section id="contact" className="w-full">
        <ContactForm />
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 border-t border-white/5 text-center relative overflow-hidden"
        style={{ background: '#030712' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(20,184,166,0.05) 0%, transparent 70%)' }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Let's Build Something Impactful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Open to collaborations, research partnerships, and conversations around AI and healthcare innovation across Africa.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.24 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-sm font-semibold hover:bg-teal-500/18 hover:border-teal-400/40 transition-all duration-300">
          Contact Me
          <ArrowRightIcon className="h-4 w-4" />
        </motion.a>
      </section>
    </div>
  );
}

export default SinglePagePortfolio;
