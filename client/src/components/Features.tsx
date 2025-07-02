import { useEffect, useRef } from "react";

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !window.gsap || !window.ScrollTrigger) return;

    window.gsap.fromTo(sectionRef.current.children, {
      y: 100,
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

    // Add hover animations for feature cards
    const featureCards = sectionRef.current.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      const handleMouseEnter = () => {
        window.gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        window.gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section id="features" className="section-container bg-[var(--dark-bg)] relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 border border-[var(--cyber-green)]/30 rounded-lg mb-6">
            <span className="text-[var(--cyber-green)] text-sm font-mono">INVImanager</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="text-[var(--cyber-green)]">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            INVImanager is our offline Windows application that embeds IIDS directly into your files, 
            making them invisible and self-defending.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-microscope text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Zero-byte Invisibility</h3>
            <p className="text-gray-400">Protected files appear as zero bytes outside INVImanager, making them completely invisible to attackers.</p>
          </div>

          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-fingerprint text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Built-in Authentication</h3>
            <p className="text-gray-400">Internal checks ensure only authorized access within the secure environment.</p>
          </div>

          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-lock text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Non-transferable Encryption</h3>
            <p className="text-gray-400">Exfiltrated files remain encrypted and unusable if copied or shared.</p>
          </div>

          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-server text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Offline Security</h3>
            <p className="text-gray-400">All processes run locally – no cloud dependency or external keys required.</p>
          </div>

          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-mouse-pointer text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Easy Interface</h3>
            <p className="text-gray-400">Simply drag and drop any file into the dashboard to activate protection.</p>
          </div>

          <div className="feature-card bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-500">
            <div className="w-16 h-16 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--cyber-green)]/30 transition-colors duration-300">
              <i className="fas fa-calendar-alt text-[var(--cyber-green)] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Flexible Billing</h3>
            <p className="text-gray-400">Monthly or annual billing — save up to 58% with yearly plans.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
