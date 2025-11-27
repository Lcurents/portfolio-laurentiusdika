"use client";
import Typewriter from 'typewriter-effect';

export default function HeroTypewriter() {
  return (
    <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto h-24 flex items-center justify-center">
      <Typewriter
        options={{
          strings: [
            "Hi, I'm Dika.", 
            "I craft colorful digital experiences.",
            "I build interactive game mechanics.",
            "I combine Pixel Art with Clean Code."
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}