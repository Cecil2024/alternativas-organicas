import Image from "next/image"

const products = [
  "AGROABONO",
  "AGROABONO Granulado",
  "Avicompost",
  "Línea SAFER",
]

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Productos", href: "#productos" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Alternativas Orgánicas LTDA."
                width={180}
                height={54}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Venta de abonos orgánicos al por mayor para todo tipo de cultivos en Colombia.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-background mb-4">Productos</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a href="#productos" className="text-sm text-background/70 hover:text-background transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="tel:+573226620673" className="hover:text-background transition-colors">
                  322 6620673
                </a>
              </li>
              <li>
                <a href="mailto:alternativasorganicas@gmail.com" className="hover:text-background transition-colors break-all">
                  alternativasorganicas@gmail.com
                </a>
              </li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Alternativas Orgánicas. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/60">
            Abonos orgánicos certificados para agricultura sostenible
          </p>
        </div>
      </div>
    </footer>
  )
}
