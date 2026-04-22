"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import type { ChartItem } from "@/shared/lib/parse-survey";

const COLORS = {
  treatment: "#b87a4a",
  post: "#5f9e8f",
  advanced: "#7e6b99",
  accent: "#8b6f5e",
  muted: "#c4b8ae",
};

const BAR_COLORS = [
  COLORS.post,
  COLORS.treatment,
  COLORS.advanced,
  COLORS.accent,
  "#c08060",
  "#4a8a7a",
  "#6a5a85",
  "#a08070",
  "#7ab0a8",
];

interface ChartProps {
  data: ChartItem[];
}

export function HorizontalBarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={data.length * 48 + 20}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 0, right: 24, top: 4, bottom: 4 }}
      >
        <XAxis type="number" tick={{ fontSize: 12, fill: "#6b6b66" }} />
        <YAxis
          type="category"
          dataKey="name"
          width={180}
          tick={{ fontSize: 12, fill: "#1a1917", fontWeight: 500 }}
          tickLine={false}
        />
        <Tooltip
          cursor={{ fill: "#f3eee6" }}
          contentStyle={{
            border: "1px solid #e5e0d8",
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v) => [`${v} respostes`, ""]}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function VerticalBarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ left: 0, right: 0, top: 4, bottom: 8 }}>
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#1a1917" }}
          tickLine={false}
        />
        <YAxis tick={{ fontSize: 12, fill: "#6b6b66" }} tickLine={false} />
        <Tooltip
          cursor={{ fill: "#f3eee6" }}
          contentStyle={{
            border: "1px solid #e5e0d8",
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v) => [`${v} persones`, ""]}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            border: "1px solid #e5e0d8",
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v, name) => [`${v} persones`, name]}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          wrapperStyle={{ fontSize: 12, color: "#6b6b66" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
