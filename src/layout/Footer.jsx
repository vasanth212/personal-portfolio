import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

// Reusing your navLinks for consistency
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-10 border-t border-white/10 bg-surface/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
              V@
            </a>
            
          </div>

          {/* Navigation Links - Hidden on very small screens or kept simple */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:text-primary transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:text-primary transition-all">
              <Linkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className=" pt-2 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {currentYear} V@ Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              Built with React & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;