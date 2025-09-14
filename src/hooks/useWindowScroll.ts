import { useState, useEffect } from 'react';

interface WindowScroll {
  scrollX: number;
  scrollY: number;
}

const useWindowScroll = (): WindowScroll => {
  const [scrollPosition, setScrollPosition] = useState<WindowScroll>({
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useWindowScroll;
