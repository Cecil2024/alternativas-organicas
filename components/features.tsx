import { Leaf, Droplets, TrendingUp, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Orgánico",
    description: "Productos naturales certificados sin químicos sintéticos que respetan el medio ambiente.",
  },
  {
    icon: Droplets,
    title: "Mejora el Suelo",
    description: "Restaura la vida microbiana del suelo y aumenta la retención de nutrientes y agua.",
  },
  {
    icon: TrendingUp,
    title: "Mayor Rendimiento",
    description: "Optimiza la productividad de sus cultivos con nutrientes de liberación gradual.",
  },
  {
    icon: Award,
    title: "Asesoría Incluida",
    description: "Reciba asesoría técnica gratuita en línea con la compra de nuestros productos.",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2">Nuestras ventajas</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            ¿Por qué elegir nuestros abonos?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
