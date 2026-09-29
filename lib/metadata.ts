import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "El Encanto: huevos de chacra argentinos, de gallinas libres criadas a pasto. Bienestar animal, sabor y tradición, sin vueltas.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Huevos de chacra argentinos, de gallinas libres criadas a pasto. Bienestar animal, sabor y tradición, sin vueltas.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Huevos de chacra argentinos, de gallinas libres criadas a pasto.",
  },
};
