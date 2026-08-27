"use client";

import React from "react";

interface PrimadLogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "full" | "monogram";
}

/**
 * Primad Marcenaria official logo recreated as SVG.
 * Features a gold metallic gradient monogram with serif typography.
 * Background is fully transparent.
 */
export function PrimadLogo({
  width = 220,
  height = 140,
  className = "",
  variant = "full",
}: PrimadLogoProps) {
  if (variant === "monogram") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Primad Marcenaria - Monograma"
      >
        <defs>
          <linearGradient id="goldGradMono" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C5828" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#E5C378" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B37D3E" />
          </linearGradient>
        </defs>
        {/* Monogram P stylized */}
        <text
          x="50%"
          y="78"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="700"
          fontSize="90"
          fill="url(#goldGradMono)"
        >
          P
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Primad Marcenaria - Móveis Planejados"
      role="img"
    >
      <defs>
        {/* Main gold metallic gradient */}
        <linearGradient id="goldGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C5828" />
          <stop offset="20%" stopColor="#B37D3E" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#E5C378" />
          <stop offset="80%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8C5828" />
        </linearGradient>

        {/* Vertical gold gradient for monogram pillars */}
        <linearGradient id="goldGradVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E5C378" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#B37D3E" />
          <stop offset="100%" stopColor="#8C5828" />
        </linearGradient>

        {/* Text gradient for PRIMAD */}
        <linearGradient id="goldGradText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C5828" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="55%" stopColor="#E5C378" />
          <stop offset="80%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B37D3E" />
        </linearGradient>

        {/* Highlight gradient for 3D depth */}
        <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="30%" y2="100%">
          <stop offset="0%" stopColor="#F0D878" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8C5828" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* ── MONOGRAM SECTION ─────────────────────────────────── */}
      {/* Left pillar — tall vertical bar */}
      <rect
        x="72"
        y="8"
        width="14"
        height="72"
        rx="2"
        fill="url(#goldGradVertical)"
      />
      {/* Left pillar highlight */}
      <rect
        x="72"
        y="8"
        width="5"
        height="72"
        rx="2"
        fill="url(#goldHighlight)"
        opacity="0.5"
      />

      {/* Center pillar — slightly shorter */}
      <rect
        x="93"
        y="14"
        width="14"
        height="66"
        rx="2"
        fill="url(#goldGradVertical)"
      />
      <rect
        x="93"
        y="14"
        width="5"
        height="66"
        rx="2"
        fill="url(#goldHighlight)"
        opacity="0.4"
      />

      {/* Right pillar with P-bowl (the "P" shape) */}
      <rect
        x="114"
        y="8"
        width="14"
        height="72"
        rx="2"
        fill="url(#goldGradVertical)"
      />
      {/* P bowl — top arc */}
      <path
        d="M 128 8 Q 158 8 158 30 Q 158 52 128 52 L 114 52 L 114 38 Q 128 38 140 30 Q 128 22 114 22 L 114 8 Z"
        fill="url(#goldGradMain)"
      />
      {/* P bowl inner curve (darker for depth) */}
      <path
        d="M 128 18 Q 148 18 148 30 Q 148 42 128 42 L 122 42 L 122 18 Z"
        fill="url(#goldGradVertical)"
        opacity="0.7"
      />

      {/* Calligraphic curl at bottom of left pillar */}
      <path
        d="M 72 76 Q 65 82 68 90 Q 72 98 82 94 Q 90 90 86 82"
        stroke="url(#goldGradMain)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 86 82 Q 82 74 76 76"
        stroke="url(#goldGradMain)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── TYPOGRAPHY SECTION ───────────────────────────────── */}
      {/* "Marcenaria" — small white serif above PRIMAD */}
      <text
        x="140"
        y="107"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="400"
        fontSize="13"
        letterSpacing="3"
        fill="#FFFFFF"
        opacity="0.9"
      >
        Marcenaria
      </text>

      {/* "Primad" — large bold gold gradient */}
      <text
        x="140"
        y="145"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="52"
        letterSpacing="1"
        fill="url(#goldGradText)"
      >
        Primad
      </text>

      {/* "Móveis Planejados" — white sans-serif tagline */}
      <text
        x="140"
        y="168"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="400"
        fontSize="13.5"
        letterSpacing="2.5"
        fill="#FFFFFF"
        opacity="0.85"
      >
        Móveis Planejados
      </text>
    </svg>
  );
}
