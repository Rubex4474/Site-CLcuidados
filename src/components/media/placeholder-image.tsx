import * as React from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  /** Proporção CSS, ex.: "4/5", "16/9". */
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Legenda visível com ícone, útil durante o desenvolvimento. */
  showLabel?: boolean;
}

/**
 * Enquanto não há fotografia real, mostra um painel em gradiente com a
 * paleta da marca (nunca banco de imagem genérico). Assim que `src` for
 * fornecido (fotos reais em public/images), passa a usar next/image com
 * lazy loading automático — o wrapper de aspect-ratio não muda, então o
 * layout permanece CLS-safe nas duas situações.
 */
export function PlaceholderImage({
  src,
  alt,
  aspect = "4/5",
  className,
  sizes = "100vw",
  priority = false,
  showLabel = true,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg bg-secondary", className)}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-end bg-gradient-to-br from-petrol-tint via-secondary to-primary/10 p-6"
        >
          {showLabel && (
            <div className="flex items-center gap-2 text-petrol/45">
              <ImageIcon className="h-4 w-4" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide">{alt}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
