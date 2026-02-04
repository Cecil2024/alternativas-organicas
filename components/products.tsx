import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Download } from "lucide-react"

const products = [
  {
    name: "AGROABONO",
    tagline: "Compost de residuos vegetales",
    description: "Abono compost de origen 100% vegetal. Ideal para mejorar la estructura del suelo y aportar nutrientes esenciales de forma natural.",
    image: "/images/compost-product.jpg",
    benefits: ["Rico en materia orgánica", "Mejora retención de agua", "Apto para todos los cultivos"],
    pdfUrl: "/docs/agroabono-ficha-tecnica.pdf",
  },
  {
    name: "AGROABONO GRANULADO",
    tagline: "Versión granulada para fácil aplicación",
    description: "La misma calidad de AGROABONO en formato granulado para una distribución uniforme y manejo más conveniente.",
    image: "/images/organic-farming.jpg",
    benefits: ["Aplicación uniforme", "Fácil dosificación", "Liberación gradual"],
    pdfUrl: "/docs/agroabono-granulado-ficha-tecnica.pdf",
  },
  {
    name: "AVICOMPOST",
    tagline: "Tecnología de última generación",
    description: "Abono orgánico altamente efectivo, ideal para recuperar suelos degradados y pobres. Formulado con tecnología avanzada.",
    image: "/images/bio-fertilizer.jpg",
    benefits: ["Recupera suelos pobres", "Alta concentración", "Acción rápida"],
    pdfUrl: "/docs/avicompost-ficha-tecnica.pdf",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2">Catálogo</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nuestra línea completa de fertilizantes orgánicos y biológicos
            diseñados para maximizar el potencial de sus cultivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group border-border hover:border-primary/30 transition-all duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
              </div>
              <CardContent className="p-6">
                <p className="text-primary text-xs uppercase tracking-wider mb-1">{product.tagline}</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full group/btn bg-transparent" asChild>
                    <a href="#contacto">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="secondary" className="w-full group/btn" asChild>
                    <a href={product.pdfUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Ficha técnica (PDF)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SAFER Products Banner */}
        <div className="mt-12 md:mt-16 p-8 md:p-12 rounded-xl bg-secondary border border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-primary text-sm uppercase tracking-widest mb-2">Productos especializados</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Línea SAFER
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Productos agrobiológicos avanzados como biofertilizantes y aceleradores 
                de descomposición de materia orgánica para resultados profesionales.
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="#contacto">
                Conocer más
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
