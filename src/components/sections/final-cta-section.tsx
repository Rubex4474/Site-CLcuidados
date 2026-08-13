import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax } from "@/components/motion/parallax";
import { LeadFormDialog } from "@/components/forms/lead-form-dialog";

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-petrol py-28 text-white lg:py-36"
    >
      <Parallax amount={15} className="absolute inset-0">
        <video
          className="h-full w-full origin-[center_30%] scale-[1.08] object-cover object-[center_30%]"
          src="/videos/final-cta-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </Parallax>
      <div className="absolute inset-0 bg-petrol/75" aria-hidden="true" />

      <div className="container relative z-10">
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-display text-2xl font-medium leading-snug lg:text-3xl">
            Quem você ama merece viver com segurança, conforto e dignidade.
          </h2>
          <p className="max-w-lg text-white/70">
            Fale com a CL Cuidados e descubra como assumimos toda a gestão do cuidado para que
            sua família volte a ser, simplesmente, família.
          </p>
          <LeadFormDialog trigger={<Button size="lg">Solicitar Avaliação</Button>} />
        </FadeIn>
      </div>
    </section>
  );
}
