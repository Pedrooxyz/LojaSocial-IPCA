import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/abstract-flowing-water-texture-dark-monochrome.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="text-white text-xl font-light tracking-wide">
          Loja Social IPCA
        </div>
        <div className="flex gap-8 text-sm">
          <a
            href="#sobre"
            className="text-white/90 hover:text-white transition-colors"
          >
            Sobre
          </a>
          <a
            href="#campanhas"
            className="text-white/90 hover:text-white transition-colors"
          >
            Campanhas
          </a>
          <a
            href="#apoios"
            className="text-white/90 hover:text-white transition-colors"
          >
            Apoios
          </a>
          <a
            href="#contacto"
            className="text-white/90 hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight text-balance">
          Um espaço de acolhimento e apoio à comunidade académica
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          A Loja Social do IPCA disponibiliza bens alimentares e de higiene a
          título gratuito a todos os membros que apresentem carências
          socioeconómicas.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base"
        >
          Saiba mais
        </Button>
      </div>
    </section>
  );
}
