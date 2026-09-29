const steps = [
  {
    number: "01",
    title: "Understand Your Needs",
    description:
      "Our Care Advisors will first contact you to understand your family's unique requirements. Thereafter, we will curate a list of screened domestic helpers from our exclusive database for your consideration.",
  },
  {
    number: "02",
    title: "Interview & Select Your Helper",
    description:
      "At your convenience, our Care Advisors will organize virtual and/or in-person interviews with your shortlisted helpers. Refer to our popular structured interview guide for best practices and tips to assess the right helper.",
  },
  {
    number: "03",
    title: "Employer Onboarding & Helper Processing",
    description:
      "Great! You've selected your perfect helper. We will guide you through our 10-Point Process to ensure everything is handled smoothly online through work permit application and arrival processing.",
  },
  {
    number: "04",
    title: "Meet Your Helper!",
    description:
      "Our packages include complimentary doorstep transfer service so you can welcome your new helper from the comfort of your home!",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* header content */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
            Our Process
          </p>
          <h2 className="max-w-2xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Hire your helper with ease of mind
          </h2>
        </div>

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
