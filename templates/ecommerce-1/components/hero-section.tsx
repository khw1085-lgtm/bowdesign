"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="FORMA curated living space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/70 mb-4">
            Spring Collection 2026
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 text-balance">
            Objects that define your space
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-md leading-relaxed">
            Discover thoughtfully designed pieces crafted by artisans around the world. Every object tells a story.
          </p>
          <button className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide font-medium hover:bg-primary/90 transition-colors">
            Explore Collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-foreground/50">Scroll</span>
        <div className="w-px h-8 bg-foreground/30 relative overflow-hidden">
          <div className="w-full h-2 bg-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
