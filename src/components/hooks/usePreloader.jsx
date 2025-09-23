// hooks/usePreloader.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show preloader on route change OR state/props change
    setIsLoading(true);

    // Wait for page load (similar to window.addEventListener("load"))
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false); // This triggers the "hidden" class
      }, 1000); // Your original 300ms delay
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname, location.state, location.key]); // Watch pathname, state, AND navigation key

  return isLoading;
};

export default usePreloader;
