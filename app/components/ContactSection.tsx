import { FadeUp } from "./FadeUp";

const WAVE_PATH =
  "M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full bg-navy px-6 py-24 md:px-16"
    >
      {/* Top wave — cream dips into contact section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 w-full"
        style={{ transform: "translateY(1px)" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-full"
          style={{ display: 'block' }}
          shapeRendering="geometricPrecision"
        >
          <path d={WAVE_PATH} fill="#F5EDD8" stroke="none" />
        </svg>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <FadeUp delay={0}>
          <h2
            id="contact-heading"
            className="mb-6 leading-tight"
          >
            <span className="font-fraunces text-[42px] font-light italic text-[#FBE290]">
              let&apos;s{" "}
            </span>
            <span className="font-jakarta text-[42px] font-bold text-[#FBE290]">
              talk.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="mb-10 max-w-[500px] font-jakarta text-[16px] leading-[1.75]"
            style={{ color: "rgba(245,237,216,0.7)" }}
          >
            If you&apos;re building something product-led and you care about
            quality, I&apos;d like to hear from you.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:inesoaresilva@gmail.com"
              className="font-jakarta rounded-full bg-[#FBE290] px-6 py-3 text-sm font-semibold text-[#0D1B2A] transition-opacity hover:opacity-80"
            >
              inesoaresilva@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/inesoaresilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta rounded-full border border-[#A8D8EA] px-6 py-3 text-sm font-semibold text-[#A8D8EA] transition-opacity hover:opacity-80"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/inesoaresilva"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta rounded-full border border-[#A8D8EA] px-6 py-3 text-sm font-semibold text-[#A8D8EA] transition-opacity hover:opacity-80"
            >
              GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
