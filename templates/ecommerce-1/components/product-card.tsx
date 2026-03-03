"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  className?: string
}

export function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  category, 
  isNew,
  className = ""
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      href={`/products/${id}`}
      className={`group relative block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        
        {/* New Badge */}
        {isNew && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-medium">
            New
          </span>
        )}

        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isLiked ? 'fill-accent text-accent' : 'text-foreground'}`} 
          />
        </button>

        {/* Quick Add */}
        <button 
          className={`absolute bottom-0 left-0 right-0 py-3 bg-primary text-primary-foreground text-sm tracking-wide font-medium transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </p>
        <h3 className="text-sm font-medium">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          ${price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}
