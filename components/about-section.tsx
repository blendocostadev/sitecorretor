import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Home, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    {
      icon: Home,
      number: "500+",
      label: "Imóveis Vendidos",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Atendimento",
    },
  ]

  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Sobre Nós</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Somos especialistas em imóveis de alto padrão, oferecendo atendimento personalizado e soluções completas
            para compra, venda e locação de propriedades exclusivas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Conectar pessoas aos imóveis dos seus sonhos através de um atendimento excepcional, transparência total e
              conhecimento profundo do mercado imobiliário.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Por Que Nos Escolher?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Atendimento personalizado e dedicado</li>
              <li>• Portfólio exclusivo de imóveis premium</li>
              <li>• Negociação especializada e transparente</li>
              <li>• Suporte completo em todo o processo</li>
            </ul>
          </div>
          <div className="relative">
            <img src="/real-estate-team.png" alt="Nossa equipe" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
