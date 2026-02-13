"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#EEEAD6] px-6 pt-24 md:pt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Bagian BIO */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          {/* Big Hello */}
          <h1 className="text-6xl md:text-8xl font-bold text-[#D5201A] tracking-tight">
            Hello!
          </h1>
          <hr className="flex flex-col gap-3 border-gray-700 " />
          {/* Deskripsi singkat */}
          <p className="text-lg md:text-sm text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            I`m <span className="font-bold text-[#D5201A]">Dika</span>. I`m a
            full-stack developer and I`m passionate about creating engaging,
            accessible, and useful experiences. With a background in both game
            design and engineering, I bridge the gap between creative artistry
            and technical logic to build products that feel as good as they
            look.
          </p>

          {/* Link */}
          <div className="flex flex-col items-center md:items-start gap-3 text-gray-700 ">
            {/* email */}
            <Link
              href={"mailto:laurentiusdika28@gmail.com"}
              className="flex items-center gap-3 hover-text-[#D5201A] transition-colors group"
            >
              <Mail className="w-5 h-5 text-[#D5201A] group-hover:scale-110 transition-transform" />
              <span>laurentiusdika28@gmail.com</span>
            </Link>

            {/* github */}
            <Link
              href={"https://www.github.com/lcurents"}
              className="flex items-center gap-3 hover-text-[#D5201A] transition-colors group"
            >
              <Github className="w-5 h-5 text-[#D5201A] group-hover:scale-110 transition-transform" />
              <span>github.com/lcurents</span>
            </Link>

            {/* instagram */}
            <Link
              href={"https://www.instagram.com/andreanove_"}
              className="flex items-center gap-3 hover-text-[#D5201A] transition-colors group"
            >
              <Instagram className="w-5 h-5 text-[#D5201A] group-hover:scale-110 transition-transform" />
              <span>andreanove_</span>
            </Link>

            {/* linkedin */}
            <Link
              href={"https://www.linkedin.com/in/laurentiusdika"}
              className="flex items-center gap-3 hover-text-[#D5201A] transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-[#D5201A] group-hover:scale-110 transition-transform" />
              <span>linkedin.com/in/laurentiusdika</span>
            </Link>
          </div>
        </div>

        {/* bagian ilustrasi */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <Image
            src="/heroSection.webp"
            alt="Dika illustration"
            width={500}
            height={500}
            className="object-contain relative z-10 hover:scale-103 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
