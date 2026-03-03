import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, X, ExternalLink } from 'lucide-react';

const categories = ['제품', '비즈니스', '블로그', '이벤트', '커뮤니티', '예약'];

export default function WorkCategories() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [deviceView, setDeviceView] = useState('desktop');

    const openModal = (url, title) => {
        setModalUrl(url);
        setModalTitle(title);
        setIsModalOpen(true);
        // Prevent body scroll when modal opens
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setModalUrl('');
            setModalTitle('');
        }, 300); // Clear url after animate out
        document.body.style.overflow = '';
    };

    return (
        <section id="work" className="pb-24 bg-white text-black relative z-10">
            <div className="max-w-[1500px] mx-auto px-6 md:px-10">
                {/* Category Buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-3 mb-[50px]"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-black/60 border-black/10 hover:border-black/30 hover:text-black'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Grid Placeholder - to be filled later */}
                <motion.div
                    key={activeCategory} // Force re-animation when category changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-[400px]"
                >
                    {activeCategory === '제품' ? (
                        <>
                            <button
                                onClick={() => openModal('http://localhost:3004', 'Specialty Coffee')}
                                className="group block relative text-left w-full"
                            >
                                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-6 border border-black/5">
                                    <img
                                        src="/images/coffee-thumb.jpg"
                                        alt="Coffee Brand Thumbnail"
                                        className="w-full h-full object-cover origin-top transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-1 group-hover:text-cyan-600 transition-colors duration-300">
                                        Specialty Coffee
                                    </h3>
                                    <div className="text-sm font-medium text-black/50">
                                        스페셜티 커피 브랜드 사이트
                                    </div>
                                </div>
                            </button>
                            <button
                                onClick={() => openModal('http://localhost:3003', 'SONIX Premium Audio')}
                                className="group block relative text-left w-full"
                            >
                                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-6 border border-black/5">
                                    <img
                                        src="/images/business-1-thumb.png"
                                        alt="Business Thumbnail 1"
                                        className="w-full h-full object-cover origin-top transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-1 group-hover:text-cyan-600 transition-colors duration-300">
                                        SONIX Premium Audio
                                    </h3>
                                    <div className="text-sm font-medium text-black/50">
                                        오디오 기업 공식 사이트
                                    </div>
                                </div>
                            </button>

                            {/* Dummy Item 1 */}
                            <div className="group block relative text-left w-full">
                                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-6 border border-black/5 flex items-center justify-center">
                                    <span className="text-black/30 font-medium tracking-widest text-sm uppercase">Coming Soon</span>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-1 text-black/30">
                                        Project Next
                                    </h3>
                                    <div className="text-sm font-medium text-black/30">
                                        준비 중인 프로젝트입니다
                                    </div>
                                </div>
                            </div>

                            {/* Dummy Item 2 */}
                            <div className="group block relative text-left w-full">
                                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-6 border border-black/5 flex items-center justify-center">
                                    <span className="text-black/30 font-medium tracking-widest text-sm uppercase">Coming Soon</span>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-tight mb-1 text-black/30">
                                        Project Vision
                                    </h3>
                                    <div className="text-sm font-medium text-black/30">
                                        준비 중인 프로젝트입니다
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-black/5 rounded-2xl border border-black/5 text-black/40 p-10 col-span-full">
                            <p className="text-lg">[{activeCategory}] 섹션 그리드 아이템이 들어갈 영역입니다.</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Modal Overlay */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[200] flex flex-col bg-[#111111]"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111] shrink-0">
                                <div className="flex flex-col">
                                    <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Preview</span>
                                    <span className="text-white text-base font-medium">{modalTitle || 'Website Preview'}</span>
                                </div>

                                {/* Device Toggles Center */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center bg-[#222222] rounded-full p-1 border border-white/5">
                                    <button
                                        onClick={() => setDeviceView('desktop')}
                                        className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center w-[60px] ${deviceView === 'desktop' ? 'bg-[#333333] text-white shadow-sm' : 'text-white/40 hover:text-white/80'
                                            }`}
                                    >
                                        <Monitor size={18} strokeWidth={2} />
                                    </button>
                                    <button
                                        onClick={() => setDeviceView('mobile')}
                                        className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center w-[60px] ${deviceView === 'mobile' ? 'bg-[#333333] text-white shadow-sm' : 'text-white/40 hover:text-white/80'
                                            }`}
                                    >
                                        <Smartphone size={18} strokeWidth={2} />
                                    </button>
                                </div>

                                {/* Modal Actions Right */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={modalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        웹사이트 열기
                                        <ExternalLink size={14} />
                                    </a>
                                    <button
                                        onClick={closeModal}
                                        className="p-2 bg-[#222222] text-white/70 hover:text-white rounded-full hover:bg-[#333333] transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body with iframe */}
                            <div className="flex-1 w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
                                {/* Device Frame Wrap */}
                                <motion.div
                                    layout
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className={`relative w-full h-full flex items-center justify-center transition-all ${deviceView === 'desktop' ? 'p-0 sm:p-4 md:p-8' : 'p-6'
                                        }`}
                                >
                                    <motion.div
                                        layout
                                        className={`relative bg-white overflow-hidden shadow-2xl transition-all ${deviceView === 'desktop'
                                            ? 'w-full h-full rounded-xl md:rounded-2xl border border-white/10'
                                            : 'w-[400px] h-[812px] rounded-[48px] border-[12px] border-[#222222]'
                                            }`}
                                    >
                                        {/* Mobile Notch (only visible in mobile view) */}
                                        {deviceView === 'mobile' && (
                                            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10 pointer-events-none">
                                                <div className="w-[120px] h-[30px] bg-[#222222] rounded-b-[16px]"></div>
                                            </div>
                                        )}

                                        {modalUrl && (
                                            <iframe
                                                src={modalUrl}
                                                className="w-full h-full border-0"
                                                title="Website Preview"
                                            />
                                        )}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
