"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "메뉴",
    href: "#menu",
    submenu: [
      { label: "커피", href: "#coffee", description: "스페셜티 원두의 깊은 풍미" },
      { label: "음료", href: "#beverage", description: "시그니처 음료 컬렉션" },
      { label: "디저트", href: "#dessert", description: "프리미엄 베이커리" },
      { label: "브런치", href: "#brunch", description: "건강한 아침 식사" },
    ],
  },
  {
    label: "브랜드 스토리",
    href: "#about",
    submenu: [
      { label: "메종 소개", href: "#story", description: "우리의 시작과 철학" },
      { label: "공간", href: "#space", description: "특별한 경험을 위한 공간" },
      { label: "바리스타", href: "#barista", description: "커피를 사랑하는 사람들" },
    ],
  },
  {
    label: "매장 안내",
    href: "#location",
    submenu: [
      { label: "매장 위치", href: "#stores", description: "가까운 매장 찾기" },
      { label: "영업 시간", href: "#hours", description: "운영 정보 안내" },
    ],
  },
  {
    label: "예약",
    href: "#reservation",
  },
  {
    label: "연락하기",
    href: "#contact",
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl tracking-wider font-medium text-primary"
            >
              MAISON
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm tracking-wide font-medium transition-colors",
                      "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible transition-all duration-300",
                        activeSubmenu === item.label && "opacity-100 visible"
                      )}
                    >
                      <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[260px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors group/item"
                          >
                            <span className="block text-sm font-medium text-foreground group-hover/item:text-accent">
                              {subItem.label}
                            </span>
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {subItem.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#reservation"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              예약하기
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-background shadow-2xl transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-serif text-xl tracking-wider font-medium text-primary">
              MAISON
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground"
              aria-label="메뉴 닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-120px)]">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium text-foreground border-b border-border/50"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </Link>
                {item.submenu && (
                  <div className="pl-4 py-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
            <Link
              href="#reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 text-center bg-primary text-primary-foreground font-medium rounded-full"
            >
              예약하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
