import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentLoader = (options = {}) => {
  const { minLoadTime = 1000, onLoadComplete } = options;
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Reset loading state on path change
  useEffect(() => {
    setIsLoading(true);
  }, [location]);

  useEffect(() => {
    const startTime = Date.now();

    const checkComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete?.();
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      checkComplete();
    } else {
      const handleLoad = () => checkComplete();
      window.addEventListener('load', handleLoad);
      
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [location, minLoadTime, onLoadComplete]);

  return { 
    isLoading,
    forceComplete: () => setIsLoading(false)
  };
};

export default useDocumentLoader;
