const industries = [
  { name: "Accounting" },
  { name: "Administration & Office Support" },
  { name: "Construction & Design", highlighted: true },
  { name: "Customer Service" },
  { name: "Engineering" },
  { name: "Freight Forwarding & Logistics" },
  { name: "Information Technology" },
  { name: "Legal" },
  { name: "Marketing" },
  { name: "Property & Real Estate" },
  { name: "Sales" },
];

export default function Industries() {
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* header content */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* title */}
          <h2 className="max-w-xl font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Knowledge that goes beyond the job title.
          </h2>

          {/* description */}
          <p className="max-w-md leading-relaxed text-muted-dark">
            Our experience across different industries gives us a broader
            understanding of the roles, skills, and expectations that shape each
            market.
          </p>
        </div>

        {/* industry list */}
        <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`border-r border-b border-line px-6 py-5 ${industry.highlighted ? "bg-primary/5" : ""
                }`}
            >
              <p
                className={`font-fraunces font-semibold ${industry.highlighted ? "text-primary" : "text-dark"
                  }`}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
