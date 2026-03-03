import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { CollectionsSection } from "@/components/collections-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BentoGrid />
      <CollectionsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
