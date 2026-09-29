"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function Lightbox({
  items,
}: {
  items: { label: string; content: ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Ampliar: ${item.label}`}
            className="group block w-full cursor-zoom-in overflow-hidden rounded-organic text-left"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              {item.content}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-tierra-dark/90 p-6"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Cerrar"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-crema text-tierra-dark"
              >
                <X className="h-5 w-5" />
              </button>
              {items[openIndex].content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
