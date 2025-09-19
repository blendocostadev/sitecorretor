"use client"

import { MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre seus serviços.")
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Imóveis Premium</h3>
            <p className="mb-4 opacity-90 text-pretty">
              Especialistas em imóveis de alto padrão com atendimento personalizado e soluções completas para suas
              necessidades imobiliárias.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>contato@imoveispremium.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>São Paulo, SP</span>
              </div>
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center text-green-300 hover:text-green-200 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-3" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <a href="#inicio" className="block hover:opacity-80 transition-opacity">
                Início
              </a>
              <a href="#imoveis" className="block hover:opacity-80 transition-opacity">
                Imóveis
              </a>
              <a href="#sobre" className="block hover:opacity-80 transition-opacity">
                Sobre
              </a>
              <a href="#contato" className="block hover:opacity-80 transition-opacity">
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 sm:mb-0">© 2024 Imóveis Premium. Todos os direitos reservados.</p>
          <div className="flex items-center text-sm opacity-80">
            <span>Desenvolvido por </span>
            <a
              href="https://www.instagram.com/blendocosta1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:opacity-100 transition-opacity flex items-center"
            >
              <Instagram className="h-4 w-4 mr-1" />
              Blendo Costa
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
