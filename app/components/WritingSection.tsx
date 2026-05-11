import { FadeUp } from "./FadeUp";

const articles = [
  {
    title: "From React to Ember: Building a Blog",
    description:
      "When I joined the company, I initially worked with React, and I was the only one who didn't have experience working with Ember. This sparked my curiosity to learn.",
    linkUrl:
      "https://mainmatter.com/blog/2023/07/03/from-react-to-ember-building-a-blog/",
  },
  {
    title: "Journey of a Junior Software Engineer",
    description:
      "Until recently, I wondered: 'My code is done, why am I wasting my time with this?' and then the moment came when I thanked myself for having tests.",
    linkUrl:
      "https://mainmatter.com/blog/2022/05/19/journey-of-a-junior-software-engineer/",
  },
];

const WAVE_PATH =
  "M0,50 C120,20 240,20 360,50 C480,80 600,80 720,50 C840,20 960,20 1080,50 C1200,80 1320,80 1440,50 L1440,0 L0,0 Z";

export default function WritingSection() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="relative w-full bg-powder px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp delay={0}>
          <p className="mb-3 font-jakarta text-[11px] uppercase tracking-widest text-[rgba(13,27,42,0.5)]">
            Writing
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            id="writing-heading"
            className="mb-16 font-fraunces text-[42px] font-bold leading-tight text-[#0D1B2A]"
          >
            When I write
            <br />
            <span className="font-light italic">things down.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {articles.map((article, i) => (
            <FadeUp key={article.title} delay={0.1 + i * 0.1}>
              <div className="flex flex-col gap-4 rounded-2xl bg-[rgba(13,27,42,0.08)] p-6 transition-transform duration-200 ease-in-out hover:-translate-y-0.5">
                <h3 className="font-jakarta text-[17px] font-bold leading-snug text-[#0D1B2A]">
                  {article.title}
                </h3>
                <p className="flex-1 font-jakarta text-[15px] leading-[1.7] text-[#0D1B2A]">
                  {article.description}
                </p>
                <a
                  href={article.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read "${article.title}" on mainmatter.com (opens in new tab)`}
                  className="font-jakarta text-[14px] text-[#2A5C8A] no-underline hover:underline"
                >
                  mainmatter.com/blog →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Bottom wave — powder dips into next navy section */}
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
          <path d={WAVE_PATH} fill="#A8D8EA" stroke="none" />
        </svg>
      </div>
    </section>
  );
}
