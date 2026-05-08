const WAVE_PATH =
  "M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z";

const SECTION_BG = "#4A6858";

const CAT_LABEL =
  "mb-3 font-jakarta text-[10px] font-normal uppercase tracking-[0.1em] text-[rgba(245,237,216,0.55)]";

type PillGroup = { pills: string[]; bg: string; color: string };
type Category = { label: string; groups: PillGroup[] };

const categories: Category[] = [
  {
    label: "Frameworks & Languages",
    groups: [
      {
        pills: ["React", "Next.js", "Svelte", "TypeScript"],
        bg: "#FBE290",
        color: "#3A3010",
      },
      {
        pills: ["JavaScript", "HTML · CSS", "Tailwind"],
        bg: "#F5EDD8",
        color: "#2A3D2E",
      },
    ],
  },
  {
    label: "Testing & Tooling",
    groups: [
      {
        pills: [
          "Jest · RTL",
          "Playwright",
          "Redux Toolkit",
          "Figma",
          "Contentstack",
          "Storyblok",
        ],
        bg: "#F5EDD8",
        color: "#2A3D2E",
      },
    ],
  },
  {
    label: "Accessibility",
    groups: [
      {
        pills: ["a11y", "Screen readers", "VoiceOver"],
        bg: "#A8D8EA",
        color: "#0D3B4F",
      },
    ],
  },
  {
    label: "AI",
    groups: [
      {
        pills: ["Cursor", "Claude Code"],
        bg: "#FBE290",
        color: "#3A3010",
      },
    ],
  },
];

const spokenLanguages = [
  { code: "PT", level: "Native" },
  { code: "EN", level: "Fluent" },
  { code: "FR", level: "Conversational" },
  { code: "ES", level: "Conversational" },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative w-full px-6 py-24 md:px-16"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-3 font-jakarta text-[11px] font-normal uppercase text-[rgba(245,237,216,0.55)]"
          style={{ letterSpacing: "0.12em" }}
        >
          Stack
        </p>

        <h2
          id="stack-heading"
          className="mb-16 font-fraunces text-[42px] font-bold leading-tight text-[#F5EDD8]"
        >
          What I
          <br />
          <span className="font-light italic">work with.</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className={CAT_LABEL}>{cat.label}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.groups.map((group) =>
                  group.pills.map((pill) => (
                    <li
                      key={pill}
                      className="rounded-[20px] px-[14px] py-[6px] font-jakarta text-[13px] font-normal"
                      style={{ backgroundColor: group.bg, color: group.color }}
                    >
                      {pill}
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}

          {/* Spoken Languages */}
          <div>
            <p className={CAT_LABEL}>Spoken Languages</p>
            <ul className="flex flex-wrap gap-2">
              {spokenLanguages.map(({ code, level }) => (
                <li
                  key={code}
                  className="inline-flex items-baseline gap-1.5 rounded-[20px] px-[14px] py-[6px] font-jakarta text-[13px] font-normal"
                  style={{ backgroundColor: "#F5EDD8", color: "#2A3D2E" }}
                >
                  {code}
                  <span
                    className="text-[11px]"
                    style={{ color: "#2A3D2E", opacity: 0.55 }}
                  >
                    {level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom wave — sage dips into next section */}
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
          <path d={WAVE_PATH} fill="#4A6858" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
