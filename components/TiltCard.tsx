"use client";

import React from 'react';
import Tilt from 'react-parallax-tilt';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: Props) {
  return (
    <Tilt
      tiltMaxAngleX={10}    // Kemiringan maksimal sumbu X (jangan terlalu ekstrim)
      tiltMaxAngleY={10}    // Kemiringan maksimal sumbu Y
      perspective={1000}    // Kedalaman 3D
      scale={1.02}          // Sedikit zoom saat di-hover
      transitionSpeed={1000} // Kecepatan transisi
      glareEnable={true}    // Efek kilauan cahaya (Glare)
      glareMaxOpacity={0.3} // Kekuatan kilauan
      glareColor="#ffffff"  // Warna kilauan
      glarePosition="all"   // Kilauan bisa muncul di mana saja
      className={className} // Meneruskan class styling
    >
      {children}
    </Tilt>
  );
}