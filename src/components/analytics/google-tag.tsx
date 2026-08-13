import Script from "next/script";

/**
 * Carrega o gtag.js só quando NEXT_PUBLIC_GA_MEASUREMENT_ID estiver
 * configurado em .env.local — sem isso, não renderiza nada (evita disparar
 * uma tag quebrada/vazia em ambiente de desenvolvimento). Uma vez com o ID
 * real do GA4, os eventos disparados por src/lib/analytics.ts já aparecem
 * como eventos-chave, prontos para importar como conversão no Google Ads.
 */
export function GoogleTag() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
