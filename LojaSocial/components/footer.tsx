import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-primary text-primary-foreground py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4">Loja Social IPCA</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Serviços de Ação Social do Instituto Politécnico do Cávado e do
              Ave
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary-foreground/60">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#campanhas"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Campanhas
                </a>
              </li>
              <li>
                <a
                  href="#apoios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Apoios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Regulamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary-foreground/60">
              Links úteis
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://sas.ipca.pt"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Serviços de Ação Social
                </a>
              </li>
              <li>
                <a
                  href="https://ipca.pt"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  IPCA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 text-primary-foreground/60">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">sas@ipca.pt</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">253 802 260</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Campus do IPCA, Barcelos
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Loja Social IPCA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
