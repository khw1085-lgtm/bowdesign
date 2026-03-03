"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { 
  Headphones, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Shield, 
  ChevronDown, 
  Search,
  Clock,
  MapPin,
  ArrowRight
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "실시간 채팅",
    description: "전문 상담원과 바로 연결됩니다",
    action: "채팅 시작",
    available: "평일 09:00 - 18:00",
  },
  {
    icon: Mail,
    title: "이메일 문의",
    description: "24시간 내 답변을 드립니다",
    action: "이메일 보내기",
    available: "support@sonix.com",
  },
  {
    icon: Phone,
    title: "전화 상담",
    description: "직접 통화로 빠른 해결",
    action: "1588-0000",
    available: "평일 09:00 - 18:00",
  },
]

const faqs = [
  {
    id: 1,
    category: "주문/배송",
    question: "배송은 얼마나 걸리나요?",
    answer: "주문 후 영업일 기준 1-2일 내에 출고되며, 출고 후 1-2일 내에 수령하실 수 있습니다. 제주 및 도서산간 지역은 1-2일 추가 소요될 수 있습니다.",
  },
  {
    id: 2,
    category: "주문/배송",
    question: "배송비는 얼마인가요?",
    answer: "모든 SONIX 제품은 무료 배송됩니다. 액세서리 단독 주문 시 3만원 미만은 3,000원의 배송비가 부과됩니다.",
  },
  {
    id: 3,
    category: "제품",
    question: "노이즈 캔슬링 기능은 어떻게 사용하나요?",
    answer: "이어버드를 착용한 상태에서 왼쪽 이어버드를 길게 터치하면 ANC 모드가 전환됩니다. ANC → 투명 모드 → OFF 순으로 전환됩니다.",
  },
  {
    id: 4,
    category: "제품",
    question: "방수 등급은 어떻게 되나요?",
    answer: "SONIX Pro는 IPX5 등급으로 운동 중 땀이나 가벼운 비에 안전합니다. 다만 수영이나 샤워 중 사용은 권장하지 않습니다.",
  },
  {
    id: 5,
    category: "보증/수리",
    question: "보증 기간은 얼마나 되나요?",
    answer: "모든 SONIX 제품은 구매일로부터 2년간 무상 보증이 적용됩니다. 단, 사용자 과실로 인한 손상은 유상 수리됩니다.",
  },
  {
    id: 6,
    category: "보증/수리",
    question: "수리는 어떻게 신청하나요?",
    answer: "고객센터로 연락하시거나 공식 서비스센터를 방문해 주세요. 택배 접수도 가능하며, 수리 기간은 통상 3-5영업일 소요됩니다.",
  },
  {
    id: 7,
    category: "연결",
    question: "블루투스 페어링이 안 됩니다.",
    answer: "케이스에서 이어버드를 꺼낸 후 3초간 페어링 대기 상태가 됩니다. 기기의 블루투스 설정에서 'SONIX Pro'를 선택해 연결하세요. 문제가 지속되면 이어버드를 초기화해 보세요.",
  },
  {
    id: 8,
    category: "연결",
    question: "두 대의 기기에 동시 연결이 가능한가요?",
    answer: "네, SONIX Pro는 멀티포인트 기능을 지원하여 두 대의 기기에 동시 연결이 가능합니다. 앱에서 해당 기능을 활성화해 주세요.",
  },
]

const warrantyInfo = [
  { title: "무상 보증 기간", value: "2년" },
  { title: "연장 보증", value: "최대 1년 추가 가능" },
  { title: "수리 소요 시간", value: "3-5 영업일" },
  { title: "택배 수거", value: "무료" },
]

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground">
            {faq.category}
          </span>
          <span className="text-foreground font-medium">{faq.question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-4 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const heroRef = useRef<HTMLElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent mb-6">
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">고객 지원</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              무엇을 도와드릴까요?
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10">
              SONIX 제품에 대한 모든 궁금증을 해결해 드립니다.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="질문을 검색해 보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section id="help" className="py-20 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                  <option.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{option.available}</span>
                  <span className="text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {option.action}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-muted-foreground text-lg">
              가장 많이 문의하시는 내용을 모았습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => <FAQItem key={faq.id} faq={faq} />)
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                검색 결과가 없습니다. 다른 키워드로 검색해 보세요.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-32 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium tracking-wider uppercase">
                  Warranty
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                안심 보증 서비스
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                모든 SONIX 제품은 2년 무상 보증이 적용됩니다.
                제조상의 결함으로 인한 문제는 무상으로 수리 또는 교환해 드립니다.
                추가로 1년 연장 보증도 구매 가능합니다.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
                <FileText className="w-5 h-5" />
                보증 등록하기
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {warrantyInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-secondary rounded-2xl"
                >
                  <p className="text-sm text-muted-foreground mb-2">{info.title}</p>
                  <p className="text-2xl font-bold text-foreground">{info.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              더 많은 도움이 필요하신가요?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              SONIX 전문 상담원이 친절하게 도와드리겠습니다.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <Clock className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">운영시간</p>
                  <p className="text-foreground font-medium">평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <MapPin className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">서비스센터</p>
                  <p className="text-foreground font-medium">서울특별시 강남구</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
