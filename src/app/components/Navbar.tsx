"use client";

import { useState } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

type Card = {
  title: string;
  content: JSX.Element;
  emoji: string;
};

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cards: Card[] = [
    {
      title: "About Me",
      emoji: "💡",
      content: (
        <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-xl p-6 max-w-xs">
          <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed">
            I’m <span className="text-[#FACC15] font-semibold">Rehab Alnairi</span>, a software engineer
            driven by curiosity and passion, crafting <span className="text-[#FACC15] font-semibold">creative digital experiences</span>
            that inspire and make an impact.
          </p>
        </div>
      ),
    },
    {
      title: "Projects",
      emoji: "🚀",
      content: (
        <div className="flex flex-wrap gap-2">
          {[
            "Driver Drowsiness Detection",
            "Health Center Management System",
            "Mini Bank System",
            "Library Management System",
          ].map((project) => (
            <span
              key={project}
              className="bg-[#FACC15]/20 text-[#FACC15] px-3 py-1 rounded-full text-xs font-semibold"
            >
              {project}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Skills",
      emoji: "🛠",
      content: (
        <div className="flex flex-col gap-4 max-h-60 overflow-auto">
          {/* Frontend */}
          <div>
            <h3 className="text-[#FACC15] font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind", "HTML", "CSS", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#FACC15]/20 text-[#FACC15] px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-[#FACC15] font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["C#", "SQL", "Node.js", "Express"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#FACC15]/20 text-[#FACC15] px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-[#FACC15] font-semibold mb-2">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {["AI", "IoT", "Project Management", "Git", "Docker", "Figma"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#FACC15]/20 text-[#FACC15] px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Contact",
      emoji: "📬",
      content: (
        <div className="flex flex-col gap-2">
          <a
            href="https://om.linkedin.com/in/rehab-alnairi-5547232b3"
            target="_blank"
            className="hover:text-[#FACC15] transition flex items-center gap-2"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/Rehabalnairi"
            target="_blank"
            className="hover:text-[#FACC15] transition flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="mailto:rehab2523@gmail.com"
            className="hover:text-[#FACC15] transition flex items-center gap-2"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      ),
    },
  ];

  return (
  <div className="fixed top-[60%] left-1/2 -translate-x-1/2 z-50 flex justify-center items-start gap-3 px-2 flex-wrap sm:flex-nowrap">
  {cards.map((card, i) => (
    <div
      key={i}
      className="flex flex-col items-center relative"
      onMouseEnter={() => setOpenIndex(i)}
      onMouseLeave={() => setOpenIndex(null)}
    >

      <button className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FACC15]/90 text-black rounded-full shadow-lg font-bold text-lg transition hover:scale-110">
        {card.emoji}
      </button>

    
      <div
        className={`
          absolute top-16 sm:top-20 left-1/2 -translate-x-1/2
          w-64 sm:w-72
          bg-white/10 backdrop-blur-xl border border-white/20
          rounded-2xl p-4 sm:p-5 shadow-xl text-white
          transition-all duration-300
          ${openIndex === i ? "opacity-100 scale-100 max-h-[60vh] overflow-auto" : "opacity-0 scale-95 max-h-0 overflow-hidden"}
        `}
      >
        <h3 className="font-poppins font-bold text-md sm:text-lg mb-2 text-[#FACC15]">
          {card.title}
        </h3>
        {card.content}
      </div>
    </div>
  ))}
</div>


  );
}
