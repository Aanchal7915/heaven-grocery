import React from 'react';
import { Leaf } from 'lucide-react';

const PageHero = ({ title, subtitle, eyebrow = 'HEAVEN GLOBAL' }) => {
  return (
    <section className="bg-hero-organic py-16 sm:py-20 pt-28 sm:pt-36 border-b border-gray-100 relative overflow-hidden text-center">
      {/* Background Leaf Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B6338]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4A51C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-[#0B6338]/10 text-[#0B6338] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-[#0B6338]/20">
          <Leaf size={14} className="text-[#D4A51C]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B6338] tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-gray-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
