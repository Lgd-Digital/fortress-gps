import { motion } from "framer-motion";
import { MapPin, Lock, Bell, Smartphone, Shield, Clock, Route, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description: "Acompanhe a localização exata do seu veículo 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: Lock,
    title: "Bloqueio Remoto",
    description: "Bloqueie ou desbloqueie seu veículo instantaneamente pelo aplicativo em caso de emergência.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Receba notificações de ignição, velocidade, cerca virtual e muito mais.",
  },
  {
    icon: Route,
    title: "Histórico de 60 Dias",
    description: "Acesse o histórico completo de percursos do seu veículo nos últimos 60 dias.",
  },
  {
    icon: Shield,
    title: "Tecnologia Certificada",
    description: "Equipamentos homologados pela Anatel com a mais alta tecnologia do mercado.",
  },
  {
    icon: Clock,
    title: "Suporte 24 Horas",
    description: "Atendimento humanizado disponível 24 horas para qualquer emergência.",
  },
  {
    icon: Smartphone,
    title: "App Completo",
    description: "Aplicativo intuitivo disponível para iOS e Android com todas as funcionalidades.",
  },
  {
    icon: Zap,
    title: "Instalação Imediata",
    description: "Instalação rápida e profissional no mesmo dia do seu contato.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Segurança completa para seu veículo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologia de ponta combinada com atendimento humanizado para garantir a segurança do seu patrimônio.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
