import { EggIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { ComparisonSlider, type SliderRow } from "@/components/ui/ComparisonSlider";
import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const nutrientStats = [
  {
    value: "+220%",
    label: "Vitamina E",
    sublabel: "más que el huevo industrial",
  },
  {
    value: "+62%",
    label: "Vitamina A",
    sublabel: "más que el huevo industrial",
  },
  {
    value: "2 a 6×",
    label: "Betacaroteno",
    sublabel: "más que el huevo industrial",
  },
  {
    value: "3×",
    label: "Omega-3",
    sublabel: "más que el huevo industrial",
  },
  {
    value: "−50%",
    label: "Colesterol",
    sublabel: "menos que el huevo industrial",
  },
];

const sliderItems: SliderRow[] = [
  {
    label: "Crianza",
    campo: "Gallinas libres, al aire y al sol",
    comun: "Encerradas en jaulas o galpones",
  },
  {
    label: "Alimentación",
    campo: "Pasto, maíz e insectos",
    comun: "Balanceado industrial estandarizado",
  },
  {
    label: "Bienestar animal",
    campo: "Bajo estrés, con espacio real",
    comun: "Alto nivel de hacinamiento",
  },
  {
    label: "Yema",
    campo: "Color intenso, sabor que se nota",
    comun: "Más pálida y estandarizada",
  },
  {
    label: "Trazabilidad",
    campo: "Sabés de qué chacra viene",
    comun: "Producción a gran escala, anónima",
  },
];

export function Comparativa() {
  return (
    <section id="comparativa" className="relative bg-campo-dark py-20 md:py-28">
      <Mascot
        src="/images/mascot/comparativa.png"
        alt="Don Ángel señalando la diferencia entre huevo de chacra y huevo común"
        position="top-right"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="La diferencia"
            title="Huevo de chacra vs. huevo común"
            description="No te vamos a mentir con números inventados. Te contamos, con la mayor honestidad posible, en qué se diferencia un huevo de chacra de uno industrial."
            icon={<EggIcon className="h-4 w-4" />}
            align="center"
            light
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ComparisonSlider items={sliderItems} />
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-crema/60">
            El detalle completo, sin resumir
          </p>
          <div className="mt-6">
            <ComparisonTable />
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-crema/60">
              Un estudio real, con nombre y apellido
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-crema/75">
              En 2007, la revista estadounidense Mother Earth News mandó a
              analizar en laboratorio huevos de gallinas camperas de 14
              granjas y comparó los resultados contra los valores estándar
              del USDA para huevo industrial. No es un estudio académico
              revisado por pares, pero es uno de los análisis más citados
              sobre el tema, y sus resultados generales se repiten en
              fuentes agropecuarias serias:
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {nutrientStats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 + i * 0.06}>
              <StatTile {...stat} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-crema/50">
            Estos números corresponden a huevos camperos en general, no a un
            análisis de laboratorio hecho específicamente sobre los huevos de
            El Encanto. Los compartimos como referencia seria del tema, no
            como promesa exacta sobre nuestro producto.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
