import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add slight shadow and blur intensity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, name: string) => {
    setActiveSection(name);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40"
          : "bg-[#080b12]/60 backdrop-blur-sm border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => handleNavClick("#home", "Home")}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
            GT
          </div>
          <span className="font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-blue-400 transition-colors">
            Grace Kenne Tsague
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-card-dark/80 px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive =
              activeSection.toLowerCase() === link.name.toLowerCase();
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.name)}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-white bg-blue-600 shadow-md shadow-blue-600/30 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Hire Me CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("#contact", "Contact")}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs lg:text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-105 active:scale-95 border border-blue-400/20"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-card-dark text-slate-300 hover:text-white border border-slate-800 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#080b12] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive =
              activeSection.toLowerCase() === link.name.toLowerCase();
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.name)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-slate-300 hover:bg-card-dark hover:text-white"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick("#contact", "Contact")}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm text-center shadow-lg shadow-blue-600/20 transition-all"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
