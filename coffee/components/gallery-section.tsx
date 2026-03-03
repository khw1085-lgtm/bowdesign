"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Instagram, ExternalLink } from "lucide-react";

const galleryImages = [
  { src: "/images/coffee.jpg", alt: "Specialty coffee", span: "col-span-1" },
  { src: "/images/dessert.jpg", alt: "Fresh desserts", span: "col-span-1" },
  { src: "/images/interior.jpg", alt: "Cafe interior", span: "col-span-1 md:col-span-2 md:row-span-2" },
  { src: "/images/beverage.jpg", alt: "Artisanal beverages", span: "col-span-1" },
  { src: "/images/brunch.jpg", alt: "Brunch menu", span: "col-span-1" },
  { src: "/images/hero-main.jpg", alt: "Cafe atmosphere", span: "col-span-1 md:col-span-2" },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase">
              Gallery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
              MAISON의 순간들
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@maison_cafe</span>
            <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden group cursor-pointer",
                image.span,
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
