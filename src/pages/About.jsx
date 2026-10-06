import React from 'react';
import PageHero from '../components/PageHero';
import { ShieldCheck, Target, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      <PageHero 
        title="ABOUT HEAVEN GLOBAL" 
        subtitle="Building a Better Way to Deliver Everyday Essentials" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heaven-green mb-6">Built on Quality. Driven by Trust.</h2>
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                Heaven Global Pvt. Ltd. was founded on a simple principle: every household deserves access to high-quality, fresh, and reliable everyday essentials. Under our flagship brand, Heaven Grocery, we have committed ourselves to sourcing and delivering the best products for our customers.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe that trust is built one delivery at a time. That’s why our distribution philosophy centers around efficiency, reliability, and an unwavering commitment to quality standards. From farm-fresh produce to branded packaged goods, every item is handled with care.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
               <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fresh Produce" className="w-full h-[500px] object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl sm:text-2xl text-heaven-gold mb-1">Quality Commitment</p>
                    <p>Delivering excellence to your doorstep.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-heaven-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="0">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B6338] to-[#D4A51C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-heaven-light-green text-heaven-green group-hover:bg-[#0B6338] group-hover:text-white transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0B6338] transition-colors duration-300">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To consistently provide high-quality groceries and daily essentials through an efficient, reliable, and customer-first distribution network.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B6338] to-[#D4A51C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-heaven-light-green text-heaven-green group-hover:bg-[#0B6338] group-hover:text-white transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0B6338] transition-colors duration-300">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred brand for everyday household needs, recognized for our uncompromising quality and service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B6338] to-[#D4A51C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <div className="w-14 h-14 bg-heaven-light-green text-heaven-green group-hover:bg-[#0B6338] group-hover:text-white transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Heart size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0B6338] transition-colors duration-300">Our Values</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-heaven-gold group-hover:scale-110 transition-transform"/> <span className="font-medium">Quality Assurance</span></li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-heaven-gold group-hover:scale-110 transition-transform"/> <span className="font-medium">Customer First</span></li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-heaven-gold group-hover:scale-110 transition-transform"/> <span className="font-medium">Reliability</span></li>
                <li className="flex items-center gap-3"><CheckCircle size={18} className="text-heaven-gold group-hover:scale-110 transition-transform"/> <span className="font-medium">Integrity</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
