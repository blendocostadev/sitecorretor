"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroBanner() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os imóveis disponíveis.")
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <section id="inicio" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-modern-house-exterior-with-glass-windows-an.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Encontre o Imóvel dos Seus Sonhos
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-balance opacity-90">
          Especialistas em imóveis de alto padrão com atendimento personalizado
        </p>
        <Button
          size="lg"
          onClick={handleWhatsAppContact}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Fale Conosco no WhatsApp
        </Button>
      </div>
    </section>
  )
}
