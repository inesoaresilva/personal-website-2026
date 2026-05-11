"use client";

import Image from "next/image";
import { FadeUp } from "./FadeUp";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-cream w-full"
    >
      <h2 id="about-heading" className="sr-only">About</h2>

      <div className="mx-auto max-w-6xl">
        <FadeUp delay={0}>
          <p
            aria-hidden="true"
            className="px-6 pt-24 pb-16 md:px-16"
          >
            <span className="inline-block rounded-full bg-navy/10 px-3 py-1 font-fraunces text-[12px] font-semibold uppercase tracking-[0.28em] text-navy/85">
              About
            </span>
          </p>
        </FadeUp>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-0">

          {/* ── Left: photo ── */}
          <div className="mx-auto shrink-0 lg:mx-0 flex items-start justify-center lg:justify-start lg:pr-24">
            <FadeUp delay={0.05}>
              <Image
                src="/ines-aboutme.png"
                alt="Inês Silva"
                width={400}
                height={520}
                style={{ objectFit: "contain", objectPosition: "top center" }}
                priority
              />
            </FadeUp>
          </div>

          {/* ── Right: text ── */}
          <div className="flex-1 px-6 pb-16 md:px-16 lg:pl-0 lg:pt-2 lg:pb-24">
            <FadeUp delay={0.1}>
              <p className="mb-8 font-fraunces text-2xl font-light italic leading-snug text-navy md:text-3xl">
                More than delivering software, I care about{" "}
                <span className="font-bold text-[#5C7A6B]">what software does for people</span>.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="space-y-4 font-jakarta text-[15px] leading-[1.75] text-[#2a3a4a]">
                <p>
                  I&apos;m a frontend engineer who came to code through curiosity.
                </p>
                <p>
                  I have a bachelor&apos;s in Computer Engineering and a master&apos;s in
                  Biomedical Engineering - my dissertation was on software applied to
                  health systems. I chose that path because I wanted to understand how
                  systems connect to people, not just how they run.
                </p>
                <p>
                  That instinct shows up in how I work. Wherever I&apos;ve joined a team,
                  I&apos;ve started by getting to know the people in it. Then I look for the
                  gaps nobody owns yet - unclear onboarding, missing documentation, the
                  questions that keep coming up in Slack, and do something about them.
                </p>
                <p className="mt-2 border-l-2 border-[#5C7A6B] pl-4 italic">
                  Nobody asks. It just needs doing.
                </p>
                <p>
                  I&apos;ve spent the last five years building interfaces at remote-first
                  companies - React, Next.js, Svelte, TypeScript.
                </p>
                <p>I use AI to move fast. The interesting work is still in the details it misses.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <a
                href="#contact"
                aria-label="Get in touch"
                className="mt-10 inline-block font-jakarta text-sm text-navy/75 underline underline-offset-4 transition-colors hover:text-navy"
              >
                get in touch →
              </a>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Wave bottom edge — cream dips into navy Work section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full z-10 w-full"
        style={{ transform: "translateY(-1px)" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-full"
          style={{ display: 'block' }}
          shapeRendering="geometricPrecision"
        >
          <path
            d="M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z"
            fill="#F5EDD8"
            stroke="none"
          />
        </svg>
      </div>
    </section>
  );
}
