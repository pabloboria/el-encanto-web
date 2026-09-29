import { Eye, X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

export function NoTeDejesMeterElHuevo() {
  return (
    <section className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/gato-por-liebre.png"
        alt="Don Ángel serio, con los brazos cruzados"
        position="top-right"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-heading-kicker inline-flex items-center gap-2 text-xs font-semibold uppercase text-tierra">
              <Eye className="h-4 w-4" />
              Ojo con las etiquetas
            </span>
            <h2 className="mt-3 font-serif text-3xl text-campo-dark md:text-4xl">
              Que no te den gato por liebre
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-tierra-dark/75">
              La palabra &ldquo;libertad&rdquo; se usa mucho y se cumple poco. Lamentablemente,
              las gallinas siguen estando entre los animales de granja más
              maltratados por la industria, y de a poco algunos productores
              empiezan a cambiar la forma de criarlas. Pero también hay bastantes
              etiquetas que prometen una cosa y entregan otra.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-tierra-dark/75">
              Para que un huevo sea realmente de chacra, la gallina tiene que
              vivir <strong className="text-tierra-dark">siempre</strong> en
              libertad: horas y horas en la pastura, comiendo pasto y bichos,
              tomando sol. No es lo mismo pastorear cuatro horas que todo el
              día.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="rounded-organic border-2 border-tierra-dark/10 bg-white p-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-tierra-dark/50">
              <X className="h-4 w-4 text-ladrillo" />
              Lo que promocionan algunos
            </span>
            <p className="mt-3 text-sm leading-relaxed text-tierra-dark/60">
              Unas horas de pastura al día y el resto del tiempo encerradas,
              vendido igual como &ldquo;de campo&rdquo; o &ldquo;pastoril&rdquo;.
            </p>
          </div>
          <div className="rounded-organic border-2 border-campo-dark bg-campo/10 p-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-campo-dark">
              <Check className="h-4 w-4" />
              Lo que hacemos en El Encanto
            </span>
            <p className="mt-3 text-sm leading-relaxed text-tierra-dark/75">
              Todo el día en libertad, todos los días del año. Así tiene que
              ser siempre.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
