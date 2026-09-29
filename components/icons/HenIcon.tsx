export function HenIcon({ className }: { className?: string }) {
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
      <path d="M20 40c-4 0-8-3-8-8 0-4 3-7 7-7 1-6 6-11 13-11 6 0 11 4 12 10 5 1 8 5 8 10 0 6-5 10-11 10" />
      <path d="M18 40v6a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-6" />
      <path d="M44 24l6-4-2 6" />
      <circle cx="38" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <path d="M14 44l-3 5M46 44l3 5M24 50v4M36 50v4" />
    </svg>
  );
}
