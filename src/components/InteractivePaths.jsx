import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function InteractivePaths() {
    const canvasRef = useRef(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const isTouchingRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setIsMobile(window.innerWidth < 1024);
        };

        updateCanvasSize();

        let particles = [];
        let textImageData = null;
        let textBoundaryY = 0;

        function createTextImage() {
            if (!ctx || !canvas) return 0;

            ctx.fillStyle = 'white';
            ctx.save();

            // Refined font sizes for better responsiveness down to 375px
            const isVerySmall = window.innerWidth < 450;
            const fontSize = isVerySmall ? 20 : (isMobile ? 32 : 64);
            const lineSpacing = isVerySmall ? 30 : (isMobile ? 48 : 96);

            ctx.font = `bold ${fontSize}px Inter, -apple-system, sans-serif`;
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'left';

            const line1 = "Welcome to the ai studio";
            const line2 = "I'll quickly implement what you imagine";

            // Padding from the left
            const startX = isVerySmall ? 24 : (isMobile ? 40 : 100);
            const centerY = canvas.height / 2;

            // Positioning for two lines
            ctx.fillText(line1, startX, centerY - lineSpacing / 2);
            ctx.fillText(line2, startX, centerY + lineSpacing / 2);

            // Boundary to distinguish line 1 and line 2 for coloring
            textBoundaryY = centerY;

            ctx.restore();

            textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            return 1;
        }

        function createParticle() {
            if (!ctx || !canvas || !textImageData) return null;

            const data = textImageData.data;

            for (let attempt = 0; attempt < 100; attempt++) {
                const x = Math.floor(Math.random() * canvas.width);
                const y = Math.floor(Math.random() * canvas.height);

                if (data[(y * canvas.width + x) * 4 + 3] > 128) {
                    const isLine2 = y > textBoundaryY;
                    return {
                        x: x,
                        y: y,
                        baseX: x,
                        baseY: y,
                        size: Math.random() * 1.2 + 0.5,
                        color: 'white',
                        scatteredColor: isLine2 ? '#FF9900' : '#00DCFF',
                        isLine2: isLine2,
                        life: Math.random() * 100 + 50,
                    };
                }
            }

            return null;
        }

        function createInitialParticles() {
            const baseParticleCount = isMobile ? 8000 : 15000;
            const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)));
            for (let i = 0; i < particleCount; i++) {
                const particle = createParticle();
                if (particle) particles.push(particle);
            }
        }

        let animationFrameId;

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const { x: mouseX, y: mouseY } = mousePositionRef.current;
            const maxDistance = isMobile ? 120 : 240;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance && (isTouchingRef.current || !isMobile)) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    const moveX = Math.cos(angle) * force * (isMobile ? 30 : 60);
                    const moveY = Math.sin(angle) * force * (isMobile ? 30 : 60);
                    p.x = p.baseX - moveX;
                    p.y = p.baseY - moveY;

                    ctx.fillStyle = p.scatteredColor;
                } else {
                    p.x += (p.baseX - p.x) * 0.1;
                    p.y += (p.baseY - p.y) * 0.1;
                    ctx.fillStyle = 'white';
                }

                ctx.fillRect(p.x, p.y, p.size, p.size);

                p.life--;
                if (p.life <= 0) {
                    const newParticle = createParticle();
                    if (newParticle) {
                        particles[i] = newParticle;
                    } else {
                        particles.splice(i, 1);
                        i--;
                    }
                }
            }

            const baseParticleCount = isMobile ? 8000 : 15000;
            const targetParticleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)));
            while (particles.length < targetParticleCount) {
                const newParticle = createParticle();
                if (newParticle) particles.push(newParticle);
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        const cleanup = () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchend', handleTouchEnd);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };

        const handleResize = () => {
            updateCanvasSize();
            createTextImage();
            particles = [];
            createInitialParticles();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mousePositionRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                e.preventDefault();
                const rect = canvas.getBoundingClientRect();
                mousePositionRef.current = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
        };

        const handleTouchStart = () => { isTouchingRef.current = true; };
        const handleTouchEnd = () => {
            isTouchingRef.current = false;
            mousePositionRef.current = { x: 0, y: 0 };
        };

        const handleMouseLeave = () => {
            mousePositionRef.current = { x: 0, y: 0 };
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchstart', handleTouchStart);
        canvas.addEventListener('touchend', handleTouchEnd);

        createTextImage();
        createInitialParticles();
        animate();

        return cleanup;
    }, [isMobile]);

    return (
        <div className="relative w-full h-dvh flex flex-col items-start justify-center bg-black overflow-hidden font-sans">
            <canvas
                ref={canvasRef}
                className="w-full h-full absolute top-0 left-0 touch-none"
                aria-label="Interactive particle effect text"
            />

            {/* Scroll Indicator - Horizontally centered */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center pointer-events-none z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">discover more</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                    <ChevronDown className="text-white/40 w-4 h-4 mt-2" />
                </motion.div>
            </div>
        </div>
    );
}
