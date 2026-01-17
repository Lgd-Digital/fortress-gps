import { motion } from "framer-motion";
import { AlertTriangle, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/558532221684?text=Olá! Quero proteger meu veículo agora mesmo!";

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Warning Badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-4 py-2 mb-8">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm text-destructive font-medium">Não entre para a estatística</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            No Ceará, <span className="text-destructive">28 ou mais veículos</span> são roubados por dia
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Não espere acontecer com você. Proteja seu patrimônio agora com a ForteGPS e tenha a 
            tranquilidade que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Shield className="w-5 h-5 mr-2 text-white" />
                Proteger meu veículo
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:08005812716" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                0800 581 2716
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Instalação rápida • Sem fidelidade • Suporte 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
