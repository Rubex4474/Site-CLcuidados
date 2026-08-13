import "server-only";

import { CONTACT } from "@/lib/seo/site-config";
import type { GoogleReviewsData } from "@/types/content";

interface PlacesApiReview {
  rating: number;
  text?: { text: string };
  authorAttribution?: {
    displayName: string;
    photoUri?: string;
    uri?: string;
  };
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
}

/**
 * Busca as avaliações reais do Google Business Profile via Places API (New).
 * Roda só no servidor (chave nunca chega ao navegador) e usa o cache de
 * fetch do Next.js — revalida 1x por dia, então no pior caso fazemos ~30
 * chamadas/mês, bem dentro do crédito mensal grátis do Google Maps Platform.
 *
 * Retorna null em qualquer falha (chave revogada, cota, rede etc.) para que
 * quem chamar caia de volta no conteúdo de exemplo em vez de quebrar a build.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${CONTACT.googlePlaceId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) return null;

    const data = (await res.json()) as PlacesApiResponse;
    if (!data.rating || !data.reviews?.length) return null;

    return {
      rating: data.rating,
      userRatingCount: data.userRatingCount ?? 0,
      reviews: data.reviews
        .filter((review) => review.text?.text && review.authorAttribution)
        .map((review) => ({
          name: review.authorAttribution!.displayName,
          role: "Avaliação no Google",
          quote: review.text!.text,
          avatarAlt: `Foto de perfil de ${review.authorAttribution!.displayName}`,
          rating: review.rating,
          avatarUrl: review.authorAttribution!.photoUri,
          sourceUrl: review.googleMapsUri,
        })),
    };
  } catch {
    return null;
  }
}
