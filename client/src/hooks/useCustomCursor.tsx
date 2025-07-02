import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.gsap) {
        window.gsap.to(cursor, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.1,
          ease: "power2.out"
        });
        
        window.gsap.to(follower, {
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
