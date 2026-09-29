import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Historia } from "@/components/sections/Historia";
import { Comparativa } from "@/components/sections/Comparativa";
import { QuizSection } from "@/components/sections/QuizSection";
import { NoTeDejesMeterElHuevo } from "@/components/sections/NoTeDejesMeterElHuevo";
import { ComoSeHace } from "@/components/sections/ComoSeHace";
import { PorQueElegir } from "@/components/sections/PorQueElegir";
import { PorQueCuestaMas } from "@/components/sections/PorQueCuestaMas";
import { TestimoniosRecetas } from "@/components/sections/TestimoniosRecetas";
import { GaleriaMultimedia } from "@/components/sections/GaleriaMultimedia";
import { FAQSection } from "@/components/sections/FAQSection";
import { DondeComprar } from "@/components/sections/DondeComprar";

export const metadata: Metadata = {
  title: "Huevos de chacra criados con libertad",
  description:
    "El Encanto: huevos de chacra argentinos, de gallinas libres criadas a pasto. Conocé nuestra historia, el proceso y por qué elegirnos.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Historia />
      <Comparativa />
      <QuizSection />
      <NoTeDejesMeterElHuevo />
      <ComoSeHace />
      <PorQueElegir />
      <PorQueCuestaMas />
      <TestimoniosRecetas />
      <GaleriaMultimedia />
      <FAQSection />
      <DondeComprar />
    </main>
  );
}
