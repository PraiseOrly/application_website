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
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
          ? 'bg-[#030a06]/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.5)]'
          : 'bg-[#030a06]'
      } border-b border-white/5`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)] group-hover:bg-green-300 transition-colors duration-300" />
            <span className="text-[15px] font-semibold tracking-wide text-white/90 group-hover:text-green-300 transition-colors duration-300">
              Praise Orly
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-md ${
                  activeSection === link.id
                    ? 'text-green-300'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}>
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400 shadow-[0_0_4px_rgba(74,222,128,0.7)]" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-medium bg-green-500/10 border border-green-500/25 text-green-300 hover:bg-green-500/20 hover:border-green-400/40 transition-all duration-300">
              Let's Talk
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-green-300 hover:bg-white/5 transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu">
              {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-3 border-t border-white/5">
            <div className="space-y-0.5">
              {navItems.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-green-300 bg-green-400/10'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`}>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3 shadow-[0_0_4px_rgba(74,222,128,0.7)]" />
                  )}
                  {link.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 rounded-full text-sm font-medium bg-green-500/10 border border-green-500/25 text-green-300 hover:bg-green-500/20 transition-all duration-300">
                  Let's Talk
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
