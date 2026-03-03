export interface FashionProduct {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string
  category: string
  collection: string
  isNew?: boolean
  isSoldOut?: boolean
  sizes: string[]
  colors: { name: string; hex: string }[]
  description: string
  details: string[]
  fabric: string
  care: string[]
}

export const fashionProducts: FashionProduct[] = [
  {
    id: "structured-blazer",
    name: "Structured Wool Blazer",
    price: 485,
    image: "/images/fashion-1.jpg",
    category: "Outerwear",
    collection: "AW26",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Terracotta", hex: "#C4826E" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" }
    ],
    description: "A refined wool-blend blazer featuring sharp shoulders and a tailored silhouette. Designed for effortless layering over any look.",
    details: [
      "Single-breasted design with horn buttons",
      "Peaked lapels",
      "Two front flap pockets",
      "Interior welt pocket",
      "Back vent for ease of movement"
    ],
    fabric: "70% Virgin Wool, 20% Polyamide, 10% Cashmere",
    care: ["Dry clean only", "Do not tumble dry", "Cool iron if needed"]
  },
  {
    id: "silk-flow-dress",
    name: "Silk Flow Dress",
    price: 620,
    image: "/images/fashion-2.jpg",
    category: "Dresses",
    collection: "SS26",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Sage", hex: "#9CAF88" },
      { name: "Blush", hex: "#F4C2C2" },
      { name: "Midnight", hex: "#191970" }
    ],
    description: "An ethereal silk dress with fluid movement and subtle draping. The perfect statement piece for special occasions.",
    details: [
      "Bias cut for natural draping",
      "Hidden side zipper closure",
      "Asymmetric hemline",
      "Lined bodice",
      "Adjustable spaghetti straps"
    ],
    fabric: "100% Mulberry Silk",
    care: ["Dry clean recommended", "Hand wash cold if needed", "Hang to dry"]
  },
  {
    id: "architectural-coat",
    name: "Architectural Wool Coat",
    price: 890,
    originalPrice: 1120,
    image: "/images/fashion-3.jpg",
    category: "Outerwear",
    collection: "AW26",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Camel", hex: "#C19A6B" }
    ],
    description: "A dramatic oversized coat with architectural shoulders and clean lines. The ultimate statement outerwear piece.",
    details: [
      "Oversized fit",
      "Double-faced construction",
      "Hidden snap closure",
      "Deep side pockets",
      "Dropped shoulders"
    ],
    fabric: "90% Wool, 10% Cashmere",
    care: ["Professional dry clean only", "Store on padded hanger"]
  },
  {
    id: "cashmere-knit",
    name: "Oversized Cashmere Knit",
    price: 395,
    image: "/images/fashion-4.jpg",
    category: "Knitwear",
    collection: "AW26",
    isNew: true,
    sizes: ["ONE SIZE"],
    colors: [
      { name: "Oatmeal", hex: "#D3C4A5" },
      { name: "Grey Melange", hex: "#8E8E8E" },
      { name: "Cream", hex: "#FFFDD0" }
    ],
    description: "A luxuriously soft oversized sweater in pure cashmere. Relaxed elegance meets everyday comfort.",
    details: [
      "Relaxed oversized fit",
      "Ribbed crew neckline",
      "Dropped shoulders",
      "Side slits at hem",
      "Ribbed cuffs and hem"
    ],
    fabric: "100% Grade-A Mongolian Cashmere",
    care: ["Hand wash cold", "Lay flat to dry", "Store folded"]
  },
  {
    id: "deconstructed-shirt",
    name: "Deconstructed Cotton Shirt",
    price: 285,
    image: "/images/fashion-5.jpg",
    category: "Tops",
    collection: "SS26",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Powder Blue", hex: "#B0E0E6" }
    ],
    description: "A reimagined classic shirt with unexpected details and architectural cuts. Effortlessly modern.",
    details: [
      "Asymmetric button placket",
      "Extended cuffs with button detail",
      "Back pleat detail",
      "Slightly oversized fit",
      "Mother of pearl buttons"
    ],
    fabric: "100% Organic Cotton Poplin",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"]
  },
  {
    id: "leather-jacket",
    name: "Butter Leather Jacket",
    price: 1250,
    image: "/images/fashion-6.jpg",
    category: "Outerwear",
    collection: "AW26",
    isSoldOut: true,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Burgundy", hex: "#722F37" },
      { name: "Black", hex: "#000000" }
    ],
    description: "An investment piece crafted from the softest lambskin leather. Timeless design with modern edge.",
    details: [
      "Butter-soft lambskin leather",
      "Asymmetric front zip",
      "Quilted shoulder detail",
      "Zippered pockets",
      "Fully lined in silk"
    ],
    fabric: "100% Lambskin Leather, Silk Lining",
    care: ["Professional leather clean only", "Store away from direct sunlight"]
  }
]

export const collections = [
  {
    id: "aw26",
    name: "Autumn/Winter 2026",
    slug: "aw26",
    description: "A meditation on form and shadow",
    image: "/images/fashion-collection.jpg"
  },
  {
    id: "ss26",
    name: "Spring/Summer 2026",
    slug: "ss26",
    description: "Light, movement, and transformation",
    image: "/images/fashion-2.jpg"
  }
]
