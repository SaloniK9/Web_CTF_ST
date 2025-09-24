export default function Final() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-animated px-4 text-red-600">
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-bold neon-text flicker mb-6 text-center">
        Congratulations!
      </h1>
      <p className="mb-4 text-lg text-center">
        You have escaped the Upside Down.
      </p>
      <p className="text-sm text-center">
        Feel free to brag — you solved the Stranger Things CTF!
      </p>
    </div>
  );
}
