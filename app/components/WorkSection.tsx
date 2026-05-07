const TAG_STYLE =
  "rounded-full border border-[#A8D8EA]/30 px-3 py-1 font-jakarta text-xs text-[#A8D8EA]";

const jobs = [
  {
    dates: "2025 – 2026",
    company: "Sky",
    url: "https://www.sky.de/",
    role: "Frontend Engineer",
    sublabel: null,
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
    projects: null,
  },
  {
    dates: "2021 – 2025",
    company: "Mainmatter",
    url: "https://mainmatter.com/",
    role: "Frontend Engineer",
    sublabel: null,
    description:
      "Four years working across three very different products — different industries, different stacks, different scales.",
    tags: null,
    projects: [
      {
        name: "Rail Europe",
        url: "https://mainmatter.com/cases/rail-europe/",
        description:
          "One of the world's largest train booking platforms. I worked on the Svelte and SvelteKit frontend building across the booking funnel — passenger details screens, shopping cart, form components, backend API integration. Progressive enhancement was a constant consideration: the product needed to work on poor connections, so features were built to function without JavaScript first. I also led a proof of concept for Storyblok CMS integration. Large codebase, distributed team, full agile cycle from refinement to production.",
        tags: ["Svelte", "SvelteKit",  "Storyblok"],
      },
      {
        name: "Gravity",
        url: "https://mainmatter.com/cases/gravity/",
        description:
          "Internal developer tool: a GitHub app that monitors frontend bundle size in pull requests. I worked across the full stack — frontend UI, GitHub CheckRun integrations, bundle size tracking in CI, and infrastructure additions including Sentry for error tracking and Percy for visual regression testing. I collaborated closely with the designer on UI decisions, particularly on the First Build experience. For a long stretch it was just me and one other engineer without much structure around us — I pushed for retrospectives and regular process check-ins to keep us aligned.",
        tags: ["Remix", "Node.js"],
      },
      {
        name: "Experteer",
        url: "https://mainmatter.com/cases/experteer/",
        description:
          "Signup flow for a recruitment marketplace with 6 million users. I worked on the CV parsing product — a React app that extracts data from uploaded CVs to build user profiles. I built components across the app, handled form validation, and worked on a location autocomplete with geocode integration. Tests written in Jest and React Testing Library throughout.",
        tags: ["React", "TypeScript"],
      },
    ],
  },
  {
    dates: "2021",
    company: "Adidas Runtastic",
    url: "https://www.adidas.com/us/running-app",
    role: "Backend Engineer",
    sublabel: null,
    description:
      "A fitness platform owned by Adidas. I worked on the social features team, building a backend feature to receive and store follow suggestions — consuming messages from a queue, implementing the use case, and building the MongoDB repository. I also updated service dependencies to fix a security vulnerability and wrote RSpec tests throughout.",
    tags: ["Ruby on Rails", "RSpec", "RabbitMQ", "MongoDB"],
    projects: null,
  },
];

export default function WorkSection() {
  return (
    <section
      id="experience"
      aria-labelledby="work-heading"
      className="relative w-full bg-navy px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-jakarta text-[11px] uppercase tracking-widest text-[#F5EDD8]/50">
          Work
        </p>

        <h2
          id="work-heading"
          className="mb-16 font-fraunces text-[42px] font-bold leading-tight text-[#F5EDD8]"
        >
          Places I&apos;ve{" "}
          <span className="font-light italic text-[#FBE290]">worked at</span>.
        </h2>

        <div className="flex flex-col gap-16">
          {jobs.map((job) => (
            <article
              key={job.company}
              aria-label={`${job.role} at ${job.company}`}
              className="flex flex-col gap-6 sm:flex-row sm:gap-12"
            >
              {/* Left column: date, company, role, sublabel */}
              <div className="w-36 shrink-0 flex flex-col gap-1">
                <p className="font-jakarta text-sm font-medium text-[#FBE290]">
                  {job.dates}
                </p>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-0.5 font-jakarta text-[15px] font-semibold leading-snug text-[#F5EDD8] no-underline transition-colors duration-200 ease-in-out hover:text-[#FBE290]"
                >
                  {job.company} ↗
                </a>
                <p className="font-jakarta text-xs text-[rgba(245,237,216,0.5)]">
                  {job.role}
                </p>
                {job.sublabel && (
                  <p className="font-jakarta text-[12px] text-[rgba(245,237,216,0.45)]">
                    {job.sublabel}
                  </p>
                )}
              </div>

              {/* Right content */}
              <div className="flex flex-col gap-4">
                <p className="max-w-2xl font-jakarta text-[15px] leading-[1.75] text-[rgba(245,237,216,0.85)]">
                  {job.description}
                </p>

                {job.tags && (
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {job.tags.map((tag) => (
                      <li key={tag} className={TAG_STYLE}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {job.projects && (
                  <div className="space-y-5 border-l-2 border-[#A8D8EA]/15 pl-5">
                    {job.projects.map((project) => (
                      <div key={project.name}>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-jakarta text-[14px] font-semibold text-[#A8D8EA] no-underline hover:underline"
                        >
                          {project.name} ↗
                        </a>
                        <p className="mt-1 font-jakarta text-[14px] leading-[1.65] text-[rgba(245,237,216,0.85)]">
                          {project.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <li key={tag} className={TAG_STYLE}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom wave — navy dips into cream Writing section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full z-10 w-full"
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
