"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/hero-main.jpg"
          alt="Premium cafe atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-background/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
              Premium Cafe & Dining
            </p>
          </div>

          <h1
            className={`font-serif text-4xl md:text-6xl lg:text-8xl text-background leading-tight tracking-tight transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block">정성이 담긴 한 잔,</span>
            <span className="block mt-2 md:mt-4">특별한 순간</span>
          </h1>

          <p
            className={`mt-8 text-background/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            엄선된 원두와 정성 가득한 레시피로 완성되는
            <br className="hidden md:block" />
            특별한 카페 경험을 선사합니다.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="#menu"
              className="px-8 py-4 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-all hover:scale-105"
            >
              메뉴 보기
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border-2 border-background text-background font-medium rounded-full hover:bg-background/10 transition-all"
            >
              브랜드 스토리
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#menu" className="flex flex-col items-center gap-2 text-background/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-background/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-background/30 to-transparent hidden lg:block" />
    </section>
  );
}
