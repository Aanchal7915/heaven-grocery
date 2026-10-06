import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useCart } from '../context/CartContext';
import { Search, Plus, Filter, Leaf } from 'lucide-react';

const categoriesList = [
  { id: 'all', name: 'All Products', slug: '' },
  { id: 'fresh-produce', name: 'Fresh Produce', slug: 'fresh-produce', desc: 'Farm-fresh fruits and vegetables sourced with care.' },
  { id: 'daily-essentials', name: 'Daily Essentials', slug: 'daily-essentials', desc: 'Everyday staple grains, pulses, flour, and oils.' },
  { id: 'packaged-grocery', name: 'Packaged Grocery', slug: 'packaged-grocery', desc: 'Branded packaged spices, sauces, and instant foods.' },
  { id: 'household', name: 'Household', slug: 'household', desc: 'Safe, eco-friendly household and cleaning solutions.' },
  { id: 'personal-care', name: 'Personal Care', slug: 'personal-care', desc: 'Personal hygiene, soaps, and wellness essentials.' }
];

const demoProducts = [
  // Fresh Produce - Exact matching images
  { id: 'fp1', name: 'Organic Farm Tomatoes', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 40, unit: 'kg', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp2', name: 'Fresh Potato Basket', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 28, unit: 'kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp3', name: 'Crisp Spinach Leafy Greens', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 20, unit: 'bunch', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp4', name: 'Red Onions Basket', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 32, unit: 'kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp5', name: 'Tri-color Bell Peppers', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 80, unit: 'kg', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp6', name: 'Field Cucumbers', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 26, unit: 'kg', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp7', name: 'Shimla Red Apples', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 140, unit: 'kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80' },
  { id: 'fp8', name: 'Robusta Bananas', category: 'fresh-produce', categoryName: 'Fresh Produce', price: 48, unit: 'dozen', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80' },

  // Daily Essentials - Exact matching images
  { id: 'de1', name: 'Premium Basmati Rice', category: 'daily-essentials', categoryName: 'Daily Essentials', price: 125, unit: 'kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80' },
  { id: 'de2', name: 'Whole Wheat Atta / Grain', category: 'daily-essentials', categoryName: 'Daily Essentials', price: 45, unit: 'kg', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80' },
  { id: 'de3', name: 'Cold Pressed Mustard Oil', category: 'daily-essentials', categoryName: 'Daily Essentials', price: 160, unit: 'L', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80' },
  { id: 'de4', name: 'Organic Toor Dal', category: 'daily-essentials', categoryName: 'Daily Essentials', price: 135, unit: 'kg', image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80' },
  { id: 'de5', name: 'Pure Refined Sugar', category: 'daily-essentials', categoryName: 'Daily Essentials', price: 44, unit: 'kg', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=600&q=80' },

  // Packaged Grocery - Exact matching images
  { id: 'pg1', name: 'Artisanal Turmeric Powder', category: 'packaged-grocery', categoryName: 'Packaged Grocery', price: 65, unit: 'pack', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80' },
  { id: 'pg2', name: 'Whole Red Chilli Powder', category: 'packaged-grocery', categoryName: 'Packaged Grocery', price: 78, unit: 'pack', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80' },
  { id: 'pg3', name: 'Assorted Tea Granules', category: 'packaged-grocery', categoryName: 'Packaged Grocery', price: 210, unit: 'pack', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80' },
  { id: 'pg4', name: 'Crispy Butter Biscuits', category: 'packaged-grocery', categoryName: 'Packaged Grocery', price: 35, unit: 'pack', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80' },

  // Household - Exact matching images
  { id: 'hh1', name: 'Eco Surface Cleaner', category: 'household', categoryName: 'Household', price: 110, unit: 'bottle', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80' },
  { id: 'hh2', name: 'Dishwash Lemon Gel', category: 'household', categoryName: 'Household', price: 85, unit: 'bottle', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80' },
  { id: 'hh3', name: 'Laundry Detergent Concentrate', category: 'household', categoryName: 'Household', price: 240, unit: 'pack', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80' },

  // Personal Care - Exact matching images
  { id: 'pc1', name: 'Herbal Neem Body Soap', category: 'personal-care', categoryName: 'Personal Care', price: 45, unit: 'pack', image: 'https://images.unsplash.com/photo-1607006482602-76ca97ac8a2f?auto=format&fit=crop&w=600&q=80' },
  { id: 'pc2', name: 'Nourishing Hair Shampoo', category: 'personal-care', categoryName: 'Personal Care', price: 195, unit: 'bottle', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80' },
  { id: 'pc3', name: 'Moisturizing Aloe Lotion', category: 'personal-care', categoryName: 'Personal Care', price: 175, unit: 'bottle', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80' },
];

const Products = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(categorySlug || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedState, setAddedState] = useState({});

  useEffect(() => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    } else {
      setSelectedCategory('all');
    }
  }, [categorySlug]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug || 'all');
    if (slug && slug !== 'all') {
      navigate(`/products/${slug}`);
    } else {
      navigate('/products');
    }
  };

  const handleAdd = (product) => {
    addToCart(product);
    setAddedState((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedState((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  const currentCategoryInfo = categoriesList.find(c => c.id === selectedCategory || c.slug === selectedCategory);

  const filteredProducts = demoProducts.filter((product) => {
    const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-white pb-16 sm:pb-20">
      
      {/* PAGE HERO */}
      <PageHero 
        title={currentCategoryInfo?.name !== 'All Products' ? currentCategoryInfo?.name : "Our Products"}
        subtitle={currentCategoryInfo?.desc || "Quality essentials for everyday life carefully sourced and delivered across India."}
        eyebrow="OUR CATALOGUE"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        
        {/* FILTERS & SEARCH TOP BAR */}
        <div className="bg-[#FAF9F5] p-4 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 hidden sm:inline flex items-center gap-1">
              <Filter size={12} /> Category:
            </span>
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id || (selectedCategory === 'all' && cat.id === 'all')
                    ? 'bg-[#0B6338] text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
            <input 
              type="text" 
              placeholder="Search items..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-full text-xs font-medium focus:outline-none focus:border-[#0B6338]"
            />
          </div>

        </div>

        {/* CATEGORY INTRO BANNER */}
        {selectedCategory !== 'all' && currentCategoryInfo && (
          <div className="bg-[#F4FBF7] p-4 sm:p-5 rounded-xl border border-emerald-100 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B6338] text-[#D4A51C] flex items-center justify-center font-bold">
                <Leaf size={16} />
              </div>
              <div>
                <h3 className="font-bold text-[#0B6338] text-sm sm:text-base">{currentCategoryInfo.name}</h3>
                <p className="text-[11px] text-gray-600">{currentCategoryInfo.desc}</p>
              </div>
            </div>
            <button 
              onClick={() => handleCategoryChange('')}
              className="text-xs font-bold text-[#0B6338] hover:underline"
            >
              Show All
            </button>
          </div>
        )}

        {/* PRODUCTS GRID (2 columns on mobile, 4 columns on desktop) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium text-sm mb-2">No products matched your search.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs font-bold text-[#0B6338] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="h-36 sm:h-48 overflow-hidden relative bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-md text-[#0B6338] text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border border-gray-100">
                      {product.categoryName}
                    </span>
                  </div>

                  {/* Product Information */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-gray-900 text-xs sm:text-base leading-tight group-hover:text-[#0B6338] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">Heaven Certified</p>
                    
                    <div className="mt-2.5 flex items-baseline justify-between">
                      <div>
                        <span className="text-base sm:text-lg font-bold text-[#0B6338]">₹{product.price}</span>
                        <span className="text-[10px] sm:text-xs text-gray-500 font-medium ml-0.5">/ {product.unit}</span>
                      </div>
                      <span className="text-[9px] bg-amber-50 text-[#D4A51C] font-bold px-1.5 py-0.5 rounded">
                        Fresh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-3 sm:p-4 pt-0">
                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-2 rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-all ${
                      addedState[product.id]
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0B6338] hover:bg-[#07542e] text-white shadow-sm'
                    }`}
                  >
                    {addedState[product.id] ? (
                      <>Added ✓</>
                    ) : (
                      <>Add to Inquiry <Plus size={13} /></>
                    )}
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
