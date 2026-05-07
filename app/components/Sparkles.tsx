"use client";

import { motion } from "framer-motion";

const SPARKLES: {
  id: number;
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}[] = [
  { id: 1,  top: "6%",  left: "3%",   size: 12, color: "#FBE290", duration: 3.2, delay: 0.0 },
  { id: 2,  top: "3%",  left: "43%",  size: 8,  color: "#A8D8EA", duration: 2.5, delay: 0.9 },
  { id: 3,  top: "8%",  right: "5%",  size: 20, color: "#F5EDD8", duration: 3.8, delay: 0.3 },
  { id: 4,  top: "18%", right: "12%", size: 12, color: "#FBE290", duration: 2.8, delay: 1.4 },
  { id: 5,  top: "32%", right: "3%",  size: 16, color: "#A8D8EA", duration: 3.5, delay: 0.6 },
  { id: 6,  top: "50%", right: "7%",  size: 8,  color: "#F5EDD8", duration: 2.3, delay: 1.9 },
  { id: 7,  top: "65%", right: "19%", size: 12, color: "#FBE290", duration: 3.1, delay: 0.8 },
  { id: 8,  top: "72%", left: "4%",   size: 8,  color: "#A8D8EA", duration: 2.7, delay: 1.5 },
  { id: 9,  top: "80%", left: "13%",  size: 16, color: "#F5EDD8", duration: 3.6, delay: 0.2 },
  { id: 10, top: "22%", left: "59%",  size: 8,  color: "#FBE290", duration: 2.4, delay: 1.7 },
  { id: 11, top: "86%", right: "29%", size: 12, color: "#A8D8EA", duration: 3.0, delay: 0.4 },
];

export default function Sparkles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {SPARKLES.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.7, 1.15, 1.1, 0.7],
            rotate: [-8, 8, -4, -8],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width={s.size}
            height={s.size}
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
