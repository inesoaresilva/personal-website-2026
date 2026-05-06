"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-cream w-full px-6 py-24 md:px-16"
    >
      {/* Visually hidden heading for screen readers */}
      <h2 id="about-heading" className="sr-only">About</h2>

      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <p aria-hidden="true" className="mb-16 font-fraunces text-[11px] uppercase tracking-[0.25em] text-navy/20">
          About
        </p>

        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-0">
          {/* ── Left: photo ── */}
          <div className="mx-auto shrink-0 lg:mx-0 lg:pr-24">
            <Image
              src="/ines-aboutme.png"
              alt="Inês Silva"
              width={400}
              height={520}
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>

          {/* ── Right: text ── */}
          <div className="flex-1 lg:pt-2">
            <p className="mb-8 font-fraunces text-2xl font-light italic leading-snug text-navy md:text-3xl">
              More than delivering software, I care about{" "}
              <span className="font-bold text-[#5C7A6B]">what software does for people</span>.
            </p>

            <div className="space-y-4 font-jakarta text-[15px] leading-[1.75] text-[#2a3a4a]">
              <p>
                I&apos;m a frontend engineer who came to code through curiosity.
              </p>
              <p>
                I have a bachelor&apos;s in Computer Engineering and a master&apos;s in
                Biomedical Engineering — my dissertation was on software applied to
                health systems. I chose that path because I wanted to understand how
                systems connect to people, not just how they run.
              </p>
              <p>
                That instinct shows up in how I work. Wherever I&apos;ve joined a team,
                I&apos;ve started by getting to know the people in it. Then I look for the
                gaps nobody owns yet — unclear onboarding, missing documentation, the
                questions that keep coming up in Slack — and do something about them.
              </p>
              <p className="mt-2 border-l-2 border-[#5C7A6B] pl-4 italic">
                Nobody asks. It just needs doing.
              </p>
              <p>
                I&apos;ve spent the last 5+ years building interfaces at remote-first
                companies — React, Next.js, Svelte, TypeScript. I use AI to move fast
                and iterate. I&apos;ve stopped pretending otherwise.
              </p>
            </div>

            <a
              href="#contact"
              aria-label="Get in touch"
              className="mt-10 inline-block font-jakarta text-sm text-navy/75 underline underline-offset-4 transition-colors hover:text-navy"
            >
              get in touch →
            </a>
          </div>
        </div>
      </div>

      {/* Wave bottom edge — cream dips into navy Work section */}
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
            fill="#F5EDD8"
          />
        </svg>
      </div>
    </section>
  );
}
