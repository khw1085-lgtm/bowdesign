"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function FashionHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fashion-hero.jpg"
          alt="Noir Atelier AW26 Collection"
          fill
          className={`object-cover transition-transform duration-[2s] ease-out ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-6 lg:px-12 pb-20 lg:pb-32">
        <div 
          className={`max-w-3xl transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Autumn/Winter 2026
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-6">
            The Art of
            <br />
            <span className="text-accent">Shadow</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
            A collection exploring the interplay between light and darkness, 
            structure and fluidity.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] group"
          >
            <span className="border-b border-foreground pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
              Explore Collection
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
