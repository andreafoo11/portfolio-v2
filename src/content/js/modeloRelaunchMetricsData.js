/**
 * Modelo 2.0 relaunch — metrics grid copy & structure.
 * Edit strings here; accent phrases use accent: true for #F75223 styling in the UI.
 */
export const MODELO_RELAUNCH_METRICS_ACCENT = "#F75223";

/** @typedef {{ text: string, accent?: boolean }} MetricTextPart */
/** @typedef {{ kind: 'blurb', sentiment: 'positive' | 'negative', text: string }} BlurbCell */
/** @typedef {{ kind: 'stat', value: string, parts: MetricTextPart[] }} StatCell */

/** @type {(BlurbCell | StatCell)[]} — 6 cells in row-major order (2×3 grid) */
export const modeloRelaunchMetricsCells = [
  {
    kind: "blurb",
    sentiment: "positive",
    text:
      "The marketing videos and landing page yielded positive results overall.",
  },
  {
    kind: "stat",
    value: "200%",
    parts: [
      { text: "increase in ", accent: false },
      { text: "3D slide", accent: true },
      { text: " usage observed 1.5 months post-launch.", accent: false },
    ],
  },
  {
    kind: "stat",
    value: "44%",
    parts: [
      { text: "conversion rate to ", accent: false },
      { text: "signups in the landing page", accent: true },
    ],
  },
  {
    kind: "blurb",
    sentiment: "negative",
    text:
      "Efforts to re-engage old users through email announcements yielded a low success rate.",
  },
  {
    kind: "stat",
    value: "0.5%",
    parts: [
      { text: "marketing email recipients ", accent: false },
      { text: "entered the landing page", accent: true },
    ],
  },
  {
    kind: "stat",
    value: "8%",
    parts: [
      { text: "of the ", accent: false },
      { text: "old users", accent: true },
      { text: " who visited the landing page actually ", accent: false },
      { text: "returned to the workspace", accent: true },
    ],
  },
];
