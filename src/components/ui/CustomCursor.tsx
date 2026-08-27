"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { stiffness: 350, damping: 28, mass: 0.5 };
  const ringConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  const rX = useSpring(ringX, ringConfig);
  const rY = useSpring(ringY, ringConfig);

  const [isHovering, setIsHovering] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 16);
      ringY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.matches("a, button, [role='button'], input, select, textarea") ||
        target.closest("a, button, [role='button']");
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]" aria-hidden="true">
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gold mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          width: isHovering ? 10 : 8,
          height: isHovering ? 10 : 8,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gold/60"
        style={{
          x: rX,
          y: rY,
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
