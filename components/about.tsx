import Image from "next/image"

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "1000+", label: "Toneladas vendidas" },
]

export function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/compost-product.jpg"
                  alt="Compost orgánico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/bio-fertilizer.jpg"
                  alt="Biofertilizante"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/organic-farming.jpg"
                  alt="Agricultura orgánica"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-2">Sobre nosotros</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Comprometidos con la agricultura sostenible
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En <strong className="text-foreground">Alternativas Orgánicas</strong> nos dedicamos 
                a proporcionar soluciones orgánicas de alta calidad para agricultores en toda Colombia.
              </p>
              <p>
                Nuestros productos están diseñados para mejorar la salud del suelo, aumentar la 
                productividad de los cultivos y promover prácticas agrícolas sostenibles que 
                benefician tanto a los agricultores como al medio ambiente.
              </p>
              <p>
                Trabajamos directamente con productores y ofrecemos venta al por mayor con 
                asesoría técnica incluida para garantizar los mejores resultados en cada aplicación.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
