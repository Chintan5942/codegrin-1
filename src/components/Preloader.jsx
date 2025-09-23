// components/Preloader.jsx
import React from 'react';
import { IMAGE_ASSETS } from '../constants/ImageContants';

export const Preloader = () => {
  return (
   <>
   <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black'>
   <img src={IMAGE_ASSETS.LOGO_SYMBOL} className='w-50 h-50 animate-smooth-spin' alt="" />
   </div>
   </>
  );
};

export default Preloader;
