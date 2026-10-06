import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#084524] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="Heaven Grocery Logo" className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-1" />
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-xl leading-tight">HEAVEN</span>
                <span className="text-white text-xs tracking-widest uppercase">Grocery</span>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">Heaven Global Pvt. Ltd.</h3>
            <p className="text-gray-300 text-sm mb-6">Quality You Can Trust.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-heaven-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-heaven-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-heaven-gold transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-heaven-gold transition-colors">Our Products</Link></li>
              <li><Link to="/why-heaven" className="hover:text-heaven-gold transition-colors">Why Heaven</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-heaven-gold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/contact" className="hover:text-heaven-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-heaven-gold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/p/DdbLjJIP3IK/?stkn=MXNiMGRzYW9mb2Jubg==" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-heaven-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-heaven-gold transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-heaven-gold transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2026 Heaven Global Pvt. Ltd. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Termination</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
