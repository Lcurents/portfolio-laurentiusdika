import { getSortedPostsData } from '@/lib/blog';
import { getGraphData } from '@/lib/graph'; 
import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList';

export default function BlogListingPage() {
  const allPosts = getSortedPostsData();
  const graphData = getGraphData(); // Ambil data graph

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      
      {/* Kita kirim graphData ke BlogList */}
      <BlogList posts={allPosts} graphData={graphData} />
      
    </main>
  );
}