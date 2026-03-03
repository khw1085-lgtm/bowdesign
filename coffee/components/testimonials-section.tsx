"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "이지현",
    role: "디자이너",
    content: "바쁜 일상 속에서도 MAISON의 커피 한 잔은 저에게 특별한 휴식을 선사해요. 공간도 너무 아름답고, 무엇보다 직원분들의 따뜻한 서비스가 인상적이에요.",
    rating: 5,
  },
  {
    id: 2,
    name: "박준호",
    role: "스타트업 대표",
    content: "미팅 장소로 자주 이용하는데, 조용하고 분위기가 좋아서 대화에 집중하기 좋아요. 커피 맛은 두말할 것 없이 최고입니다.",
    rating: 5,
  },
  {
    id: 3,
    name: "김소영",
    role: "작가",
    content: "글을 쓸 때 꼭 MAISON에 와요. 창가 자리에서 햇살을 받으며 마시는 라떼는 정말 영감을 주는 것 같아요. 디저트도 늘 신선하고 맛있어요.",
    rating: 5,
  },
  {
    id: 4,
    name: "정민수",
    role: "사진작가",
    content: "인테리어가 정말 예뻐서 사진 찍기도 좋고, 무엇보다 맛있는 커피와 디저트에 매번 감탄해요. 제가 가장 좋아하는 카페입니다.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            고객 후기
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={cn(
            "relative max-w-4xl mx-auto transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border border-border relative">
            <Quote className="w-12 h-12 text-accent/20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-serif italic">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="이전 후기"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeIndex === index
                      ? "w-8 bg-accent"
                      : "bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`후기 ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="다음 후기"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
