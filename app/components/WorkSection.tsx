const skyJob = {
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
};

const mainmatterProjects = [
  {
    name: "Rail Europe",
    url: "https://mainmatter.com/cases/rail-europe/",
    stack: "Svelte · SvelteKit · 1.5 years",
    description:
      "One of the world's largest train booking platforms. I worked on the Svelte and SvelteKit frontend building across the booking funnel — passenger details screens, shopping cart, form components, backend API integration. Progressive enhancement was a constant consideration: the product needed to work on poor connections, so features were built to function without JavaScript first. I also led a proof of concept for Storyblok CMS integration. Large codebase, distributed team, full agile cycle from refinement to production.",
    tags: ["Svelte", "SvelteKit"],
  },
  {
    name: "Gravity",
    url: "https://mainmatter.com/cases/gravity/",
    stack: "Remix · Node.js",
    description:
      "Internal developer tool: a GitHub app that monitors frontend bundle size in pull requests. I worked across the full stack — frontend UI, GitHub CheckRun integrations, bundle size tracking in CI, and infrastructure additions including Sentry for error tracking and Percy for visual regression testing. I collaborated closely with the designer on UI decisions, particularly on the First Build experience. For a long stretch it was just me and one other engineer without much structure around us — I pushed for retrospectives and regular process check-ins to keep us aligned.",
    tags: ["Remix", "Node.js"],
  },
  {
    name: "Experteer",
    url: "https://mainmatter.com/cases/experteer/",
    stack: "React · TypeScript",
    description:
      "Signup flow for a recruitment marketplace with 6 million users. I worked on the CV parsing product — a React app that extracts data from uploaded CVs to build user profiles. I built components across the app, handled form validation, and worked on a location autocomplete with geocode integration. Tests written in Jest and React Testing Library throughout.",
    tags: ["React", "TypeScript"],
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

        <div className="flex flex-col gap-16">
          {/* Sky */}
          <article
            aria-label={`${skyJob.role} at ${skyJob.company}`}
            className="flex flex-col gap-6 sm:flex-row sm:gap-12"
          >
            <p className="w-28 shrink-0 font-jakarta text-sm font-medium text-[#FBE290]">
              {skyJob.dates}
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-jakarta text-lg font-semibold text-[#F5EDD8]">
                  {skyJob.role}
                </p>
                <p className="font-jakarta text-sm text-[rgba(245,237,216,0.5)]">
                  {skyJob.company}
                </p>
              </div>

              <p className="max-w-2xl font-jakarta text-[15px] leading-[1.75] text-[rgba(245,237,216,0.85)]">
                {skyJob.description}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                {skyJob.tags.map((tag) => (
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

          {/* Mainmatter */}
          <article
            aria-label="Frontend Engineer at Mainmatter"
            className="flex flex-col gap-6 sm:flex-row sm:gap-12"
          >
            <p className="w-28 shrink-0 font-jakarta text-sm font-medium text-[#FBE290]">
              2021 – 2025
            </p>

            <div className="flex flex-col gap-5">
              {/* Header — mirrors Sky's role/company structure */}
              <div>
                <p className="font-jakarta text-lg font-semibold text-[#F5EDD8]">
                  Frontend Engineer
                </p>
                <p className="font-jakarta text-sm text-[rgba(245,237,216,0.5)]">
                  Mainmatter
                  <span className="ml-2 text-[12px] text-[rgba(245,237,216,0.45)]">
                    Software consultancy
                  </span>
                </p>
              </div>

              <p className="max-w-2xl font-jakarta text-[15px] leading-[1.75] text-[rgba(245,237,216,0.85)]">
                Four years working across three very different products — different
                industries, different stacks, different scales.
              </p>

              {/* Project sub-entries */}
              <div className="space-y-5 border-l-2 border-[#A8D8EA]/15 pl-5">
                {mainmatterProjects.map((project) => (
                  <div key={project.name}>
                    <div className="flex flex-wrap items-baseline">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-jakarta text-[14px] font-semibold text-[#A8D8EA] no-underline hover:underline"
                      >
                        {project.name} ↗
                      </a>
                      <span className="ml-2 font-jakarta text-[11px] text-[#F5EDD8]/25">
                        {project.stack}
                      </span>
                    </div>
                    <p className="mt-1 font-jakarta text-[14px] leading-[1.65] text-[rgba(245,237,216,0.85)]">
                      {project.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[#A8D8EA]/30 px-3 py-1 font-jakarta text-xs text-[#A8D8EA]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
