import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const whatsappLink = "https://wa.me/558532221684?text=Olá! Gostaria de saber mais sobre o rastreamento veicular.";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            <span className="text-xl md:text-2xl font-bold">
              Forte<span className="text-primary">GPS</span>
            </span>
          </div>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">0800 581 2716</span>
            </div>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com Consultor
              </a>
            </Button>
          </div>

          {/* Mobile CTA */}
          <Button variant="whatsapp" size="sm" className="md:hidden" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
