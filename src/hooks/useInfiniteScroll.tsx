import { useEffect } from 'react';

const SCROLL_OPTION = {
  root: null,
  threshold: 0.5,
  rootMargin: '-100px -50px'
};
const useInfiniteScroll = (
  target: HTMLLIElement | null,
  callback: () => void
) => {
  useEffect(() => {
    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        callback && callback();
        observer.unobserve(entry.target);
      });
    };
    const io = new IntersectionObserver(handleIntersection, SCROLL_OPTION);
    if (target) {
      io.observe(target);
    }
    return () => io.disconnect();
  }, [target]);
};

export default useInfiniteScroll;
