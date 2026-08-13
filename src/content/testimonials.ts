import type { TestimonialItem } from "@/types/content";

/**
 * CONTEÚDO DE EXEMPLO — só é usado como fallback quando a busca ao vivo de
 * avaliações reais do Google (src/lib/google-reviews.ts) falha ou não está
 * configurada (sem GOOGLE_PLACES_API_KEY). Nesse caso o JSON-LD também não
 * gera Review/AggregateRating — ver SITE_FLAGS.emitReviewSchema em
 * lib/seo/site-config.ts. Dado estruturado de avaliação precisa ser
 * verificável, nunca fabricado.
 */
export const testimonials: TestimonialItem[] = [
  {
    name: "Depoimento de exemplo",
    role: "Familiar de paciente",
    quote:
      "Espaço reservado para um depoimento real de família atendida pela CL Cuidados. Substituir por texto autêntico antes da publicação.",
    avatarAlt: "Retrato de familiar de paciente atendido pela CL Cuidados",
    rating: 5,
  },
  {
    name: "Depoimento de exemplo",
    role: "Familiar de paciente",
    quote:
      "Espaço reservado para um segundo depoimento real. Substituir por texto autêntico antes da publicação.",
    avatarAlt: "Retrato de familiar de paciente atendido pela CL Cuidados",
    rating: 5,
  },
  {
    name: "Depoimento de exemplo",
    role: "Familiar de paciente",
    quote:
      "Espaço reservado para um terceiro depoimento real. Substituir por texto autêntico antes da publicação.",
    avatarAlt: "Retrato de familiar de paciente atendido pela CL Cuidados",
    rating: 5,
  },
];
