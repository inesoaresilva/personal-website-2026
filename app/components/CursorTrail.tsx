"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  driftX: number;
  driftY: number;
};

const COLORS = ["#FBE290", "#A8D8EA", "#F5EDD8"];
let uid = 0;

export default function CursorTrail() {
  const reduced = useReducedMotion();
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastTime = useRef(0);

  const onMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTime.current < 50) return; // ~20 sparks/sec max
    lastTime.current = now;

    setSparks(prev => [
      ...prev.slice(-12),
      {
        id: uid++,
        x: e.clientX,
        y: e.clientY,
        size: 4 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        driftX: (Math.random() - 0.5) * 28,
        driftY: -(10 + Math.random() * 20),
      },
    ]);
  }, []);

  useEffect(() => {
    // Only on devices with a precise pointer (mouse/trackpad), not touch
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, onMove]);

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9998]">
      {sparks.map(s => (
        <motion.div
          key={s.id}
          style={{ position: "fixed", left: s.x, top: s.y, width: 0, height: 0 }}
          initial={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, scale: 0.15, x: s.driftX, y: s.driftY }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          onAnimationComplete={() =>
            setSparks(prev => prev.filter(p => p.id !== s.id))
          }
        >
          <svg
            viewBox="0 0 20 20"
            width={s.size}
            height={s.size}
            style={{ position: "absolute", left: -s.size / 2, top: -s.size / 2 }}
          >
            <path
              d="M10 1 L11.2 8.8 L19 10 L11.2 11.2 L10 19 L8.8 11.2 L1 10 L8.8 8.8 Z"
              fill={s.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
