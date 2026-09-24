type Row = { label: string; price: string };

const mandatoryFees: Row[] = [
  { label: "MOM Processing Fee", price: "$70" },
  { label: "Settling In Program (SIP)", price: "$77" },
  {
    label: "Full Medical Examination & In-Transit Lodging/Transportation",
    price: "$140",
  },
  { label: "Air Ticket to Singapore", price: "$250" },
  { label: "MDW Medical Insurance Plan", price: "$621.30" },
];

const transportFees: Row[] = [
  { label: "Oversea Processing Fee", price: "$200" },
  { label: "Local Transport Fee", price: "$200" },
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
          <h2 className="max-w-lg font-fraunces text-3xl leading-tight font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Best Price in Town
          </h2>
        </div>

        {/* plan */}
        <div className="mx-auto flex w-full max-w-xl flex-col">
          {/* plan header */}
          <div className="flex min-h-27 flex-col justify-center gap-3 border border-primary bg-primary p-5 text-white">
            <h3 className="font-fraunces text-lg font-semibold whitespace-nowrap xl:text-xl">
              To Hire Fresh or Ex-Singapore Helper
            </h3>
            <p className="text-sm">Upon Confirmation of Helper</p>
          </div>

          {/* plan body */}
          <div className="flex flex-col gap-6 border-x border-b border-primary p-5 text-dark">
            {/* service fee */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-[2.16px] uppercase">
                Service Fee
              </p>
              <div className="flex justify-between text-sm">
                <p>Agency Fee</p>
                <p className="text-base font-bold text-primary">$388</p>
              </div>
            </div>

            <div className="h-px bg-line" />

            {/* mandatory fees */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold tracking-[2.16px] uppercase">
                  Mandatory Fees
                </p>
                {mandatoryFees.map((fee) => (
                  <div
                    key={fee.label}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <p>{fee.label}</p>
                    <p className="font-bold whitespace-nowrap">{fee.price}</p>
                  </div>
                ))}
              </div>

              <div className="h-px bg-line" />

              <div className="flex items-center justify-between bg-primary/10 p-3 font-fraunces font-semibold text-primary">
                <p className="text-xl">Total Mandatory Fee</p>
                <p className="text-3xl">$1,158.30</p>
              </div>
            </div>

            {/* transport and oversea processing fee */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-[2.16px] uppercase">
                Transport &amp; Oversea Processing Fee
              </p>
              {transportFees.map((fee) => (
                <div
                  key={fee.label}
                  className="flex justify-between gap-4 text-sm"
                >
                  <p>{fee.label}</p>
                  <p className="font-bold">{fee.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* total cost of hire */}
          <div className="border-x border-b border-primary bg-surface p-5">
            <div className="flex items-center justify-between text-primary">
              <p className="text-xs font-bold tracking-[2.16px] uppercase">
                Total Cost of Hire (Excluding Placement Fee)
              </p>
              <p className="font-fraunces text-3xl font-semibold">
                $1,946.30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
