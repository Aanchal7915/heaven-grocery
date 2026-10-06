import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  Heart,
  ArrowRight,
  Gem,
  Clock,
  Leaf,
  MessageCircle
} from 'lucide-react';

const TypewriterText = ({ text, delay, className }) => {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {text.substring(0, displayedLength)}
      <span className="opacity-0">{text.substring(displayedLength)}</span>
    </span>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="min-h-[auto] lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-2 items-center gap-2 sm:gap-6 lg:gap-0 py-4 sm:py-8 lg:py-0">

            {/* LEFT CONTENT */}
            <div className="relative z-10 order-1 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right">

              <p className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold tracking-[0.18em] text-[#0B6338] uppercase mb-6">
                <span className="text-xl">🌿</span>
                Fresh • Organic • Daily Essentials
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] lg:leading-[1.05] font-extrabold tracking-tight">
                <TypewriterText delay={0} text="Freshness" className="block text-[#0B6338]" />
                <TypewriterText delay={450} text="You Can Trust." className="block text-[#0B6338]" />
                <TypewriterText delay={1150} text="Quality That" className="block text-[#D4A51C]" />
                <TypewriterText delay={1750} text="Reaches You." className="block text-[#D4A51C]" />
              </h1>

              <p className="mt-6 lg:mt-7 max-w-xl text-base lg:text-lg leading-relaxed lg:leading-8 text-gray-600">
                Heaven Global Pvt. Ltd. is committed to delivering
                quality grocery and daily essentials with reliability,
                efficiency and care.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 lg:mt-9 flex flex-row justify-center lg:justify-start gap-3 lg:gap-4 w-full sm:w-auto">

                <Link
                  to="/products"
                  className="
                    group
                    rounded-full
                    bg-[#0B6338]
                    px-4 lg:px-7 py-3 lg:py-4
                    font-semibold
                    text-white
                    text-sm lg:text-base
                    shadow-lg
                    shadow-green-900/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#07542e]
                    flex items-center justify-center gap-1.5 lg:gap-2
                    flex-1 sm:flex-none
                  "
                >
                  Explore <span className="hidden sm:inline">Our Products</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="
                    rounded-full
                    border-2
                    border-[#D4A51C]
                    bg-white
                    px-4 lg:px-7 py-3 lg:py-4
                    font-semibold
                    text-gray-800
                    text-sm lg:text-base
                    transition-all
                    duration-300
                    hover:bg-[#D4A51C]
                    hover:text-white
                    flex items-center justify-center
                    flex-1 sm:flex-none
                  "
                >
                  Get in Touch
                </Link>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[550px] flex items-center justify-center order-2" data-aos="fade-left" data-aos-delay="200">
              <img
                src="/images/hero-grocery.png"
                alt="Fresh vegetables and groceries"
                className="
                  relative
                  z-10
                  w-full
                  max-w-md
                  lg:w-[115%]
                  lg:max-w-[700px]
                  object-contain
                  drop-shadow-2xl
                  lg:translate-x-8
                  transition-transform 
                  duration-700 
                  ease-out 
                  hover:scale-105
                "
              />
            </div>

          </div>
        </div>

        {/* Decorative leaves */}
        <div className="absolute left-0 bottom-0 opacity-40 pointer-events-none">
          <div className="h-32 w-32 rounded-full bg-[#D4A51C]/20 blur-2xl" />
        </div>

      </section>


      {/* About Heaven Global */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl h-[400px]" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Grocery Store" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="flex items-center gap-2 text-heaven-green font-semibold mb-2">
                <Leaf size={16} />
                <span className="uppercase tracking-widest text-xs">About Heaven Global</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heaven-green mb-4 leading-tight">
                Building a Better Way<br/>
                <span className="text-heaven-gold">to Deliver Everyday Essentials</span>
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg">
                Heaven Global Pvt. Ltd. is driven by a simple vision — to make quality everyday essentials more accessible, reliable and convenient for customers. We focus on quality products, efficient distribution and long-term customer relationships.
              </p>
              <Link to="/about" className="bg-[#084524] hover:bg-[#0a5c36] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md inline-flex items-center gap-2">
                Know More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-heaven-light-green overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="flex items-center justify-center gap-2 text-heaven-green font-semibold mb-2">
              <Leaf size={16} />
              <span className="uppercase tracking-widest text-xs">Our Products</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heaven-green leading-tight">
              Everything You Need,<br/>
              From a <span className="text-heaven-gold">Brand You Can Trust</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {[
              { title: 'Fresh Produce', desc: 'Farm fresh fruits', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Daily Essentials', desc: 'Everyday staples', img: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Packaged Grocery', desc: 'Branded products', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Household', desc: 'Clean living', img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { title: 'Personal Care', desc: 'Healthier you', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="h-28 sm:h-40 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base leading-tight">{cat.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-3 flex-1">{cat.desc}</p>
                  <Link to="/products" className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-heaven-light-green text-heaven-green group-hover:bg-heaven-green group-hover:text-white transition-colors mt-auto self-start">
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heaven */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 text-heaven-green font-semibold mb-2">
            <Leaf size={16} />
            <span className="uppercase tracking-widest text-xs">Why Heaven</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heaven-green mb-12">
            Why Choose Heaven?
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="100">
              <Gem className="text-heaven-gold mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-xs text-gray-500">Carefully sourced products</p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="200">
              <Leaf className="text-heaven-green mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Reliable Supply</h3>
              <p className="text-xs text-gray-500">Consistent and dependable</p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
              <ShieldCheck className="text-heaven-gold mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Fresh & Trusted</h3>
              <p className="text-xs text-gray-500">Fresh products you can rely on</p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
              <Heart className="text-heaven-green mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Customer Focused</h3>
              <p className="text-xs text-gray-500">Your satisfaction matters</p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
              <Truck className="text-heaven-gold mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Fast & Efficient</h3>
              <p className="text-xs text-gray-500">On-time delivery with care</p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
              <ShoppingCart className="text-heaven-green mb-4" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Wide Variety</h3>
              <p className="text-xs text-gray-500">All your essentials in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="py-20 bg-heaven-light-green relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="flex items-center gap-2 text-heaven-gold font-semibold mb-2">
                <Truck size={16} />
                <span className="uppercase tracking-widest text-xs">Our Reach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-heaven-green leading-tight mb-6">
                From Our Reach<br/>
                <span className="text-heaven-green">to Your Doorstep</span>
              </h2>
              <p className="text-gray-600 mb-10 text-base sm:text-lg">
                Connecting quality products with customers through reliable distribution and efficient delivery.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-heaven-green">
                    <Leaf size={24} />
                  </div>
                  <h4 className="font-bold text-sm">Quality<br/>Products</h4>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-heaven-green">
                    <Truck size={24} />
                  </div>
                  <h4 className="font-bold text-sm">Wide<br/>Distribution</h4>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-heaven-green">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-sm">Trusted<br/>Delivery</h4>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-heaven-green">
                    <Heart size={24} />
                  </div>
                  <h4 className="font-bold text-sm">Customer<br/>Satisfaction</h4>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]" data-aos="fade-left">
               <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Logistics and Delivery" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3" data-aos="fade-right">
              <div className="rounded-2xl overflow-hidden border-4 border-heaven-gold/20 shadow-lg relative aspect-[4/5]">
                <img src="/images/founder.jpg" alt="Mr. Vivek Aggarwal" className="w-full h-full object-cover bg-gray-100" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }} />
              </div>
            </div>
            <div className="lg:w-2/3" data-aos="fade-left">
              <div className="flex items-center gap-2 text-heaven-gold font-semibold mb-2">
                <span className="w-8 h-8 rounded-full bg-heaven-gold text-white flex items-center justify-center font-bold text-xs">HG</span>
                <span className="uppercase tracking-widest text-xs">Our Founder</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-heaven-green mb-2">
                Mr. Vivek Aggarwal
              </h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium mb-8">Founder, Heaven Global Pvt. Ltd.</p>
              
              <blockquote className="bg-heaven-light-green p-6 sm:p-8 rounded-2xl border-l-4 border-heaven-gold relative">
                <span className="absolute top-4 left-4 text-4xl text-heaven-gold/30 font-serif">"</span>
                <p className="text-lg sm:text-xl italic text-gray-700 relative z-10 pl-6 font-medium leading-relaxed">
                  At Heaven Global, our vision is to build a trusted brand that brings quality, reliability and convenience into everyday lives.
                </p>
                <span className="absolute bottom-[-10px] right-4 text-4xl text-heaven-gold/30 font-serif">"</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-16 bg-[#084524] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto px-4 relative z-10" data-aos="zoom-in">
          <div className="flex items-center justify-center gap-2 text-heaven-gold font-semibold mb-4">
            <span className="uppercase tracking-widest text-sm">Our Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-heaven-gold">Fresh.</span> Reliable. Trusted.
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Every product, every delivery, and every relationship reflects our commitment to quality.
          </p>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-20 bg-heaven-light-green border-b border-gray-200 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-2 text-heaven-green font-semibold mb-4">
            <MessageCircle size={20} className="text-heaven-gold" />
            <span className="uppercase tracking-widest text-sm">Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heaven-green mb-6">
            Let's Build a Better Everyday Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a business enquiry, partnership opportunity or simply want to know more about Heaven Global?
          </p>
          <div className="flex flex-row justify-center gap-2 sm:gap-4">
            <Link to="/contact" className="bg-[#0B6338] hover:bg-[#0a5c36] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors shadow-md inline-flex items-center gap-1 sm:gap-2">
              Contact Us <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
            <Link to="/about" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors shadow-sm flex items-center">
              Explore Heaven
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
