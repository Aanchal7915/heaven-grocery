import React from 'react';
import PageHero from '../components/PageHero';
import { Gem, Leaf, ShieldCheck, Heart, Truck, ShoppingCart } from 'lucide-react';

const WhyHeaven = () => {
  const reasons = [
    {
      icon: <Gem size={48} />,
      title: "Quality First",
      desc: "Every product is carefully sourced to ensure only the highest quality items reach your home. We do not compromise on the standards our customers expect."
    },
    {
      icon: <Leaf size={48} />,
      title: "Reliable Supply",
      desc: "Our robust supply chain ensures consistent and dependable distribution, meaning the products you need are always available when you need them."
    },
    {
      icon: <ShieldCheck size={48} />,
      title: "Fresh & Trusted",
      desc: "Freshness is our promise. From farm produce to packaged goods, you can rely on the integrity and safety of everything we deliver."
    },
    {
      icon: <Heart size={48} />,
      title: "Customer Focused",
      desc: "Your satisfaction matters most. We listen to our customers and continuously adapt to meet their evolving needs and preferences."
    },
    {
      icon: <Truck size={48} />,
      title: "Fast & Efficient",
      desc: "Time is valuable. Our logistics are optimized for on-time delivery with care, ensuring your essentials arrive promptly."
    },
    {
      icon: <ShoppingCart size={48} />,
      title: "Wide Variety",
      desc: "Find all your household essentials in one place. We offer a comprehensive range of products to simplify your shopping experience."
    }
  ];

  return (
    <div className="w-full">
      <PageHero 
        title="WHY HEAVEN" 
        subtitle="Quality You Can Trust" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-heaven-light-green rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-heaven-light-green text-heaven-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0B6338] group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                  {reason.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 group-hover:text-[#0B6338] transition-colors duration-300 relative z-10">{reason.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyHeaven;
