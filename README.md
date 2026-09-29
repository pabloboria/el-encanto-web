# El Encanto — Sitio web

Sitio web de venta para "El Encanto", marca argentina de huevos de campo.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Para generar el build de producción:

```bash
npm run build
npm run start
```

## Estado actual

Esta primera etapa incluye el proyecto base y la Home completa, con navegación
por anclas a cada sección (Historia, Comparativa, Cómo se hace, Por qué
elegirnos, Galería, Dónde comprar). Las páginas internas propuestas en el
brief (`/historia`, `/la-diferencia`, `/produccion`, `/recetas`, `/contacto`)
todavía no están construidas — se evalúan en una etapa siguiente.

## Logos del sitio

El logo principal de la marca es el escudo con la gallina
(`public/logo/logo-principal.png`): aparece en el header, el footer y el
favicon (`app/icon.png`, recortado sobre el escudo para que se lea bien en
16-32px).

El logo anterior (`public/logo/logo.jpeg`, el escudo de "San Antonio de
Areco — Baradero") quedó como **sello secundario** en el footer, junto a
"Nuestro sello de siempre" — más chico, debajo del logo principal.

**Para reemplazar el logo principal:** sobrescribí
`public/logo/logo-principal.png` con el archivo definitivo (mismo nombre),
y si el favicon necesita un recorte distinto, volvé a generarlo desde ese
archivo y guardalo como `app/icon.png`. El contenedor crema que envuelve el
logo en Header/Footer se puede simplificar o quitar si el archivo nuevo ya
tiene buen contraste por sí solo.

## Cómo reemplazar las imágenes placeholder

Todavía no tenemos fotos ni videos finales del cliente. En vez de usar fotos
de stock (con riesgo de enlaces rotos con el tiempo), el sitio usa bloques
de color de marca + iconografía de línea (`components/ui/PlaceholderBlock.tsx`)
como placeholder visual en cada lugar donde debería ir una foto real.

Cada uno de estos bloques tiene el atributo `data-placeholder="reemplazar
por foto real del campo del cliente"`, así que podés encontrarlos todos
buscando ese texto en el código (`grep -r "data-placeholder" components/`).

Para reemplazar un bloque por una foto real:
1. Agregá la foto en `public/images/placeholders/` (carpeta ya creada para
   esto).
2. En la sección correspondiente (`components/sections/*.tsx`), cambiá el
   `<PlaceholderBlock ... />` por un `<Image src="/images/placeholders/tu-foto.jpg" ... />`
   de `next/image`, manteniendo un `alt` descriptivo.

## Cómo reemplazar los videos

El componente `components/ui/VideoBlock.tsx` soporta dos modos:

- **YouTube/Vimeo embebido** (`mode="youtube"`): usado hoy en la sección
  "Cómo se hace" con un video temático de ejemplo del canal argentino
  "Bichos de Campo" (`youtubeId="t4KQweiJPN4"`). Reemplazá ese ID por el
  video propio del cliente.
- **Archivo local** (`mode="local"`): apunta a un archivo en
  `public/videos/` (carpeta ya creada, hoy vacía). Colocá ahí el video
  final y actualizá el `src` en el componente que lo use.

## Imagen Open Graph pendiente

Se probó generar `app/opengraph-image.tsx` con `next/og` (`ImageResponse`),
pero rompe el build en este entorno: es un bug conocido de `@vercel/og` en
Windows cuando la ruta del proyecto contiene espacios (`C:\Trabajo\El
Encanto`). Dos formas de resolverlo más adelante:

1. Mover el proyecto a una ruta sin espacios (ej. `C:\Trabajo\ElEncanto`) y
   volver a agregar `app/opengraph-image.tsx` con `ImageResponse`.
2. Más simple: una vez haya fotos reales, exportar una imagen estática de
   1200×630 a `public/og-image.jpg` y referenciarla en
   `openGraph.images` dentro de `lib/metadata.ts`.

Mientras tanto, el sitio comparte igual con título y descripción (sin
imagen de vista previa).

## Datos de contacto pendientes de confirmar

En `lib/siteConfig.ts` hay varios valores placeholder que hay que
actualizar con los datos reales del cliente antes de publicar:

- `whatsapp` — número de WhatsApp del negocio.
- `instagram` / `facebook` — links a redes sociales.
- `email` — casilla de contacto.
- `domain` — dominio definitivo (se usa para SEO/sitemap/Open Graph).

## Paleta y tipografía

La paleta "campo argentino" y las fuentes (Fraunces para títulos, Inter
para texto) están centralizadas en `tailwind.config.ts` y `lib/fonts.ts`.
Para probar Playfair Display en vez de Fraunces, solo hay que tocar
`lib/fonts.ts`.

## Estructura del proyecto

```
app/            Rutas de Next.js (Home, sitemap, robots, OG image, favicon)
components/
  layout/       Header y Footer
  sections/     Las secciones de la Home, una por archivo
  ui/           Componentes reutilizables (botones, tabla comparativa, video, lightbox, etc.)
  icons/        Iconografía de línea hecha a medida (gallina, huevo, sol, pasto, hoja)
lib/            Configuración del sitio, datos de la tabla comparativa, SEO, fuentes
public/         Logo, imágenes y videos
docs/brief.md   Brief original del proyecto
```
