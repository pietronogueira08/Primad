"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Home, Building2, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MagneticWrapper } from "@/components/motion/MagneticWrapper";
import { Badge } from "@/components/ui/Badge";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from "@/lib/constants";
import { formatWhatsAppLink } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { WhatsAppMessage } from "@/types";

const icons: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Building2,
  corporate: Briefcase,
};

export function CTAContactSection() {
  const [selected, setSelected] = React.useState<WhatsAppMessage>(
    WHATSAPP_MESSAGES[0]
  );
  const [name, setName] = React.useState("");

  const buildWhatsAppLink = () => {
    const greeting = name ? `Olá! Meu nome é ${name}. ` : "";
    const finalMessage = greeting + selected.message;
    return formatWhatsAppLink(WHATSAPP_NUMBER, finalMessage);
  };

  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 lg:py-44 overflow-hidden"
      aria-label="Contato e consultoria da Primad"
      style={{
        background:
          "linear-gradient(135deg, #080808 0%, #1A0E00 50%, #3D2B0A 100%)",
      }}
    >
      {/* Decorative radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Header */}
          <ScrollReveal>
            <Badge className="mb-8">Consultoria Exclusiva</Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-ivory text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.1] tracking-tight mb-6">
              Pronto para elevar o{" "}
              <span className="text-gradient-gold-animated">
                nível do seu ambiente?
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-ivory/60 text-lg leading-relaxed mb-12 max-w-xl">
              Selecione o tipo do seu projeto e fale diretamente com nossa equipe
              via WhatsApp. Resposta em até 2 horas úteis.
            </p>
          </ScrollReveal>

          {/* Project type selector */}
          <ScrollReveal delay={0.3} className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              {WHATSAPP_MESSAGES.map((msg) => {
                const Icon = icons[msg.type];
                const isActive = selected.type === msg.type;
                return (
                  <button
                    key={msg.type}
                    onClick={() => setSelected(msg)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 font-medium text-sm",
                      isActive
                        ? "border-gold bg-gold/15 text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        : "border-white/15 text-ivory/60 hover:border-gold/30 hover:text-ivory/80"
                    )}
                    aria-pressed={isActive}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                    {msg.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Name input */}
          <ScrollReveal delay={0.35} className="w-full max-w-md mb-6">
            <input
              type="text"
              placeholder="Seu nome (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/15 text-ivory placeholder:text-ivory/35 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300"
              aria-label="Seu nome"
            />
          </ScrollReveal>

          {/* WhatsApp CTA Button */}
          <ScrollReveal delay={0.4}>
            <MagneticWrapper strength={0.3}>
              <motion.a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative inline-flex items-center gap-3 px-10 py-5 rounded-full",
                  "bg-gradient-gold text-onyx font-bold text-base tracking-wide",
                  "overflow-hidden group"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Abrir WhatsApp da Primad Marcenaria"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
                {/* Glow */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "0 0 60px rgba(212,175,55,0.5)" }}
                />
                <MessageCircle size={22} strokeWidth={2} className="relative z-10" />
                <span className="relative z-10">Falar no WhatsApp Agora</span>
              </motion.a>
            </MagneticWrapper>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="mt-6 text-ivory/35 text-xs tracking-wide">
              Atendemos Rio de Janeiro · Niterói · Região dos Lagos
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
