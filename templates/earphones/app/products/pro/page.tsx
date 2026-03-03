"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowLeft, Check, Volume2, Battery, Bluetooth, Waves, ShoppingBag, ChevronDown } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const specs = [
  { label: "드라이버", value: "12mm 커스텀 다이나믹 드라이버" },
  { label: "주파수 응답", value: "20Hz - 40kHz" },
  { label: "노이즈 캔슬링", value: "최대 40dB" },
  { label: "마이크", value: "6개 빔포밍 마이크 + AI 노이즈 리덕션" },
  { label: "코덱", value: "LDAC, AAC, SBC" },
  { label: "블루투스", value: "Bluetooth 5.3" },
  { label: "배터리 (이어버드)", value: "최대 8시간 (ANC ON)" },
  { label: "배터리 (케이스 포함)", value: "최대 36시간" },
  { label: "충전", value: "USB-C / Qi 무선충전" },
  { label: "방수등급", value: "IPX5" },
  { label: "무게 (이어버드)", value: "5.4g (각)" },
  { label: "무게 (케이스 포함)", value: "48g" },
]

const features = [
  {
    icon: Volume2,
    title: "40dB 어댑티브 ANC",
    description: "주변 환경을 실시간으로 분석하여 최적의 노이즈 캔슬링을 제공합니다.",
  },
  {
    icon: Waves,
    title: "Hi-Fi 무손실 오디오",
    description: "LDAC 코덱 지원으로 24bit/96kHz 고해상도 오디오를 경험하세요.",
  },
  {
    icon: Battery,
    title: "36시간 재생",
    description: "하루 종일 충분한 배터리로 음악과 함께하세요.",
  },
  {
    icon: Bluetooth,
    title: "멀티포인트 연결",
    description: "두 대의 기기에 동시 연결하여 자유롭게 전환하세요.",
  },
]

const colors = [
  { name: "미드나잇 블랙", value: "#1a1a1a", selected: true },
  { name: "스페이스 그레이", value: "#4a4a4a", selected: false },
  { name: "스노우 화이트", value: "#f5f5f5", selected: false },
]

export default function ProductProPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [showSpecs, setShowSpecs] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Back Link */}
      <div className="fixed top-20 left-6 z-30">
        <Link
          href="/products"
          className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          제품 목록
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
          <Image
            src="/images/product-pro.jpg"
            alt="SONIX Pro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium tracking-wider uppercase mb-4"
            >
              Premium Noise Cancelling
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            >
              SONIX Pro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8"
            >
              최첨단 40dB 노이즈 캔슬링과 Hi-Fi 무손실 오디오로
              당신만의 완벽한 사운드 세계를 경험하세요.
            </motion.p>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm text-muted-foreground mb-3">
                색상: <span className="text-foreground">{selectedColor.name}</span>
              </p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-accent scale-110"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Price & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <span className="text-4xl font-bold text-foreground">₩349,000</span>
              <button className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105">
                <ShoppingBag className="w-5 h-5" />
                구매하기
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              주요 기능
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SONIX Pro는 최고의 청취 경험을 위한 모든 기능을 갖추고 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl border border-border"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-accent/10 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Feature Image */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                어댑티브 노이즈 캔슬링
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                SONIX Pro의 6개 외부 마이크가 실시간으로 주변 소음을 분석하고,
                AI 알고리즘이 최적의 노이즈 캔슬링을 자동으로 조절합니다.
                비행기, 지하철, 카페 등 어떤 환경에서도 완벽한 몰입감을 제공합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "최대 40dB 소음 차단",
                  "3단계 ANC 레벨 조절",
                  "투명 모드 지원",
                  "바람 소음 감소",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/anc-feature.jpg"
                alt="ANC Technology"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="w-full flex items-center justify-between py-6 text-left"
          >
            <h2 className="text-2xl font-bold text-foreground">기술 사양</h2>
            <ChevronDown
              className={`w-6 h-6 text-muted-foreground transition-transform ${
                showSpecs ? "rotate-180" : ""
              }`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{ height: showSpecs ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 border-t border-border pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="text-foreground font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SONIX Pro와 함께하세요
          </h2>
          <p className="text-muted-foreground mb-8">
            30일 무료 체험과 2년 무상 보증이 함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
              <ShoppingBag className="w-5 h-5" />
              ₩349,000 구매하기
            </button>
            <Link
              href="/products"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all"
            >
              다른 제품 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
