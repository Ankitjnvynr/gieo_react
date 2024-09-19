import React from 'react';

const HeroSection = () => {
  return (
    <div className="absolute -top-28 pointer-events-none relative w-full h-[100vh] mx-auto shadow-lg rounded-lg overflow-hidden z-1">
      {/* Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Iframe */}
      <iframe
        className="w-full h-full relative z-20"
        src="https://gieogita.org/auto-tour/"
        frameBorder="0"
        title="Gita Auto Tour"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HeroSection;
