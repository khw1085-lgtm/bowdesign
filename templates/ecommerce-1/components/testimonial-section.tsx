"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: "1",
    quote: "Every piece from FORMA feels like it was made specifically for my home. The attention to detail is remarkable.",
    author: "Sarah Chen",
    title: "Interior Designer",
  },
  {
    id: "2",
    quote: "I've never experienced such thoughtful curation. These objects don't just fill space—they transform it.",
    author: "Marcus Rivera",
    title: "Architect",
  },
  {
    id: "3",
    quote: "The quality speaks for itself. After three years, my FORMA pieces look even more beautiful than the day I bought them.",
    author: "Emma Lindqvist",
    title: "Art Collector",
  },
]

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Mark */}
          <span className="font-serif text-6xl md:text-8xl text-muted-foreground/30 leading-none block mb-6">
            &ldquo;
          </span>

          {/* Testimonial */}
          <div className="relative min-h-[200px] flex items-center justify-center">
            <blockquote className="font-serif text-xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
              {testimonials[current].quote}
            </blockquote>
          </div>

          {/* Author */}
          <div className="mt-8 mb-12">
            <p className="font-medium">{testimonials[current].author}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-border'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
