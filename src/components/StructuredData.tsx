import { useEffect } from "react";
import { seoConfig, getImageUrl } from "@/lib/seo-config";

interface StructuredDataProps {
  type?: "Organization" | "LocalBusiness" | "WebSite" | "Service";
  data?: Record<string, any>;
}

const StructuredData = ({ type = "LocalBusiness", data }: StructuredDataProps) => {
  useEffect(() => {
    const defaultData = {
      "@context": "https://schema.org",
      "@type": type,
      name: seoConfig.siteName,
      alternateName: "Forte GPS",
      description: seoConfig.defaultDescription,
      url: seoConfig.siteUrl,
      logo: getImageUrl(seoConfig.defaultImage),
      image: getImageUrl(seoConfig.defaultImage),
      telephone: seoConfig.phone,
      email: seoConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: seoConfig.address.street,
        addressLocality: seoConfig.address.city,
        addressRegion: seoConfig.address.state,
        addressCountry: seoConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: seoConfig.geo.latitude,
        longitude: seoConfig.geo.longitude,
      },
      areaServed: {
        "@type": "State",
        name: seoConfig.address.state,
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: [
        seoConfig.facebookPage,
        seoConfig.instagramHandle,
        seoConfig.linkedinPage,
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: seoConfig.rating.value.toString(),
        reviewCount: seoConfig.rating.count.toString(),
        bestRating: seoConfig.rating.bestRating.toString(),
        worstRating: seoConfig.rating.worstRating.toString(),
      },
      serviceType: "Rastreamento Veicular",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planos de Rastreamento",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rastreamento para Carros",
              description: "Plano completo de rastreamento veicular para carros",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rastreamento para Motos",
              description: "Plano completo de rastreamento veicular para motos",
            },
          },
        ],
      },
    };

    const structuredData = data ? { ...defaultData, ...data } : defaultData;

    // Remove script anterior se existir
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Criar novo script
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;
