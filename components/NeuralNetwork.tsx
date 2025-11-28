"use client";
import { useEffect, useRef, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

interface GraphData {
  nodes: any[];
  links: any[];
}

export default function NeuralNetwork({ data }: { data: GraphData }) {
  const router = useRouter();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          w: containerRef.current.offsetWidth,
          h: containerRef.current.offsetHeight 
        });
      }
    }
    
    setTimeout(() => handleResize(), 100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDark = theme === 'dark';
  const linkColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(255, 255, 255, 0.15)';
  const textColor = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(243, 246, 250, 0.9)'; // Warna Teks (Putih/Hitam)

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 overflow-hidden touch-none">
      <ForceGraph2D
        width={dimensions.w}
        height={dimensions.h}
        graphData={data}
        
        // --- CONFIGURATION ---
        backgroundColor="transparent"
        enableZoom={false} 
        
        // --- STYLING NODE (LINGKARAN) ---
        nodeLabel="name" // Tooltip saat hover
        nodeColor={(node: any) => {
            if (node.group === 'Pixel Art' || node.group === 'Art') return '#e11d48'; 
            if (node.group === 'Web Dev' || node.group === 'Next.js') return '#2563eb'; 
            if (node.group === 'Game Dev') return '#ea580c'; 
            return isDark ? '#ffffff' : '#e4e4e4ff'; 
        }}
        nodeRelSize={6}
        linkColor={() => linkColor}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}

        // --- CUSTOM TEXT LABEL (JUDUL DI BAWAH) ---
        nodeCanvasObjectMode={() => "after"} // Gambar teks SETELAH lingkaran
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const label = node.name;
          const fontSize = 3.5; // Ukuran font dalam satuan Graph (ikut zoom)
          
          ctx.font = `bold ${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top'; // Mulai tulis dari titik atas huruf
          
          // Warna Teks
          ctx.fillStyle = textColor;
          
          // Posisi: Koordinat Node Y + Jarak (7 unit) ke bawah
          // (Karena nodeRelSize kita 6, radiusnya sekitar 3-4, jadi +7 pas di bawahnya)
          ctx.fillText(label, node.x, node.y + 7);
        }}
        
        // --- INTERAKSI ---
        onNodeClick={(node: any) => {
            router.push(`/blog/${node.id}`);
        }}
        
        cooldownTicks={100}
      />
    </div>
  );
}