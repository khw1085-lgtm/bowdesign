"use client"

import Image from "next/image"
import { useState } from "react"

interface RoleCardProps {
  title: string
  description: string
  imageSrc: string
  index: number
}

export function RoleCard({ title, description, imageSrc }: RoleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative cursor-pointer border-b border-border py-10 first:border-t"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 
            className={`text-2xl lg:text-4xl font-semibold tracking-tight text-foreground transition-all duration-500 ${
              isHovered ? "lg:translate-x-4" : "lg:translate-x-0"
            }`}
          >
            {title}
          </h3>
          <p 
            className={`text-sm font-normal leading-relaxed text-muted-foreground max-w-xl transition-all duration-500 delay-75 ${
              isHovered ? "text-foreground/80 lg:translate-x-4" : "lg:translate-x-0"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Animated Image */}
        <div 
          className={`relative w-full lg:w-72 aspect-video overflow-hidden bg-secondary rounded-lg transition-all duration-500 ease-out ${
            isHovered ? "shadow-2xl shadow-foreground/15" : "shadow-none"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={`object-cover transition-all duration-1000 ease-out ${
              isHovered 
                ? "scale-125 animate-pan" 
                : "scale-100"
            }`}
            style={{
              animationPlayState: isHovered ? "running" : "paused",
            }}
          />
          <div
            className={`absolute inset-0 bg-foreground/20 transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
