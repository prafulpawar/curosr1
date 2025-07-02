import { useEffect, useRef } from "react";

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !window.gsap || !window.ScrollTrigger) return;

    window.gsap.fromTo(sectionRef.current.children, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section className="section-container bg-[var(--dark-bg)] relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-[var(--cyber-green)]/20 rounded-full flex items-center justify-center">
            <i className="fas fa-quote-left text-[var(--cyber-green)] text-2xl"></i>
          </div>
        </div>
        <blockquote className="text-2xl md:text-3xl font-light text-gray-300 mb-8 leading-relaxed">
          "Weapons may get snatched, passwords may get cracked—but INVIdata ensures your data can't be seen, tracked, or abused."
        </blockquote>
        <footer className="text-[var(--cyber-green)] font-semibold">
          — Dr. Dilip Rai, Founder & Inventor of INVIdata
        </footer>
      </div>
    </section>
  );
}
