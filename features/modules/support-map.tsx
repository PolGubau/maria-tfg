"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";

const RINGS = [
  {
    id: "close",
    label: "Família / parella",
    description: "Persones molt properes",
    color: "bg-accent/15 border-accent/30 text-accent",
    chip: "bg-accent text-white",
  },
  {
    id: "mid",
    label: "Amics / companys",
    description: "Xarxa de suport propera",
    color: "bg-post-bg border-post/30 text-post",
    chip: "bg-post text-white",
  },
  {
    id: "outer",
    label: "Professionals / recursos",
    description: "Suport especialitzat",
    color: "bg-surface border-border text-ink-muted",
    chip: "bg-ink text-canvas",
  },
];

const KEY = "csp-support-map";

type MapState = Record<string, string[]>;

export function SupportMapBuilder() {
  const [map, setMap] = useState<MapState>({ close: [], mid: [], outer: [] });
  const [inputs, setInputs] = useState<Record<string, string>>({ close: "", mid: "", outer: "" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setMap(JSON.parse(stored));
    } catch {}
    setHydrated(true);
  }, []);

  function save(next: MapState) {
    setMap(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  }

  function add(ring: string) {
    const val = inputs[ring].trim();
    if (!val) return;
    const next = { ...map, [ring]: [...(map[ring] ?? []), val] };
    save(next);
    setInputs((p) => ({ ...p, [ring]: "" }));
  }

  function remove(ring: string, idx: number) {
    const next = { ...map, [ring]: map[ring].filter((_, i) => i !== idx) };
    save(next);
  }

  if (!hydrated) return null;

  return (
    <div className="mt-4 border border-border rounded-xl overflow-hidden">
      <div className="p-5 bg-surface border-b border-border">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <div>
            <p className="text-sm font-semibold text-ink">El teu mapa de suport</p>
            <p className="text-xs text-ink-muted">Afegeix les persones que t&apos;acompanyen</p>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4 bg-canvas">
        {/* Center */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shadow-sm">
            Jo
          </div>
        </div>

        {RINGS.map((ring) => (
          <div key={ring.id} className={`rounded-xl border p-4 ${ring.color}`}>
            <p className="text-xs font-bold uppercase tracking-widest mb-0.5">{ring.label}</p>
            <p className="text-xs opacity-70 mb-3">{ring.description}</p>

            {/* Chips */}
            {map[ring.id]?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {map[ring.id].map((name, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${ring.chip}`}
                  >
                    {name}
                    <button
                      onClick={() => remove(ring.id, i)}
                      className="hover:opacity-70 transition-opacity"
                      aria-label={`Eliminar ${name}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputs[ring.id]}
                onChange={(e) => setInputs((p) => ({ ...p, [ring.id]: e.target.value }))}
                onKeyDown={(e) => e.key === "Enter" && add(ring.id)}
                placeholder="Afegir persona..."
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-border bg-canvas text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                onClick={() => add(ring.id)}
                disabled={!inputs[ring.id].trim()}
                className="p-1.5 rounded-lg bg-ink text-canvas hover:bg-accent transition-colors disabled:opacity-30"
                aria-label="Afegir"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        <p className="text-[10px] text-ink-muted text-center pt-1">
          Guardat automàticament al teu dispositiu
        </p>
      </div>
    </div>
  );
}
