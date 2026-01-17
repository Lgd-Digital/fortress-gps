import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bike, 
  Car, 
  CheckCircle2, 
  Star,
  Wrench,
  CreditCard,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Plan {
  id: string;
  title: string;
  price: string;
  icon: React.ComponentType<any>;
  features: string[];
  assistanceFeatures?: string[];
  paymentMethods: string[];
  badge?: string;
  isPopular?: boolean;
}

const PlansCardCarsMotos: React.FC = () => {
  const motoPlans: Plan[] = [
    {
      id: 'moto-anual',
      title: 'Plano Essencial Moto',
      price: '49,99',
      icon: Bike,
      features: [
        'Central de Emergência 24h',
        'Histórico Completo de Rotas',
        'App Android e iOS',
        'Equipe de Busca Especializada',
        'Bloqueio Remoto pelo App'
      ],
      paymentMethods: ['Pix ou Boleto']
    },
    {
      id: 'moto-anual-assistencia',
      title: 'Plano Premium Moto',
      price: '64,99',
      icon: Bike,
      badge: 'MELHOR CUSTO-BENEFÍCIO',
      isPopular: true,
      features: [
        'Tudo do Plano Essencial',
        'Rastreamento em Tempo Real',
        'Alertas de Ignição e Movimento',
        'Cerca Virtual Ilimitada',
        'Relatórios de Velocidade'
      ],
      assistanceFeatures: [
        'Assistência 24h: Reboque, Chaveiro, Táxi, SOS Elétrico e Troca de Pneu'
      ],
      paymentMethods: ['Pix ou Boleto']
    }
  ];

  const carPlans: Plan[] = [
    {
      id: 'carro-anual',
      title: 'Plano Essencial Carro',
      price: '59,90',
      icon: Car,
      features: [
        'Central de Emergência 24h',
        'Histórico Completo de Rotas',
        'App Android e iOS',
        'Equipe de Busca Especializada',
        'Bloqueio Remoto pelo App'
      ],
      paymentMethods: ['Pix ou Boleto']
    },
    {
      id: 'carro-anual-assistencia',
      title: 'Plano Premium Carro',
      price: '74,90',
      icon: Car,
      badge: 'MAIS VENDIDO',
      isPopular: true,
      features: [
        'Tudo do Plano Essencial',
        'Rastreamento em Tempo Real',
        'Alertas de Ignição e Movimento',
        'Cerca Virtual Ilimitada',
        'Relatórios de Velocidade'
      ],
      assistanceFeatures: [
        'Assistência 24h: Reboque, Chaveiro, Táxi, SOS Elétrico e Troca de Pneu'
      ],
      paymentMethods: ['Pix ou Boleto']
    }
  ];

  const renderPlanCard = (plan: Plan, index: number) => {
    const IconComponent = plan.icon;
    const whatsappLink = `https://wa.me/558532221684?text=Olá! Gostaria de saber mais sobre o ${plan.title}.`;

    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="h-full"
      >
        <Card className={`relative h-full flex flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden ${plan.isPopular ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 z-10' : ''}`}>
          {plan.isPopular && (
            <div className="absolute top-0 right-0 left-0 bg-primary py-1 px-4 text-center">
              <p className="text-[10px] font-bold text-primary-foreground uppercase tracking-widest flex items-center justify-center gap-1">
                <Star size={12} className="fill-current" /> {plan.badge || 'RECOMENDADO'}
              </p>
            </div>
          )}

          <CardHeader className={`${plan.isPopular ? 'pt-8' : ''}`}>
            <div className="flex items-center justify-between mb-2">
              <div className={`p-3 rounded-xl ${plan.isPopular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                <IconComponent size={24} />
              </div>
              {plan.assistanceFeatures && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Wrench size={12} className="mr-1" /> + Assistência
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow space-y-6">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-muted-foreground">R$</span>
                <span className="text-4xl font-bold tracking-tight">{plan.price.split(',')[0]}</span>
                <span className="text-xl font-bold text-muted-foreground">,{plan.price.split(',')[1]}</span>
                <span className="text-sm text-muted-foreground ml-1">/mês</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Garantia de segurança no plano anual</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Destaques do Plano:
              </p>
              <ul className="space-y-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.assistanceFeatures && (
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold flex items-center gap-2 mb-2">
                  <Zap size={16} className="text-yellow-500" />
                  Assistência Completa 24h:
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  {plan.assistanceFeatures[0]}
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="pt-2 flex flex-col gap-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-full flex items-center justify-between text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <CreditCard size={12} />
                <span>Pagamento: {plan.paymentMethods.join(' ou ')}</span>
              </div>
              <div className="font-medium text-primary">Ativação Imediata</div>
            </div>
            <Button 
              variant={plan.isPopular ? "cta" : "heroOutline"} 
              className="w-full group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                ASSINAR AGORA
                <FaWhatsapp className={`ml-2 transition-transform duration-300 group-hover:scale-110 ${plan.isPopular ? '' : 'text-primary'}`} />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="planos">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-6 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start justify-center text-3xl md:text-5xl font-bold"
            >
              <div className="inline-flex items-center justify-center bg-primary rounded-full p-2 shrink-0 mt-1">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>

              <p>
                Escolha o melhor plano para o seu{" "}
                <span className="text-primary">veículo</span>
              </p>
            </motion.h2>
          </div>
       
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Preços transparentes, tecnologia de ponta e suporte especializado 24 horas por dia.
          </motion.p>
        </div>

        <Tabs defaultValue="motos" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 p-1 rounded-2xl border border-border/50 h-14 w-full max-w-[400px]">
              <TabsTrigger 
                value="motos" 
                className="rounded-xl h-full flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                <Bike className="w-5 h-5 mr-2" />
                Motos
              </TabsTrigger>
              <TabsTrigger 
                value="carros" 
                className="rounded-xl h-full flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                <Car className="w-5 h-5 mr-2" />
                Carros
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="motos" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {motoPlans.map((plan, index) => renderPlanCard(plan, index))}
              </div>
            </TabsContent>
            
            <TabsContent value="carros" className="mt-0 outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {carPlans.map((plan, index) => renderPlanCard(plan, index))}
              </div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-card/80 to-card border border-border/50 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-4">Dúvidas sobre qual escolher?</h3>
          <div className="flex flex-col gap-1 mb-6">
            <p className="text-muted-foreground">
              Para quem não tem seguro mas não abre mão de sua segurança.
            </p>
            <p className="text-muted-foreground">
              Nossos consultores estão prontos para ajudar você a encontrar a solução ideal de acordo com suas necessidades.
            </p>
          </div>
          <Button variant="whatsapp" size="xl" className="rounded-2xl" asChild>
            <a href="https://wa.me/558532221684" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 text-xl" />
              Falar com um Especialista
            </a>
          </Button>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> Atendimento 24h</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> Sinistro e Roubo</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> Assistência Imediata</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansCardCarsMotos;

