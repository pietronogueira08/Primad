"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação ${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-gold text-gold" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = React.useState(false);
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="depoimentos"
      className="relative py-28 md:py-36 lg:py-44 bg-onyx-800 overflow-hidden"
      aria-label="Depoimentos de clientes da Primad"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Header */}
      <div className="section-container mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal>
            <Badge className="mb-6">Clientes & Arquitetos</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-ivory text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-6">
              Quem já viveu a{" "}
              <span className="text-gradient-gold">experiência Primad.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-ivory font-bold text-xl">5.0</span>
              <span className="text-ivory/50 text-sm">· Google Avaliações</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-onyx-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-onyx-800 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: isPaused ? undefined : "-50%" }}
          transition={{
            x: {
              duration: 35,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex-shrink-0 w-[340px] sm:w-[380px] p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-lg"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-gold/30 mb-4" />

              {/* Text */}
              <p className="text-ivory/75 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-onyx font-bold text-sm shrink-0">
                  {t.avatarInitials}
                </div>
                <div className="min-w-0">
                  <div className="text-ivory text-sm font-semibold truncate">
                    {t.name}
                  </div>
                  <div className="text-ivory/50 text-xs truncate">
                    {t.role} · {t.city}
                  </div>
                </div>
                <div className="ml-auto shrink-0">
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
