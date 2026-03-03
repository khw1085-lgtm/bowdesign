import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const templates = [
    {
        title: "Minimalist Studio",
        category: "Portfolio",
        imageSrc: "/images/template-portfolio.png",
        link: "#",
    },
    {
        title: "Nexus Dashboard",
        category: "SaaS",
        imageSrc: "/images/template-saas.png",
        link: "#",
    },
    {
        title: "Quantum Creative",
        category: "Agency",
        imageSrc: "/images/template-agency.png",
        link: "#",
    },
    {
        title: "Aura Luxury",
        category: "E-Commerce",
        imageSrc: "/images/template-ecommerce.png",
        link: "#",
    },
];

const TemplatesSection = () => {
    return (
        <section id="templates" className="py-24 md:py-32 bg-black text-white relative border-t border-white/5">
            <div className="max-w-[1728px] mx-auto px-6 md:px-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6"
                        >
                            Curated Templates
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-white/60 text-lg md:text-xl font-light"
                        >
                            Explore our premium collection of high-end website architectures. Designed for performance, aesthetics, and unmatched user experiences.
                        </motion.p>
                    </div>
                    <motion.a
                        href="https://godly.website/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:hidden mt-8 inline-flex items-center text-sm font-medium tracking-[0.2em] uppercase text-white hover:text-cyan-400 transition-colors"
                    >
                        View all on Godly <ArrowUpRight size={16} className="ml-2" />
                    </motion.a>
                    <motion.a
                        href="https://godly.website/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:inline-flex items-center text-sm font-medium tracking-[0.2em] uppercase text-white hover:text-cyan-400 transition-colors"
                    >
                        View all on Godly <ArrowUpRight size={18} className="ml-2" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {templates.map((template, index) => (
                        <motion.a
                            key={index}
                            href={template.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group block relative"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#111] mb-6 border border-white/5">
                                <img
                                    src={template.imageSrc}
                                    alt={template.title}
                                    className="w-full h-full object-cover origin-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Text Content */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {template.title}
                                    </h3>
                                    <div className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
                                        {template.category}
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">
                                    <ArrowUpRight size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TemplatesSection;
