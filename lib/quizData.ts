export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "¿Qué comen principalmente las gallinas de El Encanto?",
    options: [
      "Solo balanceado industrial",
      "Pasto, maíz e insectos que encuentran en su recorrido",
      "Alimento con colorantes artificiales",
      "Solo maíz",
    ],
    correctIndex: 1,
    explanation:
      "Comen lo que encuentran caminando libres: pasto, maíz e insectos. Nada de balanceado estandarizado.",
  },
  {
    question:
      "¿Por qué la yema de un huevo de chacra suele tener un color más intenso?",
    options: [
      "Por colorantes agregados al alimento",
      "Por los carotenos naturales del pasto que comen las gallinas",
      "Es pura casualidad, no tiene explicación",
      "Por la raza de la gallina, sin relación con lo que come",
    ],
    correctIndex: 1,
    explanation:
      "Los carotenos del pasto natural le dan ese amarillo intenso. Nada de colorantes artificiales.",
  },
  {
    question:
      "¿Cómo suelen vivir las gallinas en una producción industrial de jaula?",
    options: [
      "Libres, al aire y al sol",
      "Con mucho espacio para moverse",
      "Hacinadas, con alto nivel de estrés",
      "Exactamente igual que las de chacra",
    ],
    correctIndex: 2,
    explanation:
      "La cría industrial suele implicar hacinamiento y estrés alto. Es una de las diferencias más grandes con la crianza de chacra.",
  },
  {
    question:
      "¿Qué significa la \"trazabilidad\" de la que habla El Encanto?",
    options: [
      "Que el huevo tiene una fecha de vencimiento larga",
      "Que se sabe exactamente de qué campo y crianza viene cada huevo",
      "Que se puede devolver si no gusta",
      "Que viene en un empaque especial",
    ],
    correctIndex: 1,
    explanation:
      "Trazabilidad es transparencia total: sabés de dónde viene lo que estás comiendo, sin vueltas.",
  },
  {
    question:
      "Según organismos como el INTA, ¿qué suele destacarse en huevos de gallinas criadas a pasto?",
    options: [
      "Que no existe ninguna diferencia con los industriales",
      "Una mejor calidad proteica y de yema",
      "Que son siempre más baratos",
      "Que se conservan por más tiempo",
    ],
    correctIndex: 1,
    explanation:
      "Numerosos productores y organismos como el INTA destacan una mejor calidad proteica y de yema en gallinas pastoriles, aunque la industria (CAPIA) sostiene que no hay diferencia nutricional significativa. Un tema donde conviene ser honesto con los matices.",
  },
  {
    question: "Sobre la huella ambiental, ¿cuál es la afirmación más honesta?",
    options: [
      "La producción de chacra siempre contamina menos",
      "Los sistemas industriales suelen tener menor huella de carbono por unidad, aunque la chacra ofrece cercanía y transparencia",
      "La chacra no tiene ningún impacto ambiental",
      "No hay ninguna diferencia entre ambos sistemas",
    ],
    correctIndex: 1,
    explanation:
      "Ser honestos importa: la escala industrial suele tener menor huella de carbono por unidad producida. La chacra compite en otra cancha: cercanía, transparencia y bienestar animal.",
  },
  {
    question: "¿Qué buscó El Encanto desde sus orígenes?",
    options: [
      "Producir al menor costo posible, como fuera",
      "Competir en volumen con la industria",
      "Que las gallinas vivan libres y bien criadas, aunque cueste más trabajo",
      "Vender exclusivamente por internet",
    ],
    correctIndex: 2,
    explanation:
      "La convicción de fondo: una gallina libre, con sol y sin apuro, pone un huevo distinto. Esa fue siempre la apuesta.",
  },
];
