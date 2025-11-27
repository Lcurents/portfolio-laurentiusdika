"use client";
import Link from 'next/link';
import { 
  Home, 
  BookOpen, 
  ChevronDown, 
  Brush, 
  Gamepad2, 
  Code2, 
  LayoutDashboard
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  
  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b-2 border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter text-brand-dark dark:text-white flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-primary dark:bg-yellow-500 rounded-lg border-2 border-brand-dark dark:border-yellow-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
            👾
          </div>
          <span>Laurentius<span className="text-brand-primary dark:text-yellow-400"> Dika</span> Andreano Vega</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          
          {/* 1. PORTFOLIO (Dashboard / Home) */}
          <Link 
            href="/"
            className="flex items-center gap-2 font-bold text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-yellow-400 transition-colors"
          >
            <LayoutDashboard size={18} />
            Portfolio
          </Link>

          {/* 2. PROJECTS (Dropdown Menu) */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-bold text-gray-600 dark:text-gray-300 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors py-4">
               Projects
               <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Content */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
               <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden p-2">
                  
                  {/* Item: Art */}
                  <Link href="/projects/category/art" className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 group/item transition-colors">
                     <div className="bg-red-100 dark:bg-red-900/50 p-2 rounded-md text-red-500">
                        <Brush size={20} />
                     </div>
                     <div>
                        <div className="font-bold text-brand-dark dark:text-white text-sm">Art Skills</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Pixel Art & 2D Illustration</div>
                     </div>
                  </Link>

                  {/* Item: Game */}
                  <Link href="/projects/category/game" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 group/item transition-colors">
                     <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-md text-orange-500">
                        <Gamepad2 size={20} />
                     </div>
                     <div>
                        <div className="font-bold text-brand-dark dark:text-white text-sm">Game & App</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Unity & Flutter</div>
                     </div>
                  </Link>

                  {/* Item: Web */}
                  <Link href="/projects/category/web" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group/item transition-colors">
                     <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-md text-blue-500">
                        <Code2 size={20} />
                     </div>
                     <div>
                        <div className="font-bold text-brand-dark dark:text-white text-sm">Web Tech</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Next.js & React</div>
                     </div>
                  </Link>

               </div>
            </div>
          </div>

          {/* 3. BLOG */}
          <Link 
            href="/blog"
            className="flex items-center gap-2 font-bold text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-yellow-400 transition-colors"
          >
            <BookOpen size={18} />
            Blog
          </Link>

          <div className="h-6 w-[2px] bg-gray-200 dark:bg-slate-700 mx-2"></div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}