import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

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
      } else {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    const handleMouseEnter = () => {
      cursor.style.transform = "scale(1.2)";
      follower.style.transform = "scale(1.2)";
    };

    const handleMouseLeave = () => {
      cursor.style.transform = "scale(1)";
      follower.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, [role='button']");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
