"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const menuCategories = [
  {
    id: "coffee",
    title: "커피",
    subtitle: "Coffee",
    description: "최상급 스페셜티 원두로 추출한 깊은 풍미의 커피",
    image: "/images/coffee.jpg",
    items: [
      { name: "에스프레소", price: "4,500", desc: "진한 크레마의 클래식" },
      { name: "아메리카노", price: "5,000", desc: "깔끔한 바디감" },
      { name: "카페라떼", price: "5,500", desc: "실키한 우유 거품" },
      { name: "카푸치노", price: "5,500", desc: "풍성한 밀크폼" },
      { name: "플랫화이트", price: "5,500", desc: "벨벳같은 텍스처" },
      { name: "콜드브루", price: "6,000", desc: "16시간 저온 추출" },
    ],
  },
  {
    id: "beverage",
    title: "음료",
    subtitle: "Beverage",
    description: "계절의 신선함을 담은 시그니처 음료",
    image: "/images/beverage.jpg",
    items: [
      { name: "유자 에이드", price: "6,500", desc: "고흥 유자청" },
      { name: "레몬 스파클링", price: "6,000", desc: "시칠리아 레몬" },
      { name: "얼그레이 라떼", price: "6,000", desc: "프리미엄 찻잎" },
      { name: "녹차 라떼", price: "6,000", desc: "우지 말차" },
      { name: "로얄 밀크티", price: "6,500", desc: "아쌈 블렌드" },
      { name: "생과일 스무디", price: "7,500", desc: "제철 과일" },
    ],
  },
  {
    id: "dessert",
    title: "디저트",
    subtitle: "Dessert",
    description: "매일 아침 구워내는 프리미엄 베이커리",
    image: "/images/dessert.jpg",
    items: [
      { name: "크루아상", price: "4,500", desc: "버터 36겹" },
      { name: "마카롱 세트", price: "8,000", desc: "5종 플레이버" },
      { name: "티라미수", price: "7,500", desc: "마스카포네" },
      { name: "바스크 치즈케이크", price: "7,000", desc: "스페인 전통" },
      { name: "까눌레", price: "4,000", desc: "보르도 레시피" },
      { name: "다쿠아즈", price: "5,500", desc: "아몬드 크림" },
    ],
  },
  {
    id: "brunch",
    title: "브런치",
    subtitle: "Brunch",
    description: "건강한 재료로 준비하는 아침 식사",
    image: "/images/brunch.jpg",
    items: [
      { name: "아보카도 토스트", price: "14,000", desc: "수란 토핑" },
      { name: "에그 베네딕트", price: "16,000", desc: "홀랜다이즈" },
      { name: "팬케이크", price: "13,000", desc: "메이플 시럽" },
      { name: "그래놀라 볼", price: "11,000", desc: "그릭 요거트" },
      { name: "연어 샐러드", price: "17,000", desc: "훈제 연어" },
      { name: "클럽 샌드위치", price: "15,000", desc: "트리플 데커" },
    ],
  },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_var(--primary)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 lg:mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">Our Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4">
            메뉴 소개
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            최상의 재료와 정성으로 준비한 메뉴들을 만나보세요.
            <br className="hidden md:block" />
            모든 메뉴는 매일 신선하게 준비됩니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 md:gap-6 mb-12 lg:mb-16 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Image Side */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden group">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  activeCategory === category.id ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              </div>
            ))}

            {/* Category Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-background/70 text-sm tracking-widest uppercase mb-2">
                {currentCategory?.subtitle}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-background mb-3">
                {currentCategory?.title}
              </h3>
              <p className="text-background/80 text-sm max-w-xs">
                {currentCategory?.description}
              </p>
            </div>
          </div>

          {/* Menu Items Side */}
          <div className="space-y-1">
            {currentCategory?.items.map((item, index) => (
              <div
                key={item.name}
                className={cn(
                  "group p-5 rounded-xl hover:bg-card transition-all duration-300 cursor-pointer border border-transparent hover:border-border hover:shadow-sm",
                  "transform transition-all duration-500",
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
                      <ArrowRight className="w-4 h-4 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-medium text-foreground">
                      {item.price}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">원</span>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Button */}
            <div className="pt-6">
              <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group/btn">
                <span className="text-sm font-medium">전체 메뉴 보기</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
