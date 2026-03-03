"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Target, Heart, Lightbulb, Users, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const timeline = [
  {
    year: "2019",
    title: "SONIX 설립",
    description: "오디오에 대한 열정을 가진 엔지니어들이 모여 SONIX를 설립했습니다.",
  },
  {
    year: "2020",
    title: "첫 제품 출시",
    description: "2년간의 연구 끝에 첫 번째 프리미엄 이어버드 SONIX One을 선보였습니다.",
  },
  {
    year: "2022",
    title: "글로벌 확장",
    description: "아시아 태평양 지역을 넘어 유럽, 북미 시장에 진출했습니다.",
  },
  {
    year: "2023",
    title: "SONIX Pro 출시",
    description: "혁신적인 40dB ANC 기술을 탑재한 플래그십 모델을 출시했습니다.",
  },
  {
    year: "2024",
    title: "100만 고객 달성",
    description: "전 세계 100만 명의 고객이 SONIX와 함께하게 되었습니다.",
  },
]

const values = [
  {
    icon: Target,
    title: "품질에 대한 집념",
    description: "우리는 모든 제품에서 타협 없는 품질을 추구합니다. 완벽한 사운드를 위해 수백 번의 테스트를 거칩니다.",
  },
  {
    icon: Lightbulb,
    title: "끊임없는 혁신",
    description: "오디오 기술의 경계를 끊임없이 확장합니다. 오늘의 불가능이 내일의 표준이 됩니다.",
  },
  {
    icon: Heart,
    title: "고객 중심",
    description: "고객의 목소리에 귀 기울이고, 그들의 필요를 충족시키는 제품을 만듭니다.",
  },
  {
    icon: Users,
    title: "지속 가능성",
    description: "환경을 생각하는 제조 공정과 재활용 가능한 소재를 사용합니다.",
  },
]

const stats = [
  { value: "100만+", label: "전 세계 고객" },
  { value: "30+", label: "진출 국가" },
  { value: "200+", label: "팀 멤버" },
  { value: "50+", label: "특허 기술" },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"} md:flex-row`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"} md:text-left`}>
        <div className="inline-block p-6 bg-card rounded-2xl border border-border">
          <span className="text-accent font-bold text-2xl">{item.year}</span>
          <h3 className="text-xl font-semibold text-foreground mt-2">{item.title}</h3>
          <p className="text-muted-foreground mt-2">{item.description}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 bg-accent rounded-full" />
        {index < timeline.length - 1 && <div className="w-px h-32 bg-border" />}
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function StoryPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 z-0">
          <Image
            src="/images/brand-story.jpg"
            alt="SONIX Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium tracking-wider uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            >
              소리에 대한
              <br />열정으로
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground"
            >
              SONIX는 완벽한 사운드를 향한 끊임없는 여정입니다.
              우리는 기술과 예술의 경계에서 새로운 청취 경험을 만들어갑니다.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
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
                우리의 미션
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                SONIX는 모든 사람이 최고 품질의 오디오를 경험할 수 있어야 한다고 믿습니다.
                우리의 미션은 혁신적인 기술과 세심한 디자인을 통해
                일상의 모든 순간을 더 풍요롭게 만드는 것입니다.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                음악가가 의도한 그대로의 소리, 영화 감독이 설계한 그대로의 사운드스케이프,
                게임 개발자가 만들어낸 그대로의 몰입감. SONIX와 함께라면 가능합니다.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              우리의 가치
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              SONIX를 이끄는 핵심 가치입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="news" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              우리의 여정
            </h2>
            <p className="text-muted-foreground text-lg">
              SONIX의 성장 스토리
            </p>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              함께 성장할 인재를 찾습니다
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              SONIX와 함께 오디오의 미래를 만들어갈 열정적인 분들을 기다립니다.
              엔지니어, 디자이너, 마케터 등 다양한 포지션이 열려 있습니다.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
              채용 공고 보기
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
