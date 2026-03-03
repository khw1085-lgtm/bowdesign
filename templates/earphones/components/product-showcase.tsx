"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "pro",
    name: "SONIX Pro",
    tagline: "프리미엄 노이즈 캔슬링",
    description: "최첨단 ANC 기술과 하이파이 사운드의 완벽한 조화",
    price: "₩349,000",
    image: "/images/product-pro.jpg",
    features: ["40dB ANC", "36시간 재생", "무손실 오디오"],
    color: "from-cyan-500/20 to-transparent",
  },
  {
    id: "air",
    name: "SONIX Air",
    tagline: "가볍고 편안한",
    description: "하루 종일 착용해도 편안한 초경량 디자인",
    price: "₩249,000",
    image: "/images/lifestyle.jpg",
    features: ["4.2g 초경량", "28시간 재생", "IPX5 방수"],
    color: "from-emerald-500/20 to-transparent",
  },
]

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-card">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10`}
          />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">
                {product.tagline}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs bg-secondary/50 backdrop-blur-sm rounded-full text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-foreground">
                  {product.price}
                </span>
                <span className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                  자세히 보기
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            제품 라인업
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            당신의 라이프스타일에 맞는 완벽한 사운드를 찾아보세요
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all"
          >
            모든 제품 보기
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
