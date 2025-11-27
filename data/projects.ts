export interface Project {
  id: string;
  title: string;
  description: string;
  description_long: string; // Deskripsi lengkap
  category: string;
  image: string;
  tags: string[];
  color: string;
  demo_url?: string; // Link ke website live (opsional)
  repo_url?: string; // Link ke GitHub (opsional)
}

export const projects: Project[] = [
  {
    id: "pixel-adventure", // Gunakan ID string yang readable (slug)
    title: "Pixel Adventure",
    description: "Game platformer 2D dengan gaya pixel art klasik.",
    description_long: "Sebuah game petualangan klasik di mana pemain harus mengumpulkan koin dan menghindari musuh. Dibuat menggunakan Unity Engine dengan fokus pada mekanik pergerakan yang fluid dan desain level yang menantang.",
    category: "Game Dev",
    image: "/images/game.png", 
    tags: ["Unity", "C#", "Pixel Art"],
    color: "#ea580c",
    demo_url: "https://itch.io",
    repo_url: "https://github.com"
  },
  {
    id: "toko-online",
    title: "Sistem Informasi Perusahaan",
    description: "Website e-commerce fullstack dengan Next.js.",
    description_long: "Platform e-commerce lengkap dengan fitur keranjang belanja, pembayaran gateway, dan dashboard admin. Menggunakan Supabase sebagai backend untuk performa realtime yang cepat.",
    category: "Web Dev",
    image: "/images/website.png",
    tags: ["Next.js", "Supabase", "Tailwind"],
    color: "#2563eb",
    demo_url: "https://vercel.com",
    repo_url: "https://github.com"
  },
  {
    id: "character",
    title: " Character Sheet",
    description: "Desain karakter original.",
    description_long: "Koleksi desain karakter original (OC) yang dibuat untuk keperluan novel visual. Dibuat menggunakan Clip Studio Paint dengan teknik cell-shading.",
    category: "Art Skills",
    image: "/images/ilustrasi.jpg",
    tags: ["Clip Studio Paint", "Digital Art"],
    color: "#e11d48",
    // Art mungkin tidak punya repo/demo, jadi boleh dikosongkan
  },
];