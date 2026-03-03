import { notFound } from "next/navigation"
import { fashionProducts } from "@/lib/fashion-products"
import { FashionHeader } from "@/components/fashion/header"
import { FashionFooter } from "@/components/fashion/footer"
import { FashionProductDetail } from "@/components/fashion/product-detail"

export async function generateStaticParams() {
  return fashionProducts.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = fashionProducts.find((p) => p.id === id)
  
  if (!product) {
    return {
      title: "Product Not Found | NOIR ATELIER",
    }
  }

  return {
    title: `${product.name} | NOIR ATELIER`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = fashionProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <FashionHeader />
      <FashionProductDetail product={product} />
      <FashionFooter />
    </>
  )
}
