import { FadeUp } from "./FadeUp";

const WAVE_PATH =
  "M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full px-6 py-24 md:px-16"
      style={{ backgroundColor: "#F5EDD8" }}
    >
      {/* Top wave — sage dips into testimonials */}
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
          style={{ display: "block" }}
          shapeRendering="geometricPrecision"
        >
          <path d={WAVE_PATH} fill="#4A6858" stroke="none" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeUp delay={0}>
          <h2
            id="testimonials-heading"
            className="mb-16 font-fraunces text-[42px] leading-tight"
          >
            <span className="font-bold" style={{ color: "#0D1B2A" }}>
              What people
            </span>
            <br />
            <span className="font-normal italic" style={{ color: "#5C7A6B" }}>
              say about me.
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FadeUp delay={0.1}>
            <blockquote
              className="pl-6"
              style={{ borderLeft: "2px solid #FBE290" }}
            >
              <p className="font-jakarta text-[15px] leading-[1.8] text-[#2A3D2E]">
                &ldquo;She quickly identified gaps in our onboarding process and
                came forward with{" "}
                <span
                  className="not-italic font-bold"
                  style={{ color: "#2A5C8A" }}
                >
                  concrete improvements
                </span>{" "}
                - exactly the kind of{" "}
                <span
                  className="not-italic font-bold"
                  style={{ color: "#2A5C8A" }}
                >
                  initiative you rarely see so early on
                </span>
                .&rdquo;
              </p>
              <footer className="mt-5">
                <p className="font-jakarta text-[14px] font-semibold text-[#0D1B2A]">
                  - Christopher Zotter
                </p>
                <p
                  className="font-jakarta text-[13px]"
                  style={{ color: "rgba(13,27,42,0.7)" }}
                >
                  Head of Engineering · Sky
                </p>
              </footer>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <blockquote
              className="pl-6"
              style={{ borderLeft: "2px solid #FBE290" }}
            >
              <p className="font-jakarta text-[15px] leading-[1.8] text-[#2A3D2E]">
                &ldquo;She{" "}
                <span
                  className="not-italic font-bold"
                  style={{ color: "#2A5C8A" }}
                >
                  significantly improved
                </span>{" "}
                our team&rsquo;s pull request processes and brought{" "}
                <span
                  className="not-italic font-bold"
                  style={{ color: "#2A5C8A" }}
                >
                  clarity to complex tasks
                </span>
                . She proactively advocated for pair programming sessions.&rdquo;
              </p>
              <footer className="mt-5">
                <p className="font-jakarta text-[14px] font-semibold text-[#0D1B2A]">
                  - Óscar Domínguez Celada
                </p>
                <p
                  className="font-jakarta text-[13px]"
                  style={{ color: "rgba(13,27,42,0.7)" }}
                >
                  Software Engineer · Mainmatter
                </p>
              </footer>
            </blockquote>
          </FadeUp>
        </div>
      </div>

      {/* Bottom wave — cream dips into contact */}
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
          style={{ display: "block" }}
          shapeRendering="geometricPrecision"
        >
          <path d={WAVE_PATH} fill="#F5EDD8" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
