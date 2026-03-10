import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(true);
      }
    };
    const handleOut = () => setIsHovering(false);
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: position.x - (isHovering ? 24 : 8),
          y: position.y - (isHovering ? 24 : 8),
          width: isHovering ? 48 : 16,
          height: isHovering ? 48 : 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: isHovering
            ? "radial-gradient(circle, hsl(43 90% 55% / 0.3), transparent)"
            : "hsl(43 90% 55% / 0.8)",
          border: isHovering ? "1.5px solid hsl(43 90% 55% / 0.6)" : "none",
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: 40,
          height: 40,
          opacity: isHovering ? 0 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
        style={{
          border: "1px solid hsl(43 90% 55% / 0.4)",
        }}
      />
    </>
  );
};

export default CustomCursor;
