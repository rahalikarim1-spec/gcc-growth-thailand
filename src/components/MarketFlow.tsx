import type { Dictionary } from "@/content/types";

type NodeId = keyof Dictionary["home"]["visual"]["nodes"];

/**
 * Schematic: real lat/lon of the five GCC capitals are projected (equirectangular, 24px/deg) into the top cluster,
 * then routed down through a "GCC growth layer" hub to two Southeast Asian destinations (Thailand, Malaysia) under a
 * "Southeast Asia" bracket. The Southeast Asia leg is schematic (axis break), not to scale.
 * Vertical layout keeps SVG text legible at phone width.
 */
const ORIGIN = { lon: 46, lat: 30 };
const SCALE = 24;
const gulf: { id: NodeId; lat: number; lon: number; lx: number; anchor: "start" | "middle" | "end" }[] = [
  { id: "kuwait", lat: 29.38, lon: 47.99, lx: 0, anchor: "middle" },
  { id: "saudi-arabia", lat: 24.71, lon: 46.68, lx: -34, anchor: "start" },
  { id: "qatar", lat: 25.29, lon: 51.53, lx: 0, anchor: "middle" },
  { id: "uae", lat: 25.2, lon: 55.27, lx: 0, anchor: "middle" },
  { id: "oman", lat: 23.59, lon: 58.54, lx: 14, anchor: "end" },
];
const pos = (lat: number, lon: number) => ({ x: (lon - ORIGIN.lon) * SCALE + 36, y: (ORIGIN.lat - lat) * SCALE + 62 });
const fmt = (lat: number, lon: number) => `${lat.toFixed(1)}°N ${lon.toFixed(1)}°E`;

const HUB = { x: 190, y: 296 };
// Schematic destinations. Coordinates shown are the capitals (Bangkok, Kuala Lumpur), indicative only.
const SEA = [
  { id: "thailand" as const, x: 112, y: 392, lat: 13.75, lon: 100.5, ly: 420 },
  { id: "malaysia" as const, x: 268, y: 410, lat: 3.14, lon: 101.69, ly: 438 },
];

export function MarketFlow({ v }: { v: Dictionary["home"]["visual"] }) {
  return (
    <figure className="ml-auto w-full max-w-[26rem] rounded-2xl border border-white/10 bg-ink-950/55 p-3 backdrop-blur-[3px] sm:p-4 lg:max-w-[18rem]" aria-label={v.label}>
      <svg viewBox="0 0 380 500" role="img" aria-label={v.label} className="mx-auto h-auto w-full" fill="none">
        <defs>
          <linearGradient id="mf-line" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#e4bb6a" />
            <stop offset="1" stopColor="#5ad6c3" />
          </linearGradient>
        </defs>
        <g stroke="rgb(255 255 255 / .07)" strokeWidth="1">
          {Array.from({ length: 7 }, (_, i) => <line key={`v${i}`} x1={i * 60 + 10} y1="0" x2={i * 60 + 10} y2="500" />)}
          {Array.from({ length: 9 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 60 + 20} x2="380" y2={i * 60 + 20} />)}
        </g>

        {gulf.map((n) => {
          const p = pos(n.lat, n.lon);
          const d = `M${p.x} ${p.y} C ${p.x} ${p.y + 90}, ${HUB.x} ${HUB.y - 110}, ${HUB.x} ${HUB.y - 26}`;
          return (
            <g key={n.id}>
              <path d={d} stroke="rgb(255 255 255 / .12)" strokeWidth="1.25" />
              <path className="flow-line" d={d} stroke="url(#mf-line)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          );
        })}
        {SEA.map((d) => {
          const path = `M${HUB.x} ${HUB.y + 26} C ${HUB.x} ${HUB.y + 70}, ${d.x} ${d.y - 70}, ${d.x} ${d.y - 10}`;
          return (
            <g key={d.id}>
              <path d={path} stroke="rgb(255 255 255 / .18)" strokeWidth="2" />
              <path className="flow-line" d={path} stroke="#5ad6c3" strokeWidth="2.25" strokeLinecap="round" />
            </g>
          );
        })}

        {gulf.map((n, i) => {
          const p = pos(n.lat, n.lon);
          return (
            <g key={n.id}>
              <circle className="pulse-ring" cx={p.x} cy={p.y} r="5" fill="#e4bb6a" style={{ animationDelay: `${i * 0.45}s` }} />
              <circle cx={p.x} cy={p.y} r="5" fill="#e4bb6a" />
              <text x={p.x + n.lx} y={p.y - 26} textAnchor={n.anchor} fontSize="14" fontWeight="600" fill="#fff">{v.nodes[n.id]}</text>
              <text x={p.x + n.lx} y={p.y - 13} textAnchor={n.anchor} fontSize="10" fill="#a8b3c5" fontFamily="ui-monospace, monospace">{fmt(n.lat, n.lon)}</text>
            </g>
          );
        })}

        <circle cx={HUB.x} cy={HUB.y} r="26" fill="#0b1222" stroke="#5ad6c3" strokeWidth="1.5" />
        <circle cx={HUB.x} cy={HUB.y} r="9" fill="#5ad6c3" />
        <text x={HUB.x - 38} y={HUB.y + 5} textAnchor="end" fontSize="13" fontWeight="600" fill="#5ad6c3">{v.hub}</text>

        {SEA.map((d, i) => (
          <g key={d.id}>
            <circle className="pulse-ring" cx={d.x} cy={d.y} r="8" fill="#5ad6c3" style={{ animationDelay: `${i * 0.6}s` }} />
            <circle cx={d.x} cy={d.y} r="8" fill="#5ad6c3" stroke="#fff" strokeWidth="2" />
            <text x={d.x} y={d.ly} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{v.destinations[d.id]}</text>
            <text x={d.x} y={d.ly + 13} textAnchor="middle" fontSize="10" fill="#a8b3c5" fontFamily="ui-monospace, monospace">{fmt(d.lat, d.lon)}</text>
          </g>
        ))}

        {/* Southeast Asia bracket */}
        <path d="M60 462 V470 H320 V462" stroke="rgb(255 255 255 / .3)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <text x="190" y="488" textAnchor="middle" fontSize="11" fill="#cbd5e1" fontFamily="ui-monospace, monospace" letterSpacing={/[\u0E00-\u0E7F]/.test(v.region) ? 0 : 1.5}>{v.region.toUpperCase()}</text>
      </svg>

      <ol className="mt-1 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-2">
        {v.steps.map((s, i) => (
          <li key={s} className="bg-ink-950/80 px-2.5 py-2 text-xs text-slate-200">
            <span className="block font-mono text-[0.7rem] text-signal-bright">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
      </ol>
      <figcaption className="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-1 text-[0.7rem] text-slate-400">
        <span>{v.caption}</span>
        <span className="font-mono">{v.coordsNote}</span>
      </figcaption>
    </figure>
  );
}
