// ============================================================
// PRIMAD MARCENARIA — Tipos TypeScript Globais
// ============================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  imageAlt: string;
  size: "large" | "medium" | "small";
  aspectRatio?: string;
}

export type ProjectCategory =
  | "Todos"
  | "Suítes & Closets"
  | "Cozinhas Gourmet"
  | "Painéis & Portas"
  | "Corporativo";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  text: string;
  rating: number;
  avatarInitials: string;
}

export interface Differential {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
  highlightLabel: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhatsAppMessage {
  type: "residential" | "commercial" | "corporate";
  label: string;
  message: string;
}
