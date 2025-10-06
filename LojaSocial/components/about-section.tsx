export function AboutSection() {
  return (
    <section id="sobre" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
          Os nossos princípios
        </h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="text-8xl font-light mb-8 text-foreground">1</div>
            <h3 className="text-2xl font-light mb-4 text-foreground">
              Apoiar a comunidade académica
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Disponibilizamos bens de primeira necessidade através de campanhas
              de recolha, garantindo acesso gratuito a quem mais precisa.
            </p>
          </div>

          <div>
            <div className="text-8xl font-light mb-8 text-foreground">2</div>
            <h3 className="text-2xl font-light mb-4 text-foreground">
              Promover a dignidade e inclusão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Criamos um espaço de acolhimento que respeita a dignidade de cada
              pessoa, promovendo a igualdade de oportunidades no ensino
              superior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
