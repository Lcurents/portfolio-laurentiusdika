"use client";
import { 
  Brush, 
  Gamepad2, 
  Code2, 
  Database, 
  Smartphone, 
  PenTool 
} from 'lucide-react';

// Definisi Level agar lebih Profesional
// 1 = Beginner
// 2 = Intermediate
// 3 = Advanced
// 4 = Expert
const skills = [
  {
    category: "Art Skills",
    colors: { main: "#e11d48", soft: "#ffe4e6" }, 
    items: [
      { name: "Pixel Art", tier: 4, label: "Expert" }, 
      { name: "Anime Style", tier: 3, label: "Advanced" },
      { name: "Semi-Realis", tier: 2, label: "Intermediate" }, 
    ],
    icon: <Brush size={20} />
  },
  {
    category: "Game & App",
    colors: { main: "#ea580c", soft: "#ffedd5" }, 
    items: [
      { name: "Unity Engine", tier: 3, label: "Advanced" },
      { name: "C# Logic", tier: 3, label: "Advanced" },
      { name: "Flutter", tier: 2, label: "Intermediate" },
    ],
    icon: <Gamepad2 size={20} />
  },
  {
    category: "Web Tech",
    colors: { main: "#2563eb", soft: "#dbeafe" }, 
    items: [
      { name: "Next.js / React", tier: 4, label: "Expert" },
      { name: "TypeScript", tier: 3, label: "Advanced" },
      { name: "Supabase", tier: 3, label: "Advanced" },
    ],
    icon: <Code2 size={20} />
  }
];

export default function SkillsSection() {
  // Helper untuk membuat baris kotak-kotak level
  const renderLevelDots = (tier: number, color: string) => {
    return (
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level}
            className={`h-2.5 w-8 rounded-sm transition-all duration-300 ${level <= tier ? '' : 'opacity-20'}`}
            style={{ 
              backgroundColor: level <= tier ? color : '#9ca3af' // Abu-abu jika belum reached
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white dark:text-brand-dark">Skill Stats</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-game hover:-translate-y-1 transition-all duration-300"
              style={{ borderTopColor: group.colors.main, borderTopWidth: '4px' }}
            >
              
              {/* Header Kategori */}
              <div className="mb-8 flex items-center gap-3">
                <div 
                    className="p-2 rounded-lg text-white dark:text-brand-dark"
                    style={{ backgroundColor: group.colors.main }}
                >
                    {group.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 uppercase tracking-wider">
                    {group.category}
                </h3>
              </div>
              
              {/* List Skill */}
              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-bold text-gray-900 text-sm">{skill.name}</span>
                      <span 
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: group.colors.main }}
                      >
                        {skill.label}
                      </span>
                    </div>
                    
                    {/* Level Bars (4 Segments) */}
                    {renderLevelDots(skill.tier, group.colors.main)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}