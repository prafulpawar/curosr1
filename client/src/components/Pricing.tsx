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
    <section id="pricing" className="section-padding bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border text-sm font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Choose Your <span className="gradient-text">Protection Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the plan that suits your security needs. Save significantly with annual billing and get complete protection for your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Single User Plan */}
          <div className="glass-card rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 micro-interaction">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Single User</h3>
              <p className="text-gray-600 mb-6">Perfect for individuals and freelancers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹499</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">₹2,499</span>
                <span className="text-gray-500">/year</span>
                <div className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full inline-block mt-2 font-semibold">Save 58%</div>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Full INVImanager access</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Unlimited file protection</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Priority updates</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            <Button className="w-full bg-gray-900 text-white py-3 font-semibold hover:bg-gray-800 transition-colors duration-300 micro-interaction">
              Choose Plan
            </Button>
          </div>

          {/* Small Team Plan */}
          <div className="glass-card rounded-3xl p-8 border-2 border-blue-200 relative hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Small Team</h3>
              <p className="text-gray-600 mb-6">Up to 5 users - most popular choice</p>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">₹1,499</span>
                <span className="text-gray-500">/month</span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">₹7,499</span>
                <span className="text-gray-500">/year</span>
                <div className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full inline-block mt-2 font-semibold">Save 58%</div>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">All Single User features</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Team management dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Shared secure environments</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Priority phone support</span>
              </li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 micro-interaction">
              Choose Plan
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-card rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 micro-interaction">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">6+ users with custom solutions</p>
              <div className="mb-6">
                <span className="text-3xl font-bold gradient-text">Custom</span>
              </div>
              <div className="text-center">
                <span className="text-gray-600">Contact for pricing</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">All Team features</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Dedicated support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 py-3 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 micro-interaction">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
