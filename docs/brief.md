# PROMPT PARA CLAUDE CODE — Sitio web "El Encanto"

Copiá y pegá todo el bloque de abajo (desde "Quiero que construyas..." hasta el final) directamente en Claude Code, parado en la carpeta del proyecto.

---

El proyecto se debe desarrollar directamente en la carpeta `C:\Trabajo\El Encanto` (esta es la raíz del proyecto — inicializá Next.js ahí mismo, no en una subcarpeta nueva). El logo ya está ubicado en `C:\Trabajo\El Encanto\Logo.jpeg` — copialo a `/public/logo/logo.jpeg` (o convertilo a `.png`/`.webp` si conviene para mejor calidad/transparencia) y usalo en el header, footer y favicon.

Quiero que construyas un sitio web completo, profesional y de alto impacto visual para "El Encanto", una marca argentina de huevos de campo. El objetivo de este sitio NO es solo informar: es VENDER a través de historia, contenido y comparativas honestas pero persuasivas. El cliente final quiere que la web transmita confianza, tradición y calidad superior frente a los huevos de granja industrial (jaula).

## 1. Stack técnico

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS para estilos
- Framer Motion para animaciones sutiles (scroll reveal, hover, transiciones)
- Estructura de componentes reutilizables (no todo en una sola página)
- Responsive mobile-first (el 70% del tráfico de un sitio así es mobile)
- Optimizado para SEO (metadata, alt en imágenes, semantic HTML, sitemap.xml)
- Lighthouse performance en mente: lazy loading de imágenes y videos

## 2. Identidad visual

**Logo:** ya copiado según lo indicado arriba (`Logo.jpeg`). Si el fondo del header es oscuro y el logo tiene fondo blanco/transparente incompatible, generá una versión adaptada (recorte, o un contenedor con fondo crema que lo integre bien) en vez de que se vea "pegado".

**Paleta de colores** (paleta "campo argentino", cálida y natural, NO corporativa fría):
- Verde campo (principal): un verde oliva/pasto profundo, ej. `#4A5D3A` a `#6B8E4E`
- Amarillo yema (acento, usar con moderación para CTAs y detalles): `#E8A33D` / `#F2B84B`
- Marrón tierra (secundario, para textos y fondos cálidos): `#6B4226` / `#8B5A2B`
- Crema/hueso (fondos claros, no blanco puro — más cálido): `#FAF3E6` / `#F5EBD9`
- Un rojo ladrillo/teja apagado como acento ocasional: `#B0492E`

**Tipografía:**
- Títulos/hero: una serif con carácter (tipo Playfair Display, Fraunces o similar) que transmita tradición y calidez artesanal
- Cuerpo: una sans-serif muy legible (Inter, Work Sans o similar)
- Evitar tipografías "corporate SaaS" (nada de Roboto genérica para todo)

**Estilo general:** texturas sutiles tipo papel/lino en fondos, bordes redondeados orgánicos (no todo en cuadrados perfectos), ilustraciones o iconografía de línea relacionada a campo/gallinas/huevos/sol/pasto, mucho aire (whitespace), sensación "hogar de campo argentino" — pensar en estética de marca gourmet/artesanal, no de agroindustria.

## 3. Estructura del sitio (páginas/secciones)

### Home
1. **Hero**: imagen/video de fondo (placeholder) de campo argentino al amanecer con gallinas libres. Headline emocional que ya instale la diferenciación (ej: "No vendemos huevos. Vendemos la vida que los hizo posibles" — vos ajustá el copy final con el cliente). CTA hacia "Conocé la diferencia" o "Nuestra historia".
2. **Historia/Origen**: storytelling de la marca — quién empezó, por qué, dónde queda el campo, filosofía de crianza libre. Timeline visual si aporta.
3. **Comparativa "Huevo de Campo vs. Huevo Común"**: sección fuerte, con tabla o cards enfrentadas, lado a lado, con iconografía clara. Ver punto 4 para contenido real.
4. **Cómo se hace en Argentina**: proceso de crianza — gallinas libres, alimentación con pasto/maíz/insectos, sin hacinamiento, bienestar animal, trazabilidad. Con galería de fotos/video del proceso (placeholders).
5. **Por qué elegir El Encanto**: beneficios concretos (sabor, color de yema, bienestar animal, sin antibióticos/hacinamiento, apoyo a la producción local).
6. **Testimonios / Recetas**: opcional pero recomendado — clientes o chefs usando los huevos, o un bloque "en la cocina" con recetas simples que resalten el producto (conecta con "familia, hogar, cocina").
7. **Galería multimedia**: grid de fotos y videos del campo, las gallinas, el proceso, la familia productora.
8. **Dónde comprar / Contacto**: puntos de venta, WhatsApp, redes.
9. **Footer**: logo, redes, contacto, links legales.

### Páginas internas (recomendadas, no obligatorias — proponelas al cliente)
- `/historia` — la historia completa, extendida, con más fotos/video
- `/la-diferencia` — la comparativa desarrollada en profundidad (artículo largo tipo "por qué importa")
- `/produccion` — el proceso productivo en Argentina, con más detalle técnico/visual
- `/recetas` — si el cliente quiere contenido evergreen para SEO
- `/contacto`

## 4. Contenido de la comparativa (usar como base real, no inventar cifras falsas)

Armá la sección comparativa con estos ejes, presentados de forma visual (tabla, cards enfrentadas, o iconos con check/cross), usando lenguaje persuasivo pero honesto:

| Eje | Huevo de Campo (El Encanto) | Huevo Común (de jaula/industrial) |
|---|---|---|
| Crianza | Gallinas libres, caminan al aire libre, hacen sus baños de tierra | Gallinas hacinadas en jaulas o galpones cerrados |
| Alimentación | Pasto, maíz, insectos que encuentran en su recorrido | Balanceado industrial estandarizado |
| Bienestar animal | Bajo estrés, espacio y luz solar natural | Alto nivel de hacinamiento y estrés |
| Color y textura de la yema | Amarillo intenso por los carotenos del pasto, yema más consistente | Yema más pálida (salvo que se agreguen colorantes al alimento) |
| Trazabilidad | Producción local, artesanal, se sabe de dónde viene cada huevo | Producción industrial a gran escala, menos trazable |
| Aspecto nutricional | Estudios del INTA reportan mejor calidad proteica y de yema en gallinas pastoriles | La industria (CAPIA) sostiene que no hay diferencia nutricional significativa |
| Huella ambiental | Producción a menor escala, integrada al campo | Sistemas industriales suelen tener menor huella de carbono por unidad producida (dato real, no ocultarlo — se puede reencuadrar como "escala industrial vs. cercanía y transparencia") |

**Importante para el copy**: no afirmes como hecho absoluto que el huevo de campo es "más nutritivo" sin matiz — usá frases como "numerosos productores y organismos como el INTA destacan..." Esto es más creíble y defendible que una afirmación categórica, y de hecho vende mejor porque no suena a folleto genérico. El eje ganador real de esta marca es: bienestar animal + sabor + transparencia + tradición argentina, no una guerra de cifras nutricionales.

## 5. Multimedia (placeholders)

Todavía no tenemos las fotos/videos finales del cliente. Armá el sitio para que sea trivial reemplazarlos después:

- Usá una carpeta `/public/images/placeholders/` con imágenes de stock libres de derecho (via `https://images.unsplash.com/` con URLs de búsqueda temática: campo, gallinas, huevos, familia rural argentina, cocina) como placeholder visual real (no cuadros grises), para que el cliente pueda ver el mood real del sitio.
- Cada `<Image>` debe tener un comentario o data-attribute tipo `data-placeholder="reemplazar por foto real del campo del cliente"` para que sea fácil de trackear qué reemplazar.
- Para videos: armar un componente `<VideoBlock>` que soporte dos modos — (a) embed de YouTube/Vimeo por URL, y (b) archivo de video local servido desde `/public/videos/`. Dejar 2-3 bloques de video de ejemplo (uno embed de YouTube de stock rural/campo argentino como placeholder, con comentario de reemplazo).
- Galería en grid con lightbox (click para agrandar).

## 6. Tono de copy

Escribí (o dejá estructura para que yo complete) todos los textos en español rioplatense/argentino, cálido, cercano, en segunda persona ("vos"). Evitar sonar a folleto corporativo. El copy debe sonar como alguien que realmente conoce el campo y quiere que sepas por qué importa lo que comés. Priorizar frases cortas, con gancho emocional, sin perder rigor.

## 7. Entregables

- Proyecto Next.js funcionando localmente con `npm run dev`
- Componentes separados y comentados
- README con instrucciones de cómo reemplazar el logo, las imágenes y los videos por los definitivos
- Meta tags básicos de SEO cargados (title, description, og:image) por página

Empezá por la estructura base del proyecto y el Home completo. Después seguimos con las páginas internas.
