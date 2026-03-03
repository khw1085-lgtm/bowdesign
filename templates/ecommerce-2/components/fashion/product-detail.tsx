"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, Heart, Minus, Plus, ChevronDown } from "lucide-react"
import { FashionProduct } from "@/lib/fashion-products"

interface ProductDetailProps {
  product: FashionProduct
}

export function FashionProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>("details")

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-24 left-6 lg:left-12 z-40">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Image Section */}
        <div className="relative h-screen lg:sticky lg:top-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.isNew && (
            <span className="absolute top-24 lg:top-8 right-6 text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1">
              New
            </span>
          )}
          {product.isSoldOut && (
            <span className="absolute top-24 lg:top-8 right-6 text-xs uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Details Section */}
        <div className="px-6 lg:px-12 xl:px-20 py-24 lg:py-32">
          <div className="max-w-lg">
            {/* Breadcrumb */}
            <p className="text-sm text-muted-foreground mb-6">
              {product.collection} / {product.category}
            </p>

            {/* Title & Price */}
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-2xl">
                ${product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.2em] mb-4">
                Color: <span className="text-muted-foreground">{selectedColor.name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 border-2 transition-colors ${
                      selectedColor.name === color.name
                        ? "border-foreground"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm uppercase tracking-[0.2em]">Size</p>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[60px] px-4 py-3 border text-sm uppercase tracking-wider transition-colors ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.2em] mb-4">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-card transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-card transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button
                disabled={product.isSoldOut || !selectedSize}
                className={`flex-1 py-4 text-sm uppercase tracking-[0.2em] transition-colors ${
                  product.isSoldOut
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-foreground text-background hover:bg-accent"
                }`}
              >
                {product.isSoldOut ? "Sold Out" : "Add to Bag"}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 border transition-colors ${
                  isWishlisted
                    ? "border-accent text-accent"
                    : "border-border hover:border-foreground"
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-border">
              {/* Details */}
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenSection(openSection === "details" ? null : "details")}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "details" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "details" && (
                  <div className="pb-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.details.map((detail, index) => (
                        <li key={index}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Fabric */}
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenSection(openSection === "fabric" ? null : "fabric")}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Fabric & Composition</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "fabric" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "fabric" && (
                  <div className="pb-6">
                    <p className="text-sm text-muted-foreground">{product.fabric}</p>
                  </div>
                )}
              </div>

              {/* Care */}
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenSection(openSection === "care" ? null : "care")}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Care Instructions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "care" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "care" && (
                  <div className="pb-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.care.map((instruction, index) => (
                        <li key={index}>• {instruction}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenSection(openSection === "shipping" ? null : "shipping")}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Shipping & Returns</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === "shipping" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "shipping" && (
                  <div className="pb-6 text-sm text-muted-foreground space-y-3">
                    <p>Complimentary shipping on orders over $300.</p>
                    <p>Standard shipping: 5-7 business days.</p>
                    <p>Express shipping: 2-3 business days.</p>
                    <p>Returns accepted within 14 days of delivery.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
