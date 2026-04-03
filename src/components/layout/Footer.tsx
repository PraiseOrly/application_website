import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const footerNav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/PraiseOrly', label: 'GitHub', icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/praise-orly-atadja/', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'mailto:praiseorlyatadja@gmail.com', label: 'Email', icon: MailIcon },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#091422] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.7)]" />
              <span className="text-[15px] font-semibold tracking-wide text-white/90">Praise Orly</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI & Healthcare Engineer · Building intelligent diagnostics for Africa and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {footerNav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-500 hover:text-teal-300 transition-colors duration-200 text-left">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">Connect</p>
            <div className="space-y-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-teal-300 transition-colors duration-200">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Praise Orly Atadja. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
