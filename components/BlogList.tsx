"use client";
import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WaveDivider from '@/components/WaveDivider';
import NeuralNetworkWrapper from '@/components/NeuralNetworkWrapper';
import { Calendar, ArrowRight, Search, Clock, Tag, Star } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

export default function BlogList({ posts, graphData }: { posts: Post[], graphData: any }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* --- HERO SECTION (THE COMMAND CENTER) --- */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden min-h-[600px] flex items-center">
        {/* ... (Bagian Hero biarkan sama, tidak ada perubahan) ... */}
        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* KOLOM KIRI */}
            <div className="text-left space-y-8 order-2 lg:order-1">
                <Reveal direction="right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-md rounded-full border border-slate-700 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                            System Online • {posts.length} Nodes Active
                        </span>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    <Reveal direction="right" delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                            Dev<span className="text-yellow-400">Blog</span>
                            <br />
                            <span className="text-slate-600 text-4xl md:text-6xl">Database.</span>
                        </h1>
                    </Reveal>
                    <Reveal direction="right" delay={0.2}>
                        <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                            Akses arsip pengetahuan saya. Jelajahi tutorial coding, catatan teknis, dan jurnal pengembangan game.
                        </p>
                    </Reveal>
                </div>

                {/* Search Bar */}
                <Reveal direction="up" delay={0.3}>
                    <div className="relative w-full max-w-md group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-yellow-400 transition-colors" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Cari data (ex: React, Unity)..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-4 pl-12 pr-4 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 shadow-lg transition-all"
                        />
                    </div>
                </Reveal>
            </div>

            {/* KOLOM KANAN */}
            <div className="relative h-[400px] lg:h-[500px] w-full order-1 lg:order-2">
                <Reveal direction="left" delay={0.4} width="100%" className="h-full">
                    <div className="w-full h-full rounded-3xl border border-slate-700 bg-slate-900/50 relative overflow-hidden shadow-2xl shadow-yellow-900/10">
                        {graphData.nodes.length > 0 ? (
                            <NeuralNetworkWrapper data={graphData} />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-500 text-sm">No Data Nodes.</div>
                        )}
                        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-yellow-500/50">NEURAL_NET_V1.0 // RENDERING</div>
                    </div>
                </Reveal>
            </div>
        </div>
        
        {/* Wave Divider (Ganti warna bawahnya jadi gray-50 agar nyambung dengan section konten) */}
        <WaveDivider position="bottom" className="text-gray-50 dark:text-slate-950" shape="curve" flip={true} />
      </section>

      {/* --- CONTENT SECTION (PERBAIKAN KONTRAS DI SINI) --- */}
      {/* Background Section kita ubah jadi abu-abu muda (gray-50) agar kartu putih terlihat jelas */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-slate-950 min-h-screen relative z-20 transition-colors duration-300">
         <div className="container mx-auto">
         
            {/* Pesan Kosong */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20 opacity-50">
                    <h3 className="text-2xl font-bold dark:text-white">Data tidak ditemukan.</h3>
                </div>
            )}

            {/* Featured Post (Kartu Besar) */}
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
                            {/* Kartu Gelap Kontras Tinggi */}
                            <div className="relative bg-slate-900 rounded-[2rem] p-8 md:p-12 border-4 border-slate-800 hover:border-yellow-400 transition-all duration-300 shadow-2xl overflow-hidden group-hover:shadow-yellow-500/20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                
                                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                                    <div className="md:col-span-2">
                                        <div className="flex flex-wrap gap-3 mb-4">
                                            <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-lg text-xs font-extrabold uppercase">New</span>
                                            <span className="flex items-center gap-1 text-slate-400 text-xs font-bold bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                                                <Calendar size={12} /> {featuredPost.date}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-yellow-400 transition-colors leading-tight">
                                            {featuredPost.title}
                                        </h3>
                                        <p className="text-slate-300 text-lg mb-8 line-clamp-2">
                                            {featuredPost.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                                            Read Article <ArrowRight size={18} />
                                        </span>
                                    </div>
                                    <div className="hidden md:flex justify-center">
                                        <div className="w-40 h-40 bg-white/5 rounded-2xl rotate-3 border-2 border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                                            <span className="text-6xl">📝</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            )}

            {/* Grid Posts Lainnya */}
            {otherPosts.length > 0 && (
                <>
                    <div className="flex items-center gap-2 mb-8 border-b border-gray-200 dark:border-slate-800 pb-4">
                        <Clock className="text-gray-400" size={20} />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">More Posts</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map((post, idx) => (
                        <Reveal key={post.id} direction="up" delay={idx * 0.1} width="100%">
                            <Link href={`/blog/${post.id}`} className="group h-full block">
                                {/* PERBAIKAN KARTU GRID: 
                                    1. Border dipertegas (gray-200)
                                    2. Shadow diperkuat (shadow-sm -> hover:shadow-xl)
                                    3. Background putih di atas background abu-abu (kontras!)
                                */}
                                <div className="h-full bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-3xl p-6 hover:border-brand-primary dark:hover:border-yellow-400 hover:-translate-y-2 hover:shadow-xl transition-all flex flex-col relative overflow-hidden group-hover:ring-2 group-hover:ring-brand-primary/20 dark:group-hover:ring-yellow-400/20">
                                    
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                                        <Calendar size={12} />
                                        {post.date}
                                    </div>

                                    {/* Judul lebih gelap (Gray-900) agar terbaca jelas */}
                                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt lebih gelap (Gray-600) */}
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <span className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 dark:bg-slate-700 dark:text-gray-300 px-2 py-1 rounded-md">
                                                <Tag size={10} /> Post
                                            </span>
                                        </div>
                                        {/* Tombol Read lebih kontras */}
                                        <div className="flex items-center gap-1 font-bold text-sm text-brand-primary dark:text-yellow-400 bg-brand-primary/10 dark:bg-yellow-400/10 px-3 py-1.5 rounded-lg group-hover:bg-brand-primary group-hover:text-white dark:group-hover:bg-yellow-400 dark:group-hover:text-slate-900 transition-colors">
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
         </div>
      </section>
    </>
  );
}