import { PastureIcon, SunIcon, HenIcon, EggIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { VideoBlock } from "@/components/ui/VideoBlock";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const pasos = [
  {
    icon: SunIcon,
    title: "Aire libre, todo el día",
    text: "Las gallinas salen al campo desde temprano. Nada de galpones cerrados ni jaulas.",
  },
  {
    icon: PastureIcon,
    title: "Alimentación natural",
    text: "Pasto, maíz e insectos que encuentran solas en su recorrido diario.",
  },
  {
    icon: HenIcon,
    title: "Sin hacinamiento",
    text: "Espacio de sobra para que cada gallina viva sin estrés y a su ritmo.",
  },
  {
    icon: EggIcon,
    title: "Trazabilidad real",
    text: "Sabemos de qué lote viene cada huevo, y vos también podés saberlo.",
  },
];

export function ComoSeHace() {
  return (
    <section id="como-se-hace" className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/como-se-hace.png"
        alt="Don Ángel explicando el proceso con un libro en la mano"
        position="bottom-left"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="El proceso"
            title="Cómo se hace en Argentina"
            description="Desde que amanece hasta que el huevo llega a tu mesa, cada paso respeta el ritmo del campo."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <Reveal key={paso.title} delay={i * 0.08}>
              <div className="rounded-organic bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <paso.icon className="h-9 w-9 text-campo-dark" />
                <h3 className="mt-4 font-serif text-lg text-tierra-dark">
                  {paso.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tierra-dark/70">
                  {paso.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 grid gap-6 md:grid-cols-2">
          <VideoBlock
            mode="youtube"
            // Placeholder temático (canal "Bichos de Campo"): reemplazar por video propio del proceso en el campo del cliente
            youtubeId="t4KQweiJPN4"
            title="Gallinas libres vs. gallinas en jaula — Bichos de Campo"
          />
          <PlaceholderBlock
            icon={<PastureIcon />}
            label="Gallinas pastando en libertad"
            tone="tierra"
            ratio="aspect-video"
            image="/images/placeholders/gallinas-libres.jpg"
          />
        </Reveal>
      </Container>
    </section>
  );
}
