"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        animate={
          phase === "move"
            ? { scale: 0.32, x: target.x, y: target.y }
            : { scale: 1, x: 0, y: 0 }
        }
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/LOGO_SKILLTUNE.svg"
            alt="SKILL TUNE"
            width={320}
            height={132}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
