"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { DIFFERENTIALS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Cpu,
  Wrench,
};

export function PrecisionTechSection() {
  return (
    <section
      id="diferenciais"
      className="relative py-28 md:py-36 lg:py-44 bg-onyx-800"
      aria-label="Diferenciais tecnológicos da Primad"
    >
      {/* Decorative background line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <ScrollReveal>
            <Badge className="mb-6">Tecnologia & Artesanato</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-ivory text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-6">
              Onde a Engenharia{" "}
              <span className="text-gradient-gold">encontra o Artesanato.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-ivory/60 text-lg leading-relaxed">
              Da modelagem digital à montagem final, cada etapa é conduzida com
              tecnologia industrial e o olhar atento de mestres marceneiros.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = iconMap[diff.icon] ?? Monitor;
            return (
              <ScrollReveal key={diff.id} delay={i * 0.12} variant="slideUp">
                <TiltCard className="h-full">
                  <div className="relative h-full p-8 md:p-12 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl overflow-hidden group gold-border-gradient transition-all duration-500 hover:bg-zinc-900/80">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Icon */}
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 group-hover:bg-gold/15 transition-colors duration-300">
                        <Icon className="text-gold" size={26} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Highlight metric */}
                    <div className="mb-3">
                      <span className="text-3xl font-display font-bold text-gradient-gold">
                        {diff.highlight}
                      </span>
                      <p className="text-ivory/40 text-xs mt-1 tracking-wide">
                        {diff.highlightLabel}
                      </p>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-ivory text-xl leading-tight mb-4">
                      {diff.title}
                    </h3>
                    <p className="text-ivory/60 text-sm leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
