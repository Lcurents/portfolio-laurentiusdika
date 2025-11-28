import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getGraphData() {
  const fileNames = fs.readdirSync(contentDirectory);
  
  // 1. Siapkan Array untuk Nodes (Titik) dan Links (Garis)
  const nodes: any[] = [];
  const links: any[] = [];

  // 2. Loop semua file untuk membuat Nodes dulu
  fileNames.forEach((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents); // Ambil metadata (judul, kategori/tags)

    // Tentukan grup warna berdasarkan Tag pertama (jika ada)
    let group = 'General';
    if (data.tags && data.tags.length > 0) {
        // Kita simpan tag pertama sebagai penentu warna nanti
        group = data.tags[0]; 
    }

    nodes.push({
      id: slug,       // ID unik adalah URL slug
      name: data.title, // Nama yang muncul saat di-hover
      val: 1,         // Ukuran titik (bisa diperbesar jika banyak link nanti)
      group: group    // Untuk warna
    });
  });

  // 3. Loop LAGI untuk mencari Link di dalam konten (Parsing Content)
  fileNames.forEach((fileName) => {
    const sourceSlug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);

    // --- REGEX MAGIC ---
    // Mencari pola: [Teks Apapun](/blog/SLUG-TARGET)
    // Penjelasan Regex: /\[.*?\]\(\/blog\/(.*?)\)/g
    const regex = /\[.*?\]\(\/blog\/(.*?)\)/g;
    let match;

    // Cari semua link yang cocok dalam satu artikel
    while ((match = regex.exec(content)) !== null) {
      const targetSlug = match[1]; // Ambil slug target dari dalam kurung

      // Cek apakah targetnya valid (ada di daftar nodes kita)
      // Ini mencegah garis mengarah ke "halaman 404"
      const targetExists = nodes.some(n => n.id === targetSlug);

      if (targetExists && sourceSlug !== targetSlug) {
        links.push({
          source: sourceSlug,
          target: targetSlug,
        });
      }
    }
  });

  return { nodes, links };
}