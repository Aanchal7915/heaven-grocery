import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  ShieldCheck, 
  Truck, 
  Heart, 
  Gem, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Check, 
  Search, 
  MapPin, 
  Award, 
  Users, 
  Sparkles,
  ShoppingBag,
  Building2,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import IndiaReachSection from '../components/IndiaReachSection';

const Home = () => {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('Vegetables');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState({});

  // High-resolution accurate produce items
  const sampleProduce = [
    { id: 'p1', name: 'Farm Fresh Tomatoes', price: 40, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80' },
    { id: 'p2', name: 'Fresh Organic Potatoes', price: 28, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80' },
    { id: 'p3', name: 'Crisp Leafy Spinach', price: 20, unit: 'bunch', category: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80' },
    { id: 'p4', name: 'Red Onions Basket', price: 32, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80' },
    { id: 'p5', name: 'Tri-color Bell Peppers', price: 80, unit: 'kg', category: 'Exotic', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80' },
    { id: 'p6', name: 'Fresh Green Cucumbers', price: 26, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80' },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1800);
  };

  const filteredProduce = sampleProduce.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full pt-16 sm:pt-24 bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-hero-organic py-8 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* LEFT HERO CONTENT */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left" data-aos="fade-right">
              
              <div className="inline-flex items-center gap-1.5 bg-[#0B6338]/10 text-[#0B6338] px-3.5 py-1 rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-[#0B6338]/20">
                <Leaf className="w-3.5 h-3.5 text-[#D4A51C]" />
                <span>Fresh • Organic • Daily Essentials</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="block text-[#0B6338]">Freshness You Can Trust.</span>
                <span className="block text-[#D4A51C] mt-1">Quality That Reaches You.</span>
              </h1>

              <p className="text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Heaven Global Pvt. Ltd. is committed to delivering quality grocery and daily essentials with reliability, efficiency and care.
              </p>

              {/* CTAs */}
              <div className="flex flex-row justify-center lg:justify-start gap-3 pt-1">
                <Link
                  to="/products"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5 group flex-1 sm:flex-none"
                >
                  Explore Products
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="border-2 border-[#D4A51C] text-[#1F2937] hover:bg-[#D4A51C] hover:text-[#042616] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center justify-center flex-1 sm:flex-none"
                >
                  Talk to Us
                </Link>
              </div>

              {/* Trust proof element */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" />
                  <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" />
                  <img className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Client 3" />
                </div>
                <div className="text-left">
                  <div className="flex items-center text-[#D4A51C] text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-[11px] font-bold text-gray-700">Trusted by businesses across India</span>
                </div>
              </div>

            </div>

            {/* RIGHT HERO IMAGE */}
            <div className="lg:col-span-6 relative flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img 
                    src="/images/hero-grocery.png" 
                    alt="Fresh produce basket - Heaven Grocery" 
                    className="w-full h-auto max-h-[380px] sm:max-h-[480px] object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-2 glass-badge px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                  <Leaf size={14} className="text-[#0B6338]" />
                  <span className="text-[11px] font-bold text-[#0B6338]">Farm Fresh</span>
                </div>

                <div className="absolute top-3 right-2 glass-badge px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                  <ShieldCheck size={14} className="text-[#D4A51C]" />
                  <span className="text-[11px] font-bold text-gray-800">Quality Checked</span>
                </div>

                <div className="absolute bottom-3 right-3 glass-badge px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                  <Truck size={14} className="text-[#0B6338]" />
                  <span className="text-[11px] font-bold text-[#0B6338]">Reliable Supply</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TRUST STRIP */}
      <section className="bg-[#FAF9F5] border-y border-gray-200/80 py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#D4A51C] flex items-center justify-center shrink-0">
                <Gem size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Quality First</h4>
                <p className="text-[10px] sm:text-xs text-gray-500">Carefully sourced</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#0B6338] flex items-center justify-center shrink-0">
                <Truck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Reliable Supply</h4>
                <p className="text-[10px] sm:text-xs text-gray-500">Consistent supply</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#0B6338] flex items-center justify-center shrink-0">
                <Leaf size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Fresh & Trusted</h4>
                <p className="text-[10px] sm:text-xs text-gray-500">Farm fresh daily</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#D4A51C] flex items-center justify-center shrink-0">
                <Heart size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Customer Focused</h4>
                <p className="text-[10px] sm:text-xs text-gray-500">Satisfaction first</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PRODUCTS SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#0B6338] font-bold text-[11px] uppercase tracking-wider mb-1">
                <Leaf size={12} className="text-[#D4A51C]" />
                <span>Our Products</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B6338] tracking-tight">
                Everything Fresh. Everything Essential.
              </h2>
              <p className="mt-1 text-gray-600 text-xs sm:text-base max-w-xl">
                A wide range of quality products for your home and business needs.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 border-2 border-[#0B6338] text-[#0B6338] hover:bg-[#0B6338] hover:text-white px-5 py-2.5 rounded-full font-bold text-xs transition-all shrink-0 self-start sm:self-auto"
            >
              Explore All Products <ArrowRight size={14} />
            </Link>
          </div>

          {/* 5 Product Category Cards Grid (2-col on mobile, 5-col desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {[
              {
                title: 'Fresh Produce',
                subtitle: 'Fruits & Vegetables',
                slug: 'fresh-produce',
                image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Daily Essentials',
                subtitle: 'Staples & Basic Needs',
                slug: 'daily-essentials',
                image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Packaged Grocery',
                subtitle: 'Branded Products',
                slug: 'packaged-grocery',
                image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Household',
                subtitle: 'Clean Living',
                slug: 'household',
                image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Personal Care',
                subtitle: 'Healthier You',
                slug: 'personal-care',
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80'
              }
            ].map((cat, index) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-32 sm:h-44 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#0B6338] transition-colors leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-[10px] sm:text-xs font-bold text-[#0B6338]">Explore</span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-50 text-[#0B6338] group-hover:bg-[#0B6338] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* FRESH PRODUCE FEATURE SECTION & CATALOGUE WIDGET */}
      <section className="py-12 sm:py-20 bg-[#F4FBF7] border-y border-emerald-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-1.5 text-[#0B6338] font-bold text-[11px] uppercase tracking-wider">
                <Leaf size={12} className="text-[#D4A51C]" />
                <span>FRESH PRODUCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                Farm Fresh Goodness for a Healthier Tomorrow.
              </h2>

              <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
                Handpicked fruits and vegetables, sourced from trusted farms, bringing natural freshness to your table every day.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Naturally Fresh</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Quality Checked</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>
                  <span>Hygienically Handled</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products/fresh-produce"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2"
                >
                  Explore Fresh Produce <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            {/* RIGHT MINI PRODUCT CATALOGUE WIDGET */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-lg border border-emerald-100">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                      Our Products &gt; <span className="text-[#0B6338]">Fresh Produce</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">Sample Produce Catalogue</h3>
                  </div>

                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
                    <input 
                      type="text" 
                      placeholder="Search produce..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium focus:outline-none focus:border-[#0B6338] w-full sm:w-44"
                    />
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
                  {['Vegetables', 'Fruits', 'Leafy Greens', 'Exotic', 'All'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                        activeFilter === tab
                          ? 'bg-[#0B6338] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Sample Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {filteredProduce.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-slate-50/80 rounded-xl p-2.5 border border-gray-100 flex flex-col justify-between"
                    >
                      <div className="h-24 sm:h-28 rounded-lg overflow-hidden mb-2 bg-white relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xs leading-tight">{item.name}</h4>
                        <p className="text-[11px] font-bold text-[#0B6338] mt-0.5">₹{item.price} <span className="text-[9px] text-gray-500 font-normal">/ {item.unit}</span></p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`mt-2 w-full py-1.5 rounded-lg font-bold text-[11px] flex items-center justify-center gap-1 transition-all ${
                          addedItems[item.id]
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#0B6338] hover:bg-[#07542e] text-white shadow-sm'
                        }`}
                      >
                        {addedItems[item.id] ? (
                          <>Added ✓</>
                        ) : (
                          <>Add <Plus size={12} /></>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY HEAVEN SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-1.5 text-[#0B6338] font-bold text-[11px] uppercase tracking-wider">
                <Leaf size={12} className="text-[#D4A51C]" />
                <span>WHY HEAVEN</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                More Than Just Groceries.<br />A Healthier, Happier Tomorrow.
              </h2>

              <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
                At Heaven Global Pvt. Ltd., we believe everyone deserves access to fresh, safe and high-quality everyday essentials. Our focus is on building a reliable supply chain that brings goodness from trusted sources to homes and businesses across India.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3 rounded-xl bg-[#FAF9F5] border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Carefully Sourced</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">From trusted farms</p>
                </div>

                <div className="p-3 rounded-xl bg-[#F4FBF7] border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Consistent Supply</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Year-round availability</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/why-heaven"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2"
                >
                  Why Choose Heaven <ArrowRight size={15} />
                </Link>
              </div>

            </div>

            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80" 
                  alt="Supermarket grocery aisle - Heaven Grocery" 
                  className="w-full h-72 sm:h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* OUR REACH SECTION WITH DETAILED INDIA MAP */}
      <IndiaReachSection />


      {/* FOUNDER SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F5] rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-amber-200/50 shadow-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#D4A51C]/40 shadow-lg max-w-xs">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Mr. Vivek Aggarwal - Founder, Heaven Global Pvt. Ltd." 
                    className="w-full h-72 sm:h-80 object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-[#D4A51C] font-bold text-[11px] uppercase tracking-wider">
                  <Award size={14} />
                  <span>OUR FOUNDER</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B6338]">
                  Mr. Vivek Aggarwal
                </h2>
                <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Founder, Heaven Global Pvt. Ltd.
                </p>

                <blockquote className="bg-white p-4 sm:p-6 rounded-xl border-l-4 border-[#D4A51C] shadow-sm text-gray-700 text-xs sm:text-base italic font-medium leading-relaxed">
                  “Our vision is to build a trusted brand that brings quality, reliability and convenience into everyday lives.”
                </blockquote>

                <div>
                  <Link
                    to="/about"
                    className="bg-[#0B6338] hover:bg-[#07542e] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2"
                  >
                    Know More About Us <ArrowRight size={15} />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA BANNER */}
      <section className="py-12 sm:py-20 bg-leaf-pattern text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10" data-aos="zoom-in">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fresh. Reliable. Trusted.
          </h2>

          <p className="mt-3 text-emerald-100 text-xs sm:text-lg max-w-xl mx-auto">
            Every product, every delivery, and every relationship reflects our commitment to quality.
          </p>

          <div className="mt-6 flex flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-[#D4A51C] hover:bg-[#b88e14] text-[#042616] px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg inline-flex items-center gap-1.5"
            >
              Contact Us <ArrowRight size={15} />
            </Link>

            <Link
              to="/products"
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm inline-flex items-center"
            >
              Explore Products
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
