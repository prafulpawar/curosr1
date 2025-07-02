import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
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
    <section id="pricing" className="section-container bg-black relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 border border-[var(--cyber-green)]/30 rounded-lg mb-6">
            <span className="text-[var(--cyber-green)] text-sm font-mono">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-[var(--cyber-green)]">Protection Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the plan that suits your needs—best value with annual billing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Single User Plan */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Single User</h3>
              <p className="text-gray-400 mb-6">Perfect for individuals</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--cyber-green)]">₹499</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">₹2,499</span>
                <span className="text-gray-400">/year</span>
                <div className="text-sm text-[var(--cyber-green)] font-semibold">Save 58%</div>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Full INVImanager access</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Unlimited file protection</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Priority updates</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Email support</span>
              </li>
            </ul>
            <Button className="w-full bg-[var(--cyber-green)] text-black py-3 font-semibold hover:bg-[var(--matrix-green)] transition-colors duration-300">
              Choose Plan
            </Button>
          </div>

          {/* Small Team Plan */}
          <div className="bg-gradient-to-b from-[var(--cyber-green)]/10 to-[var(--matrix-green)]/10 rounded-2xl p-8 border-2 border-[var(--cyber-green)] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[var(--cyber-green)] text-black px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Small Team</h3>
              <p className="text-gray-400 mb-6">Up to 5 users</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--cyber-green)]">₹1,499</span>
                <span className="text-gray-400">/month</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">₹7,499</span>
                <span className="text-gray-400">/year</span>
                <div className="text-sm text-[var(--cyber-green)] font-semibold">Save 58%</div>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">All Single User features</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Team management dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Shared secure environments</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Priority phone support</span>
              </li>
            </ul>
            <Button className="w-full bg-[var(--cyber-green)] text-black py-3 font-semibold hover:bg-[var(--matrix-green)] transition-colors duration-300">
              Choose Plan
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-[var(--cyber-green)]/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">6+ users</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[var(--cyber-green)]">Custom</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400">Contact for pricing</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">All Team features</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check text-[var(--cyber-green)]"></i>
                <span className="text-gray-300">Dedicated support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-[var(--cyber-green)] text-[var(--cyber-green)] py-3 font-semibold hover:bg-[var(--cyber-green)] hover:text-black transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
