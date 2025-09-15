import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    if (!isMobile) {
      window.addEventListener("mousemove", move);

      // Track hover on links, buttons, inputs etc.
      const hoverables = document.querySelectorAll(
        "a, button, input, textarea, [data-hover]"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });

      return () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("resize", checkMobile);
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", addHover);
          el.removeEventListener("mouseleave", removeHover);
        });
      };
    }
  }, [isMobile]);

  if (isMobile) return null; // 🚀 Hide cursor on mobile

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]
        transition-transform duration-500 ease-out mix-blend-difference`}
      style={{
        transform: `translate(${position.x - 15}px, ${position.y - 15}px) scale(${
          hovered ? 2 : 1
        })`,
        backgroundColor: "white",
      }}
    />
  );
}
