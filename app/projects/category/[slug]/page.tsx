import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import WaveDivider from '@/components/WaveDivider';
import { ArrowLeft } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // LOGIKA FILTERING:
  // Kita kelompokkan kategori data asli kita ke dalam 3 slug utama
  let filteredProjects = [];
  let categoryTitle = "";
  let categoryDesc = "";
  let headerColor = "";

  if (slug === 'art') {
    categoryTitle = "Art & Design";
    categoryDesc = "Koleksi ilustrasi, pixel art, dan desain karakter.";
    headerColor = "bg-red-500";
    // Filter project yang kategorinya berhubungan dengan Art
    filteredProjects = projects.filter(p => ["Anime", "Pixel Art", "Art Skills", "Semi-Realis"].includes(p.category));
  } 
  else if (slug === 'game') {
    categoryTitle = "Game & App Dev";
    categoryDesc = "Proyek pengembangan game dan aplikasi mobile.";
    headerColor = "bg-orange-500";
    filteredProjects = projects.filter(p => ["Game Dev", "App Dev", "Game & App"].includes(p.category));
  } 
  else if (slug === 'web') {
    categoryTitle = "Web Technology";
    categoryDesc = "Website fullstack, frontend experiments, dan backend systems.";
    headerColor = "bg-blue-500";
    filteredProjects = projects.filter(p => ["Web Dev", "Web Tech", "Backend"].includes(p.category));
  } 
  else {
    return notFound(); // Jika slug ngawur (misal /projects/category/masak)
  }

  return (
    <main className="bg-brand-light dark:bg-slate-950 min-h-screen">
      <Navbar />

      {/* HEADER KATEGORI */}
      <section className={`pt-32 pb-20 px-6 text-center ${headerColor} relative overflow-hidden`}>
        <div className="relative z-10 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight">{categoryTitle}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{categoryDesc}</p>
        </div>
        <WaveDivider position="bottom" className="text-brand-light dark:text-slate-950" shape="waves" flip={true} />
      </section>

      {/* GRID PROJECTS */}
      <section className="py-20 px-6 container mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-brand-dark mb-8">
            <ArrowLeft size={20} /> Back to Dashboard
        </Link>

        {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
                <Reveal key={project.id} direction="up" delay={idx * 0.1} width="100%">
                    <Link href={`/projects/${project.id}`} className="block group">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-slate-800 hover:border-brand-primary dark:hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
                            {/* Gambar Dummy */}
                            <div className="h-48 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-gray-400">
                                <img src={project.image} 
                    alt={project.title}  />
                            </div>
                            
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-3" style={{ backgroundColor: project.color }}>
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{project.description}</p>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">Belum ada project di kategori ini.</h3>
                <p className="text-gray-500">Segera hadir!</p>
            </div>
        )}
      </section>
    </main>
  );
}