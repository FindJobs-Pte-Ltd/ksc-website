const steps = [
  {
    number: "01",
    title: "We know the markets we recruit for.",
    description:
      "Our experience across different industries helps us understand the skills, experience, and expectations behind the roles we recruit.",
  },
  {
    number: "02",
    title: "We look beyond the job description.",
    description:
      "We take the time to understand what our clients actually need and what candidates are looking for in their next move.",
  },
  {
    number: "03",
    title: "We build relationships, not transactions.",
    description:
      "The best recruitment relationships don't end when someone starts a new job.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* title */}
        <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
          Because a CV only tells you part of the story.
        </h2>

        {/* steps list */}
        <div className="grid md:grid-cols-3 md:divide-x md:border-t md:border-line md:pt-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-5 border-t border-line py-8 last:pb-0 md:border-t-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-fraunces text-line">{step.number}</span>
              <h3 className="font-fraunces text-xl font-semibold text-dark">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-dark">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
