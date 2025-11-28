import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import { projects } from '@/data/projects';

// GANTI DENGAN URL ASLI ANDA
const BASE_URL = 'https://laurentiusdika.site';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Ambil semua postingan blog
  const posts = getSortedPostsData();
  const blogs = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post.date), // Pastikan format date di MDX valid (YYYY-MM-DD)
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 2. Ambil semua project
  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Gabungkan dengan halaman statis
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogs,
    ...projectUrls,
  ];
}