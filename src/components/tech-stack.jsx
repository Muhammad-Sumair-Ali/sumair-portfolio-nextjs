"use client";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Redux",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },

  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
];

export default function TechStack() {
  const [randomColor, setRandomColor] = useState("teal");

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomColor(randomColor);
    }, 3000);
    // console.log(randomColor);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-full mb-16 max-w-[1010px] -mt-16 bg-transparent">
      <div className="dark bg-transparent grid gap-6 md:grid-cols-3 w-[82%] m-auto">
        {technologies.map((tech) => (
          <Card
            key={tech.category}
            className="p-4 py-6 shadow-teal-900 border border-teal-400 shadow-md"
          >
            <h3 className="text-lg text-left font-semibold mb-4">
              {tech.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  style={{ borderColor: `${randomColor}` }} // Inline styling
                  className={`transition-all duration-1000 inline-flex border items-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
