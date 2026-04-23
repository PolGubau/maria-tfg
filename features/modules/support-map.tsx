"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";

const SIZE = 400;
const CX = 200;
const CY = 200;

const RINGS = [
  {
    id: "close",
    label: "Família / parella",
    description: "Persones molt properes",
    color: "bg-accent/15 border-accent/30 text-accent",
    chip: "bg-accent text-white",
    nodeFill: "#4f6ef7",   // accent
    ringFill: "rgba(79,110,247,0.10)",
    ringStroke: "rgba(79,110,247,0.30)",
    radius: 70,
  },
  {
    id: "mid",
    label: "Amics / companys",
    description: "Xarxa de suport propera",
    color: "bg-post-bg border-post/30 text-post",
    chip: "bg-post text-white",
    nodeFill: "#2a9d8f",   // post
    ringFill: "rgba(42,157,143,0.08)",
    ringStroke: "rgba(42,157,143,0.28)",
    radius: 125,
  },
  {
    id: "outer",
    label: "Professionals / recursos",
    description: "Suport especialitzat",
    color: "bg-surface border-border text-ink-muted",
    chip: "bg-ink text-canvas",
    nodeFill: "#3a3a35",   // ink
    ringFill: "rgba(58,58,53,0.05)",
    ringStroke: "rgba(58,58,53,0.18)",
    radius: 178,
  },
];

const KEY = "csp-support-map";
type MapState = Record<string, string[]>;

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0] ?? "").join("").toUpperCase().slice(0, 2) || "?";
}

function getPositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
  });
}

export function SupportMapBuilder() {
  const [map, setMap] = useState<MapState>({ close: [], mid: [], outer: [] });
  const [inputs, setInputs] = useState<Record<string, string>>({ close: "", mid: "", outer: "" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setMap(JSON.parse(stored));
    } catch { }
    setHydrated(true);
  }, []);

  function save(next: MapState) {
    setMap(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { }
  }

  function add(ring: string) {
    const val = inputs[ring].trim();
    if (!val) return;
    save({ ...map, [ring]: [...(map[ring] ?? []), val] });
    setInputs((p) => ({ ...p, [ring]: "" }));
  }

  function remove(ring: string, idx: number) {
    save({ ...map, [ring]: map[ring].filter((_, i) => i !== idx) });
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

      <div className="p-5 space-y-5 bg-canvas">
        {/* Visual SVG map */}
        <div className="flex justify-center">
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-70" aria-label="Mapa de suport">
            {/* Concentric rings (outer first) */}
            {[...RINGS].reverse().map((ring) => (
              <circle
                key={ring.id}
                cx={CX} cy={CY} r={ring.radius}
                fill={ring.ringFill}
                stroke={ring.ringStroke}
                strokeWidth={1.5}
              />
            ))}

            {/* Connector lines */}
            {RINGS.map((ring) =>
              getPositions(map[ring.id]?.length ?? 0, ring.radius).map((pos, i) => (
                <line
                  key={`${ring.id}-l${i}`}
                  x1={CX} y1={CY} x2={pos.x} y2={pos.y}
                  stroke={ring.ringStroke} strokeWidth={1} strokeDasharray="4,3"
                />
              ))
            )}

            {/* People nodes */}
            {RINGS.map((ring) =>
              getPositions(map[ring.id]?.length ?? 0, ring.radius).map((pos, i) => (
                <g key={`${ring.id}-n${i}`}>
                  <circle cx={pos.x} cy={pos.y} r={19} fill={ring.nodeFill} />
                  <text
                    x={pos.x} y={pos.y}
                    textAnchor="middle" dominantBaseline="central"
                    fontSize={9} fill="white" fontWeight="700"
                  >
                    {getInitials(map[ring.id][i]!)}
                  </text>
                </g>
              ))
            )}

            {/* Center Jo */}
            <circle cx={CX} cy={CY} r={28} fill="#4f6ef7" />
            <text x={CX} y={CY} textAnchor="middle" dominantBaseline="central" fontSize={12} fill="white" fontWeight="700">
              Jo
            </text>
          </svg>
        </div>

        {/* Ring input sections */}
        {RINGS.map((ring) => (
          <div key={ring.id} className={`rounded-xl border p-4 ${ring.color}`}>
            <p className="text-xs font-bold uppercase tracking-widest mb-0.5">{ring.label}</p>
            <p className="text-xs opacity-70 mb-3">{ring.description}</p>

            {map[ring.id]?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {map[ring.id].map((name, i) => (
                  <span key={i} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${ring.chip}`}>
                    {name}
                    <button onClick={() => remove(ring.id, i)} className="hover:opacity-70 transition-opacity" aria-label={`Eliminar ${name}`}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

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
