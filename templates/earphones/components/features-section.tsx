"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Volume2, Battery, Bluetooth, Waves, Mic, Shield } from "lucide-react"

const features = [
  {
    icon: Volume2,
    title: "40dB 노이즈 캔슬링",
    description: "첨단 ANC 기술로 주변 소음을 완벽하게 차단하여 음악에만 집중할 수 있습니다.",
  },
  {
    icon: Waves,
    title: "Hi-Fi 무손실 오디오",
    description: "24bit/96kHz 고해상도 오디오 지원으로 스튜디오 품질의 사운드를 경험하세요.",
  },
  {
    icon: Battery,
    title: "36시간 재생",
    description: "케이스 충전 포함 36시간, 단독 8시간 재생으로 하루 종일 음악을 즐기세요.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.3",
    description: "최신 블루투스 기술로 끊김 없는 안정적인 연결을 보장합니다.",
  },
  {
    icon: Mic,
    title: "크리스탈 통화 품질",
    description: "6개의 빔포밍 마이크가 AI 노이즈 리덕션으로 선명한 통화를 제공합니다.",
  },
  {
    icon: Shield,
    title: "IPX5 방수",
    description: "운동 중 땀이나 갑작스러운 비에도 걱정 없이 사용할 수 있습니다.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-colors"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
        <feature.icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            혁신적인 기술
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SONIX의 모든 기술은 최상의 청취 경험을 위해 설계되었습니다
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Large Feature Image */}
        <motion.div
          ref={imageRef}
          style={{ scale: imageScale, rotateX: imageRotate }}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/technology.jpg"
            alt="SONIX Technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

          {/* Overlay Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 flex items-center p-12"
          >
            <div className="max-w-md">
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Sound Engineering
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                12mm 커스텀 드라이버
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                SONIX의 독자 개발 드라이버는 깊은 저음부터 선명한 고음까지
                모든 음역대에서 완벽한 밸런스를 제공합니다.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
