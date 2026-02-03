import { MenuIcon, XIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Intersection Observer for scrollspy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black border-t border-teal-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <div
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="relative group flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-teal-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
              Praise Orly
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 group ${
                  activeSection === link.id
                    ? "text-white bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md"
                    : "text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:bg-teal-50/50 dark:hover:bg-teal-900/20"
                }`}>
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-1/2 ${
                    activeSection === link.id ? "w-1/2" : ""
                  }`}></span>
                <span
                  className={`absolute bottom-0 right-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-1/2 ${
                    activeSection === link.id ? "w-1/2" : ""
                  }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            {isOpen ? (
              <XIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            ) : (
              <MenuIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 animate-in slide-in-from-top-5 duration-300">
            <div className="px-4 py-3 bg-white/95 dark:bg-slate-900/95 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800/50 backdrop-blur-sm">
              {navItems.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-teal-600 bg-teal-50 dark:bg-teal-900/30"
                      : "text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                  } ${index !== navItems.length - 1 ? "mb-1" : ""}`}>
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute inset-y-0 left-0 w-1 bg-teal-500 rounded-r-lg"></span>
                  )}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
