import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ['home', 'work', 'about', 'contacts'];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-[1728px] mx-auto flex justify-between items-center px-6 md:px-10 py-6 md:py-8 relative z-[150]">
                {/* Logo */}
                <div className="text-white font-bold text-lg md:text-xl tracking-tighter">
                    BOW AI STUDIO
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-12">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium tracking-[0.2em] uppercase"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger/Close Button - Unified */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 transition-transform duration-300 active:scale-95"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#000000] z-[100] flex flex-col items-center justify-center md:hidden"
                        style={{ height: '100dvh', width: '100vw' }}
                    >
                        <ul className="flex flex-col space-y-8 text-center pt-10">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.08 }}
                                >
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-2xl font-light tracking-[0.25em] uppercase hover:text-cyan-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
