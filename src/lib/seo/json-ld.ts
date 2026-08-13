import type { FAQPage, WithContext } from "schema-dts";
import {
  ADDRESS,
  AREA_SERVED,
  BUSINESS_HOURS,
  CONTACT,
  GEO,
  SITE_CONFIG,
  SITE_FLAGS,
} from "@/lib/seo/site-config";
import { services } from "@/content/services";
import { plans } from "@/content/plans";
import type { FaqItem, GoogleReviewsData } from "@/types/content";

/**
 * schema.org permite "@type" como array quando não existe um subtipo
 * exato para o negócio (aqui: home care não-clínico, entre LocalBusiness
 * e MedicalBusiness). O schema-dts não modela bem esse caso, então
 * tipamos esse nó manualmente em vez de forçar os tipos rígidos da lib.
 */
type LocalBusinessGraph = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

export function buildLocalBusinessGraph(
  reviewsData: GoogleReviewsData | null,
): LocalBusinessGraph {
  const organization = {
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    sameAs: [CONTACT.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: AREA_SERVED,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços ${SITE_CONFIG.shortName}`,
      itemListElement: [
        ...services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${SITE_CONFIG.url}/#servicos`,
          },
        })),
        ...plans.map((plan) => ({
          "@type": "Offer",
          name: `Plano ${plan.name}`,
          description: plan.description,
          url: `${SITE_CONFIG.url}/#planos`,
          // Preço só entra no schema quando também está visível na página —
          // ver SITE_FLAGS.showPricing (site rodando sem preço por enquanto
          // para testar volume/qualidade de leads antes de exibi-lo).
          ...(SITE_FLAGS.showPricing
            ? { price: plan.priceValue, priceCurrency: "BRL" }
            : {}),
          itemOffered: {
            "@type": "Service",
            name: `Plano ${plan.name}`,
            description: plan.description,
          },
        })),
      ],
    },
    // Só entra quando a busca ao vivo no Google Places de fato trouxe dados
    // reais (ver src/lib/google-reviews.ts) — nunca fabricar avaliação.
    ...(SITE_FLAGS.emitReviewSchema && reviewsData
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewsData.rating,
            reviewCount: reviewsData.userRatingCount,
          },
          review: reviewsData.reviews.map((review) => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.name },
            reviewRating: { "@type": "Rating", ratingValue: review.rating },
            reviewBody: review.quote,
          })),
        }
      : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization],
  };
}

export function buildFaqPageSchema(items: FaqItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
