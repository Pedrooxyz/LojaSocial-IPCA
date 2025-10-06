import { Button } from "@/components/ui/button";

export function ContributeSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground text-balance">
              Posso contribuir, doando?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Sim! A Loja Social funciona através de campanhas de recolha de
              bens. A sua contribuição faz toda a diferença na vida de
              estudantes que enfrentam dificuldades.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Produtos alimentares não perecíveis (massas, arroz, conservas,
                  etc.)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Produtos de higiene pessoal (champô, sabonete, pasta de
                  dentes, etc.)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Produtos de limpeza doméstica
                </p>
              </div>
            </div>
            <Button size="lg">Quero contribuir</Button>
          </div>

          <div className="relative h-96 md:h-full min-h-[400px]">
            <img
              src="/volunteers-helping-community-donation-center.jpg"
              alt="Voluntários a ajudar na Loja Social"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
