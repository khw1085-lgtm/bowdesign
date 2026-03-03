"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
            Join Our World
          </h2>
          <p className="text-primary-foreground/80 mb-10 leading-relaxed">
            Be the first to discover new collections, exclusive offers, and stories from our artisan partners around the globe.
          </p>

          {isSubmitted ? (
            <div className="py-4 text-primary-foreground/80">
              Thank you for subscribing. Welcome to FORMA.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
                required
              />
              <button 
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm tracking-wide font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
