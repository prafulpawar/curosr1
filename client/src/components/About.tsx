import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !window.gsap || !window.ScrollTrigger) return;

    window.gsap.fromTo(sectionRef.current.children, {
      y: 60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3,
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
    <section id="about" className="section-padding bg-gray-50 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border text-sm font-medium text-gray-600 mb-8">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              About INVIdata
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Redefining <span className="gradient-text">Cybersecurity</span> Standards
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Born from revolutionary thinking and deep research, INVIdata addresses the growing threat landscape 
              with solutions that transcend traditional security measures like firewalls and encryption.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Our flagship innovation, <strong className="text-gray-900">Invisible Internal Data Security (IIDS)</strong>, 
              transforms data into invisible, self-defending entities that remain completely hidden from threats.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Invisibility</h3>
                  <p className="text-gray-600">Files become completely invisible to attackers and ransomware while maintaining full functionality.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Self-Defending Architecture</h3>
                  <p className="text-gray-600">Each file contains built-in defense mechanisms that activate automatically when threats are detected.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.636 6.636m3.242 3.242l4.242 4.242m0 0L17.364 17.364M9.88 9.88l-3.242-3.242" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Zero-Byte Technology</h3>
                  <p className="text-gray-600">Revolutionary approach that makes files appear as zero bytes to unauthorized systems and users.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative glass-card rounded-3xl p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Data Protection</h3>
                <p className="text-gray-600">Next-generation security architecture protecting your most valuable digital assets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
