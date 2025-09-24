"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Stage2() {
  const [flag, setFlag] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const submitFlag = async () => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: "stage2", flag }),
    });
    const data = await res.json();
    if (data.status === "ok") router.push("/final");
    else if (data.status === "trick") router.push("/trick");
    else setMsg("Incorrect flag");
  };

  // Base64-encoded image placeholder (replace with real base64)
  const imageBase64 = "iVBORw0KGgoAAAANSUhEUgAA..."; // your stage2.png in base64
  const imageSrc = `data:image/png;base64,${imageBase64}`;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-animated px-4 text-red-600">
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-bold neon-text flicker mb-6 text-center">
        Stage 2 – Hawkins Lab
      </h1>
      <p className="mb-6 text-center md:text-lg">
        Decode the image to find the hidden secret.
      </p>

      <img
        src={imageSrc}
        className="mb-4 border-2 border-red-600 rounded w-64 md:w-80"
        alt="Stage 2 Puzzle"
      />

      <input
        className="px-4 py-2 mb-2 rounded border border-red-700 bg-black text-white placeholder-red-500 w-full max-w-xs"
        placeholder="Enter flag"
        value={flag}
        onChange={(e) => setFlag(e.target.value)}
      />
      <button
        onClick={submitFlag}
        className="px-6 py-2 mb-2 bg-red-700 hover:bg-red-800 rounded text-white w-full max-w-xs neon-text"
      >
        Submit
      </button>
      <p className="mt-2 text-sm text-center">{msg}</p>
    </div>
  );
}
