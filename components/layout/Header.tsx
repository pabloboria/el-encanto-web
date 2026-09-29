"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-crema-dark/40 bg-campo-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3 md:px-10">
        <Link href="#top" className="flex items-center gap-3">
          {/* Chip crema: el logo ya trae un fondo crema muy similar, así se integra sin costura visible */}
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-crema p-1 shadow-sm">
            <Image
              src="/logo/logo-principal.png"
              alt="Logo de El Encanto — Huevos pastoriles"
              width={48}
              height={48}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="font-serif text-xl text-crema">El Encanto</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-crema/85 transition-colors hover:text-yema"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="#donde-comprar" variant="primary">
            Dónde comprar
          </Button>
        </div>

        <button
          type="button"
          className="text-crema xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-crema-dark/30 bg-campo-dark xl:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium text-crema/90 hover:bg-crema/10"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#donde-comprar" variant="primary" className="mt-2">
                Dónde comprar
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
