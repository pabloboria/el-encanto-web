import { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  description,
  icon,
  align = "left",
  light = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        className={`section-heading-kicker inline-flex items-center gap-2 text-xs font-semibold uppercase ${
          light ? "text-yema" : "text-tierra"
        }`}
      >
        {icon}
        {kicker}
      </span>
      <h2
        className={`mt-3 font-serif text-3xl md:text-4xl ${
          light ? "text-crema" : "text-campo-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-crema/85" : "text-tierra-dark/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
