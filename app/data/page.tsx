import type { Metadata } from "next";
import { getSurveyStats } from "~/shared/lib/parse-survey";
import {
  HorizontalBarChart,
  VerticalBarChart,
  DonutChart,
  GroupedBarChart,
  type GroupedChartItem,
} from "~/features/data/survey-charts";

export const metadata: Metadata = {
  title: "Dades de l'enquesta",
  description:
    "Resultats de l'enquesta realitzada a 47 familiars de persones amb càncer.",
};

interface StatCardProps {
  value: string;
  label: string;
  sub?: string;
}
function StatCard({ value, label, sub }: StatCardProps) {
  return (
    <div className="bg-canvas border border-border rounded-xl p-6">
      <p className="text-3xl font-semibold text-ink leading-none mb-1">
        {value}
      </p>
      <p className="text-sm text-ink-muted leading-relaxed">{label}</p>
      {sub && <p className="text-xs text-ink-muted mt-1 italic">{sub}</p>}
    </div>
  );
}

interface ChartCardProps {
  figure: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}
function ChartCard({ figure, title, description, children }: ChartCardProps) {
  return (
    <div className="bg-canvas border border-border rounded-xl p-6">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-0.5">
        Figura {figure}
      </p>
      <h3 className="text-base font-semibold text-ink mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-ink-muted mb-5 leading-relaxed">
          {description}
        </p>
      )}
      {!description && <div className="mb-5" />}
      {children}
    </div>
  );
}

const phaseComparison: GroupedChartItem[] = [
  { category: "No van rebre orientació emocional", tractament: 62.5, postTractament: 52, faseAvancada: 70 },
  { category: "Van necessitar ajuda professional", tractament: 75, postTractament: 65, faseAvancada: 85 },
  { category: "Por i incertesa com a prioritat", tractament: 87.5, postTractament: 73.9, faseAvancada: 90 },
  { category: "Recursos poc accessibles", tractament: 58, postTractament: 50, faseAvancada: 72 },
];

export default function DataPage() {
  const stats = getSurveyStats();

  const helpNeeded = stats.neededHelp.find((d) => d.name === "Sí")?.value ?? 0;
  const accessibleYes =
    stats.resourcesAccessible.find((d) => d.name === "Sí")?.value ?? 0;
  const accessibleNo =
    stats.resourcesAccessible.find((d) => d.name === "No")?.value ?? 0;

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
            Recerca empírica
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-3">
            Dades de l&apos;enquesta
          </h1>
          <p className="text-ink-muted leading-relaxed max-w-2xl">
            Resultats de l&apos;enquesta realitzada a {stats.total} familiars i
            persones pròximes a pacients amb càncer. Aquestes dades fonamenten
            el contingut d&apos;aquesta guia.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Key stats */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Xifres clau
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              value={`${stats.total}`}
              label="participants a l'estudi"
            />
            <StatCard
              value={`${Math.round((helpNeeded / stats.total) * 100)}%`}
              label="van necessitar ajuda professional"
            />
            <StatCard
              value={`${Math.round((accessibleNo / (accessibleYes + accessibleNo)) * 100)}%`}
              label="no van trobar recursos accessibles"
              sub="dels que en van necessitar"
            />
            <StatCard
              value="100%"
              label="consideren que una guia seria molt útil"
            />
          </div>
        </section>

        {/* Charts grid */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Distribució per fase oncològica
          </p>
          <ChartCard
            figure={1}
            title="On es troben els participants en el procés oncològic"
            description="La majoria dels participants ja han superat el tractament actiu, cosa que els permet reflexionar sobre l'experiència viscuda."
          >
            <HorizontalBarChart data={stats.phaseDistribution} />
          </ChartCard>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard
            figure={2}
            title="Orientació emocional en el moment del diagnòstic"
            description="Qui va proporcionar orientació al rebre el diagnòstic."
          >
            <DonutChart data={stats.receivedOrientation} />
          </ChartCard>

          <ChartCard
            figure={3}
            title="Valoració del suport emocional rebut"
            description="Puntuació de l'1 al 5 sobre el suport emocional rebut durant el procés."
          >
            <VerticalBarChart data={stats.supportRating} />
          </ChartCard>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard
            figure={4}
            title="Necessitat d'ajuda professional"
            description="Han sentit la necessitat de rebre ajuda d'un psicòleg o grup de suport."
          >
            <VerticalBarChart data={stats.neededHelp} />
          </ChartCard>

          <ChartCard
            figure={5}
            title="Accessibilitat dels recursos"
            description="Dels que van necessitar ajuda, si els recursos eren fàcilment accessibles."
          >
            <VerticalBarChart data={stats.resourcesAccessible} />
          </ChartCard>
        </section>

        {/* Phase comparison */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Comparativa per fase oncològica
          </p>
          <ChartCard
            figure={6}
            title="Necessitats emocionals per fase"
            description="Les necessitats dels familiars varien significativament segons el moment del procés oncològic. La fase avançada concentra les majors necessitats no cobertes."
          >
            <GroupedBarChart data={phaseComparison} />
          </ChartCard>
        </section>

        {/* Topics */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-6">
            Continguts més sol·licitats per a la guia
          </p>
          <ChartCard
            figure={7}
            title="Temes que els participants volen a la guia"
            description="Cada participant podia seleccionar entre 3 i 5 temes. Resultat: la gestió emocional és la necessitat més universal."
          >
            <HorizontalBarChart data={stats.topicsRequested} />
          </ChartCard>
        </section>
      </div>
    </div>
  );
}
