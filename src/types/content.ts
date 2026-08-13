export interface PillarCard {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonItem {
  text: string;
}

export interface TimelineStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface TechFeature {
  icon: string;
  title: string;
  description: string;
}

export interface DifferentiatorItem {
  icon: string;
  label: string;
}

export interface ServiceItem {
  slug: string;
  icon: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatarAlt: string;
  rating: number;
  /** Presente só em avaliações reais do Google — foto do autor. */
  avatarUrl?: string;
  /** Presente só em avaliações reais do Google — link para a avaliação original. */
  sourceUrl?: string;
}

export interface GoogleReviewsData {
  rating: number;
  userRatingCount: number;
  reviews: TestimonialItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroStat {
  icon: string;
  label: string;
}

export interface PlanItem {
  slug: string;
  name: string;
  price: string;
  priceSuffix: string;
  cadence: string;
  description: string;
  imageAlt: string;
  /** valor numérico em BRL, usado só no JSON-LD — não exibido diretamente */
  priceValue: number;
  featured?: boolean;
  /** Selo do nível do plano (bronze/prata/ouro), exibido sobre a imagem. */
  badgeSrc: string;
}

export interface PartnerItem {
  name: string;
  specialty: string;
  logoSrc: string;
  logoAlt: string;
}
