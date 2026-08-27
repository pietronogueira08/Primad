# Primad Marcenaria — Landing Page de Luxo

Landing page editorial de altíssimo padrão para a **Primad Marcenaria**, referência em marcenaria sob medida residencial e comercial de luxo no Rio de Janeiro, Niterói e Região dos Lagos.

## ✨ Stack

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + `clsx` + `tailwind-merge`
- **Animações:** Framer Motion (spring physics)
- **Ícones:** Lucide React
- **Fontes:** Playfair Display (display serif) + Inter (sans-serif)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura

```
src/
├── app/              # App Router (layout, page, globals.css)
├── components/
│   ├── ui/           # Button, Badge, Card, CustomCursor, NoiseOverlay, PrimadLogo
│   ├── motion/       # ScrollReveal, ParallaxContainer, MagneticWrapper, TiltCard
│   └── sections/     # Navbar, Hero, PrecisionTech, BentoPortfolio, ProcessTimeline,
│                     # Testimonials, CTAContact, Footer
├── lib/
│   ├── constants.ts  # ⚠️ Edite aqui: WhatsApp, projetos, depoimentos
│   └── utils.ts
└── types/
    └── index.ts
```

## ⚙️ Configuração antes de publicar

Edite `src/lib/constants.ts`:

```ts
// Substitua pelo número real (só dígitos, com DDI)
export const WHATSAPP_NUMBER = "5521999999999";
```

## 🎨 Design System

| Token | Valor |
|---|---|
| Fundo primário | `#080808` (Preto Ônix) |
| Dourado Primad | `#D4AF37` |
| Dourado Claro | `#E5C378` |
| Âmbar Bronze | `#B37D3E` |
| Nogueira | `#8C5828` |
| Tipografia display | Playfair Display |
| Tipografia corpo | Inter |

## 📦 Build para produção

```bash
npm run build
npm run start
```

## 🌐 Deploy recomendado

[Vercel](https://vercel.com) — zero config para Next.js.

---

Desenvolvido com precisão milimétrica ✦
