export const siteConfig = {
  name: "El Encanto",
  tagline: "Huevos de chacra, criados con libertad",
  domain: "https://www.elencanto.com.ar", // dominio placeholder, actualizar cuando el cliente confirme el definitivo
  whatsapp: "5491100000000", // placeholder — reemplazar por el número real del negocio
  instagram: "https://instagram.com/elencanto", // placeholder
  facebook: "https://facebook.com/elencanto", // placeholder
  email: "hola@elencanto.com.ar", // placeholder
};

export const navLinks = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#comparativa", label: "La diferencia" },
  { href: "#quiz", label: "Jugá" },
  { href: "#como-se-hace", label: "Cómo se hace" },
  { href: "#por-que-elegir", label: "Por qué elegirnos" },
  { href: "#galeria", label: "Galería" },
  { href: "#donde-comprar", label: "Dónde comprar" },
];

export type ComparisonRow = {
  eje: string;
  campo: string;
  comun: string;
};

export const comparisonData: ComparisonRow[] = [
  {
    eje: "Crianza",
    campo: "Gallinas libres, caminan al aire libre, hacen sus baños de tierra.",
    comun: "Gallinas hacinadas en jaulas o galpones cerrados.",
  },
  {
    eje: "Alimentación",
    campo: "Pasto, maíz e insectos que encuentran en su recorrido.",
    comun: "Balanceado industrial estandarizado.",
  },
  {
    eje: "Bienestar animal",
    campo: "Bajo estrés, con espacio y luz solar natural.",
    comun: "Alto nivel de hacinamiento y estrés.",
  },
  {
    eje: "Color y textura de la yema",
    campo: "Amarillo intenso por los carotenos del pasto, yema más consistente.",
    comun: "Yema más pálida, salvo que se agreguen colorantes al alimento.",
  },
  {
    eje: "Trazabilidad",
    campo: "Producción local y artesanal: se sabe de dónde viene cada huevo.",
    comun: "Producción industrial a gran escala, menos trazable.",
  },
  {
    eje: "Aspecto nutricional",
    campo: "Numerosos productores y organismos como el INTA destacan una mejor calidad proteica y de yema en gallinas pastoriles.",
    comun: "La industria (CAPIA) sostiene que no hay diferencia nutricional significativa.",
  },
  {
    eje: "Huella ambiental",
    campo: "Producción a menor escala, integrada al campo: cercanía y transparencia.",
    comun: "Los sistemas industriales suelen tener menor huella de carbono por unidad producida.",
  },
];
