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

  // Demo produce items for Fresh Produce Feature section
  const sampleProduce = [
    { id: 'p1', name: 'Tomatoes', price: 40, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' },
    { id: 'p2', name: 'Potatoes', price: 28, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80' },
    { id: 'p3', name: 'Leafy Greens', price: 20, unit: 'bunch', category: 'Leafy Greens', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80' },
    { id: 'p4', name: 'Onions', price: 32, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80' },
    { id: 'p5', name: 'Bell Peppers', price: 80, unit: 'kg', category: 'Exotic', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=80' },
    { id: 'p6', name: 'Cucumbers', price: 26, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80' },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const filteredProduce = sampleProduce.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full pt-20 sm:pt-24 bg-white overflow-hidden">

      {/* ==================================================
          1. HERO SECTION
         ================================================== */}
      <section className="relative bg-hero-organic py-12 lg:py-20 overflow-hidden">
        {/* Subtle Leaf Decorative Background Accent */}
        <div className="absolute top-10 left-5 text-emerald-900/5 pointer-events-none transform -rotate-12">
          <Leaf size={320} />
        </div>
        <div className="absolute bottom-0 right-10 text-[#D4A51C]/10 pointer-events-none transform rotate-45">
          <Leaf size={280} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT HERO CONTENT */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left" data-aos="fade-right">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-[#0B6338]/10 text-[#0B6338] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-[#0B6338]/20 shadow-sm">
                <Leaf className="w-4 h-4 text-[#D4A51C]" />
                <span>Fresh • Organic • Daily Essentials</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="block text-[#0B6338]">Freshness You Can Trust.</span>
                <span className="block text-[#D4A51C] mt-1">Quality That Reaches You.</span>
              </h1>

              {/* Supporting description */}
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Heaven Global Pvt. Ltd. is committed to delivering quality grocery and daily essentials with reliability, efficiency and care.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl shadow-[#0B6338]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Explore Products
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="border-2 border-[#D4A51C] text-[#1F2937] hover:bg-[#D4A51C] hover:text-[#042616] px-8 py-4 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center"
                >
                  Talk to Us
                </Link>
              </div>

              {/* Trust proof element */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client 1" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client 2" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Client 3" />
                </div>
                <div className="text-left">
                  <div className="flex items-center text-[#D4A51C]">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs font-bold text-gray-700">Trusted by businesses across India</span>
                </div>
              </div>

            </div>

            {/* RIGHT HERO IMAGE WITH FLOATING BADGES */}
            <div className="lg:col-span-6 relative flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-lg lg:max-w-none">
                
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img 
                    src="/images/hero-grocery.png" 
                    alt="Fresh produce basket - Heaven Grocery" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                </div>

                {/* Floating Badge 1: Farm Fresh */}
                <div className="absolute top-4 left-2 sm:-left-4 glass-badge px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#0B6338] flex items-center justify-center font-bold">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium leading-none">Sourcing</p>
                    <p className="text-sm font-bold text-[#0B6338]">Farm Fresh</p>
                  </div>
                </div>

                {/* Floating Badge 2: Quality Checked */}
                <div className="absolute top-8 right-2 sm:-right-4 glass-badge px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float-slow shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#D4A51C] flex items-center justify-center font-bold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium leading-none">100% Tested</p>
                    <p className="text-sm font-bold text-gray-800">Quality Checked</p>
                  </div>
                </div>

                {/* Floating Badge 3: Reliable Supply */}
                <div className="absolute bottom-6 right-4 sm:right-6 glass-badge px-4 py-2.5 rounded-2xl flex items-center gap-3 animate-float shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-emerald-900 text-[#D4A51C] flex items-center justify-center font-bold">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium leading-none">Nationwide</p>
                    <p className="text-sm font-bold text-[#0B6338]">Reliable Supply</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          2. TRUST / USP STRIP
         ================================================== */}
      <section className="bg-[#FAF9F5] border-y border-gray-200/80 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#D4A51C]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A51C] flex items-center justify-center shrink-0">
                <Gem size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Quality First</h4>
                <p className="text-xs text-gray-500">Carefully sourced products</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#0B6338]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0B6338] flex items-center justify-center shrink-0">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Reliable Supply</h4>
                <p className="text-xs text-gray-500">Consistent and dependable</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#0B6338]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0B6338] flex items-center justify-center shrink-0">
                <Leaf size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Fresh & Trusted</h4>
                <p className="text-xs text-gray-500">Fresh products you rely on</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#D4A51C]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A51C] flex items-center justify-center shrink-0">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Customer Focused</h4>
                <p className="text-xs text-gray-500">Your satisfaction matters</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          3. PRODUCTS SECTION ("Our Products")
         ================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
            <div>
              <div className="inline-flex items-center gap-2 text-[#0B6338] font-bold text-xs uppercase tracking-widest mb-2">
                <Leaf size={14} className="text-[#D4A51C]" />
                <span>Our Products</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338] tracking-tight">
                Everything Fresh. Everything Essential.
              </h2>
              <p className="mt-2 text-gray-600 text-base max-w-xl">
                A wide range of quality products for your home and business needs.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-[#0B6338] text-[#0B6338] hover:bg-[#0B6338] hover:text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shrink-0 self-start md:self-auto"
            >
              Explore All Products <ArrowRight size={16} />
            </Link>
          </div>

          {/* 5 Product Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-[#0B6338] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-[#0B6338] group-hover:underline">Explore</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#0B6338] group-hover:bg-[#0B6338] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ==================================================
          4. FRESH PRODUCE FEATURE SECTION & MINI WIDGET
         ================================================== */}
      <section className="py-20 bg-[#F4FBF7] border-y border-emerald-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT FEATURE CONTENT */}
            <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-[#0B6338] font-bold text-xs uppercase tracking-widest">
                <Leaf size={14} className="text-[#D4A51C]" />
                <span>FRESH PRODUCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                Farm Fresh Goodness for a Healthier Tomorrow.
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                Handpicked fruits and vegetables, sourced from trusted farms, bringing natural freshness to your table every day.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>Naturally Fresh</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>Quality Checked</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#0B6338] flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>Hygienically Handled</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/products/fresh-produce"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all inline-flex items-center gap-2"
                >
                  Explore Fresh Produce <ArrowRight size={16} />
                </Link>
              </div>

              {/* Fresh produce visual box */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mt-6 border-2 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                  alt="Fresh vegetables crate" 
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042616]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider bg-[#0B6338] px-3 py-1 rounded-md">
                    FRESH VEGETABLES • HEALTHY LIFE
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT MINI PRODUCT CATALOGUE WIDGET */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 relative">
                
                {/* Widget Top Navigation Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      Our Products &gt; <span className="text-[#0B6338]">Fresh Produce</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900 mt-1">Sample Produce Showcase</h3>
                  </div>

                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium focus:outline-none focus:border-[#0B6338] w-full sm:w-48"
                    />
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
                  {['Vegetables', 'Fruits', 'Leafy Greens', 'Exotic', 'All'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                        activeFilter === tab
                          ? 'bg-[#0B6338] text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Sample Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                  {filteredProduce.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-slate-50/80 rounded-2xl p-3 border border-gray-100 hover:border-emerald-200 transition-all flex flex-col justify-between group"
                    >
                      <div className="h-28 rounded-xl overflow-hidden mb-2 bg-white relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm leading-tight">{item.name}</h4>
                        <p className="text-xs font-bold text-[#0B6338] mt-1">₹{item.price} <span className="text-[10px] text-gray-500 font-normal">/ {item.unit}</span></p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`mt-3 w-full py-1.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                          addedItems[item.id]
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#0B6338] hover:bg-[#07542e] text-white shadow-sm'
                        }`}
                      >
                        {addedItems[item.id] ? (
                          <>Added ✓</>
                        ) : (
                          <>Add <Plus size={14} /></>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>*Wholesale & bulk prices available on request</span>
                  <Link to="/products/fresh-produce" className="text-[#0B6338] font-bold hover:underline">
                    View Full Catalogue →
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          5. WHY HEAVEN SECTION
         ================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 text-[#0B6338] font-bold text-xs uppercase tracking-widest">
                <Leaf size={14} className="text-[#D4A51C]" />
                <span>WHY HEAVEN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338] leading-tight">
                More Than Just Groceries.<br />A Healthier, Happier Tomorrow.
              </h2>

              <p className="text-gray-600 text-base leading-relaxed">
                At Heaven Global Pvt. Ltd., we believe everyone deserves access to fresh, safe and high-quality everyday essentials. Our focus is on building a reliable supply chain that brings goodness from trusted sources to homes and businesses across India.
              </p>

              {/* 4 Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D4A51C] flex items-center justify-center font-bold mb-3">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Carefully Sourced</h4>
                  <p className="text-xs text-gray-500 mt-1">From trusted farms and suppliers</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4FBF7] border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B6338] flex items-center justify-center font-bold mb-3">
                    <Truck size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Consistent Supply</h4>
                  <p className="text-xs text-gray-500 mt-1">Reliable availability year-round</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4FBF7] border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0B6338] flex items-center justify-center font-bold mb-3">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Fast & Efficient</h4>
                  <p className="text-xs text-gray-500 mt-1">Timely delivery with care</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D4A51C] flex items-center justify-center font-bold mb-3">
                    <Heart size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Trusted Every Day</h4>
                  <p className="text-xs text-gray-500 mt-1">Building long-term relationships</p>
                </div>

              </div>

              <div className="pt-2">
                <Link
                  to="/why-heaven"
                  className="bg-[#0B6338] hover:bg-[#07542e] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg inline-flex items-center gap-2"
                >
                  Why Choose Heaven <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80" 
                  alt="Supermarket grocery aisle - Heaven Grocery" 
                  className="w-full h-[450px] object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B6338] text-white flex items-center justify-center shrink-0">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-gray-900 text-sm">Good Food Brighter Days</h5>
                      <p className="text-xs text-gray-500">Quality Products for a Better Tomorrow</p>
                    </div>
                  </div>
                  <Link to="/why-heaven" className="text-[#0B6338] hover:text-[#053D23]">
                    <ChevronRight size={24} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          6. OUR REACH SECTION
         ================================================== */}
      <IndiaReachSection />


      {/* ==================================================
          7. ABOUT / FOUNDER SECTION
         ================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-12 border border-amber-200/50 shadow-xl relative overflow-hidden" data-aos="fade-up">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Founder Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#D4A51C]/40 shadow-2xl max-w-xs sm:max-w-sm">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Mr. Vivek Aggarwal - Founder, Heaven Global Pvt. Ltd." 
                    className="w-full h-80 sm:h-96 object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#042616] to-transparent p-4 text-white text-center">
                    <p className="font-bold text-base">Mr. Vivek Aggarwal</p>
                    <p className="text-xs text-[#D4A51C]">Founder, Heaven Global Pvt. Ltd.</p>
                  </div>
                </div>
              </div>

              {/* Founder Quote & Info */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-[#D4A51C] font-bold text-xs uppercase tracking-widest">
                  <Award size={16} />
                  <span>OUR FOUNDER</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B6338]">
                  Mr. Vivek Aggarwal
                </h2>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Founder, Heaven Global Pvt. Ltd.
                </p>

                {/* Quote Card */}
                <blockquote className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#D4A51C] shadow-md relative">
                  <p className="text-gray-700 text-lg sm:text-xl italic font-medium leading-relaxed">
                    “Our vision is to build a trusted brand that brings quality, reliability and convenience into everyday lives.”
                  </p>
                  <p className="text-xs font-bold text-[#0B6338] mt-4 text-right">— Vivek Aggarwal</p>
                </blockquote>

                <div>
                  <Link
                    to="/about"
                    className="bg-[#0B6338] hover:bg-[#07542e] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md inline-flex items-center gap-2"
                  >
                    Know More About Us <ArrowRight size={16} />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          8. FINAL CTA BANNER
         ================================================== */}
      <section className="py-20 bg-leaf-pattern text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="zoom-in">
          
          <div className="inline-flex items-center gap-2 bg-[#D4A51C]/20 text-[#D4A51C] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#D4A51C]/30">
            <span>Let's Build a Better Everyday Together.</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Fresh. Reliable. Trusted.
          </h2>

          <p className="mt-4 text-emerald-100/90 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Every product, every delivery, and every relationship reflects our commitment to quality.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#D4A51C] hover:bg-[#b88e14] text-[#042616] px-8 py-4 rounded-full font-extrabold text-base shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="border-2 border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-base transition-colors inline-flex items-center justify-center"
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
