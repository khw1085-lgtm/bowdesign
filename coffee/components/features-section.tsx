"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    image: "/images/feature-coffee-beans.jpg",
    title: "스페셜티 원두",
    description: "세계 각지에서 엄선한 최상급 스페셜티 원두만을 사용합니다.",
  },
  {
    image: "/images/feature-fresh.jpg",
    title: "신선한 재료",
    description: "매일 아침 배송되는 신선한 재료로 메뉴를 준비합니다.",
  },
  {
    image: "/images/feature-barista.jpg",
    title: "정성 가득",
    description: "숙련된 바리스타가 한 잔 한 잔 정성을 다해 만듭니다.",
  },
  {
    image: "/images/feature-award.jpg",
    title: "수상 경력",
    description: "국내외 바리스타 챔피언십 수상 경력을 보유하고 있습니다.",
  },
  {
    image: "/images/feature-customers.jpg",
    title: "고객 만족",
    description: "100만 고객이 선택한 프리미엄 카페 경험을 제공합니다.",
  },
  {
    image: "/images/feature-interior.jpg",
    title: "특별한 공간",
    description: "편안하고 아늑한 인테리어로 힐링의 시간을 선사합니다.",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card border-y border-border"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            MAISON만의 특별함
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-background border border-border/50 hover:border-accent/30 hover:shadow-2xl transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-serif text-lg text-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
