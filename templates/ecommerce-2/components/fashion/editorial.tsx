"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Editorial() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="px-6 lg:px-12">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Editorial
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
              The Philosophy of Less
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In a world of excess, we choose restraint. Each piece in our collection 
              is designed to last, both in quality and in style. We believe that true 
              luxury lies not in abundance, but in the careful curation of what matters.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] group"
            >
              <span className="border-b border-foreground pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
                Read Our Story
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-accent transition-colors" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/fashion-collection.jpg"
              alt="Noir Atelier Editorial"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center py-16 border-y border-border">
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-8">
            {'"Fashion is not about clothes, it\'s about a feeling."'}
          </blockquote>
          <cite className="text-sm uppercase tracking-[0.3em] text-muted-foreground not-italic">
            - Noir Atelier Creative Director
          </cite>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-24">
          {[
            { name: "Outerwear", count: 12, href: "/" },
            { name: "Dresses", count: 8, href: "/" },
            { name: "Knitwear", count: 15, href: "/" },
            { name: "Accessories", count: 24, href: "/" },
          ].map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-background p-8 lg:p-12 group hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-sm text-muted-foreground">{category.count} pieces</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
