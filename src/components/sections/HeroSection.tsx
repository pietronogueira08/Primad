"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { formatWhatsAppLink } from "@/lib/utils";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES, STATS } from "@/lib/constants";

// Animated number counter
function Counter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = React.useState("0");

  React.useEffect(() => {
    if (!isInView) return;
    const numericValue = parseFloat(value);
    const isDecimal = value.includes(".");
    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      setDisplayed(
        isDecimal ? current.toFixed(1) : Math.floor(current).toString()
      );
      if (step >= steps) {
        clearInterval(timer);
        setDisplayed(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayed}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightX = useSpring(useTransform(mouseX, [0, 1], ["-20%", "120%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const lightY = useSpring(useTransform(mouseY, [0, 1], ["-20%", "120%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const whatsappLink = formatWhatsAppLink(
    WHATSAPP_NUMBER,
    WHATSAPP_MESSAGES[0].message
  );

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 220, damping: 24, mass: 0.8 },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Seção principal da Primad Marcenaria"
    >
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-[-5%]"
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/60 to-onyx" />
        {/* Ambient light following mouse */}
        <motion.div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at ${lightX} ${lightY}, rgba(212,175,55,0.18) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container w-full py-28 md:py-36 lg:py-44 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge>Marcenaria Autoral & Engenharia de Interiores</Badge>
          </motion.div>

          {/* Headline with mask reveal */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="font-display font-bold text-ivory leading-[1.08] tracking-tight text-[clamp(2.8rem,7vw,6rem)]">
              Transformamos Projetos{" "}
              <br className="hidden sm:block" />
              Arquitetônicos em{" "}
              <span className="text-gradient-gold-animated">
                Obras de Arte Vivas.
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-ivory/65 text-lg md:text-xl leading-relaxed font-light"
          >
            Design sob medida, tecnologia CNC industrial, modelagem Promob
            precisa ao milímetro — para residências e espaços comerciais
            de alto padrão no{" "}
            <span className="text-ivory/90 font-medium">
              Rio de Janeiro, Niterói e Região dos Lagos.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <LinkButton
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              magnetic
            >
              Solicitar Consultoria Exclusiva
            </LinkButton>

            <LinkButton
              href="#portfolio"
              variant="secondary"
              size="lg"
              magnetic
            >
              <Play size={16} className="fill-gold text-gold" />
              Ver Portfólio de Obras
            </LinkButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-8 pt-8 border-t border-white/10 w-full justify-center"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-ivory text-sm font-semibold tracking-wide">
                  {stat.label}
                </div>
                <div className="text-ivory/45 text-xs max-w-[160px] text-center">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
