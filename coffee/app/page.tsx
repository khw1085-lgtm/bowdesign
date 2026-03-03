import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { MenuSection } from "@/components/menu-section";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ReservationSection } from "@/components/reservation-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <FeaturesSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
