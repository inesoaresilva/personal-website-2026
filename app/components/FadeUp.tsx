"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    // beforeprint fires synchronously before the print document is captured,
    // so controls.set() resolves Framer Motion's MotionValues immediately.
    const show = () => controls.set({ opacity: 1, y: 0 });
    window.addEventListener("beforeprint", show);
    return () => window.removeEventListener("beforeprint", show);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={controls}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
