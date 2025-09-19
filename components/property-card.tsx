"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MessageCircle, MapPin, Home, Maximize } from "lucide-react"

interface PropertyCardProps {
  id: number
  image: string
  title: string
  location: string
  type: string
  area: string
  description: string
}

export function PropertyCard({ id, image, title, location, type, area, description }: PropertyCardProps) {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no imóvel: ${title} - ${location}. Gostaria de mais informações.`,
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-balance">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm text-pretty">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={handleWhatsAppContact} className="w-full bg-green-600 hover:bg-green-700 text-white">
          <MessageCircle className="mr-2 h-4 w-4" />
          Saiba Mais
        </Button>
      </CardFooter>
    </Card>
  )
}
