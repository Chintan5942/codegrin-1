// hooks/usePreloader.js
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const usePreloader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const startTimeRef = useRef(Date.now());
  const minimumLoadTime = 2000; // 2 seconds minimum
  const previousLocationRef = useRef(location);

  // Detect route changes using useLocation (both pathname and state changes)
  useEffect(() => {
    const currentLocation = location;
    const previousLocation = previousLocationRef.current;

    // Check if pathname changed OR if state changed (for same route different data)
    const hasLocationChanged = 
      currentLocation.pathname !== previousLocation.pathname ||
      (currentLocation.state?.portfolio?.title !== previousLocation.state?.portfolio?.title);

    if (hasLocationChanged) {
      setIsLoading(true);
      startTimeRef.current = Date.now();
      
      const checkResourcesLoaded = async () => {
        try {
          await Promise.all([
            waitForDocument(),
            document.fonts ? document.fonts.ready : Promise.resolve(),
            waitForImages(),
            waitForMinimumTime()
          ]);

          setIsLoading(false);
        } catch (error) {
          console.error('Resource loading error:', error);
          await waitForMinimumTime();
          setIsLoading(false);
        }
      };

      const timer = setTimeout(() => {
        checkResourcesLoaded();
      }, 100);

      // Update previous location reference
      previousLocationRef.current = currentLocation;

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state?.portfolio?.title]); // Watch specific state changes

  const waitForDocument = () => {
    return new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        const handleReadyStateChange = () => {
          if (document.readyState === 'complete') {
            document.removeEventListener('readystatechange', handleReadyStateChange);
            resolve();
          }
        };
        document.addEventListener('readystatechange', handleReadyStateChange);
        setTimeout(resolve, 3000);
      }
    });
  };

  const waitForImages = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const images = document.querySelectorAll('img[src]');
        
        if (images.length === 0) {
          resolve();
          return;
        }

        let loadedCount = 0;
        const totalImages = images.length;

        const imageLoaded = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            resolve();
          }
        };

        images.forEach((img) => {
          if (img.complete && img.naturalWidth !== 0) {
            imageLoaded();
          } else {
            img.addEventListener('load', imageLoaded, { once: true });
            img.addEventListener('error', imageLoaded, { once: true });
          }
        });

        setTimeout(resolve, 4000);
      }, 300);
    });
  };

  const waitForMinimumTime = () => {
    return new Promise((resolve) => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = minimumLoadTime - elapsed;
      
      if (remaining > 0) {
        setTimeout(resolve, remaining);
      } else {
        resolve();
      }
    });
  };

  return isLoading;
};
