"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl",
        "overflow-hidden transition-all duration-500",
        hover && [
          "hover:border-gold/30",
          "hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}