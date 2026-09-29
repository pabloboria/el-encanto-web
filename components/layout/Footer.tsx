import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons";
import { siteConfig, navLinks } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-tierra-dark text-crema">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-crema p-1 shadow-sm">
                <Image
                  src="/logo/logo-principal.png"
                  alt="Logo de El Encanto — Huevos pastoriles"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-serif text-xl">El Encanto</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-crema/75">
              Huevos de chacra argentinos, criados con libertad y cariño.
              Tradición de la chacra, directo a tu mesa.
            </p>

            <div className="mt-5 flex items-center gap-2.5 opacity-80">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-crema p-0.5">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Sello distintivo de El Encanto"
                  width={32}
                  height={32}
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
              <span className="text-xs text-crema/55">Nuestro sello de siempre</span>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-yema">
              Explorá
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-crema/80 hover:text-yema"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-yema">
              Contacto
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="flex items-center gap-2 text-sm text-crema/80 hover:text-yema"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-crema/80 hover:text-yema"
                >
                  <Mail className="h-4 w-4" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-1">
                <a
                  href={siteConfig.instagram}
                  aria-label="Instagram de El Encanto"
                  className="text-crema/80 hover:text-yema"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.facebook}
                  aria-label="Facebook de El Encanto"
                  className="text-crema/80 hover:text-yema"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-crema/15 pt-6 text-xs text-crema/60 md:flex-row">
          <p>© {new Date().getFullYear()} El Encanto. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-yema">
              Términos
            </Link>
            <Link href="#" className="hover:text-yema">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
