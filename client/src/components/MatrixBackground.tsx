import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matrix = matrixRef.current;
    if (!matrix) return;

    const chars = '01';
    
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'absolute text-[var(--cyber-green)] font-mono text-sm opacity-10 animate-matrix-rain';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 15 + 5) + 's';
      char.style.animationDelay = Math.random() * 5 + 's';
      matrix.appendChild(char);
      
      // Remove char after animation
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 20000);
    };
    
    // Create matrix characters
    const interval = setInterval(createMatrixChar, 200);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={matrixRef} className="matrix-bg" />;
}
