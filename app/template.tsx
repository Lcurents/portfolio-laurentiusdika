"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameLoader from "@/components/GameLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            
            // 1. POSISI AWAL: Di luar layar bagian ATAS (-100%)
            initial={{ y: "-100%" }}
            
            // 2. POSISI SAAT LOADING: Turun menutupi layar (0%) -> SLIDE DOWN
            animate={{ y: "0%" }}
            
            // 3. POSISI SELESAI: Naik kembali ke atas (-100%) -> SLIDE UP
            exit={{ y: "-100%" }}
            
            // Durasi animasi tirai (0.6 detik agar terasa berat/solid)
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            
            className="fixed inset-0 z-[9999] overflow-hidden"
          >
            {/* Kita bungkus GameLoader agar tetap diam di tengah saat tirai bergerak,
                atau biarkan default agar ikut bergerak (opsi di bawah ini ikut bergerak) */}
            <GameLoader onFinish={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* KONTEN HALAMAN UTAMA */}
      {/* Konten muncul diam-diam di belakang tirai */}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 delay-300`}>
        {children}
      </div>
    </>
  );
}