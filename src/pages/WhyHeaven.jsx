import React from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Gem, Truck, ShieldCheck, Heart, Clock, Layers, ArrowRight, CheckCircle } from 'lucide-react';

const WhyHeaven = () => {
  const pillars = [
    {
      icon: <Gem className="w-8 h-8 text-[#D4A51C]" />,
      title: 'Quality First',
      desc: 'We strictly inspect and curate all fresh produce and packaged goods before dispatching. Our multi-stage quality checks ensure only premium items reach your shelves.'
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0B6338]" />,
      title: 'Reliable Supply Chain',
      desc: 'With direct farm connections and robust logistics infrastructure, we guarantee consistent stock availability year-round, eliminating supply shortages.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#D4A51C]" />,
      title: 'Fresh & Trusted',
      desc: 'Handpicked fruits, vegetables, and daily staples handled with strict hygiene standards from harvest to final distribution.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#0B6338]" />,
      title: 'Customer-Centric Operations',
      desc: 'Transparent pricing, responsive support, and tailored supply solutions designed around your specific business or household requirements.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#D4A51C]" />,
      title: 'Fast & Efficient Delivery',
      desc: 'Optimized delivery routes and cold-chain management ensure optimal freshness and on-time arrival.'
    },
    {
      icon: <Layers className="w-8 h-8 text-[#0B6338]" />,
      title: 'Comprehensive Product Portfolio',
      desc: 'One-stop procurement for produce, staples, packaged FMCG, household care, and personal care products.'
    }
  ];

  return (
    <div className="w-full bg-white pb-20">
      
      {/* HERO */}
      <PageHero 
        title="Why Choose Heaven Grocery?"
        subtitle="Discover how Heaven Global Pvt. Ltd. delivers unmatched freshness, dependable supply chains, and customer trust across India."
        eyebrow="OUR ADVANTAGE"
      />

      {/* PILLARS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338]">
              The Heaven Standard of Excellence
            </h2>
            <p className="mt-3 text-gray-600 text-base">
              Every step of our procurement, handling, and distribution process is optimized for freshness and dependability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF9F5] p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-gray-100">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B6338] mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-bold text-[#0B6338]">
                  <CheckCircle size={14} className="mr-1.5 text-[#D4A51C]" /> Heaven Assurance
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VISUAL STORY SECTION */}
      <section className="py-20 bg-[#F4FBF7] border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                Direct Farm Sourcing to Urban Distribution
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                By eliminating unnecessary intermediaries, we preserve food quality, reduce transit delays, and pass on optimal value to our clients and consumers.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#0B6338] text-white flex items-center justify-center text-xs">✓</span>
                  Continuous Temperature & Quality Control
                </div>
                <div className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#0B6338] text-white flex items-center justify-center text-xs">✓</span>
                  Hygienic Warehousing & Packing Protocols
                </div>
                <div className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#0B6338] text-white flex items-center justify-center text-xs">✓</span>
                  Transparent Sourcing Tracking
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80" 
                  alt="Heaven Grocery fresh produce aisle" 
                  className="w-full h-[380px] object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#042616] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experience the Heaven Difference</h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            Get in touch with our supply team today for wholesale catalog requests or partnership enquiries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#D4A51C] hover:bg-[#b88e14] text-[#042616] px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
          >
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WhyHeaven;
