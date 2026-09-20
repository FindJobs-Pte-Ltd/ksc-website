import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Talk to KSC",
    description: "Tell us about your experience and what you're looking for.",
  },
  {
    number: "02",
    title: "Get to Know Each Other",
    description: "We take time to understand your background and ambitions.",
  },
  {
    number: "03",
    title: "Explore Opportunities",
    description: "When a role fits, we'll connect you with full context.",
  },
  {
    number: "04",
    title: "Move Forward",
    description: "We support you through the recruitment process.",
  },
];

export default function GettingStarted() {
  return (
    <section className="bg-dark pt-8 pb-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* image */}
        <div className="relative aspect-1440/390 w-full opacity-70">
          <Image
            src="/job-seekers-cta.jpg"
            alt="Professional working with purpose"
            fill
            className="object-cover"
          />
        </div>

        {/* section title */}
        <h2 className="max-w-2xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your next move, made simpler.
        </h2>

        {/* steps */}
        <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* step line */}
          <span className="absolute inset-x-0 top-5.5 hidden h-px bg-line-dark lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-6">
              <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-primary/30 bg-line-dark font-fraunces text-xs font-semibold text-primary">
                {step.number}
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="font-fraunces text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
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
