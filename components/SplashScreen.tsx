"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const squares = [
  { x: 2,  y: 2,  fillOpacity: 0.9,  delay: 0    },
  { x: 10, y: 2,  fillOpacity: 0.45, delay: 0.15 },
  { x: 2,  y: 10, fillOpacity: 0.45, delay: 0.3  },
  { x: 10, y: 10, fillOpacity: 0.9,  delay: 0.45 },
];

export default function SplashScreen() {
  const [phase, setPhase] = useState<"intro" | "move" | "done">("intro");
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTarget({
      x: -(window.innerWidth / 2 - 100),
      y: -(window.innerHeight / 2 - 32),
    });
    const t1 = setTimeout(() => setPhase("move"), 1800);
    const t2 = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: "#ffffff" }}
      animate={phase === "move" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex items-center gap-4"
        animate={
          phase === "move"
            ? { scale: 0.32, x: target.x, y: target.y }
            : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Icon: 4 squares light up one by one */}
        <div
          className="flex items-center justify-center flex-shrink-0 rounded-2xl"
          style={{ width: 72, height: 72, backgroundColor: "#0F1B4C" }}
        >
          <svg width="40" height="40" viewBox="0 0 18 18" fill="none">
            {squares.map((sq, i) => (
              <motion.rect
                key={i}
                x={sq.x}
                y={sq.y}
                width={6}
                height={6}
                rx={1.5}
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: sq.fillOpacity }}
                transition={{ duration: 0.15, delay: sq.delay }}
              />
            ))}
          </svg>
        </div>

        {/* Text fades in after icon completes */}
        <motion.span
          className="font-bold tracking-tight text-gray-900"
          style={{ fontSize: "2.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          SKILL TUNE
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
