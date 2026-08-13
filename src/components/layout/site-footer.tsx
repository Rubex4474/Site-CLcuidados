import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import { ADDRESS, BUSINESS_HOURS, CONTACT, SITE_CONFIG } from "@/lib/seo/site-config";
import { buildWhatsappLink, GENERIC_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { TrackedWhatsappLink } from "@/components/analytics/tracked-whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-teal/25 bg-foreground text-background">
      <div className="container grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/brand/logo-icon.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-semibold text-background">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-xs tracking-widest2 text-teal">Domiciliares</span>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-background/70">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-background/70">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-teal">
            Contato
          </span>
          <TrackedWhatsappLink
            href={buildWhatsappLink(GENERIC_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-background"
            eventName={ANALYTICS_EVENTS.whatsappDirect}
            eventParams={{ location: "footer_primary" }}
          >
            <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {CONTACT.phoneDisplay}
          </TrackedWhatsappLink>
          <TrackedWhatsappLink
            href={buildWhatsappLink(GENERIC_WHATSAPP_MESSAGE, CONTACT.whatsappNumberSecondary)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-background"
            eventName={ANALYTICS_EVENTS.whatsappDirect}
            eventParams={{ location: "footer_secondary" }}
          >
            <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {CONTACT.phoneDisplaySecondary}
          </TrackedWhatsappLink>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 transition-colors hover:text-background"
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-background"
          >
            <AtSign className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {CONTACT.instagramHandle}
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>
              {ADDRESS.streetAddress}
              <br />
              {ADDRESS.addressLocality} – {ADDRESS.addressRegion}, {ADDRESS.postalCode}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-background/70">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-teal">
            Atendimento
          </span>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span>{BUSINESS_HOURS.display}</span>
          </div>
          <Button asChild variant="teal" size="sm" className="w-fit">
            <a href={CONTACT.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" strokeWidth={2} />
              Ver no Google Maps
            </a>
          </Button>
          <div className="overflow-hidden rounded-lg border border-background/10">
            <iframe
              src={CONTACT.googleMapsEmbedSrc}
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mapa de localização da CL Cuidados Domiciliares"
              className="h-[180px] w-full"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            <span className="italic">Amor em Cuidar</span>
            <Link href="/politica-de-privacidade" className="transition-colors hover:text-background">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
