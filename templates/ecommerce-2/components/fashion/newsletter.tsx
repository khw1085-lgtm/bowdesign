"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function FashionNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Newsletter
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-12">
            Subscribe for early access to new collections, exclusive offers, 
            and stories from our atelier.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-border px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="border border-accent p-8">
              <p className="text-lg mb-2">Welcome to Noir Atelier</p>
              <p className="text-muted-foreground">
                Thank you for subscribing. We'll be in touch soon.
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  )
}
