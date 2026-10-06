import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Thank you for your enquiry. We will get back to you soon!");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="w-full">
      <PageHero 
        title="GET IN TOUCH" 
        subtitle="We'd Love to Hear From You" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heaven-green mb-4">Let's Connect</h2>
              <p className="text-gray-600 mb-10 text-base sm:text-lg">
                For business enquiries, partnerships, distribution or customer support, feel free to reach out to us.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-heaven-light-green text-heaven-green flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-heaven-light-green text-heaven-green flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Email</h4>
                    <p className="text-gray-600">yourname@company.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-heaven-light-green text-heaven-green flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Address</h4>
                    <p className="text-gray-600">Your Address, City, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-6">Follow Us</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <a href="https://www.instagram.com/p/DdbLjJIP3IK/?stkn=MXNiMGRzYW9mb2Jubg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-heaven-green transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-heaven-light-green">
                      <FaInstagram size={20} />
                    </div>
                    <span className="font-medium">@heavengrocery4</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-heaven-green transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-heaven-light-green">
                      <FaWhatsapp size={20} />
                    </div>
                    <span className="font-medium">WhatsApp<br/><span className="text-sm">+91 XXXXX XXXXX</span></span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-heaven-green transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-heaven-light-green">
                      <FaLinkedin size={20} />
                    </div>
                    <span className="font-medium">Heaven Global Pvt. Ltd.</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-heaven-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-heaven-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-heaven-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-heaven-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-600"
                    >
                      <option value="">Select subject</option>
                      <option value="business">Business Enquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..." 
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-heaven-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B6338] hover:bg-[#07542e] text-white font-medium py-4 rounded-lg shadow-md transition-colors flex justify-center items-center gap-2"
                >
                  Send Enquiry &rarr;
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
