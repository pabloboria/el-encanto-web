export function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="12" />
      <path d="M32 6v8M32 50v8M6 32h8M50 32h8M13.5 13.5l5.5 5.5M45 45l5.5 5.5M50.5 13.5L45 19M19 45l-5.5 5.5" />
    </svg>
  );
}
