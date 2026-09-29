import { LeafIcon, HenIcon, SunIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const razones = [
  {
    icon: LeafIcon,
    title: "Regeneración del suelo",
    text: "Cada campaña deja la tierra mejor de lo que la encontramos, no al revés.",
  },
  {
    icon: HenIcon,
    title: "Bienestar animal",
    text: "Espacio real, sin hacinamiento, sin apuro por llegar antes al peso de faena.",
  },
  {
    icon: SunIcon,
    title: "Tu salud",
    text: "Alimentos criados con tiempo y cuidado, no acelerados para bajar costos.",
  },
];

export function PorQueCuestaMas() {
  return (
    <section className="relative bg-campo-dark py-20 md:py-28">
      <Mascot
        src="/images/mascot/cuesta-mas.png"
        alt="Don Ángel tomando mate, tranquilo"
        position="bottom-left"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-heading-kicker inline-flex items-center gap-2 text-xs font-semibold uppercase text-yema">
              Hablemos de precio
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 font-serif text-2xl italic leading-snug text-crema sm:text-3xl md:text-4xl">
              &ldquo;La pregunta no es por qué nuestros productos cuestan más.
              <br className="hidden sm:block" /> La pregunta es: ¿qué hay
              detrás de los productos que cuestan menos?&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-crema/80">
              Sí, cuesta más. Nuestras gallinas y pollos no crecen encerrados:
              caminan sobre pasturas, toman sol, picotean insectos y se mueven
              como tiene que moverse un animal. Eso significa más tiempo de
              crianza, más espacio, más trabajo y más dedicación que un
              sistema industrial. No podemos competir en precio — elegimos
              competir en calidad, sabor, bienestar animal y regeneración del
              suelo.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {razones.map((razon, i) => (
            <Reveal key={razon.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-organic border border-crema/15 bg-crema/5 p-6 text-center">
                <razon.icon className="mx-auto h-9 w-9 text-yema" />
                <h3 className="mt-4 font-serif text-lg text-crema">
                  {razon.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-crema/70">
                  {razon.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-xl text-center font-serif text-xl italic text-yema">
            No es gastar más. Es colaborar con un sistema que se sostiene en
            el tiempo.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
