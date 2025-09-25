"use client"; 

import Link from "next/link";
import Head from "next/head";

export default function LandingPage() {
  return (

    
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
      <Head>
        
        <title>The Ultimate Challenge | Stranger Things Edition</title>
        <meta name="description" content="Embark on a journey of puzzles, codes, and hidden secrets. Only the curious survive." />
      </Head>
    

      {/* Background circles */}
      <div className="absolute w-96 h-96 bg-purple-700 rounded-full opacity-20 animate-ping top-[-50px] left-[-50px] pointer-events-none"></div>
      <div className="absolute w-80 h-80 bg-indigo-600 rounded-full opacity-20 animate-pulse bottom-[-40px] right-[-40px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div> {/* subtle dark overlay */}

      {/* Main content */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-[0_0_15px_red] animate-flicker">
        The Upside Down Awaits
      </h1>
      <p className="text-xl mb-10 text-center max-w-xl drop-shadow-md">
        Embark on a journey of puzzles, codes, and hidden secrets. It's Not your regular Quest. Only the curious survive.
      </p>

      {/* Glowing button */}
      <Link
        href="/stage1"
        className="px-8 py-4 bg-gradient-to-r from-red-700 to-red-900 rounded-full text-xl font-semibold text-white shadow-lg hover:scale-105 hover:brightness-125 transition-transform inline-block text-center animate-glow"
      >
        Begin Your Quest
      </Link>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-400 text-sm">
        Are you ready to uncover the hidden secrets?
      </p>

      {/* Flicker & glow animations */}
      <style jsx>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 22%, 24%, 55% { opacity: 0.4; }
        }
        .animate-flicker {
          animation: flicker 1.5s infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000; }
          50% { box-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000; }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
