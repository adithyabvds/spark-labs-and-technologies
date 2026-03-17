import { useEffect, useRef } from "react";

export function useTilt(strength = 12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotateY = dx * strength;
      const rotateX = -dy * strength;
      (el as HTMLElement).style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      (el as HTMLElement).style.boxShadow =
        `${-rotateY * 1.5}px ${rotateX * 1.5}px 40px rgba(66,212,255,0.22), 0 20px 50px rgba(30,60,200,0.3)`;
    };

    const onLeave = () => {
      (el as HTMLElement).style.transform = "";
      (el as HTMLElement).style.boxShadow = "";
    };

    el.addEventListener("mousemove", onMove as EventListener);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove as EventListener);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
