import React from 'react';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white pb-20">
      <PageHero 
        title="Privacy Policy" 
        subtitle="How Heaven Global Pvt. Ltd. collects, uses, and safeguards your personal information." 
        eyebrow="LEGAL STATEMENT" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Effective Date: October 2026</p>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">1. Introduction</h2>
          <p>Welcome to Heaven Global Pvt. Ltd. We respect your privacy and are committed to protecting your personal data. This Privacy Policy informs you about how we handle your information when visiting our site or interacting with our services.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">2. Information We Collect</h2>
          <p>We may collect identity details, contact information (email, phone number, company name), and usage metrics submitted voluntarily through inquiry forms or browser communications.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">3. How We Use Your Data</h2>
          <p>Your data is strictly utilized to process bulk order inquiries, respond to business messages, manage customer partnerships, and improve our services. We do not sell or trade your data.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">4. Data Security</h2>
          <p>We implement appropriate physical, technical, and managerial safeguards to protect your personal details against unauthorized access, alteration, or disclosure.</p>
        </section>

        <section className="bg-[#FAF9F5] p-6 rounded-2xl border border-gray-100 space-y-2">
          <h2 className="text-lg font-bold text-[#0B6338]">5. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact our team at <a href="mailto:info@heavengrocery.com" className="text-[#0B6338] font-bold underline">info@heavengrocery.com</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
