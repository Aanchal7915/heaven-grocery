import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full bg-white pb-20">
      
      {/* HERO */}
      <PageHero 
        title="Let's Build a Better Everyday Together"
        subtitle="Have a business enquiry, distribution partnership opportunity, or bulk order requirement? Get in touch with Heaven Global Pvt. Ltd."
        eyebrow="CONTACT US"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: CONTACT DETAILS & BUSINESS INFO */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            
            <div>
              <div className="inline-flex items-center gap-2 text-[#0B6338] font-bold text-xs uppercase tracking-widest mb-2">
                <MessageSquare size={14} className="text-[#D4A51C]" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#0B6338]">
                We're Here to Help
              </h2>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Reach out to our business team for bulk produce orders, FMCG distribution inquiries, or general customer support.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-200/80 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base">Corporate Office</h4>
                  <p className="text-xs text-gray-600 mt-1">Heaven Global Pvt. Ltd.<br />India</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-200/80 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#D4A51C] flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base">Email Enquiries</h4>
                  <a href="mailto:info@heavengrocery.com" className="text-xs font-bold text-[#0B6338] hover:underline mt-1 block">
                    info@heavengrocery.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-200/80 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base">Phone & Whatsapp</h4>
                  <p className="text-xs text-gray-700 font-bold mt-1">+91 (800) 123-4567</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-200/80 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#D4A51C] flex items-center justify-center shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base">Business Hours</h4>
                  <p className="text-xs text-gray-600 mt-1">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: BUSINESS ENQUIRY FORM */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl relative">
              
              <h3 className="text-2xl font-extrabold text-[#0B6338] mb-2">
                Send a Business Enquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below and our regional representative will contact you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#F4FBF7] rounded-2xl border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#0B6338] text-[#D4A51C] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#0B6338]">Enquiry Submitted Successfully!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out to Heaven Global Pvt. Ltd. Our team will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0B6338] focus:ring-2 focus:ring-[#0B6338]/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Company / Store Name</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Traders"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0B6338] focus:ring-2 focus:ring-[#0B6338]/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0B6338] focus:ring-2 focus:ring-[#0B6338]/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0B6338] focus:ring-2 focus:ring-[#0B6338]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Message / Requirements *</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify product requirements, estimated volume, delivery city, or general inquiry..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#0B6338] focus:ring-2 focus:ring-[#0B6338]/10"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B6338] hover:bg-[#07542e] text-white py-3.5 rounded-xl font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
