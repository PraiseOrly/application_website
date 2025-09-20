import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

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

  const links = [
    { href: '/', label: 'About' },
    // { href: '/analysis', label: 'Analysis' },
    // { href: '/insights', label: 'Data Science' },
	// {href: '/dataanalytics', label: 'Data Analytics'},
    { href: '/projects', label: 'Projects' },
    { href: '/analysis', label: 'Research Interests' },
	

    { href: '/contact', label: 'Contact' },
  ];

  return (
		<header className="sticky top-0 z-50 bg-gradient-to-r from-white via-white/95 to-white/90 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-900/90 border-b border-slate-100/50 dark:border-slate-800/50 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
			<div
				className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				ref={navRef}>
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="relative group flex items-center space-x-2">
						<span className="text-2xl font-extrabold text-teal-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent">
							Praise Orly Atadja
						</span>
						<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-2">
						{links.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
									location.pathname === link.href
										? "text-white bg-gradient-to-r from-teal-500 to-cyan-600 shadow-md"
										: "text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:bg-teal-50/50 dark:hover:bg-teal-900/20"
								} group`}>
								{link.label}
								<span
									className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-1/2 ${
										location.pathname === link.href ? "w-1/2" : ""
									}`}></span>
								<span
									className={`absolute bottom-0 right-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-1/2 ${
										location.pathname === link.href ? "w-1/2" : ""
									}`}></span>
							</Link>
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
							{links.map((link, index) => (
								<Link
									key={link.href}
									to={link.href}
									className={`relative block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
										location.pathname === link.href
											? "text-teal-600 bg-teal-50 dark:bg-teal-900/30"
											: "text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20"
									} ${index !== links.length - 1 ? "mb-1" : ""}`}
									onClick={() => setIsOpen(false)}>
									{link.label}
									{location.pathname === link.href && (
										<span className="absolute inset-y-0 left-0 w-1 bg-teal-500 rounded-r-lg"></span>
									)}
								</Link>
							))}
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}