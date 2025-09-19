import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { PropertiesGrid } from "@/components/properties-grid"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <PropertiesGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
