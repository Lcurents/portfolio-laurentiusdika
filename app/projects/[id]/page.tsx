import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FadeIn from '@/components/FadeIn';

// Generate Static Params agar halaman dirender statis (Cepat!)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // 1. Ambil ID dari URL (Next.js 15 Async Params)
  const { id } = await params;
  
  // 2. Cari project yang cocok
  const project = projects.find((p) => p.id === id);

  // 3. Jika tidak ketemu, lempar ke 404
  if (!project) {
    notFound();
  }

  return (
    <main className="bg-brand-light min-h-screen font-sans">
      <Navbar />
      
      <article className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Tombol Kembali */}
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary mb-8 font-bold transition-colors">
            <ArrowLeft size={20} /> Back to Quest Board
          </Link>

          {/* Header Project */}
          <FadeIn direction="up">
            <div className="bg-white rounded-3xl p-8 md:p-12 border-b-8 border-gray-200 shadow-game mb-10 overflow-hidden relative">
               
               {/* Badge Kategori */}
               <span 
                className="inline-block px-4 py-2 rounded-lg text-white font-bold text-sm mb-6 uppercase tracking-wider"
                style={{ backgroundColor: project.color }}
               >
                 {project.category}
               </span>

               <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-6">
                 {project.title}
               </h1>

               {/* Gambar Utama (Mockup) */}
               {/* Gambar Utama (Detail) */}
<div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 shadow-md border-2 border-gray-100 dark:border-slate-700">
   <img 
     src={project.image} 
     alt={project.title} 
     className="object-cover w-full h-full" 
   />
</div>

               <div className="grid md:grid-cols-3 gap-10">
                 
                 {/* Kolom Kiri: Deskripsi */}
                 <div className="md:col-span-2 space-y-6">
                    <h3 className="text-2xl font-bold text-brand-dark">Overview</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {project.description_long}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md text-sm font-bold text-gray-600">
                          <Tag size={14} /> {tag}
                        </span>
                      ))}
                    </div>
                 </div>

                 {/* Kolom Kanan: Actions (Tombol) */}
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Actions</h3>
                    
                    {project.demo_url && (
                      <a 
                        href={project.demo_url} 
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-brand-primary text-brand-dark font-bold py-4 rounded-xl border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 hover:brightness-110 transition-all"
                      >
                        <ExternalLink size={20} />
                        Play / Live Demo
                      </a>
                    )}

                    {project.repo_url && (
                      <a 
                        href={project.repo_url} 
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-brand-dark text-white font-bold py-4 rounded-xl border-b-4 border-gray-900 active:border-b-0 active:translate-y-1 hover:bg-gray-700 transition-all"
                      >
                        <Github size={20} />
                        Source Code
                      </a>
                    )}

                    {!project.demo_url && !project.repo_url && (
                      <div className="p-4 bg-gray-100 rounded-xl text-center text-gray-500 text-sm italic">
                        Project ini bersifat privat atau offline.
                      </div>
                    )}
                 </div>

               </div>
            </div>
          </FadeIn>

        </div>
      </article>
    </main>
  );
}