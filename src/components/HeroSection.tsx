import { motion } from "framer-motion";
import { Shield, Clock, Smartphone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/558532221684?text=Olá! Gostaria de proteger meu veículo com a ForteGPS.";

  const features = [
    { icon: Shield, text: "Proteção 24 horas" },
    { icon: Clock, text: "Resposta em menos de 2 min" },
    { icon: Smartphone, text: "App completo iOS/Android" },
    { icon: Lock, text: "Bloqueio remoto instantâneo" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Veículo protegido"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">+14 anos protegendo veículos</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Não conte com a sorte,{" "}
            <span className="text-primary">proteja seu patrimônio</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Ser roubado não depende de você, se proteger sim. Rastreamento veicular com tecnologia 
            de ponta e atendimento humanizado 24 horas por dia.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="cta" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com um Consultor
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#planos">Ver Planos</a>
            </Button>
          </motion.div>

          {/* Urgency Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            ⚠️ No Ceará, <span className="text-destructive font-semibold">28 ou mais veículos</span> são roubados ou furtados por dia.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
