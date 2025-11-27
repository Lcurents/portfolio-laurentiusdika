"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Track (Jalur Laser) */}
      <div className="fixed top-0 right-0 bottom-0 w-1.5 bg-gray-200/20 z-[9998] backdrop-blur-sm" />

      {/* The Laser Beam */}
      <motion.div
        /* PERBAIKAN: Tambahkan 'bottom-0' agar elemen punya tinggi 100% layar */
        className="fixed top-0 right-0 bottom-0 w-1.5 bg-brand-primary z-[9999] origin-top"
        style={{ scaleY }}
      >
        {/* Glow Effect (Kepala Laser) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-brand-primary rounded-full blur-md shadow-[0_0_20px_10px_rgba(251,191,36,0.8)] opacity-80" />
      </motion.div>
    </>
  );
}