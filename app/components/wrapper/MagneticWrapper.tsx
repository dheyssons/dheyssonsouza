"use client";

import { useRef, useEffect } from "react";

export default function MagneticWrapper({
  children,
  strength = 40,
  className = "",
}: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const contentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.15;
      position.current.y += (target.current.y - position.current.y) * 0.15;

      contentPosition.current.x +=
        (position.current.x - contentPosition.current.x) * 0.15;
      contentPosition.current.y +=
        (position.current.y - contentPosition.current.y) * 0.15;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translate(${contentPosition.current.x}px, ${contentPosition.current.y}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    target.current.x = ((x - centerX) / centerX) * strength;
    target.current.y = ((y - centerY) / centerY) * strength;
  };

  const handleMouseLeave = () => {
    target.current.x = 0;
    target.current.y = 0;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* círculo que atravessa */}
      <span
        className="
          absolute left-1/2
          w-[180%] h-[180%]
          -translate-x-1/2
          -top-[180%]
          bg-blue-500
          rounded-full
          transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:translate-y-full
        "
      />

      {/* conteúdo */}
      <div
        ref={contentRef}
        className="
          relative z-10 w-full h-full
          flex items-center justify-center
          transition-colors duration-400
        "
      >
        {children}
      </div>
    </div>
  );
}
