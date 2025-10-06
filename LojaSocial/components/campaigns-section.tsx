import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, TrendingUp } from "lucide-react";

export function CampaignsSection() {
  return (
    <section id="campanhas" className="py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground text-balance">
            Campanhas da Loja Social
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Acompanhe as nossas iniciativas de recolha e os resultados
            alcançados
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-foreground" />
            <h3 className="text-3xl font-light text-foreground">
              Campanhas Futuras
            </h3>
          </div>

          {/* Featured Future Campaign */}
          <div className="mb-8">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <img
                    src="/food-donation-boxes-community-support.jpg"
                    alt="Campanha de recolha de alimentos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center bg-card">
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Próxima campanha
                  </div>
                  <h4 className="text-3xl font-light mb-4 text-card-foreground">
                    Recolha de Alimentos - Inverno 2025
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Estamos a recolher produtos alimentares não perecíveis para
                    apoiar estudantes durante o período de inverno. Participe e
                    faça a diferença!
                  </p>
                  <div className="flex gap-6 text-sm mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Início
                      </div>
                      <div className="text-lg font-light text-card-foreground">
                        15 Janeiro
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Término
                      </div>
                      <div className="text-lg font-light text-card-foreground">
                        28 Fevereiro
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        Meta
                      </div>
                      <div className="text-lg font-light text-card-foreground">
                        800kg
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Saiba como contribuir</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Future Campaigns Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/hygiene-products-personal-care.jpg"
                  alt="Produtos de higiene"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Março 2025
                </div>
                <h5 className="text-xl font-light mb-3 text-card-foreground">
                  Produtos de Higiene
                </h5>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Recolha de produtos de higiene pessoal e limpeza para
                  distribuição.
                </p>
                <div className="text-sm mb-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Meta
                  </div>
                  <div className="text-lg font-light text-card-foreground">
                    300 produtos
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/school-supplies-books-education.jpg"
                  alt="Material escolar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Setembro 2025
                </div>
                <h5 className="text-xl font-light mb-3 text-card-foreground">
                  Material Escolar
                </h5>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Campanha de recolha de material escolar para o próximo ano
                  letivo.
                </p>
                <div className="text-sm mb-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Meta
                  </div>
                  <div className="text-lg font-light text-card-foreground">
                    200 kits
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/winter-clothes-warm-clothing.jpg"
                  alt="Roupa de inverno"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Novembro 2025
                </div>
                <h5 className="text-xl font-light mb-3 text-card-foreground">
                  Roupa de Inverno
                </h5>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Recolha de vestuário de inverno para apoiar estudantes.
                </p>
                <div className="text-sm mb-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Meta
                  </div>
                  <div className="text-lg font-light text-card-foreground">
                    150 peças
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver detalhes
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-foreground" />
            <h3 className="text-3xl font-light text-foreground">
              Resultados de Campanhas Anteriores
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Campaign Result 1 */}
            <Card className="border-0 shadow-md p-8 bg-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Outubro - Dezembro 2024
                  </div>
                  <h4 className="text-2xl font-light text-card-foreground">
                    Recolha de Alimentos - Outono
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    650kg
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Alimentos recolhidos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    180
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estudantes apoiados
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    108%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Meta alcançada
                  </div>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground"
                  style={{ width: "108%" }}
                ></div>
              </div>
            </Card>

            {/* Campaign Result 2 */}
            <Card className="border-0 shadow-md p-8 bg-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Setembro 2024
                  </div>
                  <h4 className="text-2xl font-light text-card-foreground">
                    Material Escolar 2024/25
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    215
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Kits distribuídos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    215
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estudantes apoiados
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    143%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Meta alcançada
                  </div>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </Card>

            {/* Campaign Result 3 */}
            <Card className="border-0 shadow-md p-8 bg-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Junho - Julho 2024
                  </div>
                  <h4 className="text-2xl font-light text-card-foreground">
                    Produtos de Higiene - Verão
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    420
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Produtos recolhidos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    95
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estudantes apoiados
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    140%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Meta alcançada
                  </div>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </Card>

            {/* Campaign Result 4 */}
            <Card className="border-0 shadow-md p-8 bg-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Março - Maio 2024
                  </div>
                  <h4 className="text-2xl font-light text-card-foreground">
                    Recolha de Alimentos - Primavera
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    580kg
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Alimentos recolhidos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    165
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estudantes apoiados
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-light text-card-foreground mb-1">
                    97%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Meta alcançada
                  </div>
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground"
                  style={{ width: "97%" }}
                ></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
