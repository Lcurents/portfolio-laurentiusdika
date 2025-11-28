"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LOADING_TIPS = [
  "Tip: Minum air putih itu penting, tapi kopi lebih penting untuk coding.",
  "Tip: Jika kode error, coba restart laptop. Jika masih error, restart hidup.",
  "Loading: Mengumpulkan pixel yang berserakan...",
  "Loading: Memanggil API dari dimensi lain...",
  "Tip: Ctrl+Z adalah mesin waktu terbaik.",
  "System: Mengkalibrasi Neural Network...",
  "System: Merender grafis resolusi tinggi...",
];

export default function GameLoader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState("");

  useEffect(() => {
    // Pilih tip acak saat mulai
    setTip(LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)]);

    // Simulasi Progress Bar (0% -> 100% dalam 2 detik)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 100); // Tunggu sebentar di 100% sebelum hilang
          return 100;
        }
        // Kecepatan random agar terlihat organik seperti loading beneran
        return prev + Math.random() * 40; 
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center p-6 cursor-wait">
      
      {/* 1. Main Logo / Icon */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-12"
      >
        <div className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center text-6xl animate-bounce">
          👾
        </div>
      </motion.div>

      {/* 2. Loading Bar Container */}
      <div className="w-full max-w-md h-4 bg-slate-800 rounded-full overflow-hidden border-2 border-slate-700 relative">
        {/* Fill Bar */}
        <motion.div 
          className="h-full bg-brand-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
        
        {/* Scanline Effect (Kilau lewat) */}
        <motion.div 
            className="absolute top-0 bottom-0 w-20 bg-white/30 blur-md"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      {/* 3. Percentage Text & Status */}
      <div className="w-full max-w-md flex justify-between mt-2 font-mono text-sm">
        <span className="text-brand-primary font-bold">SYSTEM_BOOT...</span>
        <span className="text-white">{Math.min(100, Math.floor(progress))}%</span>
      </div>

      {/* 4. Random Tips */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 text-slate-500 text-sm italic text-center max-w-sm"
      >
        "{tip}"
      </motion.p>

    </div>
  );
}