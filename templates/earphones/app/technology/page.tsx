"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Volume2, Battery, Bluetooth, Waves, Mic, Cpu } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const technologies = [
  {
    id: "sound",
    icon: Waves,
    title: "하이파이 사운드 엔진",
    subtitle: "12mm Custom Driver",
    description: "SONIX의 독자 개발 12mm 커스텀 드라이버는 깊은 저음부터 선명한 고음까지 모든 음역대에서 완벽한 밸런스를 제공합니다. 24bit/96kHz 고해상도 오디오와 LDAC 코덱 지원으로 스튜디오 품질의 사운드를 귀에 직접 전달합니다.",
    specs: [
      { label: "드라이버 크기", value: "12mm" },
      { label: "주파수 응답", value: "20Hz - 40kHz" },
      { label: "지원 코덱", value: "LDAC, AAC, SBC" },
      { label: "오디오 해상도", value: "24bit/96kHz" },
    ],
    image: "/images/technology.jpg",
  },
  {
    id: "anc",
    icon: Volume2,
    title: "어댑티브 노이즈 캔슬링",
    subtitle: "40dB Active Noise Cancellation",
    description: "6개의 외부 마이크가 실시간으로 주변 소음을 분석하고, AI 알고리즘이 최적의 노이즈 캔슬링을 자동으로 조절합니다. 비행기, 지하철, 카페 등 어떤 환경에서도 완벽한 몰입감을 제공합니다.",
    specs: [
      { label: "최대 소음 차단", value: "40dB" },
      { label: "마이크 개수", value: "6개" },
      { label: "모드", value: "ANC / 투명 / OFF" },
      { label: "처리 방식", value: "하이브리드 피드백" },
    ],
    image: "/images/anc-feature.jpg",
  },
  {
    id: "battery",
    icon: Battery,
    title: "올데이 배터리",
    subtitle: "36시간 총 재생시간",
    description: "이어버드 단독 8시간, 충전 케이스 포함 총 36시간의 재생시간을 제공합니다. 10분 충전으로 2시간 재생이 가능한 급속 충전과 Qi 무선충전을 지원합니다.",
    specs: [
      { label: "이어버드 재생", value: "8시간 (ANC ON)" },
      { label: "케이스 포함", value: "36시간" },
      { label: "급속 충전", value: "10분 = 2시간" },
      { label: "충전 방식", value: "USB-C / Qi" },
    ],
    image: "/images/lifestyle.jpg",
  },
]

const additionalFeatures = [
  {
    icon: Mic,
    title: "크리스탈 통화 품질",
    description: "6개의 빔포밍 마이크와 AI 노이즈 리덕션으로 어떤 환경에서도 선명한 통화를 보장합니다.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.3",
    description: "최신 블루투스 기술로 더 안정적인 연결과 낮은 지연시간을 제공합니다.",
  },
  {
    icon: Cpu,
    title: "AI 사운드 프로세서",
    description: "실시간 오디오 처리로 음악, 영상, 게임에 최적화된 사운드를 자동으로 제공합니다.",
  },
]

function TechnologySection({
  tech,
  index,
}: {
  tech: (typeof technologies)[0]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isReverse = index % 2 === 1

  return (
    <section ref={ref} id={tech.id} className="py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            isReverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isReverse ? "lg:order-2" : ""}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
                <tech.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-accent font-medium tracking-wider uppercase">
                {tech.subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {tech.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {tech.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-6">
              {tech.specs.map((spec) => (
                <div key={spec.label} className="p-4 bg-card rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                  <p className="text-xl font-bold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative aspect-square rounded-3xl overflow-hidden ${
              isReverse ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={tech.image}
              alt={tech.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function TechnologyPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-medium tracking-wider uppercase mb-4"
          >
            Innovation & Engineering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            혁신적인 기술
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-xl max-w-3xl mx-auto mb-12"
          >
            SONIX의 모든 기술은 최상의 청취 경험을 위해 설계되었습니다.
            소리의 본질에 집중한 엔지니어링을 만나보세요.
          </motion.p>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech) => (
              <a
                key={tech.id}
                href={`#${tech.id}`}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
              >
                {tech.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Sections */}
      {technologies.map((tech, index) => (
        <TechnologySection key={tech.id} tech={tech} index={index} />
      ))}

      {/* Additional Features */}
      <section className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              그 외 기능
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SONIX는 더 많은 기술로 최고의 경험을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border text-center"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-accent/10 rounded-xl mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
