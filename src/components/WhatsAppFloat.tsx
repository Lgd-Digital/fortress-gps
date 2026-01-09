import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/558532221684?text=Olá! Gostaria de saber mais sobre o rastreamento veicular.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow animate-pulse-glow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppFloat;
