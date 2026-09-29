import { LeafIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

const faqItems: AccordionItem[] = [
  {
    question: "¿Qué significa que un animal sea criado a pasto?",
    answer:
      "Significa que vive en movimiento, con acceso al pasto, al sol y al aire libre, con espacio para expresar sus comportamientos naturales: caminar, picotear, rascar la tierra, buscar insectos y descansar. En los sistemas industriales, en cambio, se cría en galpones cerrados y con alta densidad de animales, buscando producir la mayor cantidad posible en el menor tiempo. A pasto, el crecimiento es más lento —el animal gasta energía moviéndose, no está pensado solo para engordar rápido— y por eso tarda bastante más en estar listo. De yapa, con el pastoreo rotativo el estiércol va fertilizando naturalmente el suelo, lo que ayuda a regenerarlo cuando el manejo está bien hecho.",
  },
  {
    question: "¿Por qué no todos los huevos marrones tienen el mismo color?",
    answer:
      "Es normal: incluso dentro de la misma raza de gallina aparecen distintos tonos de marrón, por diferencias genéticas entre cada gallina que influyen en el pigmento de la cáscara. La edad de la gallina y el momento de su ciclo de postura también generan variaciones. Lo importante: el color de la cáscara no dice nada sobre la calidad, el sabor ni el valor nutricional del huevo.",
  },
  {
    question: "¿Un huevo más chico es de menor calidad?",
    answer:
      "No. El tamaño puede variar según la edad de la gallina o la época del año, pero no determina la frescura ni el valor nutricional del huevo. Un huevo chico puede ser tan bueno como uno grande.",
  },
];

export function FAQSection() {
  return (
    <section className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/faq.png"
        alt="Don Ángel con cara de pregunta, encogiéndose de hombros"
        position="bottom-right"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Preguntas frecuentes"
            title="Curiosidades que vale la pena saber"
            description="Cosas que quizás no sabías sobre cómo se cría un animal a pasto y sobre los huevos que llegan a tu mesa."
            icon={<LeafIcon className="h-4 w-4" />}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
