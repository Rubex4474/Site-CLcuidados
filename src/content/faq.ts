import type { FaqItem } from "@/types/content";

/**
 * Fonte única para o accordion de FAQ renderizado E para o JSON-LD
 * FAQPage (lib/seo/json-ld.ts) — os textos precisam ser idênticos nos
 * dois lugares, então nunca duplique essas perguntas em outro arquivo.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Como funciona o atendimento da CL Cuidados?",
    answer:
      "Oferecemos cuidados domiciliares personalizados, com profissionais qualificados selecionados para atender às necessidades específicas de cada assistido no conforto de sua casa.",
  },
  {
    question: "Existe atendimento 24 horas?",
    answer:
      "Sim. Disponibilizamos turnos de 12h ou planos de acompanhamento contínuo de 24 horas, conforme a necessidade da família.",
  },
  {
    question: "Quanto custa o atendimento da CL Cuidados?",
    answer:
      "O investimento varia de acordo com o plano de horas. Realizamos uma avaliação prévia para apresentar uma proposta personalizada.",
  },
  {
    question: "Como é feita a contratação?",
    answer:
      "O processo é simples: após a avaliação inicial das necessidades do assistido, apresentamos a proposta ideal. Com o aceite, o contrato é assinado e alocamos a equipe responsável.",
  },
  {
    question: "Existe multa em caso de cancelamento?",
    answer:
      "Trabalhamos com máximo de transparência. O cancelamento pode ser feito mediante aviso prévio estipulado em contrato, sem multas abusivas.",
  },
  {
    question: "Como funciona o aplicativo da CL Cuidados?",
    answer:
      "Pelo aplicativo, a família acompanha o diário de bordo digital, com registros de rotina e os horários do assistido.",
  },
  {
    question: "Vocês fazem substituição do profissional?",
    answer:
      "Sim. Garantimos a substituição rápida do profissional em casos de faltas, imprevistos ou incompatibilidade de perfil, sem interromper o atendimento.",
  },
  {
    question: "O que acontece se o profissional faltar?",
    answer:
      "Nossa equipe faz a gestão contínua de escalas e conta com um plano de contingência ágil. Caso ocorra alguma ausência, realizamos a substituição imediata do profissional para garantir a continuidade do serviço sem prejuízo à sua rotina.",
  },
  {
    question: "Quais profissionais atendem pela CL Cuidados?",
    answer:
      "Contamos com cuidadores de idosos, técnicos de enfermagem, além de acompanhamento e supervisão operacional.",
  },
];
