"use client"

import Image from "next/image"
import Link from "next/link"
import { fashionProducts } from "@/lib/fashion-products"

export function Lookbook() {
  return (
    <section className="py-24 lg:py-32">
      {/* Section Header */}
      <div className="px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Featured
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link 
            href="/"
            className="text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors self-start md:self-auto"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Editorial Layout */}
      <div className="px-6 lg:px-12">
        {/* First Row - Large + Small */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-4 lg:mb-6">
          <Link 
            href={`/products/${fashionProducts[0].id}`}
            className="lg:col-span-7 group relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={fashionProducts[0].image}
              alt={fashionProducts[0].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {fashionProducts[0].category}
              </p>
              <h3 className="font-serif text-2xl mb-2">{fashionProducts[0].name}</h3>
              <p className="text-lg">${fashionProducts[0].price}</p>
            </div>
            {fashionProducts[0].isNew && (
              <span className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1">
                New
              </span>
            )}
          </Link>
          <Link 
            href={`/products/${fashionProducts[1].id}`}
            className="lg:col-span-5 group relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={fashionProducts[1].image}
              alt={fashionProducts[1].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {fashionProducts[1].category}
              </p>
              <h3 className="font-serif text-2xl mb-2">{fashionProducts[1].name}</h3>
              <p className="text-lg">${fashionProducts[1].price}</p>
            </div>
          </Link>
        </div>

        {/* Second Row - Three Equal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {fashionProducts.slice(2, 5).map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl mb-2">{product.name}</h3>
                <div className="flex items-center gap-3">
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                  <span>${product.price}</span>
                </div>
              </div>
              {product.isNew && (
                <span className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1">
                  New
                </span>
              )}
              {product.isSoldOut && (
                <span className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">
                  Sold Out
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Third Row - Small + Large */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <Link 
            href={`/products/${fashionProducts[5].id}`}
            className="lg:col-span-5 group relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={fashionProducts[5].image}
              alt={fashionProducts[5].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {fashionProducts[5].category}
              </p>
              <h3 className="font-serif text-2xl mb-2">{fashionProducts[5].name}</h3>
              <p className="text-lg">${fashionProducts[5].price}</p>
            </div>
            {fashionProducts[5].isSoldOut && (
              <span className="absolute top-6 left-6 text-xs uppercase tracking-[0.2em] bg-muted text-muted-foreground px-3 py-1">
                Sold Out
              </span>
            )}
          </Link>
          <div className="lg:col-span-7 relative aspect-[3/4] overflow-hidden flex items-center justify-center bg-card">
            <div className="text-center px-8">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                The Collection
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                AW26
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Discover the complete Autumn/Winter collection. 
                Pieces designed to transcend seasons.
              </p>
              <Link 
                href="/"
                className="inline-flex text-sm uppercase tracking-[0.2em] border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
