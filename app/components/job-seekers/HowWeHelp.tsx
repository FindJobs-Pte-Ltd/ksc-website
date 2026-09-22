const steps = [
  {
    number: "01",
    title: "Access Roles That Fit",
    subtitle: "Permanent · Contract · Executive",
    description:
      "We connect candidates with opportunities that match their skills, experience, and career goals—including roles that aren't always publicly advertised.",
  },
  {
    number: "02",
    title: "Present Yourself Better",
    subtitle: "CV · Profile · Positioning",
    description:
      "Get guidance on how to position your experience effectively. How you present yourself matters as much as what you've done.",
  },
  {
    number: "03",
    title: "Prepare With Confidence",
    subtitle: "The right people, when you need them.",
    description:
      "Navigate the recruitment and interview process with real support. We'll give you the information you need at every stage.",
  },
  {
    number: "04",
    title: "Think Beyond the Next Title",
    subtitle: "Career direction · Strategy",
    description:
      "Explore opportunities that make sense for your longer-term career direction—not just whatever happens to be available.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-dark pt-16 pb-8 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        {/* section title */}
        <h2 className="font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          More than finding your next job.
        </h2>

        {/* steps */}
        <div className="flex flex-col gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-10">
              {/* step number */}
              <span className="font-fraunces text-primary/50">{step.number}</span>

              {/* title, subtitle, description */}
              <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-10">
                <div className="flex flex-col gap-2 md:flex-1">
                  <h3 className="font-fraunces text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="font-fraunces text-sm text-primary italic">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted md:max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
