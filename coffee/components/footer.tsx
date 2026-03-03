"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  menu: {
    title: "메뉴",
    links: [
      { label: "커피", href: "#coffee" },
      { label: "음료", href: "#beverage" },
      { label: "디저트", href: "#dessert" },
      { label: "브런치", href: "#brunch" },
    ],
  },
  about: {
    title: "브랜드",
    links: [
      { label: "메종 소개", href: "#about" },
      { label: "공간", href: "#space" },
      { label: "바리스타", href: "#barista" },
      { label: "프랜차이즈", href: "#franchise" },
    ],
  },
  support: {
    title: "고객 지원",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "이용약관", href: "#terms" },
      { label: "개인정보처리방침", href: "#privacy" },
      { label: "채용 안내", href: "#careers" },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-wider">
              MAISON
            </Link>
            <p className="mt-6 text-background/60 leading-relaxed max-w-sm">
              정성이 담긴 한 잔, 특별한 순간을 선사합니다.
              MAISON과 함께 특별한 커피 경험을 시작하세요.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-sm tracking-widest uppercase mb-6">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-sm font-medium tracking-widest uppercase mb-3">
                대표 전화
              </h5>
              <p className="text-background/60">02-1234-5678</p>
            </div>
            <div>
              <h5 className="text-sm font-medium tracking-widest uppercase mb-3">
                이메일
              </h5>
              <p className="text-background/60">hello@maison.co.kr</p>
            </div>
            <div>
              <h5 className="text-sm font-medium tracking-widest uppercase mb-3">
                운영 시간
              </h5>
              <p className="text-background/60">매일 09:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/40">
              © 2024 MAISON. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors group"
            >
              <span>맨 위로</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
