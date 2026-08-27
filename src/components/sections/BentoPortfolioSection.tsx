"use client";

import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const CATEGORIES: ProjectCategory[] = [
  "Todos",
  "Suítes & Closets",
  "Cozinhas Gourmet",
  "Painéis & Portas",
  "Corporativo",
];

export function BentoPortfolioSection() {
  const [activeCategory, setActiveCategory] =
    React.useState<ProjectCategory>("Todos");

  const filtered =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 lg:py-44 bg-onyx"
      aria-label="Portfólio de projetos da Primad"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <ScrollReveal>
            <Badge className="mb-6">Portfólio de Obras</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-ivory text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-6">
              Cada ambiente,{" "}
              <span className="text-gradient-gold">uma obra singular.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-xl text-ivory/60 text-lg leading-relaxed">
              Projetos residenciais e corporativos de alto padrão no Rio de
              Janeiro, Niterói e Região dos Lagos.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter tabs */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-gradient-gold text-onyx font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "border border-white/15 text-ivory/60 hover:border-gold/40 hover:text-ivory/90"
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  delay: i * 0.06,
                }}
                className={cn(
                  "relative rounded-3xl overflow-hidden border border-white/10 group cursor-none",
                  "transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]",
                  project.size === "large"
                    ? "sm:col-span-2 min-h-[480px]"
                    : project.size === "medium"
                    ? "min-h-[420px]"
                    : "min-h-[380px]"
                )}
                aria-label={project.title}
              >
                {/* Image with scale on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes={
                        project.size === "large"
                          ? "(min-width: 640px) 66vw, 100vw"
                          : "(min-width: 640px) 33vw, 100vw"
                      }
                    />
                  </motion.div>

                  {/* Overlay — lightens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/40 to-transparent group-hover:via-onyx/20 transition-all duration-500" />

                  {/* Gold border glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, transparent 60%)",
                      boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-medium tracking-wide mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display font-semibold text-ivory text-lg md:text-xl leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
