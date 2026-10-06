import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Why Heaven', path: '/why-heaven' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Heaven Grocery Logo" className="h-10 sm:h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-heaven-green font-extrabold text-xl leading-tight">HEAVEN</span>
                <span className="text-heaven-green text-xs tracking-widest uppercase">Grocery</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-heaven-green font-semibold border-b-2 border-heaven-gold'
                    : 'text-gray-600 hover:text-heaven-green hover:bg-heaven-light-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Get in Touch &rarr;
            </Link>
          </div>
          {/* Mobile menu button could go here */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-heaven-green p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-heaven-green bg-heaven-light-green/50 font-bold'
                    : 'text-gray-600 hover:text-heaven-green hover:bg-heaven-light-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md flex items-center justify-center gap-2"
              >
                Get in Touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
