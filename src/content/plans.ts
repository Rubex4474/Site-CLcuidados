import type { PlanItem } from "@/types/content";

export const plans: PlanItem[] = [
  {
    slug: "bronze-6h",
    name: "Bronze 6h",
    price: "R$ 4.900",
    priceSuffix: "/ mês",
    priceValue: 4900,
    cadence: "Segunda a sexta",
    description: "Seis horas diárias de cuidado, com toda a supervisão e gestão da CL.",
    imageAlt: "Cuidador acompanhando idoso durante o período diurno em casa",
    badgeSrc: "/images/plans/badge-bronze.png",
    // Único plano com valor visível — pedido do cliente: filtra o lead
    // logo na página, sem gastar tempo do time com quem não topa nem a
    // entrada.
    showStartingPrice: true,
  },
  {
    slug: "bronze-8h",
    name: "Bronze 8h",
    price: "R$ 6.900",
    priceSuffix: "/ mês",
    priceValue: 6900,
    cadence: "Segunda a sexta",
    description: "Oito horas diárias de cuidado, com toda a supervisão e gestão da CL.",
    imageAlt: "Cuidador auxiliando idoso em atividades diárias com atenção",
    badgeSrc: "/images/plans/badge-bronze.png",
    customPriceLabel: "Proposta personalizada",
  },
  {
    slug: "silver-12h",
    name: "Silver 12h",
    price: "R$ 9.900",
    priceSuffix: "/ mês",
    priceValue: 9900,
    cadence: "Todos os dias",
    description: "Doze horas diárias de cuidado contínuo, todos os dias da semana.",
    imageAlt: "Cuidador oferecendo suporte contínuo a idoso ao longo do dia",
    badgeSrc: "/images/plans/badge-prata.png",
    customPriceLabel: "Proposta personalizada",
  },
  {
    slug: "gold-24h",
    name: "Gold 24h",
    price: "R$ 15.900",
    priceSuffix: "/ mês",
    priceValue: 15900,
    cadence: "Todos os dias",
    description: "Cobertura total, 24 horas por dia, com escala garantida e substituição imediata.",
    imageAlt: "Equipe de cuidadores garantindo cobertura 24 horas para o paciente",
    featured: true,
    badgeSrc: "/images/plans/badge-ouro.png",
    customPriceLabel: "Proposta personalizada",
  },
];
