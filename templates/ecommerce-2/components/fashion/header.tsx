"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, ShoppingBag, User } from "lucide-react"

export function FashionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-20">
          {/* Left - Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
          >
            <Menu className="w-5 h-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Center - Logo */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase"
          >
            Noir Atelier
          </Link>

          {/* Right - Actions */}
          <div className="flex items-center gap-6">
            <button className="hover:opacity-60 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="relative hover:opacity-60 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 lg:px-12 h-20 border-b border-border">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5" />
              <span>Close</span>
            </button>
            <span className="font-serif text-2xl tracking-[0.15em] uppercase">Noir Atelier</span>
            <div className="w-20" />
          </div>

          <nav className="flex-1 flex items-center px-6 lg:px-12">
            <ul className="space-y-2">
              {[
                { label: "New Arrivals", href: "/" },
                { label: "Collections", href: "/" },
                { label: "Outerwear", href: "/" },
                { label: "Dresses", href: "/" },
                { label: "Knitwear", href: "/" },
                { label: "Accessories", href: "/" },
              ].map((item, index) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight hover:text-accent transition-colors"
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                      transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                      opacity: isMenuOpen ? 1 : 0,
                      transition: "transform 0.5s ease, opacity 0.5s ease, color 0.3s ease"
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 lg:px-12 py-8 border-t border-border">
            <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Instagram</Link>
              <Link href="/" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/" className="hover:text-foreground transition-colors">Stockists</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
