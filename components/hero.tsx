import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-agriculture.jpg"
          alt="Campos agrícolas orgánicos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4">
            Fertilizantes orgánicos de alta calidad
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Abonos Orgánicos para Todo Tipo de Cultivos
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Proveemos soluciones orgánicas para la agricultura colombiana. 
            Mejoramos la calidad de sus suelos con productos naturales y sostenibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <a href="#productos">
                Ver productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#contacto">Solicitar cotización</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/80 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
