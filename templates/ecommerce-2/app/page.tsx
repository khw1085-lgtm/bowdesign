import { FashionHeader } from "@/components/fashion/header"
import { FashionHero } from "@/components/fashion/hero"
import { Lookbook } from "@/components/fashion/lookbook"
import { Editorial } from "@/components/fashion/editorial"
import { FashionNewsletter } from "@/components/fashion/newsletter"
import { FashionFooter } from "@/components/fashion/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FashionHeader />
      <FashionHero />
      <Lookbook />
      <Editorial />
      <FashionNewsletter />
      <FashionFooter />
    </main>
  )
}
