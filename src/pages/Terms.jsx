import React from 'react';
import PageHero from '../components/PageHero';

const Terms = () => {
  return (
    <div className="w-full bg-white pb-20">
      <PageHero 
        title="Terms of Service" 
        subtitle="Terms and conditions governing the use of Heaven Global Pvt. Ltd. services and website." 
        eyebrow="LEGAL STATEMENT" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Effective Date: October 2026</p>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">1. Agreement to Terms</h2>
          <p>By accessing or using the Heaven Global Pvt. Ltd. website, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">2. Intellectual Property</h2>
          <p>All content, branding, logos, graphics, and materials available on this site are the exclusive property of Heaven Global Pvt. Ltd. and protected under applicable trademark laws.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">3. Product Pricing & Demo Data</h2>
          <p>Product rates, specifications, and availability displayed on this website serve as sample wholesale and retail guidance and are subject to final confirmation upon business contract issuance.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">4. Contact Information</h2>
          <p>For inquiries regarding these Terms, contact Heaven Global Pvt. Ltd. at <a href="mailto:info@heavengrocery.com" className="text-[#0B6338] font-bold underline">info@heavengrocery.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
