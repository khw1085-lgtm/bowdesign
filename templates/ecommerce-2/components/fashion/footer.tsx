import Link from "next/link"

export function FashionFooter() {
  return (
    <footer className="border-t border-border">
      {/* Main Footer */}
      <div className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl tracking-[0.15em] uppercase">
              Noir Atelier
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Contemporary fashion for the modern aesthetic. 
              Designed in Paris, made with intention.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["New Arrivals", "Outerwear", "Dresses", "Knitwear", "Accessories", "Sale"].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Information</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["About Us", "Sustainability", "Stockists", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Customer Care</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Contact", "Shipping & Returns", "Size Guide", "Care Instructions", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 lg:px-12 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Instagram</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Pinterest</Link>
            <Link href="/" className="hover:text-foreground transition-colors">LinkedIn</Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Terms</Link>
            <span>© 2026 Noir Atelier</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
