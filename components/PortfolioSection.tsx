"use client"; 
import { useState } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import TiltCard from './TiltCard';

const categories = ["ALL", "Web Dev", "Game Dev", "Art Skills"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    // UPDATE: bg-white jadi transparent agar mengikuti warna section induk di page.tsx
    // atau kita set manual dark mode-nya di sini
    <section id="portfolio" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold border-2 transition-all 
                ${activeFilter === cat 
                  ? 'bg-brand-primary border-brand-primary text-brand-dark shadow-game dark:bg-yellow-500 dark:border-yellow-500' 
                  : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:border-brand-primary dark:hover:border-yellow-500'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            
            <Link href={`/projects/${project.id}`} key={project.id} className="block group">
              
              {/* TILT CARD WRAPPER */}
              <TiltCard className="h-full">
                
                {/* CARD CONTENT */}
                {/* Perhatikan penambahan dark:bg-slate-900 dan dark:border-slate-800 */}
                <div 
                  className={`bg-white dark:bg-slate-900 rounded-xl border-2 border-gray-100 dark:border-slate-800 overflow-hidden h-full flex flex-col transition-all duration-300 shadow-sm group-hover:shadow-game dark:group-hover:shadow-yellow-500/20`}
                >
                  {/* Thumbnail Placeholder */}
                  <div className={`h-48 w-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500`}>
                     <span>Image Placeholder</span>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                     {/* Badge Kategori */}
                     <span className="text-xs font-bold px-2 py-1 rounded text-white w-fit mb-3" style={{ backgroundColor: project.color }}>
                       {project.category}
                     </span>

                     {/* Judul: Tambah dark:text-white */}
                     <h3 className="text-xl font-bold mb-2 text-brand-dark dark:text-white group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors">
                       {project.title}
                     </h3>
                     
                     {/* Deskripsi: Tambah dark:text-gray-400 */}
                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                       {project.description}
                     </p>
                     
                     {/* Tags */}
                     <div className="flex flex-wrap gap-2 mt-auto">
                         {project.tags.slice(0, 3).map(tag => (
                             <span key={tag} className="text-xs bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-2 py-1 rounded text-gray-500 dark:text-gray-400 font-bold">
                               #{tag}
                             </span>
                         ))}
                     </div>
                  </div>

                </div>

              </TiltCard>

            </Link>

          ))}
        </div>
      </div>
    </section>
  );
}