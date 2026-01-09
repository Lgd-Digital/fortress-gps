import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const appFeatures = [
  "Rastreamento em tempo real",
  "Alertas de velocidade personalizados",
  "Histórico de percurso de 60 dias",
  "Alerta de ignição ligada/desligada",
  "Bloqueio e desbloqueio remoto",
  "Alarmes de abertura de porta",
  "Cerca virtual de proteção",
  "Compartilhamento com família",
];

const AppSection = () => {
  const whatsappLink = "https://wa.me/558532221684?text=Olá! Gostaria de saber mais sobre o aplicativo ForteGPS.";

  return (
    <section className="py-20 md:py-32 bg-card-gradient border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Aplicativo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A proteção do seu veículo a{" "}
              <span className="text-primary">um toque de distância</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Com o aplicativo da ForteGPS você tem o controle total do seu veículo na palma da mão, 
              com funcionalidades avançadas e interface intuitiva.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="cta" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Quero Conhecer o App
              </a>
            </Button>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone Image */}
              <img
                src={appMockup}
                alt="Aplicativo ForteGPS"
                className="relative z-10 w-72 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
