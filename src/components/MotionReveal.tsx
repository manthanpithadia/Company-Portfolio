"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function MotionReveal({
  children,
  delay = 0,
  className = "",
  yOffset = 24,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
