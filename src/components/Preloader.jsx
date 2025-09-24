// components/Preloader.jsx
import React from 'react';
import { IMAGE_ASSETS } from '../constants/ImageContants';

const Preloader = ({ isVisible, preloaderRef }) => {
  if (!isVisible) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      style={{ opacity: 1 }} // Initial opacity
    >
      <img 
        src={IMAGE_ASSETS.LOGO_SYMBOL} 
        className='w-50 h-50 animate-smooth-spin' 
        alt="Loading..." 
      />
    </div>
  );
};

export default Preloader;
