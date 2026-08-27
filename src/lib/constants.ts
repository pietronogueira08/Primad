// ============================================================
// PRIMAD MARCENARIA — Constantes & Dados do Site
// ⚠️  Atualize WHATSAPP_NUMBER com o número real antes de publicar
// ============================================================

import type {
  NavItem,
  Stat,
  Project,
  Testimonial,
  Differential,
  ProcessStep,
  WhatsAppMessage,
} from "@/types";

// ── WhatsApp ─────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "5521999999999"; // ← Substitua pelo número real

export const WHATSAPP_MESSAGES: WhatsAppMessage[] = [
  {
    type: "residential",
    label: "Residencial",
    message:
      "Olá! Gostaria de agendar uma consultoria para um projeto residencial de alto padrão com a Primad Marcenaria. Poderia me fornecer mais informações?",
  },
  {
    type: "commercial",
    label: "Comercial",
    message:
      "Olá! Tenho interesse em desenvolver um projeto de marcenaria para um espaço comercial. Gostaria de saber mais sobre os serviços da Primad Marcenaria.",
  },
  {
    type: "corporate",
    label: "Corporativo",
    message:
      "Olá! Gostaria de solicitar uma consultoria exclusiva da Primad Marcenaria para um projeto corporativo de alto padrão.",
  },
];

// ── Navegação ─────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// ── Métricas de Autoridade ────────────────────────────────────
export const STATS: Stat[] = [
  {
    value: "500",
    suffix: "+",
    label: "Projetos Entregues",
    description: "Ambientes transformados em obras de arte vivas",
  },
  {
    value: "5.0",
    suffix: "★",
    label: "Avaliação Google",
    description: "Excelência reconhecida por clientes e arquitetos",
  },
  {
    value: "15",
    suffix: "+",
    label: "Anos de Tradição",
    description: "Décadas de expertise em marcenaria de luxo no RJ",
  },
];

// ── Diferenciais Tecnológicos ─────────────────────────────────
export const DIFFERENTIALS: Differential[] = [
  {
    id: "promob",
    icon: "Monitor",
    title: "Modelagem 3D & Engenharia Promob",
    description:
      "Compatibilização perfeita com plantas de arquitetura. Visualize cada detalhe do seu projeto antes da fabricação, com renderizações fotorrealistas e ajustes em tempo real em parceria com seu arquiteto.",
    highlight: "100%",
    highlightLabel: "Compatível com projetos de arquitetura",
  },
  {
    id: "cnc",
    icon: "Cpu",
    title: "Corte & Usinagem CNC Milimétrica",
    description:
      "Tecnologia de ponta com precisão de ±0,1mm garante encaixes invisíveis, zero desperdício de material nobre e acabamentos perfeitos em MDF, madeira maciça e painéis revestidos.",
    highlight: "±0,1mm",
    highlightLabel: "Precisão de corte industrial",
  },
  {
    id: "assembly",
    icon: "Wrench",
    title: "Montagem & Ferragens de Alta Performance",
    description:
      "Instalação especializada com ferragens importadas Blum e Häfele — amortecimento silencioso, lacas italianas certificadas, lâminas de madeira natural e cortiças naturais selecionadas.",
    highlight: "Blum & Häfele",
    highlightLabel: "Ferragens importadas de alta performance",
  },
];

// ── Portfólio de Projetos ─────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "suite-master-barra",
    title: "Suíte Master — Barra da Tijuca",
    category: "Suítes & Closets",
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85",
    imageAlt: "Suíte master com marcenaria sob medida em madeira nogueira e iluminação embutida",
    size: "large",
  },
  {
    id: "closet-luminoso-ipanema",
    title: "Closet Iluminado — Ipanema",
    category: "Suítes & Closets",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
    imageAlt: "Closet planejado com iluminação LED embutida e portas deslizantes espelhadas",
    size: "medium",
  },
  {
    id: "cozinha-gourmet-lagoa",
    title: "Cozinha Gourmet — Lagoa",
    category: "Cozinhas Gourmet",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85",
    imageAlt: "Cozinha gourmet com ilha em madeira maciça e armários em laca off-white",
    size: "large",
  },
  {
    id: "ilha-madeira-leblon",
    title: "Ilha em Madeira Maciça — Leblon",
    category: "Cozinhas Gourmet",
    imageUrl: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=85",
    imageAlt: "Ilha de cozinha em nogueira maciça com bancada em quartzo",
    size: "small",
  },
  {
    id: "painel-ripado-recreio",
    title: "Painel Ripado — Recreio",
    category: "Painéis & Portas",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=85",
    imageAlt: "Painel ripado em madeira com iluminação indireta embutida em sala de estar",
    size: "medium",
  },
  {
    id: "porta-mimetizada-niteroi",
    title: "Porta Mimetizada — Niterói",
    category: "Painéis & Portas",
    imageUrl: "https://images.unsplash.com/photo-1558618047-f4e80e7b3d84?w=600&q=85",
    imageAlt: "Porta mimetizada com painel de marcenaria criando efeito invisível na parede",
    size: "small",
  },
  {
    id: "clinica-premium-buzios",
    title: "Clínica Premium — Búzios",
    category: "Corporativo",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85",
    imageAlt: "Interior de clínica premium com recepção em marcenaria sob medida e iluminação sofisticada",
    size: "large",
  },
  {
    id: "escritorio-corporativo-centro",
    title: "Escritório Corporativo — Centro RJ",
    category: "Corporativo",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85",
    imageAlt: "Escritório corporativo de alto padrão com marcenaria planejada e painéis acústicos",
    size: "medium",
  },
];

// ── Etapas do Processo ────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "briefing",
    number: "01",
    title: "Briefing & Análise Arquitetônica",
    description:
      "Reunião técnica aprofundada com o cliente, arquiteto ou designer para alinhamento total do projeto. Analisamos o espaço, o estilo de vida, as referências estéticas e as especificações técnicas da planta.",
    icon: "FileText",
  },
  {
    id: "design",
    number: "02",
    title: "Refinamento 3D & Escolha de Matérias-Primas",
    description:
      "Modelagem completa em Promob com renderizações fotorrealistas. Seleção personalizada de madeiras, lâminas, laminados, ferragens e acabamentos — com apresentação de amostras físicas para aprovação.",
    icon: "Layers",
  },
  {
    id: "fabrication",
    number: "03",
    title: "Usinagem & Fabricação Própria",
    description:
      "Produção 100% própria em nossa fábrica equipada com tecnologia CNC de precisão milimétrica. Controle rigoroso de qualidade em cada peça — do corte ao acabamento em câmara climatizada.",
    icon: "Settings",
  },
  {
    id: "delivery",
    number: "04",
    title: "Montagem Limpa & Entrega com Prazo Garantido",
    description:
      "Equipe especializada realiza a montagem com proteção total do ambiente. Entrega com prazo contratual garantido, revisão final técnica e suporte pós-instalação.",
    icon: "CheckCircle",
  },
];

// ── Depoimentos ───────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dra. Camila Ferreira",
    role: "Proprietária",
    city: "Barra da Tijuca, RJ",
    text: "A Primad transformou completamente nossa suíte master. A qualidade dos materiais e o nível de acabamento são simplesmente incomparáveis. Cada detalhe foi pensado com perfeição — superaram todas as expectativas.",
    rating: 5,
    avatarInitials: "CF",
  },
  {
    id: "testimonial-2",
    name: "Arq. Rafael Monteiro",
    role: "Arquiteto — Studio RM",
    city: "Ipanema, RJ",
    text: "Como arquiteto, trabalho com vários fornecedores de marcenaria no Rio. A Primad se destaca pela fidelidade absoluta ao projeto e pela integração com o Promob. São meu parceiro exclusivo para projetos de alto padrão.",
    rating: 5,
    avatarInitials: "RM",
  },
  {
    id: "testimonial-3",
    name: "Isabella Drummond",
    role: "Designer de Interiores",
    city: "Búzios, RJ",
    text: "Indico a Primad para todos os meus clientes da Região dos Lagos. A qualidade da madeira maciça, os encaixes invisíveis e o prazo cumprido à risca fazem toda a diferença em projetos de altíssimo padrão.",
    rating: 5,
    avatarInitials: "ID",
  },
  {
    id: "testimonial-4",
    name: "Carlos Eduardo Pinto",
    role: "Empresário",
    city: "Niterói, RJ",
    text: "Contratei a Primad para a reforma completa do meu escritório e a transformação foi incrível. Profissionalismo do início ao fim, prazo respeitado e resultado que impressiona a todos os visitantes.",
    rating: 5,
    avatarInitials: "CE",
  },
  {
    id: "testimonial-5",
    name: "Ana Beatriz Santos",
    role: "Proprietária",
    city: "Leblon, RJ",
    text: "A cozinha gourmet que a Primad projetou e instalou é o coração da nossa casa. A ilha em madeira maciça é simplesmente única. O atendimento foi impecável do briefing à entrega final.",
    rating: 5,
    avatarInitials: "AB",
  },
  {
    id: "testimonial-6",
    name: "Arq. Mariana Costa",
    role: "Arquiteta — MC Arquitetura",
    city: "Recreio, RJ",
    text: "Parceria de anos com a Primad. A qualidade é consistente projeto após projeto, e a equipe de montagem é extremamente profissional e cuidadosa com o ambiente do cliente. Recomendo sem hesitar.",
    rating: 5,
    avatarInitials: "MC",
  },
];
