// components/Preloader.jsx
import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {/* Animated spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        
        {/* Optional: Add loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white text-sm font-medium animate-pulse">
            Loading...
          </p>
        </div>
      </div>
      
      {/* Optional: Progress bar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
