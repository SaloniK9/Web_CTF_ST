import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-red-600 overflow-hidden font-mono">
      
      {/* Eerie fog background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-70"></div>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

      {/* Flickering neon heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-[0_0_10px_red] animate-flicker">
        The Ultimate Challenge
      </h1>

      {/* Subtitle */}
      <p className="text-xl mb-10 text-center max-w-xl drop-shadow-md text-gray-300">
        Embark on a journey of puzzles, codes, and hidden secrets. Only the curious survive.
      </p>

      {/* Start button */}
      <Link href="/stage1">
        <button className="px-8 py-4 bg-red-800 hover:bg-red-900 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-[0_0_15px_red]">
          Begin Your Quest
        </button>
      </Link>

      {/* Subtle footer */}
      <p className="absolute bottom-6 text-gray-500 text-sm">
        Are you ready to uncover the hidden secrets?
      </p>

      {/* Optional background elements */}
      <div className="absolute w-96 h-96 bg-red-900 rounded-full opacity-10 animate-ping top-[-80px] left-[-60px]"></div>
      <div className="absolute w-80 h-80 bg-red-700 rounded-full opacity-10 animate-pulse bottom-[-60px] right-[-50px]"></div>
    </div>
  );
}
