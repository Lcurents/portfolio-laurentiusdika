"use client";
import { 
  Code2, Terminal, Database, Cpu, Globe, 
  Gamepad2, Layers, Command, Braces, Box 
} from 'lucide-react';

const TECH_STACK = [
  { name: "Next.js", icon: <Globe /> },
  { name: "React", icon: <Code2 /> },
  { name: "TypeScript", icon: <Braces /> },
  { name: "Tailwind", icon: <Layers /> },
  { name: "Unity", icon: <Gamepad2 /> },
  { name: "Node.js", icon: <Terminal /> },
  { name: "Supabase", icon: <Database /> },
  { name: "Framer Motion", icon: <Cpu /> },
  { name: "Git", icon: <Command /> },
  { name: "Three.js", icon: <Box /> },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-10 border-y border-gray-100 dark:border-slate-800">
      
      {/* Fade Effect di Kiri & Kanan agar terlihat menyatu */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>

      {/* Container Gerak */}
      <div className="flex w-max animate-scroll">
        
        {/* Set 1: Icon Asli */}
        <div className="flex gap-12 px-6">
          {TECH_STACK.map((tech, idx) => (
            <div key={`orig-${idx}`} className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-bold text-xl uppercase tracking-wider hover:text-brand-primary dark:hover:text-yellow-400 transition-colors cursor-pointer">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Set 2: Duplikat (Untuk efek looping mulus) */}
        <div className="flex gap-12 px-6">
          {TECH_STACK.map((tech, idx) => (
            <div key={`dupe-${idx}`} className="flex items-center gap-2 text-gray-400 dark:text-gray-500 font-bold text-xl uppercase tracking-wider hover:text-brand-primary dark:hover:text-yellow-400 transition-colors cursor-pointer">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}