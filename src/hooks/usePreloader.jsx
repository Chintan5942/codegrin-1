// hooks/usePreloader.js
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const usePreloader = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const preloaderRef = useRef();

  const hidePreloader = () => {
    // Simple fade out animation
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        setIsVisible(false); // Hide after fade completes
      }
    });
  };

  useEffect(() => {
    // Show preloader on route change
    // setIsLoading(true);
    setIsVisible(true);
    
    // Reset opacity to 1 when showing preloader
    if (preloaderRef.current) {
      gsap.set(preloaderRef.current, { opacity: 1 });
    }

    const checkImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      const totalImages = images.length;
      let loadedImages = 0;

      // If no images, proceed to hide preloader
      if (totalImages === 0) {
        setTimeout(() => {
          // setIsLoading(false);
          hidePreloader();
        }, 1000);
        return;
      }

      const onImageLoad = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setTimeout(() => {
            // setIsLoading(false);
            hidePreloader();
          }, 1000);
        }
      };

      const onImageError = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setTimeout(() => {
            // setIsLoading(false);
            hidePreloader();
          }, 1000);
        }
      };

      // Attach load and error listeners to each image
      Array.from(images).forEach((img) => {
        if (img.complete) {
          loadedImages += 1;
          if (loadedImages === totalImages) {
            setTimeout(() => {
              // setIsLoading(false);
              hidePreloader();
            }, 1000);
          }
        } else {
          img.addEventListener('load', onImageLoad);
          img.addEventListener('error', onImageError);
        }
      });

      // Cleanup listeners
      return () => {
        Array.from(images).forEach((img) => {
          img.removeEventListener('load', onImageLoad);
          img.removeEventListener('error', onImageError);
        });
      };
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      checkImagesLoaded();
    } else {
      window.addEventListener('load', checkImagesLoaded);
      return () => {
        window.removeEventListener('load', checkImagesLoaded);
      };
    }
  }, [location.pathname, location.state, location.key]);

  return { isVisible, preloaderRef };
};

export default usePreloader;
