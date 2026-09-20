import Link from "next/link";

const paths = [
  {
    kicker: "For Employers",
    title: "Looking for someone to join your team?",
    description: "Tell us about the role and what you're looking for.",
    cta: "I'm Hiring",
    href: "/employer",
  },
  {
    kicker: "For Job Seekers",
    title: "Thinking about your next move?",
    description: "Tell us what you're looking for.",
    cta: "Talk to KSC",
    href: "/job-seekers",
  },
];

export default function Paths() {
  return (
    <section className="pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto px-4">
        <div className="grid divide-y divide-line border-t border-line md:grid-cols-2 md:divide-x md:divide-y-0">
          {paths.map((path) => (
            <div
              key={path.kicker}
              className="flex flex-col justify-between gap-10 py-16 md:px-10"
            >
              <div>
                <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
                  {path.kicker}
                </p>
                <h3 className="mt-4 max-w-sm font-fraunces text-2xl font-semibold text-dark">
                  {path.title}
                </h3>
                <p className="mt-6 text-sm text-muted-dark">{path.description}</p>
              </div>

              <Link
                href={path.href}
                className="flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-muted-dark"
              >
                {path.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
