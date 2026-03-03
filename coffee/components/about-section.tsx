"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const stats = [
  { number: "12", label: "년의 역사", suffix: "+" },
  { number: "50", label: "가지 원두", suffix: "+" },
  { number: "100", label: "만 명의 고객", suffix: "K" },
  { number: "5", label: "개 매장", suffix: "" },
];

const values = [
  {
    title: "품질",
    description: "최상급 스페셜티 원두만을 엄선하여 로스팅합니다.",
  },
  {
    title: "정성",
    description: "한 잔 한 잔 정성을 다해 추출합니다.",
  },
  {
    title: "경험",
    description: "단순한 음료가 아닌 특별한 경험을 선사합니다.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            const target = parseInt(stat.number);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 leading-tight">
              커피를 사랑하는
              <br />
              사람들의 이야기
            </h2>

            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
              MAISON은 2012년 작은 로스터리에서 시작했습니다.
              최상의 원두를 찾아 세계 각지의 농장을 방문하고,
              완벽한 로스팅 프로파일을 개발하는 데 수년을 투자했습니다.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              우리의 목표는 단순합니다. 매일 마시는 커피 한 잔이
              특별한 경험이 되도록 하는 것입니다.
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={cn(
                    "transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <h4 className="font-serif text-xl text-foreground">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/interior.jpg"
                alt="MAISON interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="font-serif text-lg text-foreground italic">
                &ldquo;진정한 커피의 맛을 찾아가는 여정&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — 김민수, Head Barista
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={cn(
            "mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="font-serif text-5xl lg:text-6xl text-primary">
                {counters[index]}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
