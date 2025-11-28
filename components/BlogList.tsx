"use client"; // Wajib agar useState berfungsi
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WaveDivider from '@/components/WaveDivider';
import { Calendar, ArrowRight, Search, Clock, Tag, Star } from 'lucide-react';

// Definisikan bentuk data Post agar TypeScript senang
interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  // --- LOGIC PENCARIAN ---
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ambil postingan pertama DARI HASIL FILTER sebagai "Featured"
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* HEADER HERO: ARCHIVE SEARCH */}
      <section className="relative pt-32 pb-24 px-6 bg-yellow-50 dark:bg-slate-900 bg-dots overflow-hidden transition-colors duration-300">
        <div className="container mx-auto text-center relative z-10 flex flex-col items-center">
            
            <Reveal direction="down" width="100%">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-6 border border-gray-200 dark:border-slate-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Knowledge Base</span>
                </div>
            </Reveal>

            <Reveal direction="down" width="100%">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-dark dark:text-white tracking-tight">
                    Dev<span className="text-brand-primary dark:text-yellow-400">Blog</span>
                </h1>
            </Reveal>
            
            <Reveal delay={0.2} width="100%">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Level up pengetahuanmu! Kumpulan tutorial, tips coding, dan catatan petualangan development saya.
                </p>
            </Reveal>

            {/* SEARCH BAR AKTIF */}
            <Reveal delay={0.3} direction="up">
                <div className="relative w-full max-w-lg mx-auto group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Cari judul atau topik..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Logic update state
                        className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-2xl text-brand-dark dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary dark:focus:border-yellow-400 shadow-sm transition-all"
                        // disabled dihapus agar bisa diketik
                    />
                </div>
            </Reveal>

        </div>
        <WaveDivider position="bottom" className="text-white dark:text-slate-950" shape="curve" flip={true} />
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 px-6 container mx-auto">
         
         {/* Tampilkan pesan jika tidak ada hasil */}
         {filteredPosts.length === 0 && (
            <div className="text-center py-20 opacity-50">
                <h3 className="text-2xl font-bold">Tidak ditemukan hasil untuk "{searchQuery}"</h3>
                <p>Coba kata kunci lain.</p>
            </div>
         )}

         {/* FEATURED POST (Hanya muncul jika ada hasil) */}
         {featuredPost && (
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                    <Star className="text-yellow-500 fill-yellow-500" />
                    <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                        {searchQuery ? "Top Result" : "Featured Quest"}
                    </h2>
                </div>

                <Reveal width="100%" direction="up">
                    <Link href={`/blog/${featuredPost.id}`} className="group block">
                        <div className="relative bg-brand-dark dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border-4 border-transparent hover:border-brand-primary dark:hover:border-yellow-400 transition-all duration-300 shadow-xl overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-2">
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="bg-brand-primary text-brand-dark px-3 py-1 rounded-lg text-xs font-extrabold uppercase">New</span>
                                        <span className="flex items-center gap-1 text-gray-400 text-xs font-bold bg-white/10 px-3 py-1 rounded-lg">
                                            <Calendar size={12} /> {featuredPost.date}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors leading-tight">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-xl font-bold hover:bg-brand-primary transition-colors">
                                        Read Article <ArrowRight size={18} />
                                    </span>
                                </div>
                                <div className="hidden md:flex justify-center">
                                    <div className="w-40 h-40 bg-white/5 rounded-2xl rotate-3 border-2 border-white/10 flex items-center justify-center">
                                        <span className="text-6xl">📝</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            </div>
         )}

         {/* GRID POSTS LAINNYA */}
         {otherPosts.length > 0 && (
             <>
                <div className="flex items-center gap-2 mb-8 border-b border-gray-200 dark:border-slate-800 pb-4">
                    <Clock className="text-gray-400" size={20} />
                    <h2 className="text-xl font-bold text-brand-dark dark:text-white">More Posts</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post, idx) => (
                    <Reveal key={post.id} direction="up" delay={idx * 0.1} width="100%">
                        <Link href={`/blog/${post.id}`} className="group h-full block">
                            <div className="h-full bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 rounded-3xl p-6 hover:border-brand-primary dark:hover:border-yellow-400 hover:-translate-y-2 hover:shadow-game transition-all flex flex-col relative overflow-hidden">
                                
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 dark:bg-slate-800 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-brand-primary/10"></div>

                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>

                                <h2 className="text-xl font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <span className="flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 dark:bg-slate-800 dark:text-gray-400 px-2 py-1 rounded-md">
                                            <Tag size={10} /> Post
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-sm text-brand-primary dark:text-yellow-400">
                                        Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                    ))}
                </div>
             </>
         )}
      </section>
    </>
  );
}