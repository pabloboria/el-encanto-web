"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

const tagMap = {
  div: motion.div,
  li: motion.li,
} as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof tagMap;
}) {
  const Component = tagMap[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
