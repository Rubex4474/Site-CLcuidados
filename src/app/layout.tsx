import type { Metadata, Viewport } from "next";

import { poppins } from "@/app/fonts";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsappFloatButton } from "@/components/layout/whatsapp-float-button";
import { GoogleTag } from "@/components/analytics/google-tag";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Cuidador de Idosos em Indaiatuba`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans antialiased">
        <GoogleTag />
        <SkipLink />
        {children}
        <WhatsappFloatButton />
      </body>
    </html>
  );
}
