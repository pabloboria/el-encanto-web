"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, RotateCcw } from "lucide-react";
import { quizQuestions } from "@/lib/quizData";
import { Button } from "@/components/ui/Button";
import { EggIcon, HenIcon, SunIcon } from "@/components/icons";

const total = quizQuestions.length;

function resultCopy(score: number) {
  if (score <= Math.floor(total * 0.35)) {
    return {
      icon: SunIcon,
      title: "Vas por buen camino",
      text: "Todavía hay bastante para descubrir sobre lo que hace distinto a un huevo de chacra. Recorré el sitio y volvé a intentarlo.",
    };
  }
  if (score <= Math.floor(total * 0.75)) {
    return {
      icon: HenIcon,
      title: "¡Muy bien!",
      text: "Ya conocés buena parte de lo que diferencia a un huevo de chacra de uno industrial.",
    };
  }
  return {
    icon: EggIcon,
    title: "¡Experto en huevos de chacra!",
    text: "Sabés tanto como nosotros. Ya podés explicarle a cualquiera por qué elegimos criar así.",
  };
}

export function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[index];

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (index === total - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function handleRestart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const result = resultCopy(score);
    return (
      <div className="mx-auto max-w-xl rounded-organic bg-white p-8 text-center shadow-md sm:p-10">
        <result.icon className="mx-auto h-12 w-12 text-campo-dark" />
        <p className="mt-4 font-serif text-2xl text-tierra-dark sm:text-3xl">
          {result.title}
        </p>
        <p className="mt-3 text-sm text-tierra-dark/70 sm:text-base">
          Acertaste {score} de {total} preguntas.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-tierra-dark/70">
          {result.text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#donde-comprar" variant="primary">
            Conocé nuestros huevos
          </Button>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 rounded-full border-2 border-campo-dark px-6 py-3 font-sans text-sm font-semibold text-campo-dark transition-all hover:scale-[1.03] hover:bg-campo-dark hover:text-crema active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" /> Jugar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/40">
          <motion.div
            className="h-full rounded-full bg-yema"
            initial={false}
            animate={{ width: `${((index + (selected !== null ? 1 : 0)) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-crema/80">
          {index + 1} / {total}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-organic bg-white p-6 shadow-md sm:p-8"
        >
          <h3 className="font-serif text-xl text-tierra-dark sm:text-2xl">
            {question.question}
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {question.options.map((option, i) => {
              const isCorrect = i === question.correctIndex;
              const isSelected = i === selected;
              const revealed = selected !== null;

              let stateClasses =
                "border-tierra-dark/15 hover:border-campo-dark/40 hover:bg-campo/5";
              if (revealed && isCorrect) {
                stateClasses = "border-campo-dark bg-campo/10";
              } else if (revealed && isSelected && !isCorrect) {
                stateClasses = "border-ladrillo bg-ladrillo/10";
              } else if (revealed) {
                stateClasses = "border-tierra-dark/10 opacity-60";
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(i)}
                  disabled={revealed}
                  className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-left text-sm transition-all sm:text-base ${stateClasses}`}
                >
                  <span className="text-tierra-dark">{option}</span>
                  {revealed && isCorrect && (
                    <Check className="h-5 w-5 shrink-0 text-campo-dark" />
                  )}
                  {revealed && isSelected && !isCorrect && (
                    <X className="h-5 w-5 shrink-0 text-ladrillo" />
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl bg-crema p-4 text-sm leading-relaxed text-tierra-dark/80"
            >
              {question.explanation}
            </motion.div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              disabled={selected === null}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-campo-dark px-6 py-3 font-sans text-sm font-semibold tracking-wide text-crema shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-campo hover:shadow-md active:scale-[0.98] disabled:pointer-events-none disabled:opacity-0"
            >
              {index === total - 1 ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
