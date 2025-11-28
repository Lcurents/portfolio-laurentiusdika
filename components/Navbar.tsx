"use client";
import { useState } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brush, 
  Gamepad2, 
  Code2, 
  LayoutDashboard,
  BookOpen
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(true); // Default terbuka di mobile agar mudah dilihat

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b-2 border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-xl tracking-tighter text-brand-dark dark:text-white flex items-center gap-2 group z-50">
          <div className="w-8 h-8 bg-brand-primary dark:bg-yellow-500 rounded-lg border-2 border-brand-dark dark:border-yellow-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
            👾
          </div>
          <span>Laurentius<span className="text-brand-primary dark:text-yellow-400"> Dika</span> Andreano Vega</span>
        </Link>

        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center gap-6">
          {/* Portfolio */}
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-yellow-400 transition-colors">
            <LayoutDashboard size={18} />
            Portfolio
          </Link>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-gray-600 dark:text-gray-300 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors py-4">
               Projects
               <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
               <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden p-2">
                  <Link href="/projects/category/art" className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 group/item transition-colors">
                     <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-md text-red-500"><Brush size={20} /></div>
                     <div><div className="font-bold text-brand-dark dark:text-white text-sm">Art Skills</div></div>
                  </Link>
                  <Link href="/projects/category/game" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 group/item transition-colors">
                     <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-md text-orange-500"><Gamepad2 size={20} /></div>
                     <div><div className="font-bold text-brand-dark dark:text-white text-sm">Game & App</div></div>
                  </Link>
                  <Link href="/projects/category/web" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group/item transition-colors">
                     <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-md text-blue-500"><Code2 size={20} /></div>
                     <div><div className="font-bold text-brand-dark dark:text-white text-sm">Web Tech</div></div>
                  </Link>
               </div>
            </div>
          </div>

          {/* Blog */}
          <Link href="/blog" className="flex items-center gap-2 font-bold text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-yellow-400 transition-colors">
            <BookOpen size={18} />
            Blog
          </Link>

          <div className="h-6 w-[2px] bg-gray-200 dark:bg-slate-700 mx-2"></div>
          <ThemeToggle />
        </div>

        {/* --- MOBILE TOGGLE BUTTON (Visible only on Mobile) --- */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle /> {/* Theme toggle tetap muncul di navbar atas */}
            
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* --- MOBILE MENU DRAWER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 overflow-hidden"
            >
                <div className="px-6 py-6 space-y-4">
                    
                    {/* Mobile: Portfolio */}
                    <Link 
                        href="/" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 font-bold text-lg text-brand-dark dark:text-white py-2"
                    >
                        <LayoutDashboard size={20} className="text-gray-400" />
                        Portfolio / Home
                    </Link>

                    {/* Mobile: Blog */}
                    <Link 
                        href="/blog" 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 font-bold text-lg text-brand-dark dark:text-white py-2"
                    >
                        <BookOpen size={20} className="text-gray-400" />
                        Blog Archive
                    </Link>

                    {/* Mobile: Projects (Collapsible) */}
                    <div className="border-t border-gray-100 dark:border-slate-800 pt-4 mt-2">
                        <button 
                            onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                            className="flex items-center justify-between w-full font-bold text-lg text-brand-dark dark:text-white mb-3"
                        >
                            <span className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded bg-brand-primary dark:bg-yellow-500 flex items-center justify-center text-[10px] text-black">P</div>
                                Projects
                            </span>
                            <ChevronDown size={16} className={`transition-transform ${isMobileProjectsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* List Kategori Project */}
                        <AnimatePresence>
                            {isMobileProjectsOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="pl-8 space-y-3 overflow-hidden"
                                >
                                    <Link href="/projects/category/art" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Art Skills
                                    </Link>
                                    <Link href="/projects/category/game" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Game & App
                                    </Link>
                                    <Link href="/projects/category/web" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 py-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Web Tech
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}