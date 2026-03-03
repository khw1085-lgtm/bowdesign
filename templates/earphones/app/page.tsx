import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturesSection } from "@/components/features-section"
import { ANCSection } from "@/components/anc-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <ANCSection />
      <CTASection />
      <Footer />
    </main>
  )
}
