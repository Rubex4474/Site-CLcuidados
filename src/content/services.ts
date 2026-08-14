import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    slug: "cuidador-de-idosos",
    icon: "Users",
    title: "Cuidador de Idosos",
    description:
      "Acompanhamento diário completo, com rotina, segurança e companhia de verdade.",
    imageAlt: "Cuidador atencioso auxiliando um idoso em uma residência moderna e iluminada",
    imageSrc: "/images/services/cuidador-de-idosos.png",
  },
  {
    slug: "cuidados-pos-operatorios",
    icon: "Stethoscope",
    title: "Cuidados Pós-Operatórios",
    description:
      "Suporte técnico especializado na recuperação, seguindo as orientações médicas à risca.",
    imageAlt: "Profissional de cuidados domiciliares acompanhando paciente em recuperação pós-operatória em casa",
    imageSrc: "/images/services/cuidados-pos-operatorios.png",
  },
  {
    slug: "acompanhamento-hospitalar",
    icon: "Building2",
    title: "Acompanhamento Hospitalar",
    description:
      "Presença qualificada ao lado do paciente durante internações, sem sobrecarregar a família.",
    imageAlt: "Acompanhante profissional ao lado de paciente durante internação hospitalar",
    imageSrc: "/images/services/acompanhamento-hospitalar.png",
  },
  {
    slug: "cuidados-paliativos",
    icon: "HeartPulse",
    title: "Cuidados Paliativos",
    description:
      "Conforto, dignidade e suporte humano em cada etapa, com sensibilidade e preparo técnico.",
    imageAlt: "Cuidadora oferecendo suporte humanizado a paciente em cuidados paliativos em ambiente residencial",
    imageSrc: "/images/services/cuidados-paliativos.png",
  },
  {
    slug: "assistencia-temporaria",
    icon: "CalendarDays",
    title: "Assistência Temporária",
    description:
      "Cobertura pontual para períodos específicos, com a mesma qualidade do atendimento contínuo.",
    imageAlt: "Cuidador auxiliando idoso durante período de assistência temporária em casa",
    imageSrc: "/images/services/assistencia-temporaria.png",
  },
  {
    slug: "assistencia-permanente",
    icon: "Infinity",
    title: "Assistência Permanente",
    description:
      "Gestão contínua e de longo prazo, com escala garantida e supervisão constante.",
    imageAlt: "Família e cuidador reunidos em ambiente residencial sofisticado durante assistência permanente",
    imageSrc: "/images/services/assistencia-permanente.png",
  },
  {
    slug: "banho-agendado-curativo",
    icon: "Bath",
    title: "Banho Agendado + Curativo",
    description:
      "Higiene assistida e curativos realizados com técnica correta, no horário combinado com a família.",
    imageAlt: "Cuidador realizando banho assistido e curativo em ambiente residencial",
    // PENDENTE: foto real a caminho — sem imageSrc, PlaceholderImage cobre.
  },
  {
    slug: "medicacao-a-domicilio",
    icon: "Pill",
    title: "Medicação a Domicílio",
    description:
      "Administração e controle de medicamentos no horário certo, com registro para acompanhamento da família.",
    imageAlt: "Cuidador organizando e administrando medicação de paciente em casa",
    // PENDENTE: foto real a caminho — sem imageSrc, PlaceholderImage cobre.
  },
];
