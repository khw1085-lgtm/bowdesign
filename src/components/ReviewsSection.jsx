import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        title: "진주의 3평 가게, '두쫀쿠'로 디저트 업계를 흔들다",
        subtitle: "몬트쿠키 소재 디저트 브랜드",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
        bgColor: "#A85A14"
    },
    {
        id: 2,
        title: "연 매출 400억, 저당 시장의 '온리원'이 되기까지",
        subtitle: "마이노멀 저당 식품 브랜드",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        bgColor: "#00AEEF"
    },
    {
        id: 3,
        title: "커뮤니티를 통해 진짜 팬을 모으는 방법",
        subtitle: "라이프스타일 커뮤니티 플랫폼",
        image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?q=80&w=800&auto=format&fit=crop",
        bgColor: "#161b22"
    },
    {
        id: 4,
        title: "전통주, MZ세대의 입맛을 사로잡다",
        subtitle: "프리미엄 탁주 브랜드",
        image: "https://images.unsplash.com/photo-1574365569363-231a7741d7d0?q=80&w=800&auto=format&fit=crop",
        bgColor: "#2d3748"
    }
];

export default function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <motion.section
            initial={{ backgroundColor: reviews[0].bgColor }}
            animate={{ backgroundColor: reviews[currentIndex].bgColor }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative py-24 overflow-hidden min-h-[80vh] flex flex-col justify-center"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-20 gap-8">
                    <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                        브랜드 성장은<br />
                        더 빠르게
                    </h2>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`transition-colors ${currentIndex === 0 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:text-white/80'}`}
                        >
                            <ArrowLeft size={32} strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex === reviews.length - 1}
                            className={`transition-colors ${currentIndex === reviews.length - 1 ? 'text-white/30 cursor-not-allowed' : 'text-white hover:text-white/80'}`}
                        >
                            <ArrowRight size={32} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
                    {reviews.map((review, i) => {
                        const offset = i - currentIndex;

                        let x = '0%';
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 10;

                        if (offset === 0) {
                            x = '0%';
                            scale = 1;
                            opacity = 1;
                            zIndex = 20;
                        } else if (offset > 0) {
                            x = `${offset * 100}%`;
                            scale = 0.8;
                            opacity = 0.6;
                            zIndex = 10 - offset;
                        } else if (offset < 0) {
                            x = `${offset * 100}%`;
                            scale = 0.8;
                            opacity = 0.6;
                            zIndex = 10 + offset;
                        }

                        return (
                            <motion.div
                                key={review.id}
                                animate={{ x, scale, opacity, zIndex }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="absolute top-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[800px] cursor-pointer"
                                onClick={() => {
                                    if (offset !== 0) setCurrentIndex(i);
                                }}
                            >
                                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/10 shadow-2xl relative">
                                    <img
                                        src={review.image}
                                        alt={review.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle overlay for inactive items to make them look faded */}
                                    <motion.div
                                        animate={{ opacity: offset === 0 ? 0 : 0.3 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 bg-black pointer-events-none"
                                    />
                                </div>

                                {/* Info Text - Only strictly visible for the center active item */}
                                <motion.div
                                    animate={{ opacity: offset === 0 ? 1 : 0, y: offset === 0 ? 0 : 10 }}
                                    transition={{ duration: 0.4 }}
                                    className="pt-6 px-2 pointer-events-none"
                                >
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                                        {review.title}
                                    </h3>
                                    <p className="text-white/80 text-sm md:text-base font-medium">
                                        {review.subtitle}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}
