import React from 'react';
import { Leaf } from 'lucide-react';

const PageHero = ({ title, subtitle, eyebrow = 'HEAVEN GLOBAL' }) => {
  return (
    <section className="bg-hero-organic py-10 sm:py-16 pt-24 sm:pt-32 border-b border-gray-100/80 relative overflow-hidden text-center">
      {/* Background Leaf Glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#0B6338]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4A51C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
        <div className="inline-flex items-center gap-1.5 bg-[#0B6338]/10 text-[#0B6338] px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B6338]/20">
          <Leaf size={12} className="text-[#D4A51C]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0B6338] tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-gray-600 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
