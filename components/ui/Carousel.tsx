"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { key: string; content: ReactNode };

export function Carousel({
  slides,
  autoPlayMs = 5000,
  className = "",
  rounded = "rounded-organic",
  showArrowsOnHover = false,
}: {
  slides: Slide[];
  autoPlayMs?: number;
  className?: string;
  rounded?: string;
  showArrowsOnHover?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [paused, autoPlayMs, slides.length, index]);

  function goTo(next: number) {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 60;
    if (info.offset.x < -threshold || info.velocity.x < -400) {
      goTo(index + 1);
    } else if (info.offset.x > threshold || info.velocity.x > 400) {
      goTo(index - 1);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  }

  return (
    <div
      className={`group relative w-full overflow-hidden ${rounded} ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Imágenes destacadas de El Encanto"
    >
      <motion.div
        className="flex h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragStart={() => setPaused(true)}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {slides.map((slide) => (
          <div key={slide.key} className="h-full w-full shrink-0">
            {slide.content}
          </div>
        ))}
      </motion.div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Imagen anterior"
            className={`absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-crema/90 text-tierra-dark shadow-sm transition-opacity hover:bg-crema sm:flex md:left-6 ${
              showArrowsOnHover
                ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                : "opacity-90"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Imagen siguiente"
            className={`absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-crema/90 text-tierra-dark shadow-sm transition-opacity hover:bg-crema sm:flex md:right-6 ${
              showArrowsOnHover
                ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                : "opacity-90"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.key}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-yema" : "w-2 bg-crema/60 hover:bg-crema"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
