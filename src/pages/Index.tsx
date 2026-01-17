import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppSection from "@/components/AppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PlansCardCarsMotos from "@/components/PlansCardCarsMotos";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ForteGPS - Rastreamento Veicular | Proteja seu Patrimônio"
        description="Rastreamento veicular com tecnologia de ponta e atendimento humanizado 24h. +10.000 veículos protegidos no Ceará. Bloqueio remoto, alertas inteligentes e app completo."
        keywords="rastreamento veicular, GPS, proteção veicular, bloqueio remoto, ForteGPS, Ceará, rastreamento de carros, rastreamento de motos, segurança veicular, localização GPS"
        image="/logo.png"
        url="https://fortegps.com.br/"
      />
      <StructuredData type="LocalBusiness" />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <PlansCardCarsMotos />
        <FeaturesSection />
        <AppSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
