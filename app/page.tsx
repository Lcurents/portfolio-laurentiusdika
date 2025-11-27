import Navbar from '@/components/Navbar';
import Link from 'next/link';
import PortfolioSection from '@/components/PortfolioSection';
import { getSortedPostsData } from '@/lib/blog';
import SkillsSection from '@/components/SkillsSection';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import WaveDivider from '@/components/WaveDivider';
import HeroTypewriter from '@/components/HeroTypewriter';
import TiltCard from '@/components/TiltCard';

export default function Home() {
  const recentPosts = getSortedPostsData();

  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen text-brand-dark dark:text-brand-light font-sans selection:bg-brand-primary dark:selection:bg-yellow-500 transition-colors duration-200">
      
      <Navbar />

      {/* SECTION 1: HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden bg-yellow-50 dark:bg-slate-900 bg-dots transition-colors duration-200">
        <div className="text-center px-6 flex flex-col items-center relative z-10">
          
          <Reveal direction="down">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-brand-dark dark:text-white">
              Design. Code. <br/> 
              <span className="text-brand-primary dark:text-yellow-400 underline decoration-wavy decoration-4">Play.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
  {/* Kita panggil komponen yang aman di sini */}
  <HeroTypewriter />
</Reveal>

          <Reveal delay={0.4} direction="none">
            <button className="bg-brand-primary dark:bg-yellow-500 text-brand-dark px-8 py-4 rounded-xl font-bold text-lg border-b-4 border-yellow-600 dark:border-yellow-600 active:border-b-0 active:translate-y-1 transition-all hover:scale-105 shadow-xl dark:shadow-yellow-500/20">
              Explore My Work
            </button>
          </Reveal>
        </div>

        {/* Hero Wave */}
        <WaveDivider 
          position="bottom" 
          shape="curve" 
          flip={true} 
          className="text-white dark:text-slate-800"
        />
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="py-24 bg-white dark:bg-slate-800 relative transition-colors duration-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
            <Reveal direction="right" width="100%">
                <TiltCard className="h-full">
                <div className="aspect-square bg-brand-yellow dark:bg-yellow-600 rounded-3xl flex items-center justify-center shadow-game dark:shadow-yellow-500/30 overflow-hidden border-4 border-brand-dark dark:border-yellow-400 transform -rotate-2 hover:rotate-0 transition-all">
    {/* GANTI DENGAN IMG */}
    {/* Pastikan nama file sesuai dengan yang anda taruh di folder public/images */}
    <img 
      src="/images/dika.webp" 
      alt="Foto Profil Saya" 
      className="w-full h-full object-cover"
    />
</div></TiltCard>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
                <div>
                    <h2 className="text-4xl font-extrabold mb-6 text-brand-dark dark:text-brand-light dark:text-white">About Me</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                        Saya seorang developer yang suka menggambar, atau seniman yang suka ngoding? 
                        Entahlah, yang jelas saya suka membuat hal-hal visual menjadi interaktif.
                    </p>
                    
                    <Reveal direction="up" delay={0.4} width="100%">
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-2xl text-center transition-colors duration-200">
                              <div className="text-3xl font-extrabold text-blue-500 dark:text-blue-400">3+</div>
                              <div className="text-sm font-bold text-blue-900 dark:text-blue-200 uppercase">Years XP</div>
                          </div>
                          <div className="p-4 bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-700 rounded-2xl text-center transition-colors duration-200">
                              <div className="text-3xl font-extrabold text-green-500 dark:text-green-400">15+</div>
                              <div className="text-sm font-bold text-green-900 dark:text-green-200 uppercase">Projects</div>
                          </div>
                      </div>
                    </Reveal>
                </div>
            </Reveal>
        </div>
        
        {/* About Wave */}
<WaveDivider 
  position="bottom" 
  shape="waves" 
  flip={true}
  // Warna ombak harus sama dengan warna background section 'Skills'
  className="text-slate-800 dark:text-slate-950"
/>
      </section>

      {/* SECTION 3: SKILLS */}
      <div className="bg-slate-800 dark:bg-slate-950 pb-20 pt-10 relative transition-colors duration-200">
        <Reveal width="100%" direction="up">
            <div className="py-10">
                <SkillsSection />
            </div>
        </Reveal>
        
        {/* Wave Divider - ke Portfolio */}
        {/* Skills Wave */}
<WaveDivider 
  position="bottom" 
  shape="waves" 
  flip={true}
  // Warna ombak harus sama dengan warna background section 'Portfolio'
  className="text-white dark:text-slate-800"
/>
      </div>

      {/* SECTION 4: PORTFOLIO */}
      <section className="py-32 bg-white dark:bg-slate-800 bg-grid-pattern relative transition-colors duration-200">
        <div className="container mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light dark:text-white mb-4">My Quest Log</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">Project yang telah saya selesaikan</p>
             </div>
             <Reveal width="100%" direction="up" delay={0.2}>
                <PortfolioSection />
            </Reveal>
        </div>
        
        {/* Wave Divider - ke DevBlog */}
        {/* Portfolio Wave */}
<WaveDivider 
  position="bottom" 
  shape="waves" 
  flip={true}
  // Warna ombak harus sama dengan background 'DevBlog'
  className="text-slate-50 dark:text-slate-800"
/>
      </section>

      {/* SECTION 5: DEVBLOG */}
      <section id="devblog" className="py-32 bg-slate-50 dark:bg-slate-800 relative transition-colors duration-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-extrabold text-brand-dark dark:text-brand-light dark:text-white">DevBlog</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Catatan perjalanan koding saya</p>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-brand-primary dark:text-yellow-400 font-bold hover:underline transition-colors duration-200">
                View All Posts &rarr;
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.length > 0 ? recentPosts.map((post, idx) => (
              <Reveal key={post.id} delay={idx * 0.1} direction="up" width="100%">
                  <Link href={`/blog/${post.id}`} className="block group"> 
                    <div className="bg-white dark:bg-slate-700 p-8 rounded-3xl border-b-8 border-r-4 border-gray-200 dark:border-slate-600 hover:border-brand-primary dark:hover:border-yellow-400 hover:-translate-y-1 hover:translate-x-1 transition-all duration-200">
                        <div className="text-sm font-bold text-brand-primary dark:text-yellow-400 mb-3 uppercase tracking-wide">{post.date}</div>
                        <h3 className="text-2xl font-bold mb-3 text-brand-dark dark:text-brand-light group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors duration-200 dark:text-white">{post.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
              </Reveal>
            )) : (
               <p className="text-gray-500 dark:text-gray-400 italic">Belum ada postingan blog.</p>
            )}
          </div>

           <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="text-brand-primary dark:text-yellow-400 font-bold transition-colors duration-200">View All Posts &rarr;</Link>
           </div>
        </div>

        {/* Wave Divider - ke Contact/Footer */}
        {/* DevBlog Wave */}
<WaveDivider 
  position="bottom" 
  shape="waves" 
  flip={true}
  // Warna ombak harus sama dengan background 'Contact'
  className="text-brand-dark dark:text-slate-950"
/>
      </section>

      {/* SECTION 6: CONTACT (FOOTER) */}
      <footer id="contact" className="py-24 bg-brand-dark dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-200">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Let's Connect!</h2>
              <p className="text-gray-400 dark:text-gray-500 max-w-xl mx-auto text-lg">
                Punya ide project game? Butuh website keren? Isi formulir di bawah ini! 👇
              </p>
            </div>

            <Reveal direction="up" width="100%">
               <ContactForm />
            </Reveal>

            <div className="mt-20 text-sm text-gray-500 dark:text-gray-600 text-center">
                © 2025 Your Name. Built with Next.js & Gamified Dreams.
            </div>
          </div>
      </footer>
    </main>
  );
}