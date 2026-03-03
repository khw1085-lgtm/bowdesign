"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export function ANCSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [ancLevel, setAncLevel] = useState(100)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/anc-feature.jpg"
          alt="Noise Cancellation"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Active Noise Cancellation
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              세상의 소음을<br />차단하다
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              SONIX Pro의 어댑티브 노이즈 캔슬링 기술은 주변 환경을 실시간으로 
              분석하여 최적의 노이즈 캔슬링을 제공합니다. 비행기, 지하철, 
              카페 어디서든 온전히 음악에 집중하세요.
            </p>

            {/* ANC Level Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">노이즈 캔슬링 레벨</span>
                <span className="text-foreground font-medium">{ancLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={ancLevel}
                onChange={(e) => setAncLevel(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>투명 모드</span>
                <span>최대 차단</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "40dB", label: "최대 소음 차단" },
                { value: "6", label: "마이크 개수" },
                { value: "AI", label: "적응형 알고리즘" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y: parallaxY }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Sound Wave Animation */}
            <div className="relative aspect-square">
              {/* Outer waves - noise */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`outer-${i}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3 * (1 - ancLevel / 100), 0, 0.3 * (1 - ancLevel / 100)],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-2 border-red-500/30 rounded-full"
                />
              ))}

              {/* Inner waves - music */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`inner-${i}`}
                  animate={{
                    scale: [0.6, 0.8, 0.6],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[15%] border-2 border-accent rounded-full"
                />
              ))}

              {/* Center earphone icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-32 h-32 bg-card rounded-full flex items-center justify-center shadow-2xl shadow-accent/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-16 h-16 text-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </motion.div>
              </div>

              {/* ANC Shield Effect */}
              <motion.div
                animate={{
                  opacity: ancLevel / 100,
                  scale: [0.85, 0.9, 0.85],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-[10%] border-4 border-accent/30 rounded-full bg-accent/5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
