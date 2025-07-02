import { useEffect, useRef } from "react";

export default function Features() {
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

    // Add hover animations for feature cards
    const featureCards = sectionRef.current.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      const handleMouseEnter = () => {
        window.gsap.to(card, {
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        window.gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section id="features" className="section-padding bg-gray-50 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border text-sm font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            INVImanager Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Powerful <span className="gradient-text">Security Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            INVImanager is our advanced Windows application that embeds IIDS technology directly into your files, 
            creating an invisible shield around your most sensitive data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.636 6.636m3.242 3.242l4.242 4.242m0 0L17.364 17.364M9.88 9.88l-3.242-3.242" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Zero-byte Invisibility</h3>
            <p className="text-gray-600 leading-relaxed">Protected files appear as zero bytes outside INVImanager, making them completely invisible to attackers and malware scanning systems.</p>
          </div>

          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Built-in Authentication</h3>
            <p className="text-gray-600 leading-relaxed">Advanced internal verification systems ensure only authorized access within the secure environment through multiple validation layers.</p>
          </div>

          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Non-transferable Encryption</h3>
            <p className="text-gray-600 leading-relaxed">Files remain encrypted and completely unusable when copied, shared, or transferred outside the protected environment.</p>
          </div>

          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Offline Security</h3>
            <p className="text-gray-600 leading-relaxed">All security processes run locally without requiring cloud connectivity or external key management systems.</p>
          </div>

          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intuitive Interface</h3>
            <p className="text-gray-600 leading-relaxed">Simple drag-and-drop functionality makes file protection effortless without requiring technical expertise.</p>
          </div>

          <div className="feature-card glass-card p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 group">
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Billing</h3>
            <p className="text-gray-600 leading-relaxed">Choose monthly or annual billing options with significant savings of up to 58% when you select yearly plans.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
