import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      
      {/* Animated background circles */}
      <div className="absolute w-96 h-96 bg-purple-700 rounded-full opacity-20 animate-ping top-[-50px] left-[-50px]"></div>
      <div className="absolute w-80 h-80 bg-indigo-600 rounded-full opacity-20 animate-pulse bottom-[-40px] right-[-40px]"></div>

      {/* Main content */}
      <h1 className="text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        The Ultimate Challenge
      </h1>
      <p className="text-xl mb-10 text-center max-w-xl drop-shadow-md">
        Embark on a journey of puzzles, codes, and hidden secrets. Only the curious survive.
      </p>

      <Link href="/stage1">
        <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-500 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-lg">
          Begin Your Quest
        </button>
      </Link>

      {/* Subtle footer text */}
      <p className="absolute bottom-6 text-gray-400 text-sm">
        Are you ready to uncover the hidden secrets?
      </p>
    </div>
  );
}
