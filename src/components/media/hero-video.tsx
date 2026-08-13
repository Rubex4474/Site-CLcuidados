"use client";

import * as React from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Antes tínhamos os 2 vídeos (desktop e mobile) no DOM ao mesmo tempo,
 * um deles só escondido via CSS "hidden lg:block" — mas autoplay/preload
 * ignora display:none e o navegador baixava os dois de qualquer jeito,
 * quase dobrando o tráfego logo na largada do site. Em sinal fraco isso
 * é o tipo de coisa que trava o carregamento inteiro. Aqui só montamos
 * a tag <video> certa pro tamanho de tela atual, então o navegador nunca
 * sequer inicia o download do outro arquivo.
 */
export function HeroVideo() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    setIsDesktop(mql.matches);
    const onChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  if (isDesktop === null) return null;

  if (isDesktop) {
    return (
      <video
        className="absolute inset-0 h-full w-full translate-y-24 origin-top scale-110 object-cover object-top"
        src="/videos/hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero-loop-mobile.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
