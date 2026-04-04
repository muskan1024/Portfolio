import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollData = () => {
      const scrollY = window.pageYOffset;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = scrollY > 50;

      setScrollData({
        scrollY,
        scrollDirection,
        isScrolled,
      });

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollData);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollData;
};

export default useScroll;
