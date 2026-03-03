import { notFound } from "next/navigation"
import { getProductById, products } from "@/lib/products"
import { ProductDetail } from "@/components/product-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: "Product Not Found | FORMA",
    }
  }

  return {
    title: `${product.name} | FORMA`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  )
}
