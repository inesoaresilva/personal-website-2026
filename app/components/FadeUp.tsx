"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const show = () => {
      const el = ref.current;
      if (!el) return;
      // Cancel WAAPI animations so the element snaps to visible
      el.getAnimations().forEach((a) => a.cancel());
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    window.addEventListener("beforeprint", show);
    return () => window.removeEventListener("beforeprint", show);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
