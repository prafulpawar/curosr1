import { ReactNode, useEffect } from "react";
import CustomCursor from "./CustomCursor";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== "undefined" && window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      {children}
      <Chatbot />
    </div>
  );
}
