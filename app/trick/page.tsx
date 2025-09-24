import Link from "next/link";

export default function Trick() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-animated px-4 text-red-600">
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-bold neon-text flicker mb-6 text-center">
        You Have Been Tricked!
      </h1>
      <p className="mb-6 text-center md:text-lg">
        That flag was a decoy. Look closer in the darkness.
      </p>
      <Link
        href="/stage1"
        className="px-6 py-2 bg-red-700 hover:bg-red-800 rounded text-white neon-text"
      >
        Back to Stage 1
      </Link>
    </div>
  );
}
