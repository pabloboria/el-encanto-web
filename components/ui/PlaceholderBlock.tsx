import { ReactNode } from "react";
import Image from "next/image";

type Tone = "campo" | "tierra" | "yema" | "crema";

const toneClasses: Record<Tone, string> = {
  campo: "bg-gradient-to-br from-campo to-campo-dark text-crema",
  tierra: "bg-gradient-to-br from-tierra to-tierra-dark text-crema",
  yema: "bg-gradient-to-br from-yema to-yema-dark text-tierra-dark",
  crema: "bg-gradient-to-br from-crema to-crema-dark text-campo-dark",
};

export function PlaceholderBlock({
  icon,
  label,
  tone = "campo",
  ratio = "aspect-[4/3]",
  rounded = "rounded-organic",
  className = "",
  showCaption = true,
  image,
  priority = false,
}: {
  icon: ReactNode;
  label: string;
  tone?: Tone;
  ratio?: string;
  rounded?: string;
  className?: string;
  showCaption?: boolean;
  image?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <div
        className={`relative flex ${ratio} w-full overflow-hidden ${rounded} ${className}`}
      >
        <Image
          src={image}
          alt={label}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      data-placeholder="reemplazar por foto real del campo del cliente"
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden ${rounded} ${toneClasses[tone]} ${className}`}
    >
      {/* Capa de textura separada: .bg-paper-texture también fija background-image,
          así que en el mismo elemento que el degradé lo pisaba por completo. */}
      <div className="bg-paper-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      {showCaption && (
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="opacity-90 [&>svg]:h-12 [&>svg]:w-12">{icon}</span>
          <span className="text-xs font-medium uppercase tracking-wide opacity-75">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
