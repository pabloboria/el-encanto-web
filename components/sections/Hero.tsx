import { ReactNode } from "react";
import { HenIcon, SunIcon, EggIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";
import { Carousel } from "@/components/ui/Carousel";
import { Mascot } from "@/components/ui/Mascot";

type Tone = "campo" | "tierra" | "yema";

function HeroSlide({
  icon,
  imageLabel,
  tone,
  kicker,
  title,
  description,
  image,
  priority = false,
}: {
  icon: ReactNode;
  imageLabel: string;
  tone: Tone;
  kicker: string;
  title: ReactNode;
  description: string;
  image?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <PlaceholderBlock
          icon={icon}
          label={imageLabel}
          tone={tone}
          ratio="h-full"
          rounded="rounded-none"
          showCaption={!image}
          image={image}
          priority={priority}
        />
      </div>
      {/* Velo oscuro para que el texto sea legible sobre cualquier tono de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-tierra-dark/90 via-tierra-dark/50 to-transparent" />

      <div className="relative flex h-full items-center py-10">
        <Container>
          <div className="max-w-xl">
            <span className="section-heading-kicker inline-flex items-center gap-2 text-xs font-semibold uppercase text-yema">
              <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
              {kicker}
            </span>
            <p className="mt-3 font-serif text-3xl leading-tight text-crema sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-crema/85 sm:mt-6 sm:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
              <Button href="#comparativa" variant="primary">
                Conocé la diferencia
              </Button>
              <Button href="#historia" variant="outline">
                Nuestra historia
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

const heroSlides = [
  {
    key: "amanecer",
    content: (
      <HeroSlide
        icon={<SunIcon />}
        imageLabel="Campo argentino al amanecer, gallinas libres"
        tone="tierra"
        image="/images/placeholders/amanecer.jpg"
        priority
        kicker="Huevos de chacra argentinos"
        title={
          <>
            No vendemos huevos.
            <br />
            <span className="italic text-yema">Vendemos la vida</span> que
            los hizo posibles.
          </>
        }
        description="Gallinas libres, sol de verdad y pasto argentino. Así hacemos los huevos de El Encanto: como se hacían antes, cuando el campo todavía marcaba el ritmo."
      />
    ),
  },
  {
    key: "gallinas",
    content: (
      <HeroSlide
        icon={<HenIcon />}
        imageLabel="Gallinas libres en el pasto"
        tone="campo"
        image="/images/placeholders/gallinas-libres.jpg"
        kicker="Bienestar animal, todos los días"
        title={
          <>
            Gallinas libres.
            <br />
            <span className="italic text-yema">Sin jaulas, sin apuro.</span>
          </>
        }
        description="Caminan al sol, picotean donde quieren y viven a su ritmo. Para nosotros, así es como tiene que ser siempre."
      />
    ),
  },
  {
    key: "huevos",
    content: (
      <HeroSlide
        icon={<EggIcon />}
        imageLabel="Huevos frescos recién puestos"
        tone="yema"
        image="/images/placeholders/huevos-frescos.jpg"
        kicker="Directo de la chacra a tu mesa"
        title={
          <>
            Yema intensa.
            <br />
            <span className="italic text-yema">Sabor que se nota.</span>
          </>
        }
        description="El color y el sabor no se fingen: son el resultado de gallinas bien criadas, alimentadas a pasto, todos los días del año."
      />
    ),
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Encabezado real de la página; el contenido visible va dentro de cada slide */}
      <h1 className="sr-only">
        El Encanto — Huevos de chacra argentinos, criados con libertad
      </h1>
      <Carousel
        slides={heroSlides}
        rounded="rounded-none"
        className="h-[660px] sm:h-auto sm:aspect-video lg:aspect-[21/9]"
      />
      <Mascot
        src="/images/mascot/hero.png"
        alt="Don Ángel dándote la bienvenida"
        position="bottom-right"
      />
    </section>
  );
}
