"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Position = "bottom-right" | "bottom-left" | "top-right" | "top-left";

const positionClasses: Record<Position, string> = {
  "bottom-right": "bottom-0 right-2 sm:right-6",
  "bottom-left": "bottom-0 left-2 sm:left-6",
  "top-right": "top-20 right-2 sm:right-6",
  "top-left": "top-20 left-2 sm:left-6",
};

export function Mascot({
  src,
  alt,
  position = "bottom-right",
  className = "",
}: {
  src?: string;
  alt: string;
  position?: Position;
  className?: string;
}) {
  if (!src) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`pointer-events-none absolute z-10 hidden sm:block ${positionClasses[position]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={220}
        height={280}
        className="h-auto w-28 drop-shadow-xl md:w-36 lg:w-44"
      />
    </motion.div>
  );
}
