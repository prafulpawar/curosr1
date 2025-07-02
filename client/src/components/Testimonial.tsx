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
    <section className="section-padding bg-gray-50 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        <blockquote className="text-2xl md:text-4xl font-light text-gray-700 mb-12 leading-relaxed">
          "Weapons may get snatched, passwords may get cracked—but INVIdata ensures your data can't be seen, tracked, or abused."
        </blockquote>
        <footer className="gradient-text font-bold text-lg">
          — Dr. Dilip Rai, Founder & Inventor of INVIdata
        </footer>
      </div>
    </section>
  );
}
