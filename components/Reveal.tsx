"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  scale,
  blur = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        ...(scale != null ? { scale } : {}),
        ...(blur ? { filter: "blur(10px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        ...(scale != null ? { scale: 1 } : {}),
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
