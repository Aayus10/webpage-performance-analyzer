"use client";

import { motion, Easing } from "framer-motion";
import { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  ease?: Easing | Easing[];
  once?: boolean;
};

export default function MotionReveal({
  children,
  delay = 0.2,
  duration = 0.8,
  y = 20,
  ease = "easeInOut",
  once = true,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
