import { EggIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quiz } from "@/components/ui/Quiz";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

export function QuizSection() {
  return (
    <section id="quiz" className="relative bg-tierra-dark py-20 md:py-28">
      <Mascot
        src="/images/mascot/quiz.png"
        alt="Don Ángel pensativo, invitándote a jugar"
        position="bottom-left"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Poné a prueba lo que sabés"
            title="¿Cuánto sabés sobre huevos de chacra?"
            description="Un juego corto, sin vueltas, para ver si te quedó clara la diferencia. Siete preguntas, con la explicación de cada una."
            icon={<EggIcon className="h-4 w-4" />}
            align="center"
            light
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Quiz />
        </Reveal>
      </Container>
    </section>
  );
}
