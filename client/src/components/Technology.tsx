import { useEffect, useRef } from "react";

export default function Technology() {
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
    <section id="technology" className="section-container bg-black relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 border border-[var(--cyber-green)]/30 rounded-lg mb-6">
            <span className="text-[var(--cyber-green)] text-sm font-mono">TECHNOLOGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-[var(--cyber-green)]">IIDS</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Through our proprietary IIDS, INVIdata embeds self‑defense mechanisms inside your files. 
            By placing them into a Virtual Invisible Partition (VIP)—your critical data becomes truly invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[var(--cyber-green)]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyber-green)]/30 transition-colors">
              <i className="fas fa-eye-slash text-[var(--cyber-green)] text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Invisible to Attackers</h3>
            <p className="text-gray-400">Files appear as zero bytes when accessed outside the secure environment.</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[var(--cyber-green)]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyber-green)]/30 transition-colors">
              <i className="fas fa-shield-virus text-[var(--cyber-green)] text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Ransomware Resistant</h3>
            <p className="text-gray-400">Protected files remain secure even if your system is compromised.</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[var(--cyber-green)]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyber-green)]/30 transition-colors">
              <i className="fas fa-ban text-[var(--cyber-green)] text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Non-Transferable</h3>
            <p className="text-gray-400">Copies to USB, email, or cloud remain invisible and unreadable.</p>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-[var(--cyber-green)]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--cyber-green)]/30 transition-colors">
              <i className="fas fa-key text-[var(--cyber-green)] text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">No Keys Required</h3>
            <p className="text-gray-400">Forget lost passwords—your data protects itself automatically.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Virtual Invisible Partition (VIP)</h3>
              <p className="text-gray-300 mb-6">
                Our VIP technology creates a non-bootable, OS-layer shield that makes your files invisible 
                to all unauthorized access attempts while maintaining full functionality within the secure environment.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></div>
                  <span className="text-gray-300">Files exist normally within INVImanager</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></div>
                  <span className="text-gray-300">Zero-byte appearance everywhere else</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></div>
                  <span className="text-gray-300">Automatic integrity verification</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-black/50 rounded-xl border border-[var(--cyber-green)]/30 flex items-center justify-center hover:border-[var(--cyber-green)]/50 transition-colors cursor-pointer">
                <div className="text-center">
                  <i className="fas fa-play-circle text-4xl text-[var(--cyber-green)] mb-2"></i>
                  <p className="text-gray-400">Watch VIP Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
