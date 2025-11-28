import { getSortedPostsData } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList'; // Import komponen baru kita

export default function BlogListingPage() {
  // 1. Ambil data di Server (Cepat & SEO Friendly)
  const allPosts = getSortedPostsData();

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      
      {/* 2. Oper data ke Client Component untuk ditampilkan & difilter */}
      <BlogList posts={allPosts} />
      
    </main>
  );
}