"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const REVEAL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 72, scale: 0.82, rotate: -3 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Retângulo exato da área de tela dentro de "phone-frame.png" (medido por
// varredura de pixel na imagem 429×638) — a moldura é reta, sem
// perspectiva/inclinação, então um inset() simples já basta. O vídeo (MP4,
// sem canal alpha) fica clipado nesse retângulo e a moldura — essa sim com
// transparência real — entra por cima, escondendo a borda retangular do
// vídeo atrás do contorno recortado do aparelho.
const SCREEN_CLIP_PATH = "inset(8.46% 20.75% 8.46% 20.28%)";

interface PhoneMockupProps {
  className?: string;
}

export function PhoneMockup({ className }: PhoneMockupProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  // once: false — o cliente pediu que a animação (e o vídeo) reiniciem toda
  // vez que a seção reentra na tela, não só na primeira vez. Como o <video>
  // só é montado enquanto isInView é true, cada reentrada monta um elemento
  // novo e o vídeo recomeça do primeiro frame sozinho.
  const isInView = useInView(wrapperRef, { once: false, margin: "-80px" });

  return (
    // Sem gate de prefers-reduced-motion aqui de propósito: pedido
    // explícito do cliente pra animação (e o vídeo) sempre rodarem ao entrar
    // na seção — mesma decisão já tomada para o autoplay do carrossel de
    // depoimentos, e pelo mesmo motivo (o navegador de teste/do cliente
    // reporta reduced-motion, o que travava a animação).
    <motion.div
      ref={wrapperRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={REVEAL_VARIANTS}
      className={cn("relative mx-auto w-full max-w-[340px] lg:max-w-full", className)}
      style={{ aspectRatio: "429 / 638" }}
    >
      {/* Luz de estúdio desfocada atrás do aparelho — numa seção escura, uma
          sombra preta comum some contra o próprio fundo escuro. Isso é o que
          realmente vende a sensação de "flutuando", não a sombra em si. */}
      <div
        className="absolute inset-x-[-20%] top-[5%] -z-10 aspect-square rounded-full bg-gradient-to-br from-white/25 via-teal/25 to-transparent blur-[80px]"
        aria-hidden="true"
      />

      <div className="absolute inset-0">
        {/* Vídeo (convertido do GIF original enviado pelo cliente — 15MB em
            GIF virou ~230KB em MP4 com qualidade igual). MP4 não tem canal
            alpha, então recortamos só a área da tela e deixamos a moldura
            transparente por cima cobrir o resto — sem isso, aparecia um
            retângulo branco em volta do aparelho. */}
        <div className="absolute inset-0" style={{ clipPath: SCREEN_CLIP_PATH }}>
          {isInView && (
            <video
              className="h-full w-full object-cover"
              src="/videos/app-demo.mp4"
              aria-label="Demonstração do aplicativo da CL Cuidados em uso"
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Moldura do aparelho (fundo transparente) por cima — só a borda/
            entalhe da câmera ficam visíveis, com a área da tela vazada
            deixando o vídeo recortado acima aparecer encaixado no lugar
            certo. Propositalmente <img> nativa, não next/image: o
            componente Image, mesmo servindo um PNG/WebP com alfa correto
            nessa área, compõe como um retângulo branco opaco por cima do
            <video> (bug de composição confirmado isolando cada camada) —
            uma <img> comum não tem esse problema. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/technology/phone-frame.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
        />
      </div>
    </motion.div>
  );
}
