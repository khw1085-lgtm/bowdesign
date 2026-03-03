"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const products = [
  {
    id: "pro",
    name: "SONIX Pro",
    tagline: "프리미엄 노이즈 캔슬링",
    description: "최첨단 ANC 기술과 하이파이 사운드의 완벽한 조화. 진정한 프리미엄 오디오 경험을 원하는 당신을 위한 선택.",
    price: "₩349,000",
    image: "/images/product-pro.jpg",
    features: [
      "40dB 어댑티브 노이즈 캔슬링",
      "12mm 커스텀 드라이버",
      "36시간 총 재생시간",
      "Hi-Fi 무손실 오디오",
      "6개 빔포밍 마이크",
      "IPX5 방수"
    ],
    color: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    badge: "Best Seller"
  },
  {
    id: "air",
    name: "SONIX Air",
    tagline: "초경량 컴포트",
    description: "단 4.2g의 초경량 설계로 하루 종일 착용해도 편안한 이어버드. 일상의 모든 순간을 음악과 함께.",
    price: "₩249,000",
    image: "/images/product-air.jpg",
    features: [
      "4.2g 초경량 설계",
      "28시간 총 재생시간",
      "투명 모드",
      "터치 컨트롤",
      "빠른 페어링",
      "IPX4 방수"
    ],
    color: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    badge: "New"
  },
  {
    id: "sport",
    name: "SONIX Sport",
    tagline: "스포츠 퍼포먼스",
    description: "격렬한 운동에도 안정적인 착용감. 땀과 물에 강한 내구성으로 어떤 활동도 두렵지 않습니다.",
    price: "₩199,000",
    image: "/images/product-sport.jpg",
    features: [
      "이어훅 안정 설계",
      "IP67 방수방진",
      "24시간 총 재생시간",
      "빠른 충전 (10분=2시간)",
      "심박수 모니터링",
      "운동 모드"
    ],
    color: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    badge: null
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group relative rounded-3xl overflow-hidden ${product.color} border border-border hover:border-accent/30 transition-all duration-500`}
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
              {product.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <p className="text-accent font-medium tracking-wider uppercase mb-2">
            {product.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {product.name}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-3 mb-8">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-foreground">{product.price}</span>
            <Link
              href={`/products/${product.id}`}
              className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
            >
              자세히 보기
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            제품 라인업
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            당신의 라이프스타일에 맞는 완벽한 사운드를 찾아보세요
          </motion.p>
        </div>
      </section>

      {/* Products List */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Compare Banner */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            어떤 제품이 나에게 맞을까요?
          </h2>
          <p className="text-muted-foreground mb-8">
            각 제품의 특징을 비교하고 당신에게 딱 맞는 이어버드를 찾아보세요.
          </p>
          <Link
            href="/products/compare"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            제품 비교하기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
