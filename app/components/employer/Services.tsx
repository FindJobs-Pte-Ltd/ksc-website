const services = [
  {
    number: "01",
    title: "Executive Search & Selection",
    subtitle: "When the right person matters most.",
    description:
      "For senior and specialist positions, we take a focused approach to identifying professionals with the experience, capabilities, and fit required for critical roles.",
  },
  {
    number: "02",
    title: "Recruitment",
    subtitle: "Good recruitment starts with understanding.",
    description:
      "We take the time to understand the role, your business, and what success looks like before connecting you with relevant professionals.",
  },
  {
    number: "03",
    title: "Temporary & Contract Staff",
    subtitle: "The right people, when you need them.",
    description:
      "Flexible staffing solutions for projects, temporary gaps, and changing workforce requirements.",
  },
];

export default function Services() {
  return (
    <section className="bg-dark py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        {/* section title */}
        <h2 className="max-w-2xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Whatever the role, start with the right approach.
        </h2>

        {/* service list */}
        <div className="flex flex-col gap-10">
          {services.map((service) => (
            <div key={service.number} className="flex gap-10">
              {/* service number */}
              <span className="font-fraunces text-primary/50">{service.number}</span>

              {/* title, subtitle, description */}
              <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-10">
                <div className="flex flex-col gap-2 md:flex-1">
                  <h3 className="font-fraunces text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="font-fraunces text-sm text-primary italic">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted md:max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
