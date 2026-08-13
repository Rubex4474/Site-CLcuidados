import Image from "next/image";
import { Building2, Check, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { comparisonCl, comparisonOthers } from "@/content/comparison";
import { SITE_CONFIG } from "@/lib/seo/site-config";

export function ComparisonSection() {
  return (
    <section id="diferenca" className="bg-white py-28 lg:py-36">
      <div className="container">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Badge>Comparativo</Badge>
          <h2 className="text-balance font-display text-2xl font-medium leading-snug text-foreground lg:text-3xl">
            Por que escolher a CL Cuidados?
          </h2>
        </FadeIn>

        <div className="relative mx-auto mt-16 grid max-w-4xl gap-6 lg:grid-cols-2 lg:gap-0">
          <FadeIn
            direction="left"
            className="rounded-lg border border-border bg-secondary/60 p-8 lg:rounded-r-none lg:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-muted-foreground/70 shadow-subtle">
                <Building2 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-muted-foreground">Outras empresas</h3>
            </div>
            <ul className="mt-8 flex flex-col gap-4">
              {comparisonOthers.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground/5">
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn
            direction="right"
            className="relative rounded-lg border border-primary/20 bg-primary p-8 text-primary-foreground shadow-card-hover lg:rounded-l-none lg:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-subtle">
                <Image
                  src="/images/brand/logo-icon.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
              </div>
              <h3 className="font-display text-xl">{SITE_CONFIG.shortName}</h3>
            </div>
            <ul className="mt-8 flex flex-col gap-4">
              {comparisonCl.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-petrol">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <div
            className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-teal text-xs font-bold uppercase tracking-widest2 text-petrol shadow-card lg:flex"
            aria-hidden="true"
          >
            vs
          </div>
        </div>
      </div>
    </section>
  );
}
