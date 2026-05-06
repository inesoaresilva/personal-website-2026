const jobs = [
  {
    company: "Sky",
    role: "Frontend Engineer",
    dates: "2025 – 2026",
    description:
      "Sky is one of the largest TV and streaming providers. I worked on the customer-facing web platform for Sky Germany and Austria - device swap, account management, checkout — the flows subscribers use when something needs to change on their account. The depth was in accessibility: async focus management, aria-live regions, keyboard navigation through multi-step flows, edge cases that only appear on slow connections. I tested everything with VoiceOver. Testing stack: Jest, React Testing Library, MSW, and Storybook patterns. Redux Toolkit and RTK Query at scale.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Contentstack",
      "Playwright",
      "Redux Toolkit",
      "RTK Query",
      "Jest",
      "React Testing Library",
      "MSW",
      "Storybook",
      "a11y",
    ],
  },
];

export default function WorkSection() {
  return (
    <section
      id="experience"
      aria-labelledby="work-heading"
      className="w-full bg-navy px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <p className="mb-3 font-jakarta text-[11px] uppercase tracking-widest text-[#F5EDD8]/50">
          Work
        </p>

        {/* Heading */}
        <h2
          id="work-heading"
          className="mb-16 font-fraunces text-[42px] font-bold leading-tight text-[#F5EDD8]"
        >
          Things I&apos;ve{" "}
          <span className="font-light italic text-[#FBE290]">worked on</span>.
        </h2>

        {/* Job entries */}
        <div className="flex flex-col gap-16">
          {jobs.map(({ company, role, dates, description, tags }) => (
            <article
              key={company}
              aria-label={`${role} at ${company}`}
              className="flex flex-col gap-6 sm:flex-row sm:gap-12"
            >
              {/* Date */}
              <p className="w-28 shrink-0 font-jakarta text-sm font-medium text-[#FBE290]">
                {dates}
              </p>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-jakarta text-lg font-semibold text-[#F5EDD8]">
                    {role}
                  </p>
                  <p className="font-jakarta text-sm text-[rgba(245,237,216,0.5)]">
                    {company}
                  </p>
                </div>

                <p className="max-w-2xl font-jakarta text-[15px] leading-[1.75] text-[rgba(245,237,216,0.65)]">
                  {description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[#A8D8EA]/30 px-3 py-1 font-jakarta text-xs text-[#A8D8EA]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
