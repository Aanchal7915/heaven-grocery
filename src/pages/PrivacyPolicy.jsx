import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-white text-black py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-heaven-green border-b pb-4 border-gray-100">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-500 font-semibold uppercase tracking-wider">Effective Date: October 2026</p>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-3 text-black">1. Introduction</h2>
            <p>Welcome to Heaven Global Pvt. Ltd. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, and Usage Data. We do not collect any Special Categories of Personal Data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services, manage our relationship with you, and improve our website and customer experiences.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at our provided contact information.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
