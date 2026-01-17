import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoConfig, getImageUrl, getPageUrl } from "@/lib/seo-config";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  siteName,
  locale,
  noindex = false,
  nofollow = false,
  canonical,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = canonical || getPageUrl(location.pathname);
  const finalTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  const finalDescription = description || seoConfig.defaultDescription;
  const finalKeywords = keywords || seoConfig.defaultKeywords;
  const finalImage = getImageUrl(image || seoConfig.defaultImage);
  const finalUrl = url || currentUrl;
  const finalType = type || "website";
  const finalSiteName = siteName || seoConfig.siteName;
  const finalLocale = locale || seoConfig.locale;

  useEffect(() => {
    // Title
    document.title = finalTitle;

    // Meta tags básicas
    updateMetaTag("name", "description", finalDescription);
    updateMetaTag("name", "keywords", finalKeywords);
    updateMetaTag("name", "author", seoConfig.siteName);
    updateMetaTag("name", "robots", noindex || nofollow ? `${noindex ? "noindex" : ""}${nofollow ? ",nofollow" : ""}`.replace(/^,/, "") : "index, follow");
    updateMetaTag("name", "googlebot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    updateMetaTag("name", "bingbot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Open Graph
    updateMetaTag("property", "og:title", finalTitle);
    updateMetaTag("property", "og:description", finalDescription);
    updateMetaTag("property", "og:image", finalImage);
    updateMetaTag("property", "og:url", finalUrl);
    updateMetaTag("property", "og:type", finalType);
    updateMetaTag("property", "og:site_name", finalSiteName);
    updateMetaTag("property", "og:locale", finalLocale);
    updateMetaTag("property", "og:image:width", "1200");
    updateMetaTag("property", "og:image:height", "630");
    updateMetaTag("property", "og:image:alt", finalTitle);

    // Twitter Card
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", finalTitle);
    updateMetaTag("name", "twitter:description", finalDescription);
    updateMetaTag("name", "twitter:image", finalImage);
    updateMetaTag("name", "twitter:image:alt", finalTitle);
    updateMetaTag("name", "twitter:site", seoConfig.twitterHandle);
    updateMetaTag("name", "twitter:creator", seoConfig.twitterHandle);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Theme color
    updateMetaTag("name", "theme-color", seoConfig.themeColor);
    updateMetaTag("name", "msapplication-TileColor", seoConfig.themeColor);
    updateMetaTag("name", "apple-mobile-web-app-capable", "yes");
    updateMetaTag("name", "apple-mobile-web-app-status-bar-style", "default");
    updateMetaTag("name", "apple-mobile-web-app-title", finalSiteName);

    // Mobile
    updateMetaTag("name", "format-detection", "telephone=yes");
    updateMetaTag("name", "mobile-web-app-capable", "yes");

    // Geo tags (Ceará, Brasil)
    updateMetaTag("name", "geo.region", "BR-CE");
    updateMetaTag("name", "geo.placename", "Ceará");
    updateMetaTag("name", "geo.position", "-3.71722;-38.54333");
    updateMetaTag("name", "ICBM", "-3.71722, -38.54333");

    // Language
    updateMetaTag("http-equiv", "content-language", "pt-BR");

    // Viewport (já deve existir, mas garantimos)
    updateMetaTag("name", "viewport", "width=device-width, initial-scale=1.0, maximum-scale=5.0");

    // Additional SEO
    updateMetaTag("name", "rating", "general");
    updateMetaTag("name", "distribution", "global");
    updateMetaTag("name", "revisit-after", "7 days");
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    finalImage,
    finalUrl,
    finalType,
    finalSiteName,
    finalLocale,
    currentUrl,
    noindex,
    nofollow,
  ]);

  return null;
};

const updateMetaTag = (
  attribute: "name" | "property" | "http-equiv",
  value: string,
  content: string
) => {
  if (!content) return;

  let element = document.querySelector(
    `meta[${attribute}="${value}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

export default SEO;
