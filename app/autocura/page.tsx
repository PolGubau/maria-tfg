"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "~/shared/ui/button";

const QUESTIONS = [
  { id: "q1", text: "Sents que no tens prou temps per a tu mateix/a?" },
  { id: "q2", text: "Et sents estressat/da intentant compatibilitzar la cura amb les altres responsabilitats?" },
  { id: "q3", text: "Tens la sensació que perds el control de la teva vida des que cuides?" },
  { id: "q4", text: "Dorms malament o et despertes cansat/da?" },
  { id: "q5", text: "Has deixat d'fer coses que t'agradaven per dedicar-te a la cura?" },
  { id: "q6", text: "Sents que la teva salut ha empitjorat des que cuides?" },
  { id: "q7", text: "Tens la sensació que no pots demanar ajuda o que els altres no entenen el que vius?" },
  { id: "q8", text: "Et sents emocionalment esgotat/da al final del dia?" },
];

const LABELS = ["Mai", "De vegades", "Sovint", "Gairebé sempre"];

function getResult(score: number) {
  if (score <= 8)
    return {
      level: "Baix",
      color: "text-post",
      bg: "bg-post-bg border-post/20",
      message:
        "La teva càrrega emocional sembla manejable. Continua cuidant-te i mantenint les teves rutines pròpies.",
      modules: [],
    };
  if (score <= 16)
    return {
      level: "Moderat",
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      message:
        "Hi ha signes de sobrecàrrega moderada. Et recomanem revisar les estratègies de regulació emocional i de suport social.",
      modules: ["emocions-estres", "suport-social"],
    };
  return {
    level: "Elevat",
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    message:
      "La càrrega emocional és significativa. És important que busquis suport, tant en la xarxa propera com en recursos professionals.",
    modules: ["emocions-estres", "suport-social", "recursos-suport"],
  };
}

const MODULE_LABELS: Record<string, string> = {
  "emocions-estres": "Gestionar les emocions i l'estrès",
  "suport-social": "Suport social i familiar",
  "recursos-suport": "Recursos de suport professional",
};

export default function AutocuraPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(score);

  return (
    <div>
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">
            Test d&apos;autocura
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Com estàs portant la cura?
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Aquest test breu t&apos;ajudarà a identificar el teu nivell de sobrecàrrega emocional com a familiar cuidador. Basat en l&apos;escala de Zarit simplificada.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {!submitted ? (
          <>
            {QUESTIONS.map((q, i) => {
              const val = answers[q.id];
              return (
                <div key={q.id} className="p-5 rounded-xl border border-border bg-surface/40 space-y-4">
                  <p className="text-sm font-medium text-ink leading-snug">
                    <span className="text-ink-muted mr-2 tabular-nums">{i + 1}.</span>
                    {q.text}
                  </p>

                  {/* Labels */}
                  <div className="flex justify-between text-[10px] text-ink-muted font-medium px-0.5">
                    {LABELS.map((l) => <span key={l}>{l}</span>)}
                  </div>

                  {/* Slider */}
                  <input
                    type="range"
                    min={0}
                    max={3}
                    step={1}
                    value={val ?? 0}
                    onChange={(e) =>
                      setAnswers((p) => ({ ...p, [q.id]: Number(e.target.value) }))
                    }
                    onClick={() => {
                      if (answers[q.id] === undefined)
                        setAnswers((p) => ({ ...p, [q.id]: 0 }));
                    }}
                    className="w-full accent-accent cursor-pointer"
                    aria-label={q.text}
                  />

                  {/* Selected value */}
                  <p className={`text-xs text-center font-medium transition-colors ${val === undefined ? "text-ink-muted/40 italic" : "text-accent"}`}>
                    {val === undefined ? "Mou el control per respondre" : LABELS[val]}
                  </p>
                </div>
              );
            })}

            <div className="pt-4">
              <button
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                className={buttonVariants({ variant: "primary" }) + " w-full disabled:opacity-40 disabled:cursor-not-allowed"}
              >
                Veure el meu resultat
              </button>
              {!allAnswered && (
                <p className="text-xs text-ink-muted text-center mt-2">
                  Respon totes les preguntes per continuar
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className={`rounded-xl border p-8 text-center ${result.bg}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
                Nivell de sobrecàrrega
              </p>
              <p className={`text-4xl font-bold mb-3 ${result.color}`}>{result.level}</p>
              <p className="text-sm text-ink-muted leading-relaxed max-w-md mx-auto">
                {result.message}
              </p>
              <p className="text-xs text-ink-muted mt-4 opacity-60">
                Puntuació: {score} / 24
              </p>
            </div>

            {result.modules.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                  Mòduls recomanats
                </p>
                <div className="space-y-2">
                  {result.modules.map((slug) => (
                    <Link
                      key={slug}
                      href={`/modules/${slug}`}
                      className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-accent/40 hover:bg-surface transition-all group"
                    >
                      <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                        {MODULE_LABELS[slug]}
                      </p>
                      <span className="text-ink-muted group-hover:text-accent">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => { setSubmitted(false); setAnswers({}); }}
                className={buttonVariants({ variant: "secondary" })}
              >
                Tornar a fer el test
              </button>
              <Link href="/modules" className={buttonVariants({ variant: "ghost" })}>
                Veure tots els mòduls
              </Link>
            </div>

            <p className="text-xs text-ink-muted border-t border-border pt-4">
              Aquest test és orientatiu i no substitueix una avaluació clínica professional. Si el malestar és intens o persistent, consulta un psicòleg especialitzat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
