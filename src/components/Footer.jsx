import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#042616] text-white pt-16 pb-8 border-t border-emerald-900/50 relative overflow-hidden">
      {/* Decorative leaf glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B6338]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A51C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/40">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 bg-emerald-800/80 rounded-xl flex items-center justify-center border border-emerald-600/40">
                <Leaf className="w-6 h-6 text-[#D4A51C]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl tracking-tight leading-none">
                  HEAVEN <span className="text-[#D4A51C]">GROCERY</span>
                </span>
                <span className="text-[10px] text-emerald-300 font-semibold tracking-[0.2em] uppercase mt-0.5">
                  Heaven Global Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-md">
              Heaven Global Pvt. Ltd. is committed to delivering quality grocery and daily essentials with reliability, efficiency and care across India.
            </p>
            
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#D4A51C] hover:text-[#042616] flex items-center justify-center transition-colors text-emerald-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.74a1.6 1.6 0 0 0-1.6 1.6c0 .88.71 1.6 1.6 1.6a1.6 1.6 0 0 0 1.6-1.6c0-.89-.71-1.6-1.6-1.6Z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#D4A51C] hover:text-[#042616] flex items-center justify-center transition-colors text-emerald-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#D4A51C] hover:text-[#042616] flex items-center justify-center transition-colors text-emerald-200">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#D4A51C] font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/why-heaven" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Why Heaven
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR PRODUCTS */}
          <div>
            <h3 className="text-[#D4A51C] font-bold text-sm uppercase tracking-wider mb-4">Our Products</h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li>
                <Link to="/products/fresh-produce" className="hover:text-white transition-colors">
                  Fresh Produce
                </Link>
              </li>
              <li>
                <Link to="/products/daily-essentials" className="hover:text-white transition-colors">
                  Daily Essentials
                </Link>
              </li>
              <li>
                <Link to="/products/packaged-grocery" className="hover:text-white transition-colors">
                  Packaged Grocery
                </Link>
              </li>
              <li>
                <Link to="/products/household" className="hover:text-white transition-colors">
                  Household
                </Link>
              </li>
              <li>
                <Link to="/products/personal-care" className="hover:text-white transition-colors">
                  Personal Care
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h3 className="text-[#D4A51C] font-bold text-sm uppercase tracking-wider mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-sm text-emerald-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A51C] shrink-0 mt-0.5" />
                <span>Heaven Global Pvt. Ltd.<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A51C] shrink-0" />
                <a href="mailto:info@heavengrocery.com" className="hover:text-white transition-colors">
                  info@heavengrocery.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A51C] shrink-0" />
                <span>+91 (800) 123-4567</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-300/70 gap-4">
          <p>© {new Date().getFullYear()} Heaven Global Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden md:inline text-emerald-100/50">Fresh groceries • Trusted quality • Reliable delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
