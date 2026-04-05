import React from "react";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import {
  MODELO_RELAUNCH_METRICS_ACCENT,
  modeloRelaunchMetricsCells,
} from "../content/js/modeloRelaunchMetricsData";

function MetricDescription({ parts }) {
  return (
    <p className="mt-3 text-center text-sm leading-snug text-ink dark:text-neutral-200 md:text-base">
      {parts.map((part, i) =>
        part.accent ? (
          <span
            key={i}
            style={{ color: MODELO_RELAUNCH_METRICS_ACCENT }}
            className="font-medium"
          >
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  );
}

function MetricCell({ cell }) {
  if (cell.kind === "blurb") {
    const Icon =
      cell.sentiment === "positive" ? FaRegThumbsUp : FaRegThumbsDown;
    const iconClass =
      cell.sentiment === "positive"
        ? "text-green-600 dark:text-green-400"
        : "text-red-800 dark:text-red-400";

    return (
      <div className="flex h-full min-h-[160px] flex-col items-center justify-center gap-4 rounded-xl border border-ink/10 bg-white/70 p-5 text-center shadow-sm dark:border-white/10 dark:bg-black/30">
        <Icon className={`h-12 w-12 shrink-0 ${iconClass}`} aria-hidden />
        <p className="text-sm font-medium leading-snug text-ink dark:text-neutral-100 md:text-base">
          {cell.text}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[160px] flex-col items-center justify-center rounded-xl border border-ink/10 bg-white/70 p-5 text-center shadow-sm dark:border-white/10 dark:bg-black/30">
      <p className="text-4xl font-bold tracking-tight text-ink dark:text-neutral-100 md:text-5xl">
        {cell.value}
      </p>
      <MetricDescription parts={cell.parts} />
    </div>
  );
}

export default function ModeloRelaunchMetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
      {modeloRelaunchMetricsCells.map((cell, index) => (
        <MetricCell key={index} cell={cell} />
      ))}
    </div>
  );
}
