import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import WaveDivider from '@/components/WaveDivider';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogListingPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <Navbar />

      {/* HEADER BLOG */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-100 dark:bg-slate-900 bg-dots overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
            <Reveal direction="down">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-brand-dark dark:text-white">
                    DevBlog Archives
                </h1>
            </Reveal>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Kumpulan tulisan, tutorial, dan catatan perjalanan coding saya dari waktu ke waktu.
            </p>
        </div>
        <WaveDivider position="bottom" className="text-white dark:text-slate-950" shape="curve" flip={true} />
      </section>

      {/* LIST BLOG */}
      <section className="py-20 px-6 container mx-auto">
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, idx) => (
               <Reveal key={post.id} direction="up" delay={idx * 0.1} width="100%">
                  <Link href={`/blog/${post.id}`} className="group h-full block">
                     <div className="h-full bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 rounded-3xl p-6 hover:border-brand-primary dark:hover:border-yellow-400 hover:shadow-game transition-all flex flex-col">
                        
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-4">
                           <Calendar size={14} />
                           {post.date}
                        </div>

                        <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors">
                           {post.title}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                           {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-yellow-400 mt-auto">
                           Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                  </Link>
               </Reveal>
            ))}
         </div>
      </section>

    </main>
  );
}