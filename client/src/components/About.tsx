import { useEffect, useRef } from "react";

export default function About() {
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
  }, []);

  return (
    <section id="about" className="section-container bg-[var(--dark-bg)] relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block p-2 border border-[var(--cyber-green)]/30 rounded-lg mb-6">
              <span className="text-[var(--cyber-green)] text-sm font-mono">ABOUT INVIdata</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Redefining <span className="text-[var(--cyber-green)]">Cybersecurity</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              INVIdata is born from out-of-the-box thinking, deep research, and a bold vision to redefine cybersecurity. 
              In a world plagued by increasing data thefts and sophisticated cyber threats, we set out to find solutions 
              that go beyond firewalls, antivirus, and conventional encryption.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our flagship innovation, <strong className="text-[var(--cyber-green)]">Invisible Internal Data Security (IIDS)</strong>, doesn't just protect data — 
              it transforms it into an invisible, self-defending entity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--cyber-green)]/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-[var(--cyber-green)]"></i>
                </div>
                <span className="text-gray-300">Invisible to attackers and ransomware</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--cyber-green)]/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-lock text-[var(--cyber-green)]"></i>
                </div>
                <span className="text-gray-300">Self-defending file architecture</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[var(--cyber-green)]/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-eye-slash text-[var(--cyber-green)]"></i>
                </div>
                <span className="text-gray-300">Zero-byte file appearance</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[var(--cyber-green)]/10 to-[var(--matrix-green)]/10 rounded-2xl border border-[var(--cyber-green)]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-[var(--cyber-green)]/20 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-cube text-4xl text-[var(--cyber-green)] animate-pulse-green"></i>
                </div>
                <p className="text-gray-400">3D Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
