"use client";

import React from "react";
import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { PrimadLogo } from "@/components/ui/PrimadLogo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { formatWhatsAppLink } from "@/lib/utils";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsapp = formatWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGES[0].message);

  return (
    <footer
      className="relative bg-onyx border-t border-white/8"
      aria-label="Rodapé da Primad Marcenaria"
    >
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <PrimadLogo width={130} height={82} className="mb-6" />
              <p className="text-ivory/50 text-sm leading-relaxed mb-6 max-w-[220px]">
                Marcenaria de alto padrão sob medida para residências e espaços
                corporativos de luxo.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/primad_marcenaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Primad Marcenaria"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Primad Marcenaria"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-ivory font-semibold text-sm tracking-widest uppercase mb-6">
                Navegação
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-ivory/50 text-sm hover:text-gold transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Services */}
          <div>
            <ScrollReveal delay={0.15}>
              <h3 className="text-ivory font-semibold text-sm tracking-widest uppercase mb-6">
                Serviços
              </h3>
              <ul className="flex flex-col gap-3 text-ivory/50 text-sm">
                {[
                  "Móveis Residenciais",
                  "Cozinhas Planejadas",
                  "Closets & Roupeiros",
                  "Painéis & Portas",
                  "Marcenaria Corporativa",
                  "Consultoria 3D Promob",
                ].map((s) => (
                  <li key={s} className="hover:text-ivory/80 transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Contact info */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-ivory font-semibold text-sm tracking-widest uppercase mb-6">
                Atendimento
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-ivory/50 text-sm">
                  <MapPin size={15} className="text-gold/60 mt-0.5 shrink-0" />
                  <span>
                    Rio de Janeiro · Niterói{" "}
                    <br /> Região dos Lagos, RJ
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} className="text-gold/60 shrink-0" />
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  >
                    WhatsApp Comercial
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={15} className="text-gold/60 shrink-0" />
                  <a
                    href="mailto:contato@primadmarcenaria.com.br"
                    className="text-ivory/50 text-sm hover:text-gold transition-colors"
                  >
                    contato@primadmarcenaria.com.br
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ivory/30 text-xs">
            © {year} Primad Marcenaria. Todos os direitos reservados.
          </p>
          <p className="text-ivory/20 text-xs">
            Desenvolvido com precisão milimétrica ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
