import { MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";
import { siteConfig } from "@/lib/siteConfig";

const puntosDeVenta = [
  { nombre: "Feria de productores — Sábados", zona: "Plaza central" },
  { nombre: "Almacén Doña Rosa", zona: "Barrio Norte" },
  { nombre: "Envíos a domicilio por WhatsApp", zona: "Zona metropolitana" },
];

export function DondeComprar() {
  return (
    <section id="donde-comprar" className="relative bg-crema py-20 md:py-28">
      <Mascot
        src="/images/mascot/donde-comprar.png"
        alt="Don Ángel invitándote con la mano"
        position="bottom-left"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Dónde comprar"
            title="Llevá El Encanto a tu casa"
            description="Escribinos por WhatsApp o pasá por nuestros puntos de venta habituales."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {puntosDeVenta.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-organic bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-campo-dark" />
                  <div>
                    <p className="font-serif text-base text-tierra-dark">
                      {p.nombre}
                    </p>
                    <p className="text-sm text-tierra-dark/60">{p.zona}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-organic bg-campo-dark p-8 text-center">
              <p className="font-serif text-2xl text-crema">
                ¿Consultas o pedidos?
              </p>
              <p className="max-w-xs text-sm text-crema/80">
                Te respondemos por WhatsApp o Instagram, como más cómodo te
                quede.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href={`https://wa.me/${siteConfig.whatsapp}`} variant="primary">
                  <MessageCircle className="h-4 w-4" /> Escribinos
                </Button>
                <Button href={siteConfig.instagram} variant="outline">
                  <InstagramIcon className="h-4 w-4" /> Seguinos
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
