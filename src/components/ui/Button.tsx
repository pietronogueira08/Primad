"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 overflow-hidden";

  const variants = {
    primary: [
      "bg-gradient-gold text-onyx rounded-full",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
      "hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02]",
    ].join(" "),
    secondary: [
      "border border-gold/60 text-gold bg-transparent rounded-full",
      "hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]",
    ].join(" "),
    ghost: [
      "text-ivory/80 bg-transparent rounded-full",
      "hover:text-ivory hover:bg-white/5",
    ].join(" "),
  };

  const sizes = {
    sm: "h-10 px-6 text-sm gap-2",
    md: "h-12 px-8 text-sm gap-2.5",
    lg: "h-14 px-10 text-base gap-3",
  };

  const button = (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );

  if (magnetic) {
    return <MagneticWrapper>{button}</MagneticWrapper>;
  }

  return button;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  children: React.ReactNode;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none overflow-hidden cursor-none";

  const variants = {
    primary: [
      "bg-gradient-gold text-onyx rounded-full",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
      "hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02]",
    ].join(" "),
    secondary: [
      "border border-gold/60 text-gold bg-transparent rounded-full",
      "hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]",
    ].join(" "),
    ghost: [
      "text-ivory/80 bg-transparent rounded-full",
      "hover:text-ivory hover:bg-white/5",
    ].join(" "),
  };

  const sizes = {
    sm: "h-10 px-6 text-sm gap-2",
    md: "h-12 px-8 text-sm gap-2.5",
    lg: "h-14 px-10 text-base gap-3",
  };

  const link = (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );

  if (magnetic) {
    return <MagneticWrapper>{link}</MagneticWrapper>;
  }

  return link;
}