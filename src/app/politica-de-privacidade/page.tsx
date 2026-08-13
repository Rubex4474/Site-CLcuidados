import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { CONTACT, SITE_CONFIG } from "@/lib/seo/site-config";

export const metadata = buildMetadata({
  title: "Política de Privacidade",
  description: `Como a ${SITE_CONFIG.shortName} coleta, usa e protege os dados pessoais de visitantes e clientes.`,
  path: "/politica-de-privacidade",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-border">
        <div className="container flex h-20 items-center justify-between">
          <span className="font-display text-xl font-medium text-foreground">
            {SITE_CONFIG.shortName}
          </span>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main id="main-content" className="container max-w-3xl py-20">
        <h1 className="font-display text-4xl font-medium text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: a definir. Este documento é um modelo inicial e deve ser revisado
          por um profissional jurídico antes da publicação, para adequação completa à LGPD (Lei
          nº 13.709/2018).
        </p>

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-xl text-foreground">1. Quais dados coletamos</h2>
            <p className="mt-2">
              Coletamos apenas os dados que você nos fornece voluntariamente ao preencher o
              formulário de solicitação de avaliação: nome, telefone e, quando informada, a
              relação com o paciente.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">2. Como usamos seus dados</h2>
            <p className="mt-2">
              Usamos esses dados exclusivamente para dar continuidade ao seu atendimento via
              WhatsApp e para avaliar a solicitação de cuidado domiciliar.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">3. Compartilhamento de dados</h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de
              marketing.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">4. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento,
              entrando em contato pelo e-mail {CONTACT.email}.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
