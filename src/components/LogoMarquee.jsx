import React from 'react';
import { motion } from 'framer-motion';
import {
    SiFigma,
    SiGithub,
    SiFirebase,
    SiVercel,
    SiSupabase,
    SiCursor,
} from '@icons-pack/react-simple-icons';

const logos = [
    { name: 'Figma', Icon: SiFigma },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'v0 by Vercel', Icon: SiVercel },
    { name: 'Supabase', Icon: SiSupabase },
    {
        name: 'Gemini', Icon: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
            </svg>
        )
    },
    {
        name: 'Antigravity',
        Icon: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {/* Custom: stylized A silhouette */}
                <path d="M12 2 L2 22 L7 22 L12 12 L17 22 L22 22 Z M9.5 16 L14.5 16 L12 11 Z" />
            </svg>
        ),
    },
    { name: 'Cursor AI', Icon: SiCursor },
];

const LogoMarquee = () => {
    const inner = (
        <>
            {logos.map((logo, idx) => (
                <div
                    key={idx}
                    className="flex items-center gap-2.5 text-white/30 shrink-0"
                >
                    <logo.Icon className="w-5 h-5" color="currentColor" />
                    <span className="text-[13px] font-medium tracking-widest uppercase whitespace-nowrap">
                        {logo.name}
                    </span>
                </div>
            ))}
        </>
    );

    return (
        <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none select-none z-20">
            {/* fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

            <motion.div
                className="flex gap-16 items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 28,
                    ease: 'linear',
                }}
            >
                {/* Duplicate twice for seamless seamless loop */}
                {inner}
                {inner}
                {inner}
                {inner}
            </motion.div>
        </div>
    );
};

export default LogoMarquee;
