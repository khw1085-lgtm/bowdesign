export interface Product {
  id: string
  name: string
  price: number
  image: string
  images: string[]
  category: string
  isNew?: boolean
  description: string
  details: string[]
  dimensions: {
    width: string
    depth: string
    height: string
  }
  materials: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Curve Bouclé Sofa",
    price: 3200,
    image: "/images/product-1.jpg",
    images: ["/images/product-1.jpg", "/images/collection-1.jpg", "/images/hero.jpg"],
    category: "Sofas",
    isNew: true,
    description: "우아한 곡선과 부드러운 부클레 원단이 조화를 이루는 3인 소파입니다. 스칸디나비안 감성과 현대적인 미니멀리즘이 만나 어떤 공간에도 따뜻함을 더합니다.",
    details: [
      "프리미엄 부클레 원단 사용",
      "고밀도 폼과 다운 블렌드 쿠션",
      "천연 오크 원목 다리",
      "전문 장인의 수작업 마감"
    ],
    dimensions: {
      width: "220cm",
      depth: "95cm",
      height: "78cm"
    },
    materials: ["Bouclé Fabric", "Oak Wood", "High-Density Foam"],
    colors: ["Cream", "Light Gray", "Sage Green"]
  },
  {
    id: "2",
    name: "Solide Oak Dining Table",
    price: 2400,
    image: "/images/product-2.jpg",
    images: ["/images/product-2.jpg", "/images/collection-1.jpg", "/images/hero.jpg"],
    category: "Tables",
    description: "자연 그대로의 오크 원목을 사용한 다이닝 테이블입니다. 둥글게 다듬어진 모서리와 견고한 구조가 일상에 자연의 따뜻함을 선사합니다.",
    details: [
      "100% 솔리드 오크 원목",
      "자연 유래 오일 피니시",
      "6-8인용 사이즈",
      "견고한 조인트 공법"
    ],
    dimensions: {
      width: "200cm",
      depth: "100cm",
      height: "75cm"
    },
    materials: ["Solid Oak Wood"],
    colors: ["Natural Oak", "Walnut Stain", "White Oak"]
  },
  {
    id: "3",
    name: "Sculpt Lounge Chair",
    price: 1850,
    image: "/images/product-3.jpg",
    images: ["/images/product-3.jpg", "/images/collection-2.jpg", "/images/hero.jpg"],
    category: "Chairs",
    isNew: true,
    description: "조각적인 실루엣이 돋보이는 라운지 체어입니다. 프리미엄 이탈리안 레더와 월넛 베이스가 만나 클래식과 현대의 완벽한 균형을 이룹니다.",
    details: [
      "풀그레인 이탈리안 레더",
      "월넛 원목 베이스",
      "인체공학적 설계",
      "이탈리아 장인 제작"
    ],
    dimensions: {
      width: "75cm",
      depth: "82cm",
      height: "80cm"
    },
    materials: ["Italian Leather", "Walnut Wood", "Steel Frame"],
    colors: ["Cream White", "Cognac", "Black"]
  },
  {
    id: "4",
    name: "Modular Open Shelf",
    price: 1450,
    image: "/images/product-4.jpg",
    images: ["/images/product-4.jpg", "/images/collection-1.jpg", "/images/hero.jpg"],
    category: "Storage",
    description: "비대칭적인 오픈 쉘프로 공간에 리듬감을 더합니다. 모듈 방식으로 다양한 조합이 가능하며, 수납과 디스플레이를 동시에 해결합니다.",
    details: [
      "모듈형 조립 시스템",
      "벽 고정 가능",
      "다양한 확장 옵션",
      "내구성 높은 마감"
    ],
    dimensions: {
      width: "160cm",
      depth: "35cm",
      height: "200cm"
    },
    materials: ["Oak Veneer", "Steel Brackets"],
    colors: ["Natural Oak", "White", "Black"]
  },
  {
    id: "5",
    name: "Zen Platform Bed",
    price: 2800,
    image: "/images/product-5.jpg",
    images: ["/images/product-5.jpg", "/images/collection-2.jpg", "/images/hero.jpg"],
    category: "Beds",
    description: "일본의 선(禪) 미학에서 영감을 받은 로우 플랫폼 베드입니다. 애쉬 원목 프레임과 리넨 헤드보드가 편안한 휴식 공간을 완성합니다.",
    details: [
      "애쉬 원목 프레임",
      "천연 리넨 헤드보드",
      "통기성 좋은 슬랫 구조",
      "저소음 설계"
    ],
    dimensions: {
      width: "180cm",
      depth: "210cm",
      height: "35cm"
    },
    materials: ["Ash Wood", "Linen Fabric", "Steel Slats"],
    colors: ["Light Ash", "Natural", "Charcoal"]
  },
  {
    id: "6",
    name: "Travertine Side Table",
    price: 680,
    image: "/images/product-6.jpg",
    images: ["/images/product-6.jpg", "/images/collection-1.jpg", "/images/hero.jpg"],
    category: "Tables",
    description: "천연 트래버틴 대리석과 브라스 베이스가 만난 사이드 테이블입니다. 자연석 특유의 텍스처가 공간에 우아한 악센트를 더합니다.",
    details: [
      "천연 트래버틴 상판",
      "브라스 도금 베이스",
      "각 제품마다 고유한 패턴",
      "보호 코팅 마감"
    ],
    dimensions: {
      width: "45cm",
      depth: "45cm",
      height: "55cm"
    },
    materials: ["Travertine Stone", "Brass Metal"],
    colors: ["Natural Stone"]
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}
