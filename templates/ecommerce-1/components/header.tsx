"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingBag, Search, Menu, X, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(2)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              FORMA
            </h1>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:block p-2 hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 hover:text-accent transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 hover:text-accent transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-6 gap-4">
            <Link href="#" className="text-lg tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="#" className="text-lg tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
              Collections
            </Link>
            <Link href="#" className="text-lg tracking-wide py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <button className="p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
