"use client";

import { useEffect, useState } from "react";
import StarBackground from "./StarBackground";

const words = [
  "I’m a software engineer driven by curiosity and passion",
  "crafting digital experiences where creativity meets logic",
  "I transform ideas into thoughtful solutions",
  "built to inspire and make an impact",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <StarBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Hi, I’m Rehab Alnairi
          <br />
          {mounted && (
            <span
              key={index}
              className="
                inline-block mt-2
                text-sm sm:text-base md:text-lg
                italic
                bg-gradient-to-r from-[#FACC15] to-[#FFE066]
                bg-clip-text text-transparent
                animate-text-slide
                drop-shadow-[0_0_20px_rgba(250,204,21,0.45)]
              "
            >
              {words[index]}
            </span>
          )}
        </h1>

        <p className="mt-6 max-w-2xl font-inter text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed">

        </p>
      </div>
    </section>
  );
}
