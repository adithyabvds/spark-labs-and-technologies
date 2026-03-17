import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = e.clientX + "px";
      spotRef.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="mouse-spotlight" ref={spotRef} />;
}
