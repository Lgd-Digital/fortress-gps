/**
 * Configuração centralizada de SEO para o ForteGPS
 * Facilita a manutenção e atualização das informações de SEO
 */

export const seoConfig = {
  siteName: "ForteGPS",
  siteUrl: "https://fortegps.com.br",
  defaultTitle: "ForteGPS - Rastreamento Veicular | Proteja seu Patrimônio",
  defaultDescription:
    "Rastreamento veicular com tecnologia de ponta e atendimento humanizado 24h. +10.000 veículos protegidos no Ceará. Bloqueio remoto, alertas inteligentes e app completo.",
  defaultKeywords:
    "rastreamento veicular, GPS, proteção veicular, bloqueio remoto, ForteGPS, Ceará, rastreamento de carros, rastreamento de motos, segurança veicular, localização GPS",
  defaultImage: "/logo.png",
  locale: "pt_BR",
  language: "pt-BR",
  themeColor: "#0ea5e9",
  twitterHandle: "@ForteGPS",
  facebookPage: "https://www.facebook.com/fortegps",
  instagramHandle: "https://www.instagram.com/fortegps",
  linkedinPage: "https://www.linkedin.com/company/fortegps",
  phone: "+5585805812716",
  phoneFormatted: "0800 581 2716",
  email: "contato@fortegps.com.br",
  address: {
    street: "Av. Beira Mar",
    city: "Fortaleza",
    state: "CE",
    country: "BR",
    zipCode: "",
  },
  geo: {
    latitude: -3.71722,
    longitude: -38.54333,
  },
  businessHours: {
    monday: "00:00-23:59",
    tuesday: "00:00-23:59",
    wednesday: "00:00-23:59",
    thursday: "00:00-23:59",
    friday: "00:00-23:59",
    saturday: "00:00-23:59",
    sunday: "00:00-23:59",
  },
  rating: {
    value: 4.8,
    count: 1250,
    bestRating: 5,
    worstRating: 1,
  },
};

/**
 * Gera a URL completa para imagens
 */
export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${seoConfig.siteUrl}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
};

/**
 * Gera a URL completa para páginas
 */
export const getPageUrl = (path: string): string => {
  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};
