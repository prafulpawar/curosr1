import { useEffect, useRef } from "react";

export default function Technology() {
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
    <section id="technology" className="section-padding bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border text-sm font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            How <span className="gradient-text">IIDS</span> Technology Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proprietary Invisible Internal Data Security embeds self-defense mechanisms directly inside your files. 
            Through Virtual Invisible Partition (VIP) technology, your critical data becomes truly invisible to threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group micro-interaction">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.636 6.636m3.242 3.242l4.242 4.242m0 0L17.364 17.364M9.88 9.88l-3.242-3.242" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Invisible to Attackers</h3>
            <p className="text-gray-600">Files appear as zero bytes when accessed outside the secure environment, making them completely undetectable.</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group micro-interaction">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ransomware Resistant</h3>
            <p className="text-gray-600">Protected files remain completely secure even if your entire system becomes compromised by malware.</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group micro-interaction">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Transferable</h3>
            <p className="text-gray-600">Copies to USB drives, email attachments, or cloud storage remain invisible and completely unreadable.</p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 group micro-interaction">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">No Keys Required</h3>
            <p className="text-gray-600">Forget about lost passwords or stolen keys—your data automatically protects itself through embedded intelligence.</p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-12 border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Virtual Invisible Partition (VIP)</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our VIP technology creates a secure, non-bootable OS-layer environment that makes files invisible 
                to unauthorized access while maintaining full functionality within the protected space.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Files function normally within INVImanager</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Zero-byte appearance in unauthorized environments</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Automatic integrity verification and validation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video glass-card rounded-2xl border flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M13 16h-1.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 008 13H7m8 4a4 4 0 01-8 0v-1a4 4 0 018 0v1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-semibold">Watch VIP Technology Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
