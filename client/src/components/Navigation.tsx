import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "nav-blur shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">INVI</span>
              <span className="gradient-text">data</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("technology")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
              >
                Pricing
              </button>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 font-semibold micro-interaction">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-gray-200 animate-fade-up">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <button 
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("technology")}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Pricing
              </button>
              <div className="pt-2">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
