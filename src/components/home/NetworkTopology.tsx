"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const nodes = [
  { id: "field", labelEn: "Field", labelFr: "Terrain", x: 12, y: 50 },
  { id: "network", labelEn: "Network", labelFr: "Réseau", x: 35, y: 22 },
  { id: "edge", labelEn: "Edge", labelFr: "Edge", x: 65, y: 22 },
  { id: "ai", labelEn: "AI", labelFr: "IA", x: 88, y: 50 },
] as const;

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 3],
];

export function NetworkTopology() {
  const t = useTranslations("hero");

  return (
    <div className="relative hidden h-48 w-full max-w-md lg:block" aria-hidden>
      <svg viewBox="0 0 100 60" className="h-full w-full">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y * 0.6}
            x2={nodes[b].x}
            y2={nodes[b].y * 0.6}
            stroke="var(--border)"
            strokeWidth="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
          />
        ))}
        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y * 0.6}
              r="3"
              fill="var(--bg-elevated)"
              stroke="var(--accent-cyan)"
              strokeWidth="0.8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.3 }}
            />
          </g>
        ))}
      </svg>
      <p className="absolute bottom-0 left-0 font-mono text-[10px] text-text-muted">
        {t("tagline").split(".")[0]}…
      </p>
    </div>
  );
}
