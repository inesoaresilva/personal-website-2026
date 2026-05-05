"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cream w-full px-6 py-24 md:px-16"
    >
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
              width={300}
              height={420}
              style={{ objectFit: "contain", objectPosition: "top center" }}
              priority
            />
          </div>

          {/* ── Right: text ── */}
          <div className="flex-1 lg:pt-2">
            <h2 id="about-heading" className="mb-8 font-fraunces text-4xl font-bold leading-tight text-navy md:text-5xl">
              Not your typical developer.
            </h2>
            <div className="space-y-5 font-jakarta text-base leading-relaxed text-navy/75">
              <p>
              I studied Computer Engineering, then did a master's in Biomedical Engineering.
              My dissertation was on software applied to health systems. 
              I choose this path because I was always more interested in what software does for people than in the software itself.
              </p>
              <p>
                On my first week working at Sky, before I had context on a single
                ticket, I scheduled one-on-ones with every teammate, found gaps in
                the onboarding process, and wrote a doc to fix them. Nobody asked.
                It just needed doing.
              </p>
              <p>
                I'm a 2020 covid graduated student which means working remotely is my first language. I've always worked in international teams across different timezones. 
                Self-management and clear communication are skills I stand-by.
              </p>
              <p>
                I've built frontend across many different tech stacks — currently working mainly in React, Next.js, Svelte, and TypeScript. 
                I also work closely with AI to move fast and iterate.
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
    </section>
  );
}
