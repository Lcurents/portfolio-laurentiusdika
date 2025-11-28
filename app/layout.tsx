import type { Metadata } from "next";
import { Outfit } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// 1. IMPORT DI SINI
import ScrollProgress from "@/components/ScrollProgress"; 

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// GANTI DATA INI DENGAN DATA ASLI ANDA
const MY_NAME = "Laurentius Dika Andreano Vega";
const MY_ROLE = "Fullstack Developer & 2D Artist";
const MY_URL = "https://laurentiusdika.site"; // Domain Vercel/Custom Anda
const MY_DESC = "Portfolio resmi Laurentius Dika. Spesialis Next.js, Game Development, dan Desain Grafis. Lihat karya dan tutorial coding terbaru di sini.";

export const metadata: Metadata = {
  metadataBase: new URL(MY_URL),
  title: {
    default: `${MY_NAME} | ${MY_ROLE}`,
    template: `%s | ${MY_NAME}`, // Nanti judul halaman lain jadi: "Blog | Laurentius Dika"
  },
  description: MY_DESC,
  keywords: ["Laurentius Dika", "Portfolio", "Next.js Developer", "Game Dev Indonesia", "Pixel Art"],
  authors: [{ name: MY_NAME, url: MY_URL }],
  creator: MY_NAME,
  
  // OPEN GRAPH (Agar keren saat di-share di WA/Twitter/LinkedIn)
  openGraph: {
    title: `${MY_NAME} | ${MY_ROLE}`,
    description: MY_DESC,
    url: MY_URL,
    siteName: "Laurentius Dika Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Kita buat ini nanti
        width: 1200,
        height: 630,
        alt: `${MY_NAME} Portfolio`,
      },
    ],
  },
  
  // ROBOTS (Izinkan Google meng-crawl website)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tambahkan suppressHydrationWarning di html (Wajib untuk next-themes)
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased no-scrollbar`}>
        
        {/* Bungkus dengan ThemeProvider, attribute="class" penting untuk Tailwind */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           <ScrollProgress />
           {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}