import React from 'react';
import PageHero from '../components/PageHero';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { title: 'Fresh Produce', desc: 'Farm fresh fruits and vegetables', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Daily Essentials', desc: 'Everyday grocery staples', img: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Packaged Grocery', desc: 'Branded and trusted products', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Household Essentials', desc: 'Clean and safe living', img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Personal Care', desc: 'Care for a healthier you', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Other Essentials', desc: 'More everyday needs', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="w-full">
      <PageHero 
        title="OUR PRODUCTS" 
        subtitle="Quality Essentials for Everyday Life" 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full animate-fade-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="h-32 sm:h-64 overflow-hidden relative">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>
                <div className="p-3 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{cat.title}</h3>
                    <p className="text-[10px] sm:text-base text-gray-500 mb-3 sm:mb-6">{cat.desc}</p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-1 sm:gap-2 font-semibold text-heaven-green group-hover:text-heaven-gold transition-colors text-[10px] sm:text-base mt-auto">
                    View Category <ArrowRight size={14} className="sm:w-[18px] sm:h-[18px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
