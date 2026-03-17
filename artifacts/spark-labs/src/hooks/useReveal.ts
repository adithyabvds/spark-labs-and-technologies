import { useEffect, useRef } from "react";

export function useReveal() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
      );

      revealElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      revealElements.forEach((el) => el.classList.add("active"));
    }
  });

  return containerRef;
}
