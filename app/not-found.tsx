"use client";
import Link from 'next/link';
import { Home, RefreshCcw } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-brand-dark text-white text-center p-6 bg-dots">
      {/* Glitch Effect Text */}
      <h1 className="text-9xl font-extrabold text-brand-primary mb-4 animate-pulse">
        404
      </h1>
      
      <h2 className="text-4xl font-bold mb-6">GAME OVER</h2>
      
      <p className="text-gray-400 max-w-md mb-10 text-lg">
        Oops! Sepertinya Anda masuk ke area yang belum di-unlock atau level ini tidak ada.
      </p>

      <div className="flex gap-4">
        <Link 
          href="/"
          className="flex items-center gap-2 bg-brand-primary text-brand-dark px-8 py-3 rounded-xl font-bold border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 hover:brightness-110 transition-all"
        >
          <Home size={20} /> Respawn (Home)
        </Link>
        
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 bg-gray-700 text-white px-8 py-3 rounded-xl font-bold border-b-4 border-gray-900 active:border-b-0 active:translate-y-1 hover:bg-gray-600 transition-all"
        >
          <RefreshCcw size={20} /> Retry
        </button>
      </div>
    </div>
  );
}