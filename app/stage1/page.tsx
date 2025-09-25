"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Stage1() {
  const [flagInput, setFlagInput] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const submitFlag = async () => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: "stage1", flag: flagInput }),
    });
    const data = await res.json();
    if (data.status === "ok") router.push("/stage2");
    else if (data.status === "trick") router.push("/trick");
    else setMsg("Incorrect flag");
  };

  // Obfuscated flag
  const obfuscatedFlag = ["46","4C","41","47","7B","31","33","74","5F","73","74","61","67","65","31","5F","73","65","63","72","65","74","7D"];
  if (typeof window !== "undefined") {
    console.log("Hint: The flag is hidden in hex chunks… maybe combine them?");
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-animated px-4 text-red-600">
      
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-bold neon-text flicker mb-6 text-center">
        Stage 1 – The Upside Down
      </h1>
      <p className="mb-6 text-center md:text-lg">
        Inspect the Portal carefully. Hidden secrets lurk in the darkness.
      </p>

      <input
        className="px-4 py-2 mb-4 rounded border border-red-700 bg-black text-white placeholder-red-500 w-full max-w-xs"
        placeholder="Enter flag"
        value={flagInput}
        onChange={(e) => setFlagInput(e.target.value)}
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
