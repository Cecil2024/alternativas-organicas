"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2">Contacto</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Hablemos de su proyecto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contáctenos para obtener una cotización personalizada o para resolver 
            cualquier duda sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact info cards */}
          <div className="space-y-4">
            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <a href="tel:+573226620673" className="text-muted-foreground hover:text-primary transition-colors">
                    322 6620673
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Lun - Vie, 8am - 6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:alternativasorganicas@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    alternativasorganicas@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Respuesta en 24 horas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                  <p className="text-muted-foreground text-sm">
                    Colombia
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Envíos a todo el país</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="lg:col-span-2 border-border">
            <CardContent className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground">
                    Nos pondremos en contacto con usted pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Su nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa (opcional)</Label>
                      <Input id="company" placeholder="Nombre de la empresa" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="su@correo.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="300 123 4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product">Producto de interés</Label>
                    <Input id="product" placeholder="Ej: AGROABONO, Avicompost..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Cuéntenos sobre su proyecto, cantidad requerida, tipo de cultivo, etc."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Enviar mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
