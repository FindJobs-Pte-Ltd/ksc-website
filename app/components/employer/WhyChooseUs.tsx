const reasons = [
  {
    number: "01",
    title: "Industry Knowledge",
    description:
      "We understand the sectors and roles we recruit for—the skills, expectations, and qualities that distinguish good candidates from the right ones.",
  },
  {
    number: "02",
    title: "Personal Service",
    description:
      "We take the time to understand your business and requirements. You work with people who take ownership of your brief.",
  },
  {
    number: "03",
    title: "Relevant Candidates",
    description:
      "We focus on finding people who make sense for the role—not simply filling a shortlist. Quality over volume.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "We aim to become a recruitment partner you can rely on as your business and hiring needs evolve over time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* title */}
        <h2 className="max-w-3xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          A recruitment partner that takes the time to understand.
        </h2>

        {/* description */}
        <p className="leading-relaxed text-muted-dark">
          We believe better recruitment comes from better understanding.
        </p>

        {/* reason list */}
        <div className="grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line lg:border-t lg:border-line lg:pt-10">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="flex flex-col gap-5 border-t border-line pt-10 pb-6 last:pb-0 sm:border-t-0 sm:py-0 lg:px-10 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="font-fraunces text-line">{reason.number}</span>
              <h3 className="font-fraunces text-xl font-semibold text-dark">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-dark">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
