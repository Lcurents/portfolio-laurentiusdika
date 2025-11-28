"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-20 pt-10 border-t-2 border-gray-100 dark:border-slate-800">
      <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-8 text-center">
        Discussion & Feedback 💬
      </h3>
      
      <Giscus
        id="comments"
        repo="Lcurents/portfolio-laurentiusdika"  // <-- GANTI DENGAN REPO ANDA
        repoId="R_kgDOQeJCgA"      // <-- GANTI DARI LANGKAH 2
        category="Announcements"
        categoryId="DIC_kwDOQeJCgM4CzJHV" // <-- GANTI DARI LANGKAH 2
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "dark" ? "dark" : "light"} // Otomatis ikut tema
        lang="en"
        loading="lazy"
      />
    </div>
  );
}