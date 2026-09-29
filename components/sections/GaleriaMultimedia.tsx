"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Mascot } from "@/components/ui/Mascot";

type MediaItem =
  | { type: "photo"; src: string; label: string }
  | { type: "video"; src: string; label: string };

const mediaItems: MediaItem[] = [
  { type: "video", src: "/videos/real-proceso-1.mp4", label: "Un día de campo en El Encanto" },
  { type: "photo", src: "/images/real/real-huevos-colores.jpg", label: "Ningún huevo es igual a otro" },
  { type: "photo", src: "/images/real/real-campo-abierto.jpg", label: "Libres, de verdad" },
  { type: "photo", src: "/images/real/real-atardecer-pajar.jpg", label: "Atardecer en el gallinero" },
  { type: "photo", src: "/images/real/real-bano-tierra.jpg", label: "Su baño de tierra diario" },
  { type: "photo", src: "/images/real/real-gallinero-perro.jpg", label: "Firulais, el guardián" },

  { type: "video", src: "/videos/real-proceso-2.mp4", label: "Las gallinas, sueltas en su rutina" },
  { type: "photo", src: "/images/real/real-canasta-huevos.jpg", label: "La cosecha de la tarde" },
  { type: "photo", src: "/images/real/real-canasta-accion.jpg", label: "Otro día de trabajo" },
  { type: "photo", src: "/images/real/real-jardin.jpg", label: "Recorriendo el jardín" },
  { type: "photo", src: "/images/real/real-yemas-bowl.jpg", label: "Así de intensas, sin trucos" },
  { type: "photo", src: "/images/real/real-carretilla.jpg", label: "Pasto fresco para todas" },

  { type: "video", src: "/videos/real-jardin-recorrido.mp4", label: "Un paseo por el jardín" },
  { type: "photo", src: "/images/real/real-tranquera.jpg", label: "La entrada a la chacra" },
  { type: "photo", src: "/images/real/real-pastura-dorada.jpg", label: "Toda la tarde al sol" },
  { type: "photo", src: "/images/real/real-huerta-tunel.jpg", label: "La huerta y el gallinero, vecinos" },
  { type: "photo", src: "/images/real/real-bandada.jpg", label: "Toda la bandada, suelta" },
  { type: "photo", src: "/images/real/real-producto.jpg", label: "Así llegan a vos" },

  { type: "video", src: "/videos/real-rutina-manana.mp4", label: "Así arranca el día en la chacra" },
  { type: "photo", src: "/images/real/real-yemas-plato.jpg", label: "Color que no se inventa" },
  { type: "photo", src: "/images/real/real-gallinas-descanso.jpg", label: "Un descanso entre las hojas" },
  { type: "photo", src: "/images/real/real-gallinero-ventana.jpg", label: "Así se asoman a la puerta" },
  { type: "photo", src: "/images/real/real-pajar-refugio.jpg", label: "El pajar, su lugar favorito" },
  { type: "photo", src: "/images/real/real-rollo-pasto.jpg", label: "Toda la tropa, junta" },

  { type: "video", src: "/videos/real-chacra-mesa.mp4", label: "De la chacra a tu mesa" },
  { type: "photo", src: "/images/real/real-colores-yema.jpg", label: "Cada huevo, un color distinto" },
  { type: "photo", src: "/images/real/real-campo-tarde.jpg", label: "Libres hasta que cae el sol" },
  { type: "photo", src: "/images/real/real-corral-tunel.jpg", label: "Rumbo a los canteros" },
  { type: "photo", src: "/images/real/real-borde-tunel.jpg", label: "Curioseando en la huerta" },
  { type: "photo", src: "/images/real/real-comparacion-huevos.jpg", label: "Se nota la diferencia" },
];

const PAGE_SIZE = 6;
const totalPages = Math.ceil(mediaItems.length / PAGE_SIZE);

function VideoCell({ src, label }: { src: string; label: string }) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <video
        className="h-full w-full object-cover"
        src={src}
        controls
        autoPlay
        aria-label={label}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Reproducir video: ${label}`}
      className="group flex h-full w-full items-center justify-center bg-gradient-to-br from-campo-dark to-tierra-dark"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yema text-tierra-dark shadow-lg transition-transform group-hover:scale-110 md:h-14 md:w-14">
        <Play className="h-5 w-5 translate-x-0.5 md:h-6 md:w-6" fill="currentColor" />
      </span>
      <span className="absolute bottom-3 left-3 right-3 text-left font-sans text-xs font-medium text-crema md:text-sm">
        {label}
      </span>
    </button>
  );
}

export function GaleriaMultimedia() {
  const [page, setPage] = useState(0);
  const [openItem, setOpenItem] = useState<{ src: string; label: string } | null>(null);

  const start = page * PAGE_SIZE;
  const visible = mediaItems.slice(start, start + PAGE_SIZE);

  const goTo = (next: number) => {
    setPage((next + totalPages) % totalPages);
  };

  return (
    <section id="galeria" className="relative bg-tierra-dark py-20 md:py-28">
      <Mascot
        src="/images/mascot/galeria.png"
        alt="Don Ángel señalando hacia arriba, mostrando la galería"
        position="top-left"
      />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Galería"
            title="El campo, en imágenes"
            description="Así es un día cualquiera en El Encanto: nuestras gallinas, nuestra gente y nuestros huevos, tal cual son."
            icon={<Camera className="h-4 w-4" />}
            light
            align="center"
          />
        </Reveal>

        <div className="mt-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-2 gap-4 md:grid-cols-3"
              >
                {visible.map((item) => (
                  <div
                    key={item.src}
                    className="relative aspect-square w-full overflow-hidden rounded-organic"
                  >
                    {item.type === "photo" ? (
                      <button
                        type="button"
                        onClick={() => setOpenItem(item)}
                        aria-label={`Ampliar: ${item.label}`}
                        className="group block h-full w-full cursor-zoom-in text-left"
                      >
                        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={item.src}
                            alt={item.label}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      </button>
                    ) : (
                      <VideoCell src={item.src} label={item.label} />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label="Ver fotos y videos anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-crema/30 text-crema transition-colors hover:border-yema hover:text-yema"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Ir a la página ${i + 1} de la galería`}
                  aria-current={i === page}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === page ? "w-6 bg-yema" : "bg-crema/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label="Ver más fotos y videos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-crema/30 text-crema transition-colors hover:border-yema hover:text-yema"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {openItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-tierra-dark/90 p-6"
            onClick={() => setOpenItem(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenItem(null)}
                aria-label="Cerrar"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-crema text-tierra-dark"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-square w-full overflow-hidden rounded-organic">
                <Image
                  src={openItem.src}
                  alt={openItem.label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
