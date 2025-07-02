import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import MatrixBackground from "./MatrixBackground";

export default function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !window.gsap) return;

    const tl = window.gsap.timeline();
    
    tl.fromTo(".hero-title", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });
    
    tl.fromTo(".hero-subtitle", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5");

    tl.fromTo(".hero-buttons", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");

    tl.fromTo(".hero-stats", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");

    // Floating cubes animation
    const cubes = document.querySelectorAll('.floating-cube');
    cubes.forEach((cube, index) => {
      window.gsap.to(cube, {
        y: -30,
        duration: window.gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      });
    });

  }, []);

  return (
    <section id="home" className="hero-3d relative" ref={heroRef}>
      <MatrixBackground />
      
      {/* Floating Cubes */}
      <div className="floating-cube animate-cube-rotate" style={{top: '10%', left: '10%', animationDelay: '0s'}}></div>
      <div className="floating-cube animate-cube-rotate" style={{top: '20%', right: '15%', animationDelay: '2s'}}></div>
      <div className="floating-cube animate-cube-rotate" style={{bottom: '30%', left: '20%', animationDelay: '4s'}}></div>
      <div className="floating-cube animate-cube-rotate" style={{bottom: '15%', right: '10%', animationDelay: '6s'}}></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block p-2 border border-[var(--cyber-green)]/30 rounded-lg mb-4">
              <span className="text-[var(--cyber-green)] text-sm font-mono">ZERO-BYTE SECURITY</span>
            </div>
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block">Invisible</span>
            <span className="block text-[var(--cyber-green)]">Internal Data</span>
            <span className="block">Security</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Reimagining Cybersecurity with Zero-Byte, Self-Defending Data that transforms every file into an invisible, unbreakable vault.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-[var(--cyber-green)] text-black px-8 py-4 text-lg font-bold hover:bg-[var(--matrix-green)] transition-all duration-300 cyber-glow">
              Download INVImanager
            </Button>
            <Button variant="outline" className="border-white/30 text-white px-8 py-4 text-lg font-semibold hover:border-[var(--cyber-green)] hover:text-[var(--cyber-green)] transition-all duration-300">
              Watch Demo
            </Button>
          </div>
          
          <div className="hero-stats grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--cyber-green)]">0</div>
              <div className="text-sm text-gray-400">Bytes Visible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--cyber-green)]">100%</div>
              <div className="text-sm text-gray-400">Hack-Proof</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--cyber-green)]">∞</div>
              <div className="text-sm text-gray-400">Self-Defense</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--cyber-green)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--cyber-green)] rounded-full mt-2 animate-pulse-green"></div>
        </div>
      </div>
    </section>
  );
}
