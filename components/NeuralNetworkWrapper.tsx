"use client"; // Wajib: Menandakan ini Client Component
import dynamic from 'next/dynamic';

// Pindahkan logika dynamic import ke sini
const NeuralNetwork = dynamic(() => import('@/components/NeuralNetwork'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-slate-800">
       <p className="text-gray-400 animate-pulse">Initializing Neural Link...</p>
    </div>
  )
});

// Terima prop data dan oper ke NeuralNetwork
export default function NeuralNetworkWrapper({ data }: { data: any }) {
  return <NeuralNetwork data={data} />;
}