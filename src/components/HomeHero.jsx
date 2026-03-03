import React from 'react';
import { motion } from 'framer-motion';

const workItems = [
    { title: "Specialty Coffee", subtitle: "스페셜티 커피 브랜드 사이트", src: "/images/coffee-thumb.jpg" },
    { title: "SONIX Premium Audio", subtitle: "오디오 기업 공식 사이트", src: "/images/business-1-thumb.png" },
    { title: "Project Next", subtitle: "준비 중인 프로젝트입니다", src: null },
    { title: "Project Vision", subtitle: "준비 중인 프로젝트입니다", src: null },
];

export default function HomeHero() {
    // Duplicate 4 times to ensure a seamless infinite scrolling loop even on large screens.
    const marqueeItems = [...workItems, ...workItems, ...workItems, ...workItems];

    return (
        <section className="pt-10 pb-24 overflow-hidden bg-white">
            {/* Top Text limited to just "BOW" */}
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 mb-16">
                <h1 className="text-6xl md:text-8xl lg:text-[140px] font-bold text-black tracking-tighter leading-none inline-block">
                    BOW
                </h1>
            </div>

            {/* Continuous Marquee Section */}
            <div className="relative w-full overflow-hidden flex">
                <motion.div
                    className="flex whitespace-nowrap min-w-max"
                    animate={{ x: ["0%", "-25%"] }} // Because we have 4 sets, 1 set equals 25% of the total width
                    transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                >
                    {marqueeItems.map((item, i) => (
                        <div key={i} className="w-[280px] md:w-[380px] lg:w-[460px] inline-block whitespace-normal pr-4 md:pr-6">
                            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 mb-4 border border-black/5 relative shadow-sm group">
                                {item.src ? (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                        <span className="text-black/30 font-medium tracking-widest text-sm uppercase">Coming Soon</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight text-black mb-1">{item.title}</h3>
                            <p className="text-sm font-medium text-black/50 truncate w-full">{item.subtitle}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
