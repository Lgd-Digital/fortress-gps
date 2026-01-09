import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">
                Forte<span className="text-primary">GPS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Há mais de 14 anos protegendo veículos no Ceará com tecnologia de ponta e 
              atendimento humanizado 24 horas.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:08005812716" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>0800 581 2716</span>
              </a>
              <a href="tel:8532221684" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>(85) 3222-1684</span>
              </a>
              <a href="mailto:contato@fortegps.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>contato@fortegps.com.br</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ForteGPS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
