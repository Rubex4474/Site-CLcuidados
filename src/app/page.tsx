import { SITE_CONFIG, SITE_FLAGS } from "@/lib/seo/site-config";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqPageSchema, buildLocalBusinessGraph } from "@/lib/seo/json-ld";
import { getGoogleReviews } from "@/lib/google-reviews";
import { faqItems } from "@/content/faq";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PlansSection } from "@/components/sections/plans-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export const metadata = buildMetadata({
  title: `${SITE_CONFIG.name} | Cuidador de Idosos em Indaiatuba`,
  description: SITE_CONFIG.description,
  path: "/",
});

export default async function HomePage() {
  const reviewsData = await getGoogleReviews();
  const organizationGraph = buildLocalBusinessGraph(reviewsData);
  const faqSchema = SITE_FLAGS.emitFaqSchema ? buildFaqPageSchema(faqItems) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <ComparisonSection />
        <HowItWorksSection />
        <TechnologySection />
        <DifferentiatorsSection />
        <ServicesSection />
        <PlansSection />
        <PartnersSection />
        <TestimonialsSection reviewsData={reviewsData} />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
