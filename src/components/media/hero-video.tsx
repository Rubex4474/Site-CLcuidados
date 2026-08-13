"use client";

import * as React from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

// No servidor (e no primeiro paint do cliente, antes da hidratação
// assentar) não há como saber a largura real da tela — usamos o vídeo
// mobile como padrão nesse instante, então o React troca sozinho pro
// desktop logo em seguida se for o caso, sem warning de hidratação.
function getServerSnapshot() {
  return false;
}

/**
 * Antes tínhamos os 2 vídeos (desktop e mobile) no DOM ao mesmo tempo,
 * um deles só escondido via CSS "hidden lg:block" — mas autoplay/preload
 * ignora display:none e o navegador baixava os dois de qualquer jeito,
 * quase dobrando o tráfego logo na largada do site. Em sinal fraco isso
 * é o tipo de coisa que trava o carregamento inteiro. Aqui só montamos
 * a tag <video> certa pro tamanho de tela atual, então o navegador nunca
 * sequer inicia o download do outro arquivo.
 *
 * preload="metadata" (não "auto"): o vídeo de fundo é decorativo, não
 * pode competir por banda com o HTML/CSS/JS que realmente definem se a
 * página aparece — em conexão ruim isso é a diferença entre o site
 * carregar (sem vídeo por um instante, mostrando o poster) ou travar
 * tudo. O poster é um frame estático do próprio vídeo, então a primeira
 * impressão já é a foto certa mesmo antes do vídeo carregar.
 */
export function HeroVideo() {
  const isDesktop = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (isDesktop) {
    return (
      <video
        className="absolute inset-0 h-full w-full translate-y-24 origin-top scale-110 object-cover object-top"
        src="/videos/hero-loop.mp4"
        poster="/videos/hero-loop-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero-loop-mobile.mp4"
      poster="/videos/hero-loop-mobile-poster.jpg"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
