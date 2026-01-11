import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppSection from "@/components/AppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PlansCardCarsMotos from "@/components/PlansCardCarsMotos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
