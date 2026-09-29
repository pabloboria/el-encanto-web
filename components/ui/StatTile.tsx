export function StatTile({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="rounded-organic bg-white p-6 text-center shadow-sm">
      <p className="font-serif text-3xl text-campo-dark sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm font-semibold text-tierra-dark">{label}</p>
      <p className="mt-1 text-xs leading-snug text-tierra-dark/60">{sublabel}</p>
    </div>
  );
}
