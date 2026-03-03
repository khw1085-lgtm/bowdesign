"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, Heart, Minus, Plus, Check } from "lucide-react"
import { type Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 md:py-16">
      {/* Back Link */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium">
                New
              </span>
            )}
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 overflow-hidden transition-all ${
                  selectedImage === index 
                    ? "ring-2 ring-foreground ring-offset-2" 
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:py-8">
          {/* Category & Name */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-light">
              ${product.price.toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3">
              Color: <span className="font-normal text-muted-foreground">{product.colors[selectedColor]}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(index)}
                  className={`relative px-4 py-2 text-sm border transition-all ${
                    selectedColor === index
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {color}
                  {selectedColor === index && (
                    <Check className="absolute top-1 right-1 w-3 h-3" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3">Quantity</p>
            <div className="inline-flex items-center border border-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-muted transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-muted transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-12">
            <button className="flex-1 py-4 bg-primary text-primary-foreground text-sm tracking-wide font-medium hover:bg-primary/90 transition-colors">
              Add to Cart
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-4 border border-border hover:border-foreground transition-colors"
              aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-accent text-accent" : ""}`} />
            </button>
          </div>

          {/* Details Accordion */}
          <div className="border-t border-border">
            {/* Details */}
            <details className="group" open>
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-medium">
                Details
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="pb-4">
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* Dimensions */}
            <details className="group border-t border-border">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-medium">
                Dimensions
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="pb-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Width</p>
                    <p className="font-medium">{product.dimensions.width}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Depth</p>
                    <p className="font-medium">{product.dimensions.depth}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Height</p>
                    <p className="font-medium">{product.dimensions.height}</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Materials */}
            <details className="group border-t border-border">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-medium">
                Materials
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span 
                      key={material}
                      className="px-3 py-1 bg-muted text-sm text-muted-foreground"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </details>

            {/* Shipping */}
            <details className="group border-t border-border">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-sm font-medium">
                Shipping & Returns
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="pb-4 text-sm text-muted-foreground space-y-2">
                <p>Free shipping on orders over $500</p>
                <p>Estimated delivery: 2-4 weeks</p>
                <p>30-day return policy for unused items</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
