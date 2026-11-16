import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SECTION_NAV_END,
  SECTION_NAV_START,
  scrollToSection as animateToSection,
} from '../../utils/sectionScroll';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

const pillTransition = { type: 'spring', stiffness: 380, damping: 32 } as const;

const mobileMenu = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto', opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.035, delayChildren: 0.05 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};
const mobileItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22 } },
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  /** True while a nav-driven scroll is running, so passing sections don't steal the highlight. */
  const navigatingRef = useRef(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  const scrollToSection = useCallback((sectionId: string) => {
    setIsOpen(false);
    animateToSection(sectionId);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock the highlight onto the destination during nav-driven scrolls.
  useEffect(() => {
    const onStart = (e: Event) => {
      navigatingRef.current = true;
      setActiveSection((e as CustomEvent<string>).detail);
    };
    const onEnd = () => { navigatingRef.current = false; };
    window.addEventListener(SECTION_NAV_START, onStart);
    window.addEventListener(SECTION_NAV_END, onEnd);
    return () => {
      window.removeEventListener(SECTION_NAV_START, onStart);
      window.removeEventListener(SECTION_NAV_END, onEnd);
    };
  }, []);

  // Route every in-page "#section" link (e.g. hero buttons) through the same transition.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const id = link?.getAttribute('href')?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      setIsOpen(false);
      animateToSection(id);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (navigatingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#091422]/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.5)]'
          : 'bg-[#091422]'
      } border-b border-white/5`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)] group-hover:bg-teal-300 transition-colors duration-300" />
            <span className="text-[15px] font-semibold tracking-wide text-white/90 group-hover:text-teal-300 transition-colors duration-300">
              Praise Orly
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((link) => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  aria-current={active ? 'true' : undefined}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 rounded-md ${
                    active ? 'text-teal-300' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}>
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={pillTransition}
                      className="absolute inset-0 rounded-md bg-teal-400/10 border border-teal-400/20"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active-dot"
                      transition={pillTransition}
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-400 shadow-[0_0_4px_rgba(45,212,191,0.8)]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium bg-teal-500/10 border border-teal-500/25 text-teal-300 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
              Let's Talk
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-teal-300 hover:bg-white/5 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block">
                  {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.nav
              key="mobile-nav"
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden border-t border-white/5">
              <div className="space-y-0.5 py-3">
                {navItems.map((link) => {
                  const active = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      variants={mobileItem}
                      onClick={() => scrollToSection(link.id)}
                      className={`relative flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        active ? 'text-teal-300' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                      }`}>
                      {active && (
                        <motion.span
                          layoutId="nav-active-mobile"
                          transition={pillTransition}
                          className="absolute inset-0 rounded-lg bg-teal-400/10"
                        />
                      )}
                      <span className={`relative z-10 w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                        active ? 'bg-teal-400 shadow-[0_0_4px_rgba(45,212,191,0.8)]' : 'bg-transparent'
                      }`} />
                      <span className="relative z-10">{link.label}</span>
                    </motion.button>
                  );
                })}
                <motion.div variants={mobileItem} className="pt-2 px-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-2.5 rounded-full text-sm font-medium bg-teal-500/10 border border-teal-500/25 text-teal-300 hover:bg-teal-500/20 transition-all duration-300">
                    Let's Talk
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute left-0 right-0 -bottom-px h-[2px] origin-left bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-500"
      />
    </header>
  );
}
