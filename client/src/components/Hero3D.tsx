import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !window.gsap) return;

    // Hero animations
    const tl = window.gsap.timeline();
    
    tl.fromTo(".hero-badge", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });
    
    tl.fromTo(".hero-title", {
      y: 60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.3");
    
    tl.fromTo(".hero-subtitle", {
      y: 40,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8");

    tl.fromTo(".hero-actions", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        window.gsap.set(parallaxRef.current, {
          transform: `translate3d(0, ${rate}px, 0)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
      window.gsap.to(element, {
        y: -20,
        duration: window.gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.8
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section relative bg-gradient-to-br from-gray-50 via-white to-blue-50" ref={heroRef}>
      {/* Parallax Background Elements */}
      <div ref={parallaxRef} className="parallax-bg">
        <div className="floating-element w-32 h-32" style={{top: '10%', left: '10%', animationDelay: '0s'}}></div>
        <div className="floating-element w-24 h-24" style={{top: '20%', right: '15%', animationDelay: '2s'}}></div>
        <div className="floating-element w-40 h-40" style={{bottom: '30%', left: '15%', animationDelay: '4s'}}></div>
        <div className="floating-element w-28 h-28" style={{bottom: '20%', right: '20%', animationDelay: '6s'}}></div>
        <div className="floating-element w-20 h-20" style={{top: '50%', left: '5%', animationDelay: '8s'}}></div>
        <div className="floating-element w-36 h-36" style={{top: '60%', right: '10%', animationDelay: '10s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full glass-card border text-sm font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Revolutionary Zero-Byte Security
          </div>
          
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tight">
            <span className="block text-gray-900">Invisible</span>
            <span className="block gradient-text">Internal Data</span>
            <span className="block text-gray-900">Security</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform every file into an invisible, self-defending fortress. 
            Our revolutionary IIDS technology makes data completely invisible to attackers 
            while maintaining full functionality.
          </p>
          
          <div className="hero-actions flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gray-900 hover:bg-gray-800 text-white micro-interaction">
              Start Free Trial
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-gray-300 text-gray-700 hover:border-gray-400 micro-interaction">
              Watch Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15" />
              </svg>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Bytes Visible</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Self-Defense</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
