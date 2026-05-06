"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-10 flex min-h-screen items-center bg-navy px-6 md:px-16"
    >
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
              color: "rgba(245,237,216,0.75)",
            }}
          >
            <span style={{ color: "#A8D8EA", fontWeight: 500, fontSize:"20px" }}>Frontend engineer</span>
            <br />
            <span style={{ color: "#FBE290" }}>5+ years</span> building
            production interfaces. I go deep on accessibility and I care about
            the details that most people skip.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="font-jakarta rounded-full bg-lemon px-7 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-80"
            >
              get in touch
            </a>
            <a
              href="#about"
              className="font-jakarta rounded-full border border-powder px-7 py-3 text-sm text-powder transition-colors hover:bg-powder/10"
            >
              see my work
            </a>
          </div>
        </div>

        {/* ── Right: Memoji ── */}
        <div className="flex shrink-0 justify-center lg:justify-end">
          <motion.div
            animate={{ y: [0, -10, -6, 0], x: [0, 8, -8, 0], rotate: [-1.5, 1.5, -1, -1.5] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/bitemoji.png"
              alt="Inês"
              width={280}
              height={280}
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Wave bottom edge — navy dips into cream About section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full w-full"
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-full"
        >
          <path
            d="M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z"
            fill="#0d1b2a"
          />
        </svg>
      </div>
    </section>
  );
}
