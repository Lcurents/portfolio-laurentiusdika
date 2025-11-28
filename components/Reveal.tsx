"use client";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function Reveal({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  direction = "up",
  className = ""
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // PERBAIKAN DI SINI:
  // Kita beri tipe data ': Variants' agar TypeScript tidak error pada "spring"
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
      scale: direction === "none" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring", // Sekarang TS tahu ini valid karena ada tipe Variants
        stiffness: 260,
        damping: 20,
        delay: delay,
        duration: 0.5,
      },
    },
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        // TAMBAHKAN CLASS INI:
        className="h-full w-full" 
      >
        {children}
      </motion.div>
    </div>
  );
}