import React, { useEffect, useRef } from "react";

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface UseIntersectionOptions {
  onIntersect: () => void;
  intersectionOptions?: IntersectionOptions;
}

export const UseIntersectionObserver = (
  options: UseIntersectionOptions
): React.RefObject<HTMLDivElement> => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        options.onIntersect();
        observer.unobserve(targetRef.current!);
      }
    }, options.intersectionOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options]);

  return targetRef;
};
