"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Layers, Settings, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Layers,
  Settings,
  CheckCircle,
};

export function ProcessTimelineSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="processo"
      ref={containerRef}
      className="relative py-28 md:py-36 lg:py-44 bg-onyx"
      aria-label="Processo de atendimento da Primad"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <ScrollReveal>
            <Badge className="mb-6">Nossa Metodologia</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-ivory text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-6">
              Do briefing à entrega{" "}
              <span className="text-gradient-gold">sem surpresas.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-xl text-ivory/60 text-lg leading-relaxed">
              Um processo rigoroso que garante qualidade, prazo e comunicação
              transparente em cada fase do seu projeto.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-gold via-gold-light to-gold-amber origin-top"
              style={{ scaleY: lineScaleY, height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-0">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] ?? CheckCircle;
              const isRight = i % 2 === 1;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isRight ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Card side */}
                  <ScrollReveal
                    className={`w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] ${
                      isRight ? "md:pl-16" : "md:pr-16"
                    }`}
                    variant={isRight ? "slideRight" : "slideLeft"}
                    delay={i * 0.1}
                  >
                    <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-lg hover:border-gold/20 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold/40 font-display font-bold text-4xl leading-none">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-ivory text-xl mb-3 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-ivory/55 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Center icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex-shrink-0">
                    <ScrollReveal variant="scaleUp" delay={i * 0.1 + 0.05}>
                      <div className="w-12 h-12 rounded-full border-2 border-gold bg-onyx flex items-center justify-center gold-glow">
                        <Icon size={18} className="text-gold" strokeWidth={1.5} />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
