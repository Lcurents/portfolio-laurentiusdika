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

export const metadata: Metadata = {
  title: "My Gamified Portfolio",
  description: "Leveling up my coding skills!",
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