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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "nav-blur bg-black/80 border-b border-gray-800" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">INVI</span>
              <span className="text-[var(--cyber-green)]">data</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-[var(--cyber-green)] transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-[var(--cyber-green)] transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("technology")}
                className="text-gray-300 hover:text-[var(--cyber-green)] transition-colors duration-300"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-[var(--cyber-green)] transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-gray-300 hover:text-[var(--cyber-green)] transition-colors duration-300"
              >
                Pricing
              </button>
              <Button className="bg-[var(--cyber-green)] text-black hover:bg-[var(--matrix-green)] transition-colors duration-300">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[var(--cyber-green)]"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[var(--cyber-green)]"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("technology")}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[var(--cyber-green)]"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[var(--cyber-green)]"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[var(--cyber-green)]"
              >
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
