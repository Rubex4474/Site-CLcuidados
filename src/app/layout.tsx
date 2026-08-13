import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { poppins } from "@/app/fonts";
import { SITE_CONFIG } from "@/lib/seo/site-config";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsappFloatButton } from "@/components/layout/whatsapp-float-button";
import { GoogleTag } from "@/components/analytics/google-tag";
import "@/app/globals.css";

// TEMP DEBUG: investigando o bug do navegador embutido do WhatsApp em
// iPhone 12/XR que persiste mesmo já corrigido o CSS embutido e o domínio.
// Só ativa com ?debug=1 na URL. "beforeInteractive" injeta isso no <head>
// e roda ANTES do bundle do Next/React — então funciona mesmo se a
// hidratação falhar por completo, que é justamente o cenário suspeito
// aqui. Escreve tudo direto na tela (sem backend) pra printar e mandar.
// Remover depois de diagnosticado.
const WHATSAPP_DEBUG_SCRIPT = `
(function () {
  try {
    if (!/[?&]debug=1(&|$)/.test(location.search)) return;
    var box = document.createElement("div");
    box.id = "__wa_debug__";
    box.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#fff;" +
      "color:#000;font:11px/1.4 monospace;padding:10px;max-height:60vh;" +
      "overflow:auto;border-bottom:4px solid red;white-space:pre-wrap;word-break:break-all;";
    function log(msg) {
      box.appendChild(document.createTextNode(msg + "\\n"));
    }
    document.documentElement.appendChild(box);
    log("=== WHATSAPP DEBUG ===");
    log("UA: " + navigator.userAgent);
    log("URL: " + location.href);
    log("Viewport: " + window.innerWidth + "x" + window.innerHeight + " dpr=" + window.devicePixelRatio);
    log("readyState no injetar: " + document.readyState);
    try {
      log("connection: " + JSON.stringify(navigator.connection || {}));
    } catch (e) {}
    window.addEventListener(
      "error",
      function (e) {
        log("ERRO: " + (e.message || e.type) + " @ " + (e.filename || "") + ":" + (e.lineno || ""));
      },
      true
    );
    window.addEventListener("unhandledrejection", function (e) {
      log("REJECTION: " + ((e.reason && e.reason.message) || e.reason));
    });
    window.addEventListener("load", function () {
      log("window load disparou. styleSheets=" + document.styleSheets.length + " scripts=" + document.scripts.length);
      try {
        var res = performance.getEntriesByType("resource");
        var zero = res.filter(function (r) {
          return r.transferSize === 0 && r.duration > 0;
        });
        log("resources=" + res.length + " zero-transfer=" + zero.length);
        zero.slice(0, 12).forEach(function (r) {
          log("  ZT: " + r.name);
        });
      } catch (e) {
        log("perf-api falhou: " + e.message);
      }
    });
    setTimeout(function () {
      log("--- 3s depois ---");
      log("body children: " + (document.body ? document.body.children.length : "sem body"));
    }, 3000);
  } catch (e) {
    try {
      document.title = "debug-script-error: " + e.message;
    } catch (_e) {}
  }
})();
`;

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
        <Script id="whatsapp-debug" strategy="beforeInteractive">
          {WHATSAPP_DEBUG_SCRIPT}
        </Script>
        <GoogleTag />
        <SkipLink />
        {children}
        <WhatsappFloatButton />
      </body>
    </html>
  );
}
