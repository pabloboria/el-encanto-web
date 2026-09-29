"use client";

import { ReactNode, useCallback, useRef, useState } from "react";
import { Check, MoveHorizontal, X } from "lucide-react";

export type SliderRow = { label: string; campo: string; comun: string };

function Panel({
  title,
  icon,
  rows,
  field,
  align,
}: {
  title: string;
  icon: ReactNode;
  rows: SliderRow[];
  field: "campo" | "comun";
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={`absolute inset-0 flex flex-col p-6 sm:p-8 ${
        isRight ? "items-end" : "items-start"
      }`}
    >
      <h3 className="font-serif text-xl text-crema sm:text-2xl">{title}</h3>
      <ul
        className={`mt-4 flex max-w-sm flex-1 flex-col justify-center gap-3.5 sm:gap-4 ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        {rows.map((row) => (
          <li
            key={row.label}
            className={`flex items-start gap-2.5 ${isRight ? "flex-row-reverse" : ""}`}
          >
            <span className="mt-0.5 shrink-0">{icon}</span>
            <span className="text-sm leading-snug text-crema/90 sm:text-base">
              {row[field]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComparisonSlider({ items }: { items: SliderRow[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const [interacted, setInteracted] = useState(false);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, raw)));
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    draggingRef.current = true;
    setInteracted(true);
    containerRef.current?.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }
  function endDrag(e: React.PointerEvent) {
    draggingRef.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      setInteracted(true);
      setPercent((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      setInteracted(true);
      setPercent((p) => Math.min(100, p + 5));
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative h-[560px] w-full cursor-grab touch-none select-none overflow-hidden rounded-organic shadow-md active:cursor-grabbing sm:h-[440px]"
    >
      {/* Huevo común: capa base, siempre visible por completo */}
      <div className="absolute inset-0 bg-gradient-to-br from-tierra to-tierra-dark">
        <div className="bg-paper-texture absolute inset-0" aria-hidden="true" />
        <Panel
          title="Huevo común"
          icon={<X className="h-4 w-4 text-crema/60" />}
          rows={items}
          field="comun"
          align="right"
        />
      </div>

      {/* El Encanto: capa recortada por la posición del slider */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-campo to-campo-dark"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <div className="bg-paper-texture absolute inset-0" aria-hidden="true" />
        <Panel
          title="El Encanto (chacra)"
          icon={<Check className="h-4 w-4 text-yema" />}
          rows={items}
          field="campo"
          align="left"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-crema/90"
        style={{ left: `${percent}%` }}
      />

      {!interacted && (
        <div
          className="pointer-events-none absolute top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-crema/40"
          style={{ left: `${percent}%` }}
          aria-hidden="true"
        />
      )}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Arrastrá para comparar El Encanto con el huevo común"
        aria-valuenow={Math.round(percent)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        style={{ left: `${percent}%` }}
        className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crema text-tierra-dark shadow-lg"
      >
        <MoveHorizontal className="h-5 w-5" />
      </div>

      <span className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-crema/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tierra-dark shadow-sm">
        Arrastrá para comparar
      </span>
    </div>
  );
}
