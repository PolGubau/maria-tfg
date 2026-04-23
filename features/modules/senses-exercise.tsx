"use client";

import { useState } from "react";

const STEPS = [
  {
    sense: "Vista",
    emoji: "👁️",
    count: 5,
    prompt: "Mira al teu voltant. Nomena 5 coses que pots veure ara mateix.",
    color: "bg-blue-50 border-blue-200",
    dot: "bg-blue-400",
  },
  {
    sense: "Tacte",
    emoji: "✋",
    count: 4,
    prompt: "Toca les coses properes. Nomena 4 coses que pots tocar o que sents físicament.",
    color: "bg-amber-50 border-amber-200",
    dot: "bg-amber-400",
  },
  {
    sense: "Oïda",
    emoji: "👂",
    count: 3,
    prompt: "Escolta en silenci. Identifica 3 sons al teu voltant.",
    color: "bg-green-50 border-green-200",
    dot: "bg-green-400",
  },
  {
    sense: "Olfacte",
    emoji: "👃",
    count: 2,
    prompt: "Pren consciència de les olors. Nomena 2 coses que pots olorar.",
    color: "bg-purple-50 border-purple-200",
    dot: "bg-purple-400",
  },
  {
    sense: "Gust",
    emoji: "👅",
    count: 1,
    prompt: "Porta l'atenció a la boca. Identifica 1 sabor que pots percebre.",
    color: "bg-rose-50 border-rose-200",
    dot: "bg-rose-400",
  },
];

export function SensesExercise() {
  const [stage, setStage] = useState<"idle" | "running" | "done">("idle");
  const [step, setStep] = useState(0);

  function start() {
    setStep(0);
    setStage("running");
  }

  function next() {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      setStage("done");
    }
  }

  function reset() {
    setStage("idle");
    setStep(0);
  }

  if (stage === "idle") {
    return (
      <div className="mt-4 p-6 border border-border rounded-xl text-center bg-canvas">
        <p className="text-2xl mb-3">🌿</p>
        <p className="text-sm font-semibold text-ink mb-1">Tècnica dels 5 sentits</p>
        <p className="text-xs text-ink-muted mb-4 max-w-xs mx-auto">
          Un exercici guiat d&apos;ancoratge al present. Segueix els passos al teu ritme.
        </p>
        <button
          onClick={start}
          className="px-5 py-2 bg-ink text-canvas text-sm font-medium rounded-lg hover:bg-accent transition-colors"
        >
          Iniciar exercici
        </button>
      </div>
    );
  }

  if (stage === "done") {
    return (
      <div className="mt-4 p-6 border border-border rounded-xl text-center bg-canvas">
        <p className="text-2xl mb-3">✅</p>
        <p className="text-sm font-semibold text-post mb-1">Molt bé! Exercici completat.</p>
        <p className="text-xs text-ink-muted mb-4">
          Has ancorat l&apos;atenció al present. Fes unes respiracions profundes per tancar.
        </p>
        <button
          onClick={reset}
          className="px-4 py-1.5 border border-border text-sm text-ink-muted rounded-lg hover:bg-surface transition-colors"
        >
          Tornar a fer
        </button>
      </div>
    );
  }

  const current = STEPS[step];

  return (
    <div className="mt-4 border border-border rounded-xl overflow-hidden">
      {/* Progress bar */}
      <div className="flex">
        {STEPS.map((s, i) => (
          <div
            key={i}
            className={`h-1 flex-1 transition-all duration-500 ${i <= step ? current.dot : "bg-border"}`}
          />
        ))}
      </div>

      <div className={`p-6 ${current.color} border-b border-inherit`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{current.emoji}</span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
              Pas {step + 1} de {STEPS.length}
            </p>
            <p className="text-lg font-semibold text-ink">
              {current.count} {current.sense === "Vista" ? "cosa que veus" : current.sense === "Tacte" ? "coses que toques" : current.sense === "Oïda" ? "sons" : current.sense === "Olfacte" ? "olors" : "sabor"}
            </p>
          </div>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed">{current.prompt}</p>
      </div>

      <div className="p-5 bg-canvas text-center">
        <p className="text-xs text-ink-muted mb-4">Pren el temps que necessites.</p>
        <button
          onClick={next}
          className="px-5 py-2 bg-ink text-canvas text-sm font-medium rounded-lg hover:bg-accent transition-colors"
        >
          {step < STEPS.length - 1 ? "Següent sentit →" : "Finalitzar ✓"}
        </button>
      </div>
    </div>
  );
}
