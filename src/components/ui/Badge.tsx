"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export function Badge({ children, className, pulse = true }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-4 py-2 rounded-full",
        "border border-gold/30 bg-gold/5 backdrop-blur-sm",
        "text-gold-light text-xs font-medium tracking-widest uppercase",
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
        </span>
      )}
      {children}
    </div>
  );
}