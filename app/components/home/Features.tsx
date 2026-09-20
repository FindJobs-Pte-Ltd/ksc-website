import Link from "next/link";

const cards = [
  {
    image: "/card-employers.jpg",
    kicker: "For Employers",
    title: "Your next hire matters. Let's get it right.",
    description:
      "Tell us what you're looking for and we'll help you find people who can make a real contribution to your business.",
    ctaLabel: "Talk to KSC",
    href: "/employer",
  },
  {
    image: "/card-domestic-helper.jpg",
    kicker: "Domestic Helper",
    title: "Finding the right help for your household.",
    description:
      "KSC helps Singapore families find suitable domestic helpers for elderly care, childcare, and everyday household support.",
    ctaLabel: "Find Out More",
    href: "/domestic-helper",
  },
  {
    image: "/card-job-seekers.jpg",
    kicker: "For Job Seekers",
    title: "Don't just find another job. Find the right next step.",
    description:
      "KSC connects professionals with opportunities that match their experience, ambitions, and career direction.",
    ctaLabel: "Talk to KSC",
    href: "/job-seekers",
  },
];

export default function Features() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        {/* header content */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* title */}
          <h2 className="max-w-2xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Three ways we can help.
          </h2>
          {/* description */}
          <p className="max-w-md leading-relaxed text-muted">
            Whether you&apos;re growing a team, taking your next career step, or
            looking for the right support at home, KSC can help.
          </p>
        </div>

        {/* card list */}
        <div className="grid divide-y divide-line-dark border-t border-line-dark md:grid-cols-3 md:divide-x md:divide-y-0">
          {cards.map((card) => (
            <div key={card.href} className="flex flex-col">
              <div className="relative aspect-3/2 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt=""
                  className="object-cover"
                />
              </div>

              {/* card body */}
              <div className="flex flex-1 flex-col justify-between gap-8 p-10">
                {/* card content */}
                <div>
                  <p className="text-xs font-medium tracking-[2.16px] text-primary uppercase">
                    {card.kicker}
                  </p>
                  <p className="mt-2 font-fraunces text-xl font-semibold text-white">
                    {card.title}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="flex w-fit items-center gap-3 text-sm font-bold text-white"
                >
                  {card.ctaLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
