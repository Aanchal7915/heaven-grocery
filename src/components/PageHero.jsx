import React from 'react';

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="bg-heaven-light-green py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-heaven-green/10">
      <div className="max-w-3xl mx-auto animate-fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heaven-green mb-3 sm:mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
            "{subtitle}"
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
