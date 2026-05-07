"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";
import Sparkles from "./Sparkles";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set(((e.clientX - cx) / (rect.width / 2)) * 12);
      mouseY.set(((e.clientY - cy) / (rect.height / 2)) * 12);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        id="hero"
        aria-labelledby="hero-heading"
        className="relative z-10 flex min-h-screen items-center overflow-hidden bg-navy px-6 md:px-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Sparkles />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left">
            <h1 id="hero-heading" tabIndex={-1} className="font-fraunces leading-none tracking-tight outline-none">
              <span className="block text-7xl font-bold text-cream md:text-8xl xl:text-9xl">
                Curious
              </span>
              <span className="block text-7xl font-light italic text-lemon md:text-8xl xl:text-9xl">
                by nature.
              </span>
            </h1>

            <p
              className="font-fraunces mt-8 max-w-lg mx-auto lg:mx-0"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#F5EDD8",
              }}
            >
              <span style={{ color: "#A8D8EA", fontWeight: 500, fontSize: "20px" }}>Frontend engineer</span>
              <br />
              I&rsquo;ve spent 5+ years building things that work for real people — on slow connections, with screen readers, on edge cases nobody planned for.
              <br /><br />
              I explore new tools fast — including AI — and I have the depth to know when the output is wrong.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#contact"
                className="font-jakarta rounded-full bg-lemon px-7 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-80"
              >
                get in touch
              </a>
              <a
                href="#experience"
                className="font-jakarta rounded-full border border-powder px-7 py-3 text-sm text-powder transition-colors hover:bg-powder/10"
              >
                my experience
              </a>
            </div>
          </div>

          {/* ── Right: Memoji ── */}
          <div
            aria-hidden
            className="pointer-events-none flex shrink-0 justify-center lg:justify-end"
          >
            {/* outer: idle float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* inner: cursor parallax */}
              <motion.div style={{ x: springX, y: springY }}>
                <Image
                  src="/bitemoji.png"
                  alt=""
                  width={340}
                  height={340}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave bottom edge — outside section so overflow-hidden doesn't clip it */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full w-full z-10"
        style={{ marginBottom: '-1px' }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-full"
          style={{ display: 'block' }}
        >
          <path
            d="M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z"
            fill="#0d1b2a"
          />
        </svg>
      </div>
    </div>
  );
}
