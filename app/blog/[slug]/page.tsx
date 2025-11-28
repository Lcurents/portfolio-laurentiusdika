import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react'; // Tambah icon agar manis
import BlogImage from '@/components/BlogImage';
// Import komponen hiasan kita
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import WaveDivider from '@/components/WaveDivider';
import Reveal from '@/components/Reveal';
import Comments from '@/components/Comments';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <div className="bg-brand-light dark:bg-slate-950 min-h-screen transition-colors duration-300">
      
      {/* 1. Bar Progress Membaca */}
      <ScrollProgress />
      
      {/* 2. Navbar (Agar user tidak tersesat) */}
      <Navbar />
      
      {/* 3. HEADER HERO (Hiasan Utama) */}
      <header className="relative pt-32 pb-20 px-6 text-center bg-blue-200 dark:bg-slate-900 bg-dots overflow-hidden">
         <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Tombol Kembali */}
            <Link 
              href="/#devblog" 
              className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-primary font-bold mb-8 transition-colors group"
            >
              <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm group-hover:-translate-x-1 transition-transform">
                <ArrowLeft size={16} /> 
              </div>
              Back to Quest Board
            </Link>

            {/* Tanggal */}
            <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-yellow-400 mb-4 uppercase tracking-widest bg-white dark:bg-slate-800 px-4 py-1 rounded-full shadow-sm border border-gray-100 dark:border-slate-700">
                <Calendar size={14} />
                {data.date}
            </div>
            
            {/* Judul Besar */}
            <Reveal direction="down">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-brand-dark dark:text-white">
                    {data.title}
                </h1>
            </Reveal>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
                {data.tags && data.tags.map((tag: string) => (
                    <span key={tag} className="flex items-center gap-1 bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 px-3 py-1 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300">
                        <Tag size={12} /> #{tag}
                    </span>
                ))}
            </div>
         </div>
         
         {/* Ombak Penutup Header */}
         <WaveDivider position="bottom" className="text-white dark:text-slate-950" shape="curve" flip={true} />
      </header>

      {/* 4. ISI KONTEN (Kertas Putih) */}
      <article className="container mx-auto px-6 py-12 max-w-3xl relative z-10 -mt-10">
        <Reveal direction="up" delay={0.2} width="100%">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-16 rounded-3xl border-b-8 border-gray-200 dark:border-slate-800 shadow-xl dark:shadow-none">
                
                {/* PROSE CONFIG: 
                    Ini adalah styling otomatis untuk Markdown.
                    Kita kustomisasi warnanya agar sesuai tema Brand.
                */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                    prose-headings:font-extrabold prose-headings:text-brand-dark dark:prose-headings:text-white
                    prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                    prose-img:rounded-2xl prose-img:shadow-game
                    prose-code:text-pink-500 prose-code:bg-gray-100 dark:prose-code:bg-slate-800 dark:prose-code:text-pink-400 prose-code:px-1 prose-code:rounded
                ">
                    <MDXRemote source={content} components={{ BlogImage }} />
                </div>
                  <Comments />

         {/* Footer Artikel */}
         <div className="mt-12 text-center">
            <p className="text-gray-400 italic">Terima kasih sudah membaca! Level Knowledge +1 🧠</p>
         </div>
            </div>
        </Reveal>

        {/* Footer Artikel */}
        <div className="mt-12 text-center">
            <p className="text-gray-400 italic">Terima kasih sudah membaca! Level Knowledge +1 🧠</p>
        </div>
      </article>

      {/* Footer Halaman (Opsional, atau biarkan kosong agar fokus ke bacaan) */}
      <div className="h-20"></div>
    </div>
  );
}