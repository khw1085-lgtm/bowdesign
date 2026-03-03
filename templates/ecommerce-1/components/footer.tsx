import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "#" },
    { label: "Best Sellers", href: "#" },
    { label: "Ceramics", href: "#" },
    { label: "Textiles", href: "#" },
    { label: "Lighting", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Artisans", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Care Guide", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
              FORMA
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Curating exceptional objects for thoughtful living since 2020.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 FORMA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
