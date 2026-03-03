"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    id: "1",
    title: "Ceramics",
    subtitle: "Handcrafted pottery",
    image: "/images/collection-1.jpg",
    itemCount: 24,
  },
  {
    id: "2",
    title: "Textiles",
    subtitle: "Woven comfort",
    image: "/images/collection-2.jpg",
    itemCount: 18,
  },
]

export function CollectionsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">
            Shop by Collection
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden cursor-pointer"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-background/70 mb-2">
                      {collection.itemCount} items
                    </p>
                    <h3 className="font-serif text-2xl md:text-4xl font-light text-background mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-background/80">
                      {collection.subtitle}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
