"use client"

import { ProductCard } from "./product-card"
import { products } from "@/lib/products"

export function BentoGrid() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Featured
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              New Arrivals
            </h2>
          </div>
          <button className="text-sm tracking-wide underline underline-offset-4 hover:text-accent transition-colors self-start md:self-auto">
            View All Products
          </button>
        </div>

        {/* Creative Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {/* Large featured item */}
          <div className="col-span-2 row-span-2">
            <ProductCard {...products[0]} className="h-full [&>div:first-child]:aspect-auto [&>div:first-child]:h-[calc(100%-60px)]" />
          </div>
          
          {/* Regular items */}
          <div className="col-span-1">
            <ProductCard {...products[1]} />
          </div>
          
          <div className="col-span-1">
            <ProductCard {...products[2]} />
          </div>
          
          {/* Tall item */}
          <div className="col-span-2 row-span-2 hidden lg:block">
            <ProductCard {...products[3]} className="h-full [&>div:first-child]:aspect-auto [&>div:first-child]:h-[calc(100%-60px)]" />
          </div>
          
          {/* Regular items */}
          <div className="col-span-1">
            <ProductCard {...products[4]} />
          </div>
          
          <div className="col-span-1">
            <ProductCard {...products[5]} />
          </div>
          
          {/* Mobile only items */}
          <div className="col-span-1 lg:hidden">
            <ProductCard {...products[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
