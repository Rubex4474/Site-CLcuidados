import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot"], allow: "/" },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
