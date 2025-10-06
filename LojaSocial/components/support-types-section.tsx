import { Package, Heart, Users } from "lucide-react";

export function SupportTypesSection() {
  return (
    <section id="apoios" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground text-balance">
            Tipos de apoio disponibilizados
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Package className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 text-foreground">
              Bens Alimentares
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Produtos alimentares não perecíveis, frescos e congelados para
              garantir uma alimentação adequada.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 text-foreground">
              Produtos de Higiene
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Artigos de higiene pessoal e produtos de limpeza essenciais para o
              dia a dia.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <Users className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-light mb-4 text-foreground">
              Apoio Personalizado
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Acompanhamento individualizado para identificar e responder às
              necessidades específicas de cada estudante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
