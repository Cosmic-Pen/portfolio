"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const nodes = [
  { id: "ccna",    label: "CCNA",    x: 15,  y: 72 },
  { id: "django",  label: "Django",  x: 38,  y: 20 },
  { id: "esp32",   label: "ESP32",   x: 72,  y: 20 },
  { id: "python",  label: "Python",  x: 88,  y: 72 },
] as const;

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 3],
];

// Traveling packet along each edge
function Packet({ from, to, delay }: { from: typeof nodes[number]; to: typeof nodes[number]; delay: number }) {
  return (
    <motion.circle
      r="1.2"
      fill="#38BDF8"
      initial={{ opacity: 0 }}
      animate={{
        cx: [from.x, to.x],
        cy: [from.y, to.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.6,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    />
  );
}

export function SignalMap() {
  return (
    <div className="relative hidden w-full max-w-xs lg:block" aria-hidden>
      <svg viewBox="0 0 100 90" className="h-auto w-full">
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--border)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          />
        ))}

        {/* Traveling packets */}
        {edges.map(([a, b], i) => (
          <Packet
            key={`pkt-${i}`}
            from={nodes[a]}
            to={nodes[b]}
            delay={i * 0.8 + 0.5}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Pulse ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="0.4"
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 2.2 }}
              transition={{
                delay: i * 0.4 + 1,
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            {/* Node dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="var(--bg-elevated)"
              stroke="#38BDF8"
              strokeWidth="0.8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 200 }}
            />
            {/* Label */}
            <motion.text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              fontSize="5"
              fill="var(--text-muted)"
              fontFamily="monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.12 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}