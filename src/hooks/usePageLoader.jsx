// hooks/useAdvancedPageLoader.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoader = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(100);
  const [resourcesLoaded, setResourcesLoaded] = useState(true);
  
  // Reset loading state when location changes
  useEffect(() => {
    setIsNavigating(true);
    setResourcesLoaded(false);
    setLoadingProgress(0);
    
    // Small delay to indicate navigation started
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!isNavigating) {
      const updateProgress = () => {
        const images = Array.from(document.images);
        const totalImages = images.length;
        
        if (totalImages === 0) {
          setLoadingProgress(100);
          setResourcesLoaded(true);
          return;
        }

        let loadedImages = 0;
        images.forEach(img => {
          if (img.complete && img.naturalWidth !== 0) {
            loadedImages++;
          }
        });

        const progress = Math.round((loadedImages / totalImages) * 100);
        setLoadingProgress(progress);

        // Check document ready state and fonts
        if (document.readyState === 'complete' && progress === 100) {
          if (document.fonts) {
            document.fonts.ready.then(() => {
              setTimeout(() => {
                setResourcesLoaded(true);
              }, 300);
            });
          } else {
            setTimeout(() => {
              setResourcesLoaded(true);
            }, 300);
          }
        }
      };

      updateProgress();
      const interval = setInterval(updateProgress, 100);
      
      document.addEventListener('readystatechange', updateProgress);
      window.addEventListener('load', updateProgress);

      return () => {
        clearInterval(interval);
        document.removeEventListener('readystatechange', updateProgress);
        window.removeEventListener('load', updateProgress);
      };
    }
  }, [isNavigating]);

  const isLoading = isNavigating || !resourcesLoaded;

  return { isLoading, isNavigating, resourcesLoaded, loadingProgress };
};
