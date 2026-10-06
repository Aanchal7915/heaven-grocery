import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Why Heaven', path: '/why-heaven' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-40 transition-all duration-300">
      {/* Top Announcement Strip */}
      <div className="bg-[#042616] text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 font-medium text-emerald-100/90">
            <span className="flex items-center gap-1.5"><Leaf size={13} className="text-[#D4A51C]" /> Fresh groceries</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-[#D4A51C]" /> Trusted quality</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5"><Truck size={13} className="text-[#D4A51C]" /> Reliable delivery</span>
          </div>
          <div className="text-emerald-200/80 font-medium">
            Connecting quality essentials across India
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100' 
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-[#0B6338] to-[#053D23] rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
                <img 
                  src="/images/logo.png" 
                  alt="Heaven Grocery Logo" 
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    // Fallback graphic if image logo missing
                    e.target.style.display = 'none';
                  }}
                />
                <Leaf className="w-6 h-6 text-[#D4A51C]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#0B6338] font-black text-xl tracking-tight leading-none group-hover:text-[#053D23] transition-colors">
                  HEAVEN <span className="text-[#D4A51C]">GROCERY</span>
                </span>
                <span className="text-[10px] text-gray-500 font-semibold tracking-[0.2em] uppercase mt-0.5">
                  Heaven Global Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-[#0B6338] bg-[#F4FBF7] font-bold shadow-sm border border-[#0B6338]/10'
                      : 'text-gray-700 hover:text-[#0B6338] hover:bg-[#F4FBF7]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS (CART & CTA) */}
            <div className="hidden md:flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-gray-700 hover:text-[#0B6338] hover:bg-emerald-50 transition-colors"
                title="View Selected Items"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D4A51C] text-[#053D23] font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Get in Touch CTA */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#D4A51C] to-[#ca8a04] hover:from-[#c8920d] hover:to-[#a16f07] text-[#042616] px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>

            {/* MOBILE NAVIGATION CONTROLS */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full text-gray-700 hover:bg-emerald-50"
              >
                <ShoppingBag className="w-6 h-6 text-[#0B6338]" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D4A51C] text-[#053D23] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>

              <button 
                className="text-gray-700 hover:text-[#0B6338] p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7 text-[#0B6338]" />
                ) : (
                  <Menu className="h-7 w-7 text-gray-800" />
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-2xl absolute w-full left-0 animate-fade-in">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-[#0B6338] bg-[#F4FBF7] font-bold border-l-4 border-[#0B6338]'
                    : 'text-gray-700 hover:text-[#0B6338] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
