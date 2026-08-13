import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // O CSS normalmente vai num arquivo .css separado, comprimido com
  // Brotli — em pelo menos um caso real (celular de cliente em rede
  // móvel específica), esse arquivo chegava corrompido/vazio, deixando o
  // site inteiro sem estilo, enquanto o HTML (que não usa Brotli aqui) e
  // as imagens chegavam normais. Provável proxy de operadora que mexe na
  // resposta comprimida sem entender o formato. Embutir o CSS direto no
  // HTML elimina esse arquivo separado — o CSS passa a viajar junto do
  // HTML, que já comprovadamente chega íntegro nesse cenário.
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
