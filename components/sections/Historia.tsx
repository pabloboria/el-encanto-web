import { LeafIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const hitos = [
  {
    year: "Los orígenes",
    text: "Todo empezó en un campo chico, con un gallinero armado a pulmón y la idea simple de que las gallinas viven mejor sueltas.",
  },
  {
    year: "El crecimiento",
    text: "De a poco, los vecinos empezaron a pedir 'los huevos de la yema naranja'. La producción creció, pero la forma de criar no cambió un poco.",
  },
  {
    year: "Hoy",
    text: "Seguimos en el mismo campo, con la misma filosofía: gallinas libres, alimentación natural y trazabilidad de la que no nos escondemos.",
  },
];

export function Historia() {
  return (
    <section id="historia" className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/historia.png"
        alt="Don Ángel apoyado en la tranquera, contando la historia"
        position="bottom-left"
      />
      <Container>
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                kicker="Nuestra historia"
                title="Una familia, un campo, una convicción"
                description="El Encanto nació de algo simple: la certeza de que una gallina que camina al sol, come pasto y no vive apretada, pone un huevo distinto. Lo demás fue cuestión de tiempo y de no aflojar."
                icon={<LeafIcon className="h-4 w-4" />}
              />
            </Reveal>

            <ol className="mt-10 flex flex-col gap-6 border-l-2 border-campo/30 pl-6">
              {hitos.map((hito, i) => (
                <Reveal
                  key={hito.year}
                  as="li"
                  delay={0.1 + i * 0.1}
                  className="relative"
                >
                  <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-yema" />
                  <h3 className="font-serif text-lg text-tierra-dark">
                    {hito.year}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-tierra-dark/75">
                    {hito.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.15}>
            <PlaceholderBlock
              icon={<LeafIcon />}
              label="La familia productora en el campo"
              tone="campo"
              ratio="aspect-[4/5]"
              image="/images/placeholders/familia-productora.jpg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
