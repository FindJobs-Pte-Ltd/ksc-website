type Row = { label: string; price: string };

type Plan = {
  name: string;
  popular?: boolean;
  agencyFee: { original: string; current: string };
  mandatoryFees: Row[];
  totalMandatory: string;
  overseasFees?: Row[];
  totalCostByCountry?: Row[];
  totalCost?: string;
};

const standardFees: Row[] = [
  { label: "MOM Processing Fee", price: "$70" },
  { label: "Settling In Program (SIP)", price: "$75" },
  { label: "Full Medical Examination", price: "$80" },
  { label: "Air Ticket to Singapore", price: "$250" },
  { label: "In-Transit Lodging & Transportation", price: "$200" },
  { label: "MDW Medical Insurance Plan", price: "$557" },
];

const overseasFees: Row[] = [
  { label: "Philippines", price: "$1,600" },
  { label: "Indonesia", price: "$280" },
];

const plans: Plan[] = [
  {
    name: "For Fresh Helper",
    agencyFee: { original: "$1,188", current: "$988" },
    mandatoryFees: standardFees,
    totalMandatory: "$1,232",
    overseasFees,
    totalCostByCountry: [
      { label: "Myanmar", price: "$2,220" },
      { label: "Indonesia", price: "$2,500" },
      { label: "Philippines", price: "$3,820" },
    ],
  },
  {
    name: "For Experienced Helper",
    popular: true,
    agencyFee: { original: "$1,388", current: "$1,188" },
    mandatoryFees: standardFees,
    totalMandatory: "$1,232",
    overseasFees,
    totalCostByCountry: [
      { label: "Myanmar", price: "$2,420" },
      { label: "Indonesia", price: "$2,700" },
      { label: "Philippines", price: "$4,020" },
    ],
  },
  {
    name: "For Transfer Helper",
    agencyFee: { original: "$1,588", current: "$1,388" },
    mandatoryFees: [
      { label: "MOM Processing Fee", price: "$70" },
      { label: "MDW Medical Insurance Plan", price: "$557" },
    ],
    totalMandatory: "$627",
    totalCost: "$2,015",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-20 lg:py-25">
      <div className="container mx-auto flex flex-col gap-10 px-4">
        {/* header content */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
            Pricing
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-lg font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Transparent Pricing, No Hidden Costs
            </h2>
            <p className="max-w-md leading-relaxed text-muted-dark">
              Clear and straightforward pricing for your peace of mind.
            </p>
          </div>
        </div>

        {/* plan list */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const border = plan.popular ? "border-primary" : "border-line";

            return (
              <div key={plan.name} className="flex flex-col">
                {/* plan header */}
                <div
                  className={`flex min-h-27 flex-col justify-center gap-3 border p-5 ${plan.popular
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-surface text-dark"
                    }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-fraunces text-lg font-semibold whitespace-nowrap xl:text-xl">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="bg-white/30 px-2 py-0.5 text-xs font-bold whitespace-nowrap xl:px-3 xl:text-base">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm">Upon Confirmation of Helper</p>
                </div>

                {/* plan body */}
                <div
                  className={`flex flex-1 flex-col gap-6 border-x border-b p-5 text-dark ${border}`}
                >
                  {/* service fee */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold tracking-[2.16px] uppercase">
                      Service Fee
                    </p>
                    <div className="flex items-start justify-between text-sm">
                      <p>Agency Fee</p>
                      <div className="flex items-end gap-4">
                        <p className="text-muted-dark line-through">
                          {plan.agencyFee.original}
                        </p>
                        <p className="text-base font-bold text-primary">
                          {plan.agencyFee.current}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-line" />

                  {/* mandatory fees */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 lg:min-h-56">
                      <p className="text-xs font-bold tracking-[2.16px] uppercase">
                        Mandatory Fees
                      </p>
                      {plan.mandatoryFees.map((fee) => (
                        <div
                          key={fee.label}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <p>{fee.label}</p>
                          <p className="font-bold">{fee.price}</p>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-line" />

                    <div className="flex items-center justify-between bg-primary/10 p-3 font-fraunces font-semibold text-primary">
                      <p className="text-xl">Total Mandatory Fee</p>
                      <p className="text-3xl">{plan.totalMandatory}</p>
                    </div>
                  </div>

                  {/* overseas processing fee */}
                  {plan.overseasFees && (
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-bold tracking-[2.16px] uppercase">
                        Overseas Processing Fee
                      </p>
                      {plan.overseasFees.map((fee) => (
                        <div
                          key={fee.label}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <p>{fee.label}</p>
                          <p className="font-bold">{fee.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* total cost of hire */}
                <div className={`border-x border-b bg-surface p-5 ${border}`}>
                  {plan.totalCostByCountry ? (
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-bold tracking-[2.16px] text-primary uppercase">
                        Total Cost of Hire
                      </p>
                      {plan.totalCostByCountry.map((cost) => (
                        <div
                          key={cost.label}
                          className="flex items-end justify-between font-fraunces font-semibold"
                        >
                          <p className="text-xl text-dark">{cost.label}</p>
                          <p className="text-3xl text-primary">{cost.price}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-primary">
                      <p className="text-xs font-bold tracking-[2.16px] uppercase">
                        Total Cost of Hire
                      </p>
                      <p className="font-fraunces text-3xl font-semibold">
                        {plan.totalCost}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
