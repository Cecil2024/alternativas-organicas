import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { ProductCalculator } from "@/components/calculator"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <ProductCalculator />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
