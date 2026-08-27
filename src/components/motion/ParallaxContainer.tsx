"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speedFactor?: number;
  direction?: "up" | "down";
}

export function ParallaxContainer({
  children,
  className,
  speedFactor = 0.3,
  direction = "up",
}: ParallaxContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 60 * speedFactor;
  const yRange = direction === "up" ? [range, -range] : [-range, range];

  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
