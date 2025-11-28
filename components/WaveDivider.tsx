interface Props {
  // color kita hapus/jadikan opsional dan tidak diprioritaskan
  position?: "top" | "bottom";
  flip?: boolean;
  shape?: "waves" | "curve";
  className?: string; // Kita akan memasukkan warna lewat sini
}

export default function WaveDivider({ 
  position = "bottom", 
  flip = false,
  shape = "waves",
  className = "text-white dark:text-slate-950" // Default color class
}: Props) {
  
  const rotation = position === "top" ? "rotate(0deg)" : "rotate(180deg)";
  const mirroring = flip ? "scaleX(1)" : "scaleX(-1)";
  const transform = `${rotation} ${mirroring}`;

  return (
    <div 
      // Tambahkan 'fill-current' agar SVG mengikuti warna text dari className
      className={`absolute left-0 w-full overflow-hidden leading-[0] fill-current ${className}`}
      style={{ 
        [position]: 0, 
        transform: transform, 
        zIndex: 1 
      }}
    >
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={shape === "waves" 
            ? "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            : "M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V0 H0 V60 Z"
          }
          // Hapus style fill manual, biarkan class fill-current bekerja
        ></path>
      </svg>
    </div>
  );
}