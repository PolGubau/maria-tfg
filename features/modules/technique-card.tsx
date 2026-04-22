"use client";

import { useState } from "react";
import type { Technique } from "@/entities/module/types";

interface Props {
  technique: Technique;
  isBreathing?: boolean;
}

function BreathingTimer() {
  const [phase, setPhase] = useState<"idle" | "in" | "hold" | "out">("idle");
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);

  function start() {
    setPhase("in");
    setCount(4);
    setRounds(0);
    runCycle(0);
  }

  function runCycle(round: number) {
    if (round >= 5) {
      setPhase("idle");
      setRounds(5);
      return;
    }
    setPhase("in");
    let c = 4;
    setCount(c);
    const inInterval = setInterval(() => {
      c--;
      setCount(c);
      if (c <= 0) {
        clearInterval(inInterval);
        setPhase("hold");
        let h = 4;
        setCount(h);
        const holdInterval = setInterval(() => {
          h--;
          setCount(h);
          if (h <= 0) {
            clearInterval(holdInterval);
            setPhase("out");
            let o = 6;
            setCount(o);
            const outInterval = setInterval(() => {
              o--;
              setCount(o);
              if (o <= 0) {
                clearInterval(outInterval);
                setRounds(round + 1);
                runCycle(round + 1);
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }

  const phaseLabel: Record<string, string> = {
    idle: "Prepara't",
    in: "Inspira",
    hold: "Reté",
    out: "Expira",
  };
  const phaseColor: Record<string, string> = {
    idle: "bg-surface",
    in: "bg-post-bg",
    hold: "bg-accent-light",
    out: "bg-treatment-bg",
  };

  return (
    <div className="mt-4 p-5 border border-border rounded-xl text-center">
      <div className={`w-28 h-28 rounded-full mx-auto flex items-center justify-center mb-4 transition-all duration-700 ${phaseColor[phase]}`}>
        <div className="text-center">
          <p className="text-2xl font-semibold text-ink">{phase !== "idle" ? count : "·"}</p>
          <p className="text-xs text-ink-muted">{phaseLabel[phase]}</p>
        </div>
      </div>
      {phase === "idle" && (
        <button
          onClick={start}
          className="px-4 py-2 bg-ink text-canvas text-sm font-medium rounded-lg hover:bg-accent transition-colors"
        >
          {rounds === 5 ? "Tornar a començar" : "Iniciar exercici"}
        </button>
      )}
      {phase !== "idle" && (
        <p className="text-xs text-ink-muted">Ronda {rounds + 1} de 5</p>
      )}
      {rounds === 5 && phase === "idle" && (
        <p className="text-sm text-post font-medium mt-2">✓ Excel·lent! Has completat 5 rondes.</p>
      )}
    </div>
  );
}

export function TechniqueCard({ technique, isBreathing }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors"
      >
        <div>
          <p className="font-semibold text-ink">{technique.title}</p>
          <p className="text-sm text-ink-muted mt-0.5">{technique.description}</p>
        </div>
        <span className="ml-4 shrink-0 text-ink-muted text-lg transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "none" }}>
          ↓
        </span>
      </button>

      {open && (
        <div className="border-t border-border p-5 bg-canvas space-y-5">
          {technique.benefits && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Beneficis</p>
              <ul className="space-y-1.5">
                {technique.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {technique.steps && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">Com practicar-ho</p>
              <ol className="space-y-2">
                {technique.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-surface text-ink text-xs flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {isBreathing && <BreathingTimer />}
        </div>
      )}
    </div>
  );
}
