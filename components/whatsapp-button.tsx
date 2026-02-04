"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "573226620673"
  const message = encodeURIComponent("Hola, me interesa conocer más sobre sus productos de abonos orgánicos.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
