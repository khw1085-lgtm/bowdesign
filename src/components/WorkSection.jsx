import React, { useState } from "react";

const roles = [
    {
        title: "Interactive Web",
        description:
            "Creating immersive digital experiences through dynamic interactions and engaging web animations that captivate users.",
        imageSrc: "/images/interactive-web.jpg",
    },
    {
        title: "UI/UX Design",
        description:
            "Crafting intuitive interfaces and seamless user experiences through research-driven design and visual storytelling.",
        imageSrc: "/images/uiux.jpg",
    },
    {
        title: "Planning",
        description:
            "Strategic roadmapping and project coordination to ensure successful delivery from concept to completion.",
        imageSrc: "/images/planning.jpg",
    },
    {
        title: "Development",
        description:
            "Building robust, scalable applications with clean code architecture and modern development practices.",
        imageSrc: "/images/development.jpg",
    },
    {
        title: "AI Agent",
        description:
            "Integrating intelligent automation and machine learning solutions to enhance product capabilities and user experiences.",
        imageSrc: "/images/ai-agent.jpg",
    },
];

const RoleCard = ({ title, description, imageSrc, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative cursor-pointer border-b border-white/10 py-10 first:border-t first:border-white/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                    <h3
                        className={`text-2xl lg:text-4xl font-semibold tracking-tight text-white transition-all duration-500 ${isHovered ? "lg:translate-x-4" : "lg:translate-x-0"
                            }`}
                    >
                        {title}
                    </h3>
                    <p
                        className={`text-sm font-normal leading-relaxed text-white/60 max-w-xl transition-all duration-500 delay-75 ${isHovered ? "text-white/80 lg:translate-x-4" : "lg:translate-x-0"
                            }`}
                    >
                        {description}
                    </p>
                </div>

                {/* Animated Image */}
                <div
                    className={`relative w-full lg:w-80 aspect-video overflow-hidden bg-zinc-900 rounded-lg transition-all duration-500 ease-out ${isHovered ? "shadow-2xl shadow-cyan-500/10" : "shadow-none"
                        }`}
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isHovered
                            ? "scale-110"
                            : "scale-100"
                            }`}
                    />
                    <div
                        className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"
                            }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default function WorkSection() {
    return (
        <section id="work" className="w-full bg-black py-24 md:py-32">
            <div className="max-w-[1728px] mx-auto px-6 md:px-10">
                <div className="max-w-3xl space-y-6 mb-20 md:mb-32">
                    <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl text-balance">
                        Expertise in Digital Creation
                    </h2>
                    <p className="text-lg font-normal leading-relaxed text-white/50 text-pretty">
                        A comprehensive approach to building exceptional digital products,
                        combining creativity with technical excellence across five core
                        disciplines.
                    </p>
                </div>

                <div className="flex flex-col">
                    {roles.map((role, index) => (
                        <RoleCard
                            key={role.title}
                            title={role.title}
                            description={role.description}
                            imageSrc={role.imageSrc}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
