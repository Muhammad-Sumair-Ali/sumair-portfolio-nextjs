'use client';

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative w-screen flex items-center justify-center bg-black overflow-hidden group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Background Layers */}
      <div className="absolute  bg-dot-thick-neutral-100 hidden dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="absolute inset-0 pointer-events-none bg-dot-thick-teal-600 dark:bg-dot-thick-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 50%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      {/* Content */}
      <div className={cn("relative z-10 text-center text-white", className)}>
        {children}
      </div>
    </div>
  );
};