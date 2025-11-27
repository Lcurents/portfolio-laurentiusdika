"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number; // Opsi untuk menunda animasi
  direction?: "up" | "left" | "right" | "none"; // Arah muncul
}

export default function FadeIn({ children, delay = 0, direction = "up" }: Props) {
  // Tentukan arah animasi awal (hidden state)
  const hiddenVariants = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none: { opacity: 0, scale: 0.95 },
  };

  return (
    <motion.div
      initial={hiddenVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} // Saat masuk layar
      viewport={{ once: true, margin: "-50px" }} // Animasi jalan sekali saja
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}