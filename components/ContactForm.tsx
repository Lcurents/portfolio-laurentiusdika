"use client";
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  // State untuk menangani status pengiriman
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // Kirim data ke Formspree
    try {
      const response = await fetch("https://formspree.io/f/mzzleonv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        // Reset form jika perlu
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  // Tampilan jika Sukses Terkirim
  if (status === "success") {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-green-100 p-8 rounded-2xl border-2 border-green-500 text-center max-w-lg mx-auto"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Terima kasih sudah menghubungi. Saya akan membalas pesan Anda secepatnya! 🎮
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-green-700 font-bold underline hover:text-green-900"
        >
          Kirim pesan lagi
        </button>
      </motion.div>
    );
  }

  // Tampilan Formulir Utama
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-game max-w-xl mx-auto text-left">
      
      {/* Nama */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
          Nama / Nickname
        </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          required
          placeholder="Masukkan nama Anda"
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
          Email
        </label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          required
          placeholder="email@example.com"
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors"
        />
      </div>

      {/* Pesan */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
          Pesan / Quest
        </label>
        <textarea 
          name="message" 
          id="message" 
          rows={4}
          required
          placeholder="Tulis pesan Anda di sini..."
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-medium text-gray-800 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none"
        ></textarea>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 font-bold mb-4 bg-red-50 p-3 rounded-lg">
          <AlertCircle size={20} />
          Oops! Gagal mengirim. Coba lagi nanti.
        </div>
      )}

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-brand-primary text-gray-800 font-bold text-lg py-4 rounded-xl border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 hover:bg-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Kirim Pesan <Send size={20} />
          </>
        )}
      </button>

    </form>
  );
}