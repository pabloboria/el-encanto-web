import { Check, X } from "lucide-react";
import { comparisonData } from "@/lib/siteConfig";

export function ComparisonTable() {
  return (
    <div className="w-full">
      {/* Desktop: tabla real */}
      <table className="hidden w-full border-separate border-spacing-0 overflow-hidden rounded-organic bg-crema shadow-sm md:table">
        <caption className="sr-only">
          Comparativa entre huevo de chacra El Encanto y huevo común industrial
        </caption>
        <thead>
          <tr>
            <th scope="col" className="bg-tierra-dark p-5 text-left font-sans text-sm font-semibold text-crema">
              Eje
            </th>
            <th scope="col" className="bg-campo-dark p-5 text-left font-sans text-sm font-semibold text-crema">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4" /> El Encanto (chacra)
              </span>
            </th>
            <th scope="col" className="bg-tierra p-5 text-left font-sans text-sm font-semibold text-crema">
              <span className="inline-flex items-center gap-2">
                <X className="h-4 w-4" /> Huevo común (industrial)
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, i) => (
            <tr key={row.eje} className={i % 2 === 0 ? "bg-crema" : "bg-crema-dark/60"}>
              <th scope="row" className="p-5 text-left align-top font-serif text-base text-tierra-dark">
                {row.eje}
              </th>
              <td className="p-5 align-top text-sm leading-relaxed text-campo-dark">
                {row.campo}
              </td>
              <td className="p-5 align-top text-sm leading-relaxed text-tierra-dark/70">
                {row.comun}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: cards apiladas */}
      <div className="flex flex-col gap-4 md:hidden">
        {comparisonData.map((row) => (
          <div key={row.eje} className="rounded-organic bg-crema p-5 shadow-sm">
            <h3 className="font-serif text-lg text-tierra-dark">{row.eje}</h3>
            <div className="mt-3 rounded-2xl bg-campo/10 p-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-campo-dark">
                <Check className="h-3.5 w-3.5" /> El Encanto
              </span>
              <p className="mt-1 text-sm leading-relaxed text-campo-dark">{row.campo}</p>
            </div>
            <div className="mt-3 rounded-2xl bg-tierra/10 p-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-tierra-dark">
                <X className="h-3.5 w-3.5" /> Huevo común
              </span>
              <p className="mt-1 text-sm leading-relaxed text-tierra-dark/70">{row.comun}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
