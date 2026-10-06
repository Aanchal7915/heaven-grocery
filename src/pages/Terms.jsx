import React from 'react';

const Terms = () => {
  return (
    <div className="w-full bg-white text-black py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-heaven-green border-b pb-4 border-gray-100">Terms of Termination</h1>
        <p className="mb-6 text-sm text-gray-500 font-semibold uppercase tracking-wider">Effective Date: October 2026</p>
        
        <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-800">
          <section>
            <h2 className="text-xl font-bold mb-3 text-black">1. Agreement to Terms</h2>
            <p>These Terms of Termination constitute a legally binding agreement made between you and Heaven Global Pvt. Ltd., concerning your access to and use of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">2. Termination by User</h2>
            <p>You may terminate your account and discontinue use of our services at any time by contacting our support team or through your account settings if applicable. Any outstanding obligations must be fulfilled upon termination.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">3. Termination by Company</h2>
            <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">4. Effect of Termination</h2>
            <p>Upon termination, your right to use the service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-black">5. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
