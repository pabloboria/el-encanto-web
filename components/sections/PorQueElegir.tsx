import { HenIcon, EggIcon, SunIcon, LeafIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const beneficios = [
  {
    icon: EggIcon,
    title: "Sabor de verdad",
    text: "Yema intensa, más consistente, con ese gusto que se nota apenas los probás.",
  },
  {
    icon: HenIcon,
    title: "Bienestar animal",
    text: "Gallinas libres, sin hacinamiento ni antibióticos preventivos.",
  },
  {
    icon: LeafIcon,
    title: "Producción local",
    text: "Apoyás a una familia productora argentina, no a una cadena industrial.",
  },
  {
    icon: SunIcon,
    title: "Transparencia total",
    text: "Sabés exactamente de dónde viene cada huevo que comprás.",
  },
];

export function PorQueElegir() {
  return (
    <section id="por-que-elegir" className="relative bg-tierra-dark py-20 md:py-28">
      <Mascot
        src="/images/mascot/por-que-elegir.png"
        alt="Don Ángel riéndose, feliz"
        position="bottom-right"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Por qué El Encanto"
            title="Cuatro razones que se notan en el plato"
            light
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="rounded-organic border border-crema/15 bg-crema/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yema/40 hover:bg-crema/10">
                <b.icon className="mx-auto h-9 w-9 text-yema" />
                <h3 className="mt-4 font-serif text-lg text-crema">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-crema/70">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
