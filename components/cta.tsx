import { Button } from "@/components/ui/button"
import { Gift, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <Gift className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">Oferta especial</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Asesoría Online Gratuita
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Por la compra de nuestros productos, reciba asesoría técnica en línea 
            sin costo adicional. Nuestros expertos le guiarán para obtener los 
            mejores resultados en sus cultivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="#contacto">
                Solicitar cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+573226620673">Llamar ahora</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
