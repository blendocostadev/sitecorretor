import { PropertyCard } from "./property-card"

const properties = [
  {
    id: 1,
    image: "/modern-luxury-apartment-living-room-with-city-view.jpg",
    title: "Apartamento de Luxo",
    location: "Jardins, São Paulo",
    type: "Apartamento",
    area: "120m²",
    description:
      "Apartamento moderno com vista panorâmica da cidade, acabamentos de primeira linha e localização privilegiada.",
  },
  {
    id: 2,
    image: "/beautiful-house-with-garden-and-swimming-pool.jpg",
    title: "Casa com Piscina",
    location: "Alphaville, Barueri",
    type: "Casa",
    area: "250m²",
    description:
      "Casa espaçosa com jardim, piscina e área gourmet. Perfeita para famílias que buscam conforto e lazer.",
  },
  {
    id: 3,
    image: "/modern-penthouse-terrace-with-city-skyline.jpg",
    title: "Cobertura Premium",
    location: "Vila Olímpia, São Paulo",
    type: "Cobertura",
    area: "180m²",
    description: "Cobertura exclusiva com terraço privativo, churrasqueira e vista deslumbrante do skyline da cidade.",
  },
  {
    id: 4,
    image: "/commercial-office-space-modern-interior.jpg",
    title: "Sala Comercial",
    location: "Faria Lima, São Paulo",
    type: "Comercial",
    area: "80m²",
    description: "Sala comercial em edifício corporativo de alto padrão, ideal para escritórios e consultórios.",
  },
  {
    id: 5,
    image: "/luxury-condominium-house-with-landscaping.jpg",
    title: "Casa em Condomínio",
    location: "Granja Viana, Cotia",
    type: "Casa",
    area: "300m²",
    description: "Casa em condomínio fechado com segurança 24h, área verde e clube completo para toda família.",
  },
  {
    id: 6,
    image: "/modern-studio-apartment-minimalist-design.jpg",
    title: "Studio Moderno",
    location: "Vila Madalena, São Paulo",
    type: "Studio",
    area: "45m²",
    description: "Studio compacto e funcional em bairro boêmio, perfeito para jovens profissionais e investidores.",
  },
]

export function PropertiesGrid() {
  return (
    <section id="imoveis" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Imóveis em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Confira nossa seleção de imóveis premium cuidadosamente escolhidos para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
