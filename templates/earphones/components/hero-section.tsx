"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Play } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero-earphone.jpg"
          alt="SONIX Premium Earbuds"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent font-medium tracking-widest uppercase mb-6"
        >
          Introducing SONIX Pro
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance"
        >
          소리의 완벽함을
          <br />
          <span className="text-accent">경험하다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
        >
          차원이 다른 노이즈 캔슬링과 하이파이 오디오 기술로
          완전히 새로운 청취 경험을 선사합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products/pro"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            자세히 알아보기
          </Link>
          <button className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-lg hover:bg-secondary/80 transition-all">
            <Play className="w-5 h-5 fill-current" />
            영상 보기
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-12 text-sm text-muted-foreground"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">40dB</div>
            <div className="mt-1">노이즈 캔슬링</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">36시간</div>
            <div className="mt-1">총 재생시간</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center hidden sm:block">
            <div className="text-3xl font-bold text-foreground">Hi-Fi</div>
            <div className="mt-1">무손실 오디오</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
