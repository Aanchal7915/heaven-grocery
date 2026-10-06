import React from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Truck, Award, Target, Eye, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-white pb-20">
      
      {/* PAGE HERO */}
      <PageHero 
        title="Building a Trusted Brand in Everyday Essentials"
        subtitle="Heaven Global Pvt. Ltd. is dedicated to delivering fresh, reliable, and high-quality produce and grocery products to homes and businesses across India."
        eyebrow="ABOUT HEAVEN GLOBAL"
      />

      {/* COMPANY OVERVIEW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-[#0B6338] font-bold text-xs uppercase tracking-widest">
                <Leaf size={14} className="text-[#D4A51C]" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                Quality Produce & Essentials, Delivered with Reliability.
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Heaven Global Pvt. Ltd. operates across fresh produce, daily essentials, packaged FMCG groceries, household items, and personal care. We bridge the gap between quality farm sources and consumer doorsteps.
              </p>

              <p className="text-gray-600 text-base leading-relaxed">
                Our operations are founded on three pillars: rigorous quality selection, dependable supply chain logistics, and customer satisfaction. Whether servicing retail consumers or wholesale businesses, Heaven Global stands for absolute reliability.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-extrabold text-2xl text-[#0B6338]">100%</h4>
                  <p className="text-xs text-gray-500 font-semibold">Quality Checked Produce</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-2xl text-[#D4A51C]">50+ Cities</h4>
                  <p className="text-xs text-gray-500 font-semibold">Supply Network Reach</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Heaven Grocery warehouse & distribution" 
                  className="w-full h-[400px] object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-[#FAF9F5] border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* MISSION */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-4" data-aos="fade-up">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0B6338] flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B6338]">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To streamline grocery and fresh produce distribution, ensuring every household and business receives safe, fresh, and competitively priced daily essentials with complete reliability.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D4A51C] flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B6338]">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To build India's most trusted grocery brand, known for uncompromised quality, customer-first service, and sustainable, farm-to-table sourcing networks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4FBF7] rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-2xl overflow-hidden border-4 border-[#D4A51C] shadow-xl max-w-xs">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Mr. Vivek Aggarwal" 
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-[#D4A51C] font-bold text-xs uppercase tracking-widest">
                  <Award size={16} />
                  <span>FOUNDER STATEMENT</span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#0B6338]">Mr. Vivek Aggarwal</h3>
                <p className="text-sm font-bold text-gray-500">Founder, Heaven Global Pvt. Ltd.</p>

                <blockquote className="bg-white p-6 rounded-2xl border-l-4 border-[#D4A51C] text-gray-700 italic font-medium leading-relaxed shadow-sm">
                  “Our vision is to build a trusted brand that brings quality, reliability and convenience into everyday lives. Every delivery and every customer relationship reflects our personal commitment to excellence.”
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA BANNER */}
      <section className="py-16 bg-[#042616] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Partner with Heaven Global</h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            Interested in wholesale supply, retail distribution, or corporate enquiries? Let's connect today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4A51C] hover:bg-[#b88e14] text-[#042616] px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
