"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PrimadLogo } from "@/components/ui/PrimadLogo";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { formatWhatsAppLink } from "@/lib/utils";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES, NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setIsScrolled(v > 40);
  });

  const ctaLink = formatWhatsAppLink(
    WHATSAPP_NUMBER,
    WHATSAPP_MESSAGES[2].message
  );

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 sm:px-6 transition-all duration-500"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.5 }}
      >
        <nav
          className={cn(
            "flex items-center justify-between w-full max-w-6xl px-5 sm:px-8 py-3 rounded-full transition-all duration-500",
            "border border-white/10",
            isScrolled
              ? "bg-black/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-black/40 backdrop-blur-md"
          )}
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <Link href="/" aria-label="Primad Marcenaria — Início" className="shrink-0">
            <PrimadLogo width={120} height={76} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-ivory/70 hover:text-ivory transition-colors duration-200 rounded-full hover:bg-white/5"
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                  onClick={() => setActiveItem(null)}
                >
                  {activeItem === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/8 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LinkButton
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              magnetic
            >
              Iniciar Projeto
            </LinkButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ivory/80 hover:text-ivory transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-32 pb-12 px-6 bg-onyx/98 backdrop-blur-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="flex flex-col gap-1 mb-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-4 text-2xl font-display font-medium text-ivory/80 hover:text-gold border-b border-white/8 transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <LinkButton
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full justify-center"
            >
              Iniciar Projeto
            </LinkButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
