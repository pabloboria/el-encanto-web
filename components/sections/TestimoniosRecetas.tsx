import { EggIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const testimonios = [
  {
    nombre: "Marina, cocinera",
    texto:
      "Uso los huevos de El Encanto en mi cocina desde hace un año. La diferencia en la yema se nota en cualquier preparación.",
  },
  {
    nombre: "Julián, cliente",
    texto:
      "Compro directo en la feria los sábados. Se siente distinto saber de dónde viene lo que comés.",
  },
  {
    nombre: "Rocío, clienta",
    texto:
      "Los pido cada quince días para toda la familia. El sabor no tiene comparación con los de supermercado.",
  },
];

export function TestimoniosRecetas() {
  return (
    <section className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/testimonios.png"
        alt="Don Ángel con las manos abiertas, dando la bienvenida"
        position="top-right"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="En la cocina"
            title="Testimonios y recetas"
            description="Familias y cocineros que ya eligieron El Encanto para su mesa de todos los días."
            icon={<EggIcon className="h-4 w-4" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal key={t.nombre} delay={i * 0.08}>
              <blockquote className="rounded-organic bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <p className="text-sm leading-relaxed text-tierra-dark/80">
                  “{t.texto}”
                </p>
                <cite className="mt-4 block font-serif text-base not-italic text-campo-dark">
                  {t.nombre}
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-14 grid items-center gap-8 rounded-organic bg-campo/10 p-8 md:grid-cols-2"
        >
          <div>
            <h3 className="font-serif text-2xl text-campo-dark">
              En la cocina con El Encanto
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-tierra-dark/75">
              Recetas simples, de las de todos los días, pensadas para que el
              huevo sea protagonista: unos huevos revueltos cremosos, una
              tortilla de papas bien dorada, o un flan casero como el de la
              abuela. Muy pronto vas a poder ver el paso a paso acá.
            </p>
          </div>
          <PlaceholderBlock
            icon={<EggIcon />}
            label="Recetas caseras con huevos de chacra"
            tone="yema"
            ratio="aspect-video"
            image="/images/placeholders/recetas-cocina.jpg"
          />
        </Reveal>
      </Container>
    </section>
  );
}
