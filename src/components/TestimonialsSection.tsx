import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content: "Depois que instalei a ForteGPS, tenho total tranquilidade. O aplicativo é muito prático e o suporte é excelente!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Motorista de Aplicativo",
    content: "Trabalho o dia todo na rua e a ForteGPS me dá segurança. Já recuperaram meu carro em menos de 1 hora quando foi roubado.",
    rating: 5,
  },
  {
    name: "João Costa",
    role: "Gestor de Frota",
    content: "Gerencio 15 veículos com a ForteGPS. O histórico de rotas e os alertas de velocidade são essenciais para minha empresa.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Proprietária de Veículo",
    content: "Atendimento humanizado de verdade! Tive um problema às 3h da manhã e fui atendida na hora. Recomendo muito!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de clientes satisfeitos confiam na ForteGPS para proteger seus veículos.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
