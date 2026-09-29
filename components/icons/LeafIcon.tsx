export function LeafIcon({ className }: { className?: string }) {
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
      <path d="M14 50C10 30 24 10 50 10c2 22-14 40-36 40Z" />
      <path d="M14 50c8-10 16-18 30-30" />
    </svg>
  );
}
