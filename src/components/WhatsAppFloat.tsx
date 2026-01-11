import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/558598350842";
  return (
    <motion.a
      href={whatsappUrl}
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
      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsAppFloat;
